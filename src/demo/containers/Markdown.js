import React from "react";
import {init_markdown_it} from 'markdown-it-synapse'
let markdownSubAlt = require('markdown-it-sub-alt');
let markdownCenterText = require('markdown-it-center-text')
let markdownSynapseHeading = require('markdown-it-synapse-heading')
let markdownSynapseTable = require('markdown-it-synapse-table')
let markdownStrikethrough = require('markdown-it-strikethrough-alt')
let markdownContainer = require('markdown-it-container')
let markdownEmpahsisAlt = require('markdown-it-emphasis-alt')
let markdownInlineComments = require('markdown-it-inline-comments')
let markdownBr = require('markdown-it-br')
let sanitizeHtml = require('sanitize-html');
// let synapseMath = require('markdown-it-synapse-math') TODO: make this work

/*  
    Basic vanilla Markdownit functionality
*/
class Markdown extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            md: require('markdown-it')({html: true}),
            text: ''
        }
        this.createMarkup = this.createMarkup.bind(this)
        this.createMarkupWithParam = this.createMarkupWithParam.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.updateDisplayText = this.updateDisplayText.bind(this)
    }

     updateDisplayText() {
        this.props
            .markdownEndpoint(this.props.token, "syn3722562", "219259")
            .then(
                data => {
                    this.setState({
                        text: data.markdown
                    })
                }
            ).catch(
                err => {
                this.setState({
                    text: err
                })
            }
            )
    }

    createMarkup() {
        return {__html: sanitizeHtml(this.state.md.render(this.state.text, 'my-unique-div-id'), 
                {   
                    allowedTags: [ 'h1', 'h2', 'p', 'b', 'i', 'em', 'strong', 'a' ],
                    allowedAttributes: {
                        'a': [ 'href' ]
                    }
                }
            )};
    }

    createMarkupWithParam(text) {
        return {__html: sanitizeHtml(this.state.md.render(text),
            {   
                allowedTags: [ 'h1', 'h2', 'p', 'b', 'i', 'em', 'strong', 'a' ],
                allowedAttributes: {
                    'a': [ 'href' ]
                }
            }
        )};
    }

    handleChange(event) {
        const target = event.target
        const value = target.value
        this.setState(
            { text: value}
        );
    } 

    componentDidMount() {
        init_markdown_it(
            this.state.md, markdownSubAlt, markdownEmpahsisAlt,
            markdownCenterText, markdownSynapseHeading, markdownSynapseTable,
            markdownStrikethrough, markdownContainer, markdownEmpahsisAlt,
            markdownInlineComments, markdownBr
        )
        this.updateDisplayText()
    }
      
    render() {
        return (
            <div className="container border mt-5 pt-3">
                <div className="row">
                    <p className="p-2 text-center" dangerouslySetInnerHTML={this.createMarkupWithParam('# Markdown it demo!')}/>
                </div>
                <div className="row">
                    <textarea rows={5} value={this.state.text} onChange={this.handleChange} className="col-6 border"> </textarea>
                    <div className="col-6" dangerouslySetInnerHTML={this.createMarkup()} />
                </div>
            </div>
        )
    }

}

export default Markdown;