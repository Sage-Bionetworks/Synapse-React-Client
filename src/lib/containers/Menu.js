import React from 'react'
import ColorGradient from './ColorGradient';

// will take in a default facet
export default class Menu extends React.Component {

    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
        this.handleHoverLogic = this.handleHoverLogic.bind(this)
        this.state = {
            currentFacet: ""
        }
    }

    handleClick = (columnName) => (event) => {
        this.setState({
            currentFacet: columnName
        })
        // below we make a slight optimization when switching between menu tabs,
        // that is, deciding whether the query result has to be reset or not, this
        // is made by seeing if any of the chicklets are selected, if any of them
        // are then we make the query request, otherwise not.
        let {isChecked} = this.props
        let hasChickletsSelected = false
        for(let key in isChecked) {
            if (isChecked.hasOwnProperty(key)) {
                hasChickletsSelected = true
            }
        }
        this.props.updateParentFilter(columnName)
        if (hasChickletsSelected) { 
            this.props.executeInitialQueryRequest()
        }
    }

    handleHoverLogic = (info) => (event) => {
        if (!info.isSelected && event.target.tagName === "DIV") {
            event.target.style.backgroundColor = info.originalColor
            event.target.style.color = info.textColor
        }
    }

    render() {
        let {data} = this.props
        if (data.length === 0) {
            return false
        }
        const colorGradient = new ColorGradient(this.props.rgbIndex)
        const originalColor = colorGradient.getOriginalColor()
        return (
            <React.Fragment>
                  {
                      data.facets.map(
                          el => {
                              let style = {}
                              let selection = (this.state.currentFacet ? this.state.currentFacet: this.props.filter)
                              let isSelected = selection === el.columnName
                              let active = ""
                              if (isSelected) {
                                style.background = originalColor
                                // below has to be set so the pseudo element created will inherit its color
                                // appropriately
                                style.borderLeftColor = originalColor
                                style.color =  "white"
                                active = "SRC-pointed"
                            } else {
                                style.background =  "#F5F5F5"
                              }
                              style.width = "100%"

                              return (
                                <div onMouseEnter={this.handleHoverLogic({isSelected, originalColor, textColor: "white"})}
                                     onMouseLeave={this.handleHoverLogic({isSelected, originalColor: "#F5F5F5", textColor: "black"})} key={el.columnName}
                                     className={`SRC-menu SRC-hand-cursor SRC-menu-hover SRC-text-chart ${active} ${active} ${isSelected ? "SRC-whiteText": ""}`} 
                                     onClick={this.handleClick(el.columnName)} style={style}>
                                      {el.columnName}
                                </div>
                              )
                          }
                      )
                  }      
            </React.Fragment>
        )
    }

}