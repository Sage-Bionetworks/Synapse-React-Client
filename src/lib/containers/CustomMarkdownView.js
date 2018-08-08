import React from 'react'

export class CustomMarkdownView extends React.Component {

    componentDidCatch(error, info) {
        console.log("Caught error ", error)
        console.log("Info: ", info)
    }

 
    render () {
        return (
            <div className="container border mt-5">
              <div className="row">
                <div className="col-6">
                  {this.props.children}
                </div>
              </div>
            </div>
        )
    }

}

export default CustomMarkdownView