import {
  defaultSynapseTheme,
  mergeTheme,
} from '../../../../lib/utils/hooks/useTheme'

describe('Synapse Theme tests', () => {
  it('properly merges a custom theme with the default theme', () => {
    const customColor = '#000000'
    const customTheme = {
      colors: {
        success: customColor,
      },
    }
    const mergedTheme = mergeTheme(customTheme)

    expect(mergedTheme.colors.success).toEqual(customColor)
    expect(mergedTheme.colors.warning).toEqual(
      defaultSynapseTheme.colors.warning,
    )
    expect(mergedTheme.colors.info).toEqual(defaultSynapseTheme.colors.info)
    expect(mergedTheme.colors.error).toEqual(defaultSynapseTheme.colors.error)
  })

  // TODO: Test merging color palettes and validate that an entire palette is generated when providing one color
})
