import React from 'react'

// will take in a default facet
export default class Menu extends React.Component {

    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
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
            this.props.executeQueryRequest(null, true)
        }
    }

    render() {
        let {data} = this.props
        if (data.length === 0) {
            return false
        }
        return (
            <React.Fragment>
                  {
                      data.facets.map(
                          el => {
                              let style = {}
                              let selection = (this.state.currentFacet ? this.state.currentFacet: this.props.filter)
                              let active = ""
                              const colorGradient = `rgb(${this.props.RGB[0]},${this.props.RGB[1]},${this.props.RGB[2]})` 
                              if (selection === el.columnName) {
                                style.background = colorGradient
                                // below has to be set so the pseudo element created will inherit its color
                                // appropriately
                                style.borderLeftColor = colorGradient
                                style.color =  "black"
                                active = "SRC-pointed"
                            } else {
                                style.background =  "#F5F5F5"
                              }
                              style.width = "100%"

                              return (
                                <div key={el.columnName}  className={"SRC-menu SRC-hand-cursor SRC-menu-hover " + active} onClick={this.handleClick(el.columnName)} style={style}>
                                      <p className="SRC-menu-link"> {el.columnName}  </p>
                                </div>
                              )
                          }
                      )
                  }      
            </React.Fragment>
        )
    }

}