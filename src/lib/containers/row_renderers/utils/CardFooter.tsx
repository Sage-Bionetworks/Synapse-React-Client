import * as React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLongArrowAltUp, faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faLongArrowAltUp)
library.add(faLongArrowAltDown)

const getDesktopFormattedRows = (values: string [][]) => {
  return values.map((kv, index) => {
    if (kv[0].toUpperCase() === 'DOI') {
      return (
        <tr className="SRC-cardRowDesktop" key={index}>
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
      <tr className="SRC-cardRowDesktop" key={index}>
        <td className={'SRC-verticalAlignTop SRC-row-label'}> {kv[0]} </td>
        <td className="SRC-row-data SRC-limitMaxWidth"> {kv[1]} </td>
      </tr>
    )
  })
}

const getMobileFormattedRows = (values: string [][]) => {
  return values.map((kv, index) => {
    if (kv[0].toUpperCase() === 'DOI') {
      return (
        <React.Fragment key={index}>
          <tr className="SRC-cardRowMobile">
            <td className={'SRC-verticalAlignTop SRC-row-label'}> {kv[0]} </td>
          </tr>
          <tr className="SRC-cardRowMobile">
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
        <tr className="SRC-cardRowMobile">
          <td className={'SRC-verticalAlignTop SRC-row-label'}> {kv[0]} </td>
        </tr>
        <tr className="SRC-cardRowMobile">
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
    // if the total length of values is less than the secondaryLabelLimit or they've clicked
    // show more then show all the values, otherwise use the secondaryLabelLimit passed in as a prop
    let valuesFiltered = values.filter(el => el[1])
    if (values.length <= secondaryLabelLimit || isShowMoreOn) {
      valuesFiltered = valuesFiltered.slice(0, Infinity)
    } else {
      valuesFiltered = valuesFiltered.slice(0, secondaryLabelLimit)
    }
    return (
      <div className="SRC-cardMetadata">
        <table>
          <tbody>
            {isDesktop ? getDesktopFormattedRows(valuesFiltered) : getMobileFormattedRows(valuesFiltered)}
            {
              values.length > secondaryLabelLimit &&
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
