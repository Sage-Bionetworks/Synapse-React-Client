import React from "react";
let markdownitSynapse = require('markdown-it-synapse')
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
let synapseMath = require('markdown-it-synapse-math')

/*  
    Basic vanilla Markdownit functionality
*/
class Markdown extends React.Component {    

    constructor (props) {
        super(props)
        this.state = {
            md: require('markdown-it')({html: true}),
            text: 'Pythagorean theorem is  $$a^2 + b^2 = c^2$$ will render to:'
        }
        this.handleChange = this.handleChange.bind(this)
        this.updateDisplayText = this.updateDisplayText.bind(this)
        this.processMathJax = this.processMathJax.bind(this)
        this.createMarkup = this.createMarkup.bind(this)
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

    createMarkup(text) {
        let initText = this.state.md.render(text) 
        let cleanText = sanitizeHtml(initText, 
            {   
                allowedTags: [ 'span', 'code', 'h1', 'h2', 'p', 'b', 'i', 'em', 'strong', 'a' ,'id'],
                allowedAttributes: {
                    'a': [ 'href' ],
                    'span': ['id']
                }
            }
        )
        return {__html: cleanText}
    }

    processMathJax() {
        /**
         * Find all math identified elements
         *  of the form <dom element id=""> text </dom element> 
         */
        let start = 'mathjax-'
        let index = 10
        let curElement = start + String(index)
        let curElementId = start + String(index)
        let mathExpressions = document.querySelectorAll("[id^=\"mathjax-\"]")

        mathExpressions.forEach(element => {
            window.katex.render(element.textContent, element, {throwOnError: false, delimiters: 
                [
                    {left: "$$", right: "$$", display: true},
                    {left: "\\(", right: "\\)", display: false},
                    {left: "\\[", right: "\\]", display: true}
                ]
            })
        });

        while (true) {
            curElement = document.getElementById(curElementId)
            if (!curElement) {
                break
            }
            index +=1
            curElementId = start + String(index)
        }
    }

    handleChange(event) {
        const target = event.target
        const value = target.value
        this.setState(
            { text: value}
        );
    } 

    componentDidMount() {
        markdownitSynapse.init_markdown_it(
            this.state.md, markdownSubAlt, markdownEmpahsisAlt,
            markdownCenterText, markdownSynapseHeading, markdownSynapseTable,
            markdownStrikethrough, markdownContainer, markdownEmpahsisAlt,
            markdownInlineComments, markdownBr
        )
        this.setState({
            md: this.state.md.use(markdownitSynapse, '0').use(synapseMath, '0')
        })

        this.processMathJax()
    }

    componentDidUpdate () {
        this.processMathJax()
    }

    render() {
 
        return (
            <div className="container border mt-5 pt-3">
                <div className="row">
                    <p className="p-2 text-center" dangerouslySetInnerHTML={this.createMarkup('# Markdown it demo!')}/>
                </div>
                <div className="row">
                    <textarea rows={5} value={this.state.text} onChange={this.handleChange} className="col-6 border"> </textarea>
                    <div className="col-6 challenge__description" ref={1} dangerouslySetInnerHTML={this.createMarkup(this.state.text)} />
                </div>
            </div>
        )
    }

}

export default Markdown;