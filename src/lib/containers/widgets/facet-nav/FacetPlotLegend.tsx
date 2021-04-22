import React from 'react'
import { ElementWithTooltip } from '../ElementWithTooltip'
import { FacetWithLabel, truncate } from './FacetNavPanel'

const MAX_LEGEND_LENGTH: number = 30

// https://github.com/plotly/plotly.js/blob/fa51e33d3e1f8ca0c029b3029f3d006a5205c8f3/src/lib/index.js#L1173
const formatPercent = (ratio: number, n: number) => {
  n = n || 0
  let str =
    (Math.round(100 * ratio * Math.pow(10, n)) * Math.pow(0.1, n)).toFixed(n) +
    '%'
  for (let i = 0; i < n; i++) {
    if (str.indexOf('.') !== -1) {
      str = str.replace('0%', '%')
      str = str.replace('.%', '%')
    }
  }
  return str
}

type FacetPlotLegendProps = {
  labels?: FacetWithLabel[]
  colors?: string[]
  isExpanded: boolean
}

export const FacetPlotLegend: React.FunctionComponent<FacetPlotLegendProps> = ({
  labels,
  colors = [],
  isExpanded,
}: FacetPlotLegendProps) => {
  if (!labels) {
    return <></>
  }
  const numLegendItems = isExpanded
    ? Math.min(labels.length, 9)
    : Math.min(labels.length, 3)
  if (numLegendItems === 0) {
    return <></>
  }
  const totalCount = labels.reduce(
    (curValue, curFacet) => curValue + curFacet.count,
    0,
  )
  return (
    <div
      className={`FacetNavPanel__body__legend${isExpanded ? '--expanded' : ''}`}
    >
      {labels.slice(0, numLegendItems).map((facetValue, index) => {
        const percent = formatPercent(facetValue.count / totalCount, 1)
        const label = `(${percent}) ${facetValue.label}`
        const labelDisplay = truncate(label, MAX_LEGEND_LENGTH)
        return (
          <ElementWithTooltip
            idForToolTip={facetValue.label}
            tooltipText={facetValue.label}
            key={facetValue.label}
          >
            <div
              className="FacetNavPanel__body__legend__row"
              key={`legendLabel_${index}`}
              style={{ cursor: 'default' }}
            >
              <div style={{ backgroundColor: colors[index] }}></div>
              <label>{labelDisplay}</label>
            </div>
          </ElementWithTooltip>
        )
      })}
    </div>
  )
}
