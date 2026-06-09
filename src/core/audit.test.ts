import { describe, expect, it } from 'vitest'
import { analyzePlotLibraryInventory } from './audit'

describe('plot library audit', () => {
  it('separates stable names from candidate extras', () => {
    const result = analyzePlotLibraryInventory({
      manifestNames: ['line_basic', 'bar_basic'],
      pythonNames: ['line_basic', 'bar_basic', 'roc_curve'],
      matlabNames: ['line_basic'],
      galleryNames: ['line_basic', 'bar_basic'],
      relativeFilePaths: ['templates/python/roc_curve.py', 'templates/python/__pycache__/x.pyc'],
    })

    expect(result.pythonExtra).toEqual(['roc_curve'])
    expect(result.manifestMissingMatlab).toEqual(['bar_basic'])
    expect(result.riskyFiles).toContain('templates/python/__pycache__/x.pyc')
  })
})
