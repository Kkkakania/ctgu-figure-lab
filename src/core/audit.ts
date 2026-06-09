export type PlotLibraryInventory = {
  manifestNames: string[]
  pythonNames: string[]
  matlabNames: string[]
  galleryNames: string[]
  relativeFilePaths: string[]
}

export type PlotLibraryAudit = {
  manifestCount: number
  pythonCount: number
  matlabCount: number
  galleryCount: number
  pythonExtra: string[]
  matlabExtra: string[]
  galleryExtra: string[]
  manifestMissingPython: string[]
  manifestMissingMatlab: string[]
  manifestMissingGallery: string[]
  riskyFiles: string[]
}

const RISKY_FILE_PATTERNS = [
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

export function analyzePlotLibraryInventory(
  inventory: PlotLibraryInventory,
): PlotLibraryAudit {
  const manifest = new Set(inventory.manifestNames)
  const python = new Set(inventory.pythonNames)
  const matlab = new Set(inventory.matlabNames)
  const gallery = new Set(inventory.galleryNames)

  return {
    manifestCount: manifest.size,
    pythonCount: python.size,
    matlabCount: matlab.size,
    galleryCount: gallery.size,
    pythonExtra: diff(python, manifest),
    matlabExtra: diff(matlab, manifest),
    galleryExtra: diff(gallery, manifest),
    manifestMissingPython: diff(manifest, python),
    manifestMissingMatlab: diff(manifest, matlab),
    manifestMissingGallery: diff(manifest, gallery),
    riskyFiles: inventory.relativeFilePaths
      .filter((filePath) =>
        RISKY_FILE_PATTERNS.some((pattern) => pattern.test(filePath)),
      )
      .sort(),
  }
}

function diff(left: Set<string>, right: Set<string>): string[] {
  return [...left].filter((item) => !right.has(item)).sort()
}
