import * as React from 'react'

type CardFooterProps = {
  values: any [],
  extraWide?: boolean
}

const getFormattedRows = (values: string [][], extraWide = false) => {
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
    const extraWideClass = extraWide ? 'extraWide' : ''
    return (
      <div key={index} className={'row'}>
          <div className={`SRC-verticalAlignTop SRC-row-label ${extraWideClass}`}> {kv[0]} </div>
          <div className="SRC-row-data SRC-limitMaxWidth"> {kv[1]} </div>
      </div>
    )
  })
}

const CardFooter: React.SFC<CardFooterProps> = ({ values, extraWide = false }) => {
  const valuesFiltered = values.filter(el => el[1])
  if (valuesFiltered.length > 4) {
    // split into two even sections
    const length = valuesFiltered.length
    const isOddPlusOne = (length / 2) % 2
    // put the majority on the left hand side
    const firstHalf = getFormattedRows(valuesFiltered.slice(0, (length / 2) + isOddPlusOne))
    const secondHalf = getFormattedRows(valuesFiltered.slice((length / 2) + isOddPlusOne))
    return(
      <div className="SRC-cardMetadataColumn">
        <div className="SRC-halfWidth">
          {firstHalf}
        </div>
        <div className="SRC-halfWidth">
          {secondHalf}
        </div>
      </div>
    )
  }
  return (
    <div className="SRC-cardMetadata">
      {getFormattedRows(valuesFiltered, extraWide)}
    </div>
  )
}
export default CardFooter
