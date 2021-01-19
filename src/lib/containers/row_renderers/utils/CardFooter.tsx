import * as React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faLongArrowAltUp,
  faLongArrowAltDown,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DOI_REGEX } from '../../../containers/GenericCard'
import IconSVG from '../../IconSvg'
library.add(faLongArrowAltUp)
library.add(faLongArrowAltDown)

type State = {
  isShowMoreOn: boolean
  isDesktop: boolean
}

type CardFooterProps = {
  values: any[]
  isHeader: boolean
  secondaryLabelLimit?: number
  columnIconOptions?: {}
}

class CardFooter extends React.Component<CardFooterProps, State> {
  constructor(props: CardFooterProps) {
    super(props)
    this.state = {
      isShowMoreOn: false,
      isDesktop: false,
    }
    this.toggleShowMore = this.toggleShowMore.bind(this)
    this.updatePredicate = this.updatePredicate.bind(this)
  }

  toggleShowMore() {
    this.setState({
      isShowMoreOn: !this.state.isShowMoreOn,
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

  renderRowValue = (columnName: string, value: string, tableColumnName: string) => {
    const columnIconOptions = this.props.columnIconOptions
    if (!value.match || !value.trim) {
      // value can sometimes be a react element, so it doesn't have a .match function, interestingly I didn't
      // see typeof return 'object' for that case which would be a better check.
      return value
    }
    value = value.trim()
    if (value.match(DOI_REGEX)) {
      return (
        <a
          data-search-handle={columnName}
          target="_blank"
          rel="noopener noreferrer"
          href={`https://dx.doi.org/${value}`}
        >
          {value}
        </a>
      )
    }
    // Only display icon when columnIconOptions is set in config file
    if (columnIconOptions && Object.keys(columnIconOptions).includes(tableColumnName)) {
      const options = columnIconOptions[tableColumnName][value]
      return (
        <>
          <IconSVG options={options}></IconSVG>
          <span style={{"verticalAlign": "middle"}}>{value}</span>
        </>
      )
    }

    return value
  }

  renderRows = (values: string[][], limit: number, isDesktop: boolean) => {
    return values.map((kv, index) => {
      const hideClass = index >= limit ? 'SRC-hidden' : ''
      const columnName = kv[0]
      const value = this.renderRowValue(columnName, kv[1], kv[2])
      if (isDesktop) {
        return (
          <tr className={'SRC-cardRowDesktop ' + hideClass} key={index}>
            <td className={'SRC-verticalAlignTop SRC-row-label'}>
              {columnName}
            </td>
            <td
              data-search-handle={columnName}
              className={'SRC-row-data SRC-limitMaxWidth '}
            >
              {value}
            </td>
          </tr>
        )
      }
      return (
        <React.Fragment key={index}>
          <tr className={'SRC-cardRowMobile ' + hideClass}>
            <td className={'SRC-verticalAlignTop SRC-row-label'}>
              {columnName}
            </td>
          </tr>
          <tr className={'SRC-cardRowMobile ' + hideClass}>
            <td
              data-search-handle={columnName}
              className="SRC-row-data SRC-limitMaxWidth"
            >
              {value}
            </td>
          </tr>
        </React.Fragment>
      )
    })
  }

  render() {
    const { values, secondaryLabelLimit = 3 } = this.props
    const { isShowMoreOn, isDesktop } = this.state
    const valuesFiltered = values.filter(el => el[1])
    const hasMoreValuesThanLimit = valuesFiltered.length > secondaryLabelLimit
    const limit =
      !hasMoreValuesThanLimit || isShowMoreOn ? Infinity : secondaryLabelLimit
    return (
      <div
        className={`SRC-cardMetadata ${
          this.props.isHeader ? 'SRC-card-footer-header' : ''
        }`}
      >
        <table>
          <tbody>
            {this.renderRows(valuesFiltered, limit, isDesktop)}
            {hasMoreValuesThanLimit && (
              <tr className="SRC-cardRow">
                <td>
                  <button
                    style={{ textAlign: 'left', margin: 0, padding: 0 }}
                    className="SRC-primary-text-color SRC-basicButton"
                    onClick={this.toggleShowMore}
                  >
                    Show {isShowMoreOn ? 'Less' : 'More'}
                    <FontAwesomeIcon
                      style={{ marginLeft: '5px' }}
                      icon={
                        isShowMoreOn
                          ? 'long-arrow-alt-up'
                          : 'long-arrow-alt-down'
                      }
                    />
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}
export default CardFooter
