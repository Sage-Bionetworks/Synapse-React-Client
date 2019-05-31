import * as React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLongArrowAltUp, faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faLongArrowAltUp)
library.add(faLongArrowAltDown)

const getFormattedRows = (values: string [][], isDesktop: boolean) => {
  if (isDesktop) {
    return values.map((kv, index) => {
      if (kv[0].toUpperCase() === 'DOI') {
        return (
          <tr className="SRC-cardRow" key={index}>
            <td className={'SRC-verticalAlignTop SRC-row-label SRC-cardCell'}> {kv[0]} </td>
            <td className="SRC-row-data SRC-limitMaxWidth SRC-cardCell">
              <a target="_blank" href={`https://dx.doi.org/${kv[1]}`}>
                {kv[1]}
              </a>
            </td>
          </tr>
        )
      }
      return (
        <tr className="SRC-cardRow" key={index}>
          <td className={'SRC-verticalAlignTop SRC-row-label'}> {kv[0]} </td>
          <td className="SRC-row-data SRC-limitMaxWidth"> {kv[1]} </td>
        </tr>
      )
    })
  }
  return values.map((kv, index) => {
    if (kv[0].toUpperCase() === 'DOI') {
      return (
        <React.Fragment key={index}>
          <tr className="SRC-cardRow">
            <td className={'SRC-verticalAlignTop SRC-row-label'}> {kv[0]} </td>
          </tr>
          <tr className="SRC-cardRow">
            <td className="SRC-row-data SRC-limitMaxWidth">
              <a target="_blank" href={`https://dx.doi.org/${kv[1]}`}>
                {kv[1]}
              </a>
            </td>
          </tr>
        </React.Fragment>
      )
    }
    return (
      <React.Fragment key={index}>
        <tr className="SRC-cardRow">
          <td className={'SRC-verticalAlignTop SRC-row-label'}> {kv[0]} </td>
        </tr>
        <tr className="SRC-cardRow">
          <td className="SRC-row-data SRC-limitMaxWidth"> {kv[1]} </td>
        </tr>
      </React.Fragment>
    )
  })
}

type State = {
  isShowMoreOn: boolean
  isDesktop: boolean
}

type CardFooterProps = {
  values: any [],
  limit?: number
}

class CardFooter extends React.Component<CardFooterProps, State> {

  constructor(props: CardFooterProps) {
    super(props)
    this.state = {
      isShowMoreOn: false,
      isDesktop: false
    }
    this.toggleShowMore = this.toggleShowMore.bind(this)
    this.updatePredicate = this.updatePredicate.bind(this)
  }

  toggleShowMore() {
    this.setState({
      isShowMoreOn: !this.state.isShowMoreOn
    })
  }

  componentDidMount() {
    this.updatePredicate()
    window.addEventListener('resize', this.updatePredicate)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updatePredicate)
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 600 })
  }

  render() {
    const { values, limit = 3 } = this.props
    const { isShowMoreOn, isDesktop } = this.state
    // if the total length of values is less than the limit or they've clicked
    // show more then show all the values, otherwise use the limit passed in as a prop
    let valuesFiltered = values.filter(el => el[1])
    if (values.length < limit || isShowMoreOn) {
      valuesFiltered = valuesFiltered.slice(0, Infinity)
    } else {
      valuesFiltered = valuesFiltered.slice(0, limit)
    }
    return (
      <div className="SRC-cardMetadata">
        <table>
          <tbody>
            {getFormattedRows(valuesFiltered, isDesktop)}
            {
              values.length >= limit &&
              <tr className="SRC-cardRow">
                <td>
                <button
                  style={{ textAlign: 'left', margin: 0, padding: 0 }}
                  className="SRC-primary-text-color SRC-basicButton"
                  onClick={this.toggleShowMore}
                >
                  Show {isShowMoreOn ?  'Less' : 'More'}
                  <FontAwesomeIcon
                    style={{ marginLeft: '5px' }}
                    icon={isShowMoreOn ? 'long-arrow-alt-up' : 'long-arrow-alt-down'}
                  />
                </button>
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    )
  }
}
export default CardFooter
