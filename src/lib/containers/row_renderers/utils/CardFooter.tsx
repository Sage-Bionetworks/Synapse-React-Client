import * as React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLongArrowAltUp, faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faLongArrowAltUp)
library.add(faLongArrowAltDown)

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

type State = {
  isShowMoreOn: boolean
}

type CardFooterProps = {
  values: any [],
  limit?: number
}

class CardFooter extends React.Component<CardFooterProps, State> {

  constructor(props: CardFooterProps) {
    super(props)
    this.state = {
      isShowMoreOn: false
    }
    this.toggleShowMore = this.toggleShowMore.bind(this)
  }

  toggleShowMore() {
    this.setState({
      isShowMoreOn: !this.state.isShowMoreOn
    })
  }
  render() {
    const { values, limit = 3 } = this.props
    const { isShowMoreOn } = this.state
    const limitUsed = isShowMoreOn ? Infinity : limit
    const valuesFiltered = values.filter(el => el[1]).slice(0, limitUsed)
    return (
      <div className="SRC-cardMetadata">
        {getFormattedRows(valuesFiltered)}
        <div className="row">
          <button
            style={{ textAlign: 'left', margin: 0, padding: 0 }}
            className="SRC-primary-action-color SRC-basicButton"
            onClick={this.toggleShowMore}
          >Show {isShowMoreOn ?  'Less' : 'More'}
            <FontAwesomeIcon
              style={{ marginLeft: '5px' }}
              icon={isShowMoreOn ? 'long-arrow-alt-up' : 'long-arrow-alt-down'}
            />
          </button>
        </div>
      </div>
    )
  }
}
export default CardFooter
