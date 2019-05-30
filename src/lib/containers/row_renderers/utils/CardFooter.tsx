import * as React from 'react'

type CardFooterProps = {
  values: any [],
  extraWide?: boolean
}

const getFormattedRows = (values: string [][]) => {
  return values.map((kv, index) => {
    if (kv[0].toUpperCase() === 'DOI') {
      return (
        <div key={index} className="row">
            <div className="SRC-row-label"> {kv[0]} </div>
            <div className="SRC-row-data">
                {' '}
                <a target="_blank" href={`https://dx.doi.org/${kv[1]}`}>
                    {kv[1]}
                </a>
            </div>
        </div>
      )
    }
    return (
      <div key={index} className={'row'}>
          <div className={'SRC-verticalAlignTop SRC-row-label'}> {kv[0]} </div>
          <div className="SRC-row-data SRC-limitMaxWidth"> {kv[1]} </div>
      </div>
    )
  })
}

const CardFooter: React.SFC<CardFooterProps> = ({ values }) => {
  const valuesFiltered = values.filter(el => el[1])
  return (
    <div className="SRC-cardMetadata">
      {getFormattedRows(valuesFiltered)}
    </div>
  )
}
export default CardFooter
