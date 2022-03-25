import * as React from 'react'
import {
  QUERY_FILTERS_COLLAPSED_CSS,
  QUERY_FILTERS_EXPANDED_CSS,
} from '../QueryWrapper'
import CardContainer from '../CardContainer'
import SynapseTable, { SynapseTableProps } from '../table/SynapseTable'
import { CardConfiguration } from '../CardContainerLogic'
import { useQueryWrapperContext } from '../QueryWrapper'
import { useSynapseContext } from '../../utils/SynapseContext'

export type OwnProps = {
  tableConfiguration: SynapseTableProps | undefined
  cardConfiguration: CardConfiguration | undefined
  hideDownload?: boolean
}

const FilterAndView = (props: OwnProps) => {
  const { tableConfiguration, cardConfiguration, hideDownload } = props
  const synapseContext = useSynapseContext()
  const queryWrapperContext = useQueryWrapperContext()
  return (
    <div
      className={`FilterAndView ${
        queryWrapperContext.topLevelControlsState.showFacetFilter
          ? QUERY_FILTERS_EXPANDED_CSS
          : QUERY_FILTERS_COLLAPSED_CSS
      }`}
    >
      {tableConfiguration ? (
        <SynapseTable
          {...tableConfiguration}
          synapseContext={synapseContext}
          queryWrapperContext={queryWrapperContext}
          hideDownload={hideDownload}
        />
      ) : (
        <></>
      )}
      {cardConfiguration ? <CardContainer {...cardConfiguration} /> : <></>}
    </div>
  )
}

export default FilterAndView
