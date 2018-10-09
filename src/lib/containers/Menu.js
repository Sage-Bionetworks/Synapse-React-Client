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
        this.props.updateParentState({currentFacet: columnName})
        // TODO: minor optimization that doesnt reload each time a new menu item is clicked,
        // e.g. look at the init query request selcted facets length, if equal to current then
        // no need to update.
        this.props.executeQueryRequest(null, true)
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
                                active = "pointed"
                            } else {
                                style.background =  "#F5F5F5"
                              }
                              style.width = "100%"

                              return (
                                <div key={el.columnName}  className={"SRC-menu SRC-menu-hover " + active} onClick={this.handleClick(el.columnName)} style={style}>
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