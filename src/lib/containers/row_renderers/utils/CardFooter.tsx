import * as React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLongArrowAltUp, faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DOI_REGEX } from '../../GenericCard'
library.add(faLongArrowAltUp)
library.add(faLongArrowAltDown)

const getDesktopFormattedRows = (values: string [][], limit: number) => {
  return values.map((kv, index) => {
    const hideClass =  (index >= limit ? 'SRC-hidden' : '')
    if (kv[1].toUpperCase().match(DOI_REGEX)) {
      return (
        <tr className={"SRC-cardRowDesktop " + hideClass} key={index}>
          <td className={'SRC-verticalAlignTop SRC-row-label SRC-cardCell'}> {kv[0]} </td>
          <td className="SRC-row-data SRC-limitMaxWidth SRC-cardCell">
            <a data-search-handle={kv[0].toLowerCase()} target="_blank" rel="noopener noreferrer"  href={`https://dx.doi.org/${kv[1]}`}>
              {kv[1]}
            </a>
          </td>
        </tr>
      ) 
    }
    return (
      <tr className={"SRC-cardRowDesktop " + hideClass} key={index}>
        <td className={'SRC-verticalAlignTop SRC-row-label'}> {kv[0]} </td>
        <td data-search-handle={kv[0].toLowerCase()} className={"SRC-row-data SRC-limitMaxWidth "}> {kv[1]} </td>
      </tr>
    )
  })
}

const getMobileFormattedRows = (values: string [][], limit: number) => {
  return values.map((kv, index) => {
    const hideClass =  (index >= limit ? 'SRC-hidden' : '')
    if (kv[0].toUpperCase() === 'DOI') {
      return (
        <React.Fragment key={index}>
          <tr className={"SRC-cardRowMobile " + hideClass}>
            <td className={'SRC-verticalAlignTop SRC-row-label'}> {kv[0]} </td>
          </tr>
          <tr className={"SRC-cardRowMobile " + hideClass}>
            <td className="SRC-row-data SRC-limitMaxWidth">
              <a data-search-handle={kv[0].toLowerCase()} target="_blank" rel="noopener noreferrer"  href={`https://dx.doi.org/${kv[1]}`}>
                {kv[1]}
              </a>
            </td>
          </tr>
        </React.Fragment>
      )
    }
    return (
      <React.Fragment key={index}>
        <tr className={"SRC-cardRowMobile " + hideClass}>
          <td className={'SRC-verticalAlignTop SRC-row-label'}> {kv[0]} </td>
        </tr>
        <tr className={"SRC-cardRowMobile " + hideClass}>
          <td data-search-handle={kv[0].toLowerCase()} className="SRC-row-data SRC-limitMaxWidth"> {kv[1]} </td>
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
  secondaryLabelLimit?: number
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
    const { values, secondaryLabelLimit = 3 } = this.props
    const { isShowMoreOn, isDesktop } = this.state
    let valuesFiltered = values.filter(el => el[1])
    const hasMoreValuesThanLimit = valuesFiltered.length > secondaryLabelLimit
    const limit = !hasMoreValuesThanLimit || isShowMoreOn ? Infinity: secondaryLabelLimit
    // // don't slice if the number of values < limit or if they've clicked showMore
    // if (!hasMoreValuesThanLimit || isShowMoreOn) {
    //   valuesFiltered = valuesFiltered.slice(0, Infinity)
    // } else {
    //   valuesFiltered = valuesFiltered.slice(0, secondaryLabelLimit)
    // }
    return (
      <div className="SRC-cardMetadata">
        <table>
          <tbody>
            {isDesktop ? getDesktopFormattedRows(valuesFiltered, limit) : getMobileFormattedRows(valuesFiltered, limit)}
            {
              hasMoreValuesThanLimit &&
                <tr className="SRC-cardRow">
                  <td>
                  <button
                    style={{ textAlign: 'left', margin: 0, padding: 0 }}
                    className="SRC-primary-text-color SRC-basicButton SRC-showMoreBtn"
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
