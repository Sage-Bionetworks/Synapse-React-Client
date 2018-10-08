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
        this.props.updateParentFacet({currentFacet: columnName})
    }

    render() {
        let {data} = this.props
        if (data.length === 0) {
            return false
        }
        return (
            <div>
                  {
                      data.facets.map(
                          el => {
                              let style = {}
                              let selection = (this.state.currentFacet ? this.state.currentFacet: this.props.filter)
                              if (selection === el.columnName) {
                                style.background = `rgb(${this.props.R},${this.props.G},${this.props.B})`
                                style.color =  "black"
                              } else {
                                style.background =  "#F5F5F5"
                              }
                              return (
                                <div key={el.columnName} className="SRC-menu" onClick={this.handleClick(el.columnName)} style={style} >
                                      <span className="SRC-menu-link"> {el.columnName}  </span>
                                </div>
                              )
                          }
                      )
                  }      
            </div>
        )
    }

}