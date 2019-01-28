import * as React from 'react'

type CardFooterProps = {
  values: any [],
  extraWide?: boolean
}

const CardFooter: React.SFC<CardFooterProps> = ({ values, extraWide = false }) => {
  const valuesFormatted = values.map((kv, index) => {
    if (!kv[1]) {
      // if a field is unspecified then it's not shown
      return null
    }
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
      <div key={index} className={`row ${extraWide ? 'extraWide' : ''}`}>
          <div className="SRC-verticalAlignTop SRC-row-label"> {kv[0]} </div>
          <div className="SRC-row-data SRC-limitMaxWidth"> {kv[1]} </div>
      </div>
    )
  })
  return (
    <div className="SRC-cardMetadata">
        {valuesFormatted}
    </div>
  )
}
export default CardFooter
