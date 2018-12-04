import React, { MouseEvent } from "react";
import ReactTooltip from 'react-tooltip'
import PropTypes from 'prop-types'
import Measure, {ContentRect} from "react-measure";
import {QueryWrapperChildProps} from './QueryWrapper'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import {getColorPallette} from "./ColorGradient";

library.add(faAngleLeft);
library.add(faAngleRight);

const uuidv4 = require("uuid/v4");
const PREVIOUS_ITEM_CLICK = "left click";
const NEXT_CLICK = "right click";

type StackedRowHomebrewState = {
    hoverTextCount: number
    hoverText: string
    selectedFacets: {}
    dimensions: ContentRect
    index: number
};

type StackedRowHomebrewProps = {
    loadingScreen: any
    synapseId: string
    unitDescription: string
};

type Info = {
    value: string
    count: number
    index:  number
}

/**
 * Make a simple stacked bar char
 *
 * @class StackedRowHomebrew
 * @extends {React.Component}
 */
export default class StackedRowHomebrew extends React.Component<StackedRowHomebrewProps & QueryWrapperChildProps, StackedRowHomebrewState> {

    static propTypes = {
        loadingScreen: PropTypes.element
    }

    constructor(props: StackedRowHomebrewProps & QueryWrapperChildProps) {
        super(props);
        this.handleHover = this.handleHover.bind(this);
        this.handleExit = this.handleExit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleArrowClick = this.handleArrowClick.bind(this);
        this.getHoverText = this.getHoverText.bind(this);
        this.rgba2rgb = this.rgba2rgb.bind(this);
        // the text currently under the cursor
        this.state = {
            hoverText: "",
            hoverTextCount: 0,
            selectedFacets: {},
            // dimensios has shape ContentRect: { bounds: BoundingRect }
            dimensions: { bounds: {height: 1, width: 1, top: 0, left: 0, right: 0, bottom: 0} },
            index: -1
        };
        this.extractPropsData = this.extractPropsData.bind(this);
    }

    componentDidUpdate(prevProps: any) {
        if (prevProps.filter !== this.props.filter || prevProps.isLoadingNewData !== this.props.isLoadingNewData) {
            this.setState({
                hoverText: "",
                hoverTextCount: 0,
                index: -1
            });
        }
    }
    /**
     * Updates the hover text and update the view
     *
     * @memberof StackedRowHomebrew
     */
    handleHover(event: React.MouseEvent<SVGRectElement>) {
        // add box shadow
        event.currentTarget.style.boxShadow = "25px 20px";
    }
    /**
     * Update the hover text and the view
     *
     * @param {*} event
     * @memberof StackedRowHomebrew
     */
    handleExit(event: React.MouseEvent<SVGRectElement>) {
        // remove box shadow
        event.currentTarget.style.boxShadow = "";
    }
    /**
     * Handle column click event
     */
    handleClick = (dict: Info) => (event: React.MouseEvent<SVGElement>) => {
        // https://medium.freecodecamp.org/reactjs-pass-parameters-to-event-handlers-ca1f5c422b9
        this.setState({
            hoverText: dict.value,
            hoverTextCount: dict.count,
            index: dict.index
        });
    };

    getHoverText(x_data: any) {
        let hoverText;
        if (this.state.index === -1) {
            hoverText = x_data[0] && x_data[0].value;
        } else {
            hoverText = this.state.hoverText;
        }
        return (
            <React.Fragment>
                <span className="SRC-text-cap"> {this.props.filter} </span> : <span> {hoverText === "org.sagebionetworks.UNDEFINED_NULL_NOTSET" ? "unannotated" : hoverText} </span>
            </React.Fragment>
        );
    }

    getFileCount(x_data: any) {
        if (this.state.index === -1) {
            let hoverTextCount = x_data[0] && x_data[0].count;
            return hoverTextCount;
        } else {
            return this.state.hoverTextCount;
        }
    }
    // Handle user cycling through slices of the bar chart
    handleArrowClick = (direction: string) => (event: MouseEvent<HTMLButtonElement>) => {
        let { index } = this.state;
        if (index === -1) {
            index = 0;
        }
        let dict: any = this.extractPropsData(this.props.data);
        let length = Object.keys(dict).length;
        if (direction === PREVIOUS_ITEM_CLICK) {
            if (index === 0) {
                // wrap around
                index = length - 1;
            } else {
                index -= 1;
            }
        } else {
            if (index === length - 1) {
                index = 0;
            } else {
                index += 1;
            }
        }
        dict = dict[index];
        this.setState({
            hoverText: dict.value,
            hoverTextCount: dict.count,
            index
        });
    };
    
    rgba2rgb(background: number[], color: number[]) {
        const alpha = color[3];
        return [
            Math.floor((1 - alpha) * background[0] + alpha * color[0] + 0.5),
            Math.floor((1 - alpha) * background[1] + alpha * color[1] + 0.5),
            Math.floor((1 - alpha) * background[2] + alpha * color[2] + 0.5)
        ];
    }

    advancedSearch(x_data: any) {
        
        let hoverText;

        if (this.state.index === -1) {
            hoverText = x_data[0] && x_data[0].value;
        } else {
            hoverText = this.state.hoverText;
        }

        // base 64 encode the json of the query and go to url with the encoded object
        let lastQueryRequest = this.props.getLastQueryRequest!();
        let { query } = lastQueryRequest;
        query.selectedFacets = [
            {
                concreteType: "org.sagebionetworks.repo.model.table.FacetColumnValuesRequest",
                columnName: this.props.filter,
                facetValues: [hoverText]
            }
        ]
        let encodedQuery = btoa(JSON.stringify(query));
        let {synapseId = ""} = this.props;
        let link = `https://www.synapse.org/#!Synapse:${synapseId}/tables/query/${encodedQuery}`
        return link
    }

