import * as React from 'react'
import { QueryWrapperChildProps } from '../QueryWrapper'
import CardContainer from '../CardContainer'
import SynapseTable, { SynapseTableProps } from '../table/SynapseTable'
import { QueryFilter } from '../widgets/query-filter/QueryFilter'
import { CardConfiguration } from '../CardContainerLogic'

export type OwnProps = {
  tableConfiguration: SynapseTableProps | undefined
  cardConfiguration: CardConfiguration | undefined
  showFilter: boolean
}

const FilterAndView = (props: QueryWrapperChildProps & OwnProps) => {
  const { showFilter, tableConfiguration, cardConfiguration, ...rest } = props
  return (
    <div className="row">
      <div
        className={showFilter ? 'col-xs-12 col-sm-3 col-lg-3' : 'hidden'}
        style={{ paddingRight: '0px' }}
      >
        <QueryFilter {...rest} />
      </div>
      <div className={showFilter ? 'col-xs-12 col-sm-9 col-lg-9' : 'col-xs-12'}>
        {tableConfiguration ? (
          <SynapseTable
            enableLeftFacetFilter={true}
            {...rest}
            {...tableConfiguration}
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
    </div>
  )
}

export default FilterAndView
