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

/*
    Basic vanilla Markdownit functionality
*/
class Markdown extends React.Component {

    constructor () {
        super()
        this.state = {
            md: require('markdown-it')({html: true}),
            text: '#Open Resources\n\n###Synapse is a open source platform which allows users to create public or private projects to carry out large scale distributed research. Here are a few examples. Join the growing community of researchers working in the open!\n\n-----\n## [DataHub - A Collaborative Network in Type 1 Diabetes](syn2481018)\nThe DataHub portal is designed as a repository for the collection of comparator arm clinical trial data derived from trials that enrolled recent onset Type 1 diabetes (T1D) patients. The goal of this project is to provide a multi-study cohort for use by investigators interested in assessing natural disease progression in early T1D disease state. We believe that such a database will help to accelerate therapeutic development, optimize clinical trial design and improve our measurement of therapeutic response, aid regulatory approval, and tailor therapies in a more precise and predictable manner. \n-----\n## [Attractor Metagenes from BCC DREAM Challenge](syn1721874)\nExplore the project of the winning team from the DREAM Breast Cancer Prognosis Challenge - including source code to re-construct all of the figures from their Science Translational Medicine publication.${reference?inlineWidget=true&text=W%2E%2DY%2E Cheng%2C T%2E%2DH%2E O%2E Yang%2C D%2E Anastassiou%2C Development of a Prognostic Model for Breast Cancer Survival in an Open Challenge Environment%2E Sci%2E Transl%2E Med%2E 5%2C 181ra50 %282013%29%2E doi%3A10%2E1126%2Fscitranslmed%2E3005974}\n-----\n## [JWGray Breast Cancer Cell Line Panel](syn2346643)\nThese data represent one of the most comprehensive sets of profiling data available on a collection of cell lines. The data have been published across several manuscripts, but have been curated here into a single resource for the broader scientific community.\n-----\n## [Rheumatoid Arthritis Treatment Response Resource](syn3280809)\nRheumatoid arthritis (RA) is a chronic and debilitating inflammatory disorder affecting synovial joints. While standard lines of treatment are available for disease management, tremendous variability in treatment response is observed. Access to four datasets designed to address the identification of biomarkers for treatment response is provided within this resource for use by the research community in independent efforts. These data were originally collated for use within the 2014 [DREAM Rheumatoid Arthritis Responder Challenge](https://www.synapse.org/#!Synapse:syn1734172) that was designed to identify genetic predictors of disease regression in response to anti-TNF therapies. \n-----\n## [TCGA Integrative Subtypes](syn2468297)\nAn extension to the TCGA [Pan-cancer](syn300013) effort this project explores in detail the simultaneous sub typing of close to 4,000 cancer patients using seven different types of data to identify subtypes. This supplement provides detailed data, methods and subtype assignments in formats ready to be used in analytical pipelines.\n-----\n## [Pan-Cancer Survival Prediction](syn1710282)\nThe prognostic value of tumor size and tumor staging is well known but the value of specific molecular phenotypes is less certain especially when comparing across tumor types. This project was designed to assess the value of six different molecular datasets and clinical covariates in predicting the survival time across 4 cancer types. Created as a compendium to a paper published in 2014 the project provide a leaderboard where anyone can submit their own predictive models of survival.${reference?inlineWidget=true&text=Yuan%2C Y%2E%2C Van Allen%2C E%2E M%2E%2C Omberg%2C L%2E%2C Wagle%2C N%2E%2C Amin%2DMansour%2C A%2E%2C Sokolov%2C A%2E%2C \u2026 Liang%2C H%2E %282014%29%2E Assessing the clinical utility of cancer genomic and proteomic data across tumor types%2E Nature Biotechnology%2C 32%287%29%2C 644\u2013652%2E doi%3A10%2E1038%2Fnbt%2E2940}\n-----\n## [Up For A Challenge](#!Synapse:syn3157598)\nThe [National Cancer Institute\u2019s](http://www.cancer.gov/) (NCI) [Division of Cancer Control and Population Sciences](http://cancercontrol.cancer.gov/) (DCCPS) is launching a challenge to inspire novel cross-disciplinary approaches to more fully decipher the genomic basis of breast cancer. The goal of this challenge is to use innovative approaches to identify novel pathways\u2014including new genes or combinations of genes, genetic variants, or sets of genomic features\u2014involved in breast cancer susceptibility in order to generate new biological hypotheses. GWAS data sets will be made available for use in the challenge."'
        }
        this.createMarkup = this.createMarkup.bind(this)
        this.createMarkupWithParam = this.createMarkupWithParam.bind(this)
        this.handleChange = this.handleChange.bind(this)
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
        return {__html: sanitizeHtml(this.state.md.render(text))};
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