    /**
     * Display view
     */
    render() {
        let { data } = this.props;
        // while loading
        if (this.props.isLoadingNewData) {
            return this.props.loadingScreen || <div></div>;
        }
        let x_data = this.extractPropsData(data);
        let total: number = 0;
        let width: number = this.state.dimensions.bounds!.width;
        // sum up the counts of data
        for (let key in x_data) {
            if (x_data.hasOwnProperty(key)) {
                total += x_data[key].count;
            }
        }
        let {colorPallete, textColors} = getColorPallette(this.props.rgbIndex!, x_data.length)
        let originalColor = colorPallete[0]
        return (
            <div className="container-fluid">
                <div className="row SRC-center-text">
                    <button className="btn btn-default btn-sm SRC-floatRight" onClick={this.handleArrowClick(NEXT_CLICK)}>
                        <FontAwesomeIcon style={{fontSize: "11px"}} className="SRC-primary-text-color" icon="angle-right" />
                    </button>
                    <button className="btn btn-default btn-sm SRC-floatRight" onClick={this.handleArrowClick(PREVIOUS_ITEM_CLICK)}>
                        <FontAwesomeIcon style={{fontSize: "11px"}} className="SRC-primary-text-color" icon="angle-left" />
                    </button>
                </div>
                <div className="row SRC-bar-border SRC-bar-marginTop SRC-bar-border-top">
                    <Measure
                        bounds
                        onResize={(contentRect: ContentRect) => {
                            this.setState({ dimensions: contentRect });
                        }}
                    >
                        {({ measureRef }) => (
                            <div style={{display: "flex"}} ref={measureRef}>
                                {x_data.map((obj, index) => {
                                    let initRender: boolean = this.state.index === -1 && index === 0;
                                    let textColor:  string = textColors[index]

                                    let rgbColor: string = colorPallete[index]

                                    let rectStyle : any;
                                    const check = this.props.isChecked![index] === undefined || this.props.isChecked![index];
                                    if (check) {
                                        rectStyle = {
                                            fill: rgbColor
                                        };
                                    } else {
                                        rectStyle = {
                                            fill: `#C4C4C4`
                                        };
                                    }
                                    let svgHeight = 80;
                                    let svgWidth = obj.count / total * width;
                                    let style: any = {};
                                    if (this.state.index === index || initRender) {
                                        style.filter = "drop-shadow(5px 5px 5px rgba(0,0,0,0.5))";
                                    }
                                    let label: string =`${this.props.filter}: ${obj.value}  - ${obj.count} ${this.props.unitDescription}`
                                    let tooltipId = uuidv4()
                                    return (
                                        // each svg represents one of the bars
                                        // will need to change this to be responsive
                                        <React.Fragment key={uuidv4()}>
                                            <span data-for={tooltipId} data-tip={label}>
                                                <svg className="SRC-hoverBox" height={svgHeight + 15} width={svgWidth} style={style} onClick={this.handleClick({ ...obj, index })}>
                                                    <rect
                                                        onMouseEnter={this.handleHover}
                                                        onMouseLeave={this.handleExit}
                                                        height={svgHeight}
                                                        width={svgWidth}
                                                        className="SRC-chart-rect-style"
                                                        // can't remove inline style due to dynamic fill
                                                        style={rectStyle}
                                                    />
                                                    {
                                                        index < 3 && svgWidth > 8 &&
                                                        <text textAnchor="middle" className="SRC-text-title" fontFamily={"bold sans-serif"} fill={textColor} x={"50%"} y={"50%"}>
                                                            {obj.count}
                                                        </text>
                                                    }
                                                    {(this.state.index === index || initRender) && (
                                                        <text fill={originalColor} x={0} y={svgHeight + 15} className="SRC-text-shadow SRC-text-large">
                                                            {"\u25BE"}
                                                        </text>
                                                    )}
                                                </svg>
                                            </span>
                                            <ReactTooltip delayShow={1000} id={tooltipId}/>
                                        </React.Fragment>
                                    );
                                })}
                            </div>
                        )}
                    </Measure>
                </div>
                <div className="row SRC-bar-border SRC-bar-border-bottom">
                    <p className="SRC-noMargin SRC-padding-chart SRC-text-title">
                        <strong>{this.getHoverText(x_data)}</strong>
                    </p>
                    <p className="SRC-noMargin SRC-padding-chart SRC-text-chart"> {this.getFileCount(x_data)} {this.props.unitDescription} </p>
                </div>
            </div>
        );
    }
    extractPropsData(data: any) {
        let x_data: any[] = [];
        data.facets.forEach(
            (item: any) => {
                if (item.facetType === "enumeration" && item.columnName === this.props.filter) {
                    item.facetValues.forEach(
                        (facetValue: any) => {
                            if (item.columnName) {
                                x_data.push({ columnName: item.columnName, ...facetValue });
                            }
                    });
                }
        });
        // sort the data so that the largest bars are at the front
        x_data.sort((a, b) => {
            return b.count - a.count;
        });
        return x_data;
    }
}
