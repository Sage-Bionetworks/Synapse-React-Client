import * as React from 'react'
import { QueryWrapperChildProps } from '../QueryWrapper'
import CardContainer from '../CardContainer'
import SynapseTable, { SynapseTableProps } from '../table/SynapseTable'
import { CardConfiguration } from '../CardContainerLogic'

export type OwnProps = {
  tableConfiguration: SynapseTableProps | undefined
  cardConfiguration: CardConfiguration | undefined
  hideDownload?: boolean
  facetsToFilter?: string[]
}

const FilterAndView = (props: QueryWrapperChildProps & OwnProps) => {
  const {
    topLevelControlsState,
    tableConfiguration,
    cardConfiguration,
    hideDownload,
    ...rest
  } = props  
  const { showFacetFilter } = topLevelControlsState!
  return (
    <div className={`FilterAndView ${showFacetFilter ? 'isShowingFacetFilters' : 'isHidingFacetFilters'}`} >
      {tableConfiguration ? (
        <SynapseTable
          {...rest}
          {...tableConfiguration}
          topLevelControlsState={topLevelControlsState}
          hideDownload={hideDownload}
        />
      ) : (
        <></>
      )}
      {cardConfiguration ? (
        <CardContainer {...rest} {...cardConfiguration} />
      ) : (
        <></>
      )}
    </div>
  )
}

export default FilterAndView
