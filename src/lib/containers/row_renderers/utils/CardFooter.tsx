import * as React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLongArrowAltUp, faLongArrowAltDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faLongArrowAltUp)
library.add(faLongArrowAltDown)

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

  renderRows = (values: string [][], limit: number, isDesktop: boolean) => {
    return values.map((kv, index) => {
      const hideClass =  (index >= limit ? 'SRC-hidden' : '')
      if (isDesktop) {
        return (
          <tr className={"SRC-cardRowDesktop " + hideClass} key={index}>
            <td className={'SRC-verticalAlignTop SRC-row-label'}> {kv[0]} </td>
            <td data-search-handle={kv[0]} className={"SRC-row-data SRC-limitMaxWidth "}> {kv[1]} </td>
          </tr>
        )
      }
      return (
        <React.Fragment key={index}>
          <tr className={"SRC-cardRowMobile " + hideClass}>
            <td className={'SRC-verticalAlignTop SRC-row-label'}> {kv[0]} </td>
          </tr>
          <tr className={"SRC-cardRowMobile " + hideClass}>
            <td data-search-handle={kv[0]} className="SRC-row-data SRC-limitMaxWidth"> {kv[1]} </td>
          </tr>
        </React.Fragment>
      )
    })
  }

  render() {
    const { values, secondaryLabelLimit = 3 } = this.props
    const { isShowMoreOn, isDesktop } = this.state
    let valuesFiltered = values.filter(el => el[1])
    const hasMoreValuesThanLimit = valuesFiltered.length > secondaryLabelLimit
    const limit = !hasMoreValuesThanLimit || isShowMoreOn ? Infinity: secondaryLabelLimit
    return (
      <div className="SRC-cardMetadata">
        <table>
          <tbody>
            {this.renderRows(valuesFiltered, limit, isDesktop)}
            {
              hasMoreValuesThanLimit &&
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
