import { readdir, readFile, stat } from 'node:fs/promises'
import path from 'node:path'

const defaultRoot = '/Users/wi/Documents/Study/17 akun/科研绘图_函数库'
const root = process.env.PLOT_LIBRARY_PATH ?? defaultRoot

const riskyFilePatterns = [
  /\.pyc$/i,
  /(^|\/)\.DS_Store$/i,
  /\.p$/i,
  /\.mat$/i,
  /\.fig$/i,
  /\.docx?$/i,
  /\.xlsx?$/i,
  /\.vsd$/i,
  /\.zip$/i,
]

const sourcePatterns = [
  /Author:/i,
  /Created by/i,
  /Copyright/i,
  /GPL/i,
  /GNU General Public License/i,
  /CC-BY/i,
  /CSDN/i,
  /知乎/i,
  /小红书/i,
  /公众号/i,
  /\/Users\//i,
  /C:\\Users\\/i,
]

async function main() {
  const files = await walk(root)
  const manifest = JSON.parse(
    await readFile(path.join(root, 'manifest.json'), 'utf8'),
  )
  const manifestNames = new Set(
    (manifest.templates ?? []).map((item) => String(item.name)),
  )
  const pythonNames = new Set(
    files
      .filter((file) => file.startsWith('templates/python/') && file.endsWith('.py'))
      .map((file) => path.basename(file, '.py')),
  )
  const matlabNames = new Set(
    files
      .filter((file) => file.startsWith('templates/matlab/') && file.endsWith('.m'))
      .map((file) => path.basename(file, '.m')),
  )
  const galleryNames = new Set(
    files
      .filter((file) => file.startsWith('gallery/') && file.endsWith('.png'))
      .map((file) => path.basename(file, '.png')),
  )

  const report = {
    root,
    checkedAt: new Date().toISOString(),
    manifestCount: manifestNames.size,
    pythonCount: pythonNames.size,
    matlabCount: matlabNames.size,
    galleryCount: galleryNames.size,
    pythonExtra: diff(pythonNames, manifestNames),
    matlabExtra: diff(matlabNames, manifestNames),
    galleryExtra: diff(galleryNames, manifestNames),
    manifestMissingPython: diff(manifestNames, pythonNames),
    manifestMissingMatlab: diff(manifestNames, matlabNames),
    manifestMissingGallery: diff(manifestNames, galleryNames),
    riskyFiles: files
      .filter((file) => riskyFilePatterns.some((pattern) => pattern.test(file)))
      .sort(),
    sourceRiskFiles: await findSourceRisks(root, files),
  }

  console.log(JSON.stringify(report, null, 2))

  if (
    report.manifestMissingPython.length > 0 ||
    report.manifestMissingMatlab.length > 0 ||
    report.manifestMissingGallery.length > 0
  ) {
    process.exitCode = 1
  }
}

async function walk(dir, base = dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...(await walk(fullPath, base)))
    } else if (entry.isFile()) {
      files.push(path.relative(base, fullPath).split(path.sep).join('/'))
    }
  }
  return files
}

async function findSourceRisks(base, files) {
  const hits = []
  for (const file of files) {
    if (!/\.(m|py|md|json|txt)$/i.test(file)) continue
    const fullPath = path.join(base, file)
    const info = await stat(fullPath)
    if (info.size > 1_000_000) continue
    const text = await readFile(fullPath, 'utf8').catch(() => '')
    if (sourcePatterns.some((pattern) => pattern.test(text))) {
      hits.push(file)
    }
  }
  return hits.sort()
}

function diff(left, right) {
  return [...left].filter((item) => !right.has(item)).sort()
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error))
  process.exitCode = 2
})
