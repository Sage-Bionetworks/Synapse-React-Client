import * as React from "react";
import ColorGradient from "./ColorGradient";
import PropTypes from 'prop-types';
import QueryWrapper from './QueryWrapper';
import { SynapseConstants } from '..';
import StackedRowHomebrew from './StackedRowHomebrew';
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { Facets } from './Facets';
import SynapseTable from './SynapseTable';
import SynapseTableCardView from './SynapseTableCardView';

library.add(faAngleLeft);
library.add(faAngleRight);

type MenuState = {
    menuIndex: number
};

type MenuConfig = {
    sql: string
    facetName: string
    facetDisplayValue?: string
    title?: string
    visibleColumnCount?: number
    unitDescription?: string
    synapseId: string
}

type Props = {
    menuConfig: MenuConfig []
    token: string
    type?:string
    rgbIndex: number
    loadingScreen?: JSX.Element
}

type Info = {
    isSelected: boolean
    originalColor: string
}

// will take in a default facet  originalColor: "#F5F5F5"
export default class Menu extends React.Component<Props, MenuState> {

    static propTypes = {
        menuConfig: PropTypes.arrayOf(PropTypes.any),
        token: PropTypes.string,
        rgbIndex: PropTypes.number,
        facetName: PropTypes.string
    }

    constructor(props: Props) {
        super(props)
        this.state = {
            menuIndex: 0
        }
        this.handleHoverLogic = this.handleHoverLogic.bind(this)
    }

    handleHoverLogic = (info: Info) => (event: React.MouseEvent<HTMLDivElement>) => {
        if (!info.isSelected && event.currentTarget.tagName === "DIV") {
            event.currentTarget.style.backgroundColor = info.originalColor;
        }
      } 
    render () {
        let {token, menuConfig, rgbIndex} = this.props

        const colorGradient: ColorGradient = new ColorGradient(this.props.rgbIndex);
        const originalColor = colorGradient.getOriginalColor();

        let menuDropdown = menuConfig.map(
            (config: MenuConfig, index:number) => {
            
                let isSelected: boolean = (index === this.state.menuIndex)
                let style: any = {}
                let selectedStyling: string = ""

                if (isSelected) {
                    // we have to programatically set the style since the color is chosen from a color
                    // wheel
                    style.background = originalColor;
                    // below has to be set so the pseudo element created will inherit its color
                    // appropriately
                    style.borderLeftColor = originalColor;
                    selectedStyling = "SRC-pointed SRC-whiteText";
                } else {
                    // change background to class
                    selectedStyling = "SRC-blackText SRC-light-background";
                }

                let infoEnter: Info = {isSelected, originalColor}
                let infoLeave: Info = {isSelected,  originalColor: "#F5F5F5" }

                let facetDisplayValue:string = config.facetDisplayValue || ""
                if (!facetDisplayValue) {
                    facetDisplayValue = config.facetName
                }

                return (
                    <div
                        onMouseEnter={this.handleHoverLogic(infoEnter)}
                        onMouseLeave={this.handleHoverLogic(infoLeave)}
                        key={config.facetName}
                        className={`SRC-hoverWhiteText SRC-menu SRC-hand-cursor SRC-menu-hover SRC-hoverBox SRC-text-chart ${selectedStyling}`}
                        onClick={() => {this.setState({menuIndex: index})}}
                        style={style}>
                        {facetDisplayValue}
                    </div>
                )
            }
        )
        
        let queryWrapper = menuConfig.map(
            (config: MenuConfig, index: number) => {
                let isSelected: boolean = (this.state.menuIndex === index)
                let style: any
                if (!isSelected) {
                    style = {visibility: "hidden", display: "none"}
                }
                return (
                <span key={config.facetName} style={style} >
                    <QueryWrapper
                        showMenu
                        initQueryRequest={{
                            concreteType: "org.sagebionetworks.repo.model.table.QueryBundleRequest",
                            partMask:
                            SynapseConstants.BUNDLE_MASK_QUERY_COLUMN_MODELS |
                            SynapseConstants.BUNDLE_MASK_QUERY_FACETS |
                            SynapseConstants.BUNDLE_MASK_QUERY_RESULTS,
                            query: {
                            isConsistent: false,
                            sql: config.sql,
                            limit: 25,
                            offset: 0
                            }
                        }}
                        facetName={config.facetName}
                        token={token}
                        rgbIndex={rgbIndex}
                    >
                        <StackedRowHomebrew
                            synapseId={config.synapseId}
                            unitDescription={(config.unitDescription || "")}
                            loadingScreen={this.props.loadingScreen} 
                        />
                        <Facets/>
                        {
                            config.title ?
                            (<SynapseTable 
                                title={config.title}
                                synapseId={config.synapseId}
                                // specify visible column count
                                visibleColumnCount={config.visibleColumnCount || 0} 
                                />
                            ):
                            (<div></div>)
                        }
                        {
                            this.props.type ?
                            <SynapseTableCardView type={this.props.type}  />
                            :
                            (<div></div>)
                        }
                    </QueryWrapper>
                </span>
                )
            }
        )

        return (
            <div className="container-fluid">
                <div className="col-xs-2">
                    {/* we put in the following so the chart and buttons align at the same height  */}
                    <div style={{marginBottom: "10px", visibility: "hidden"}} className="row">
                        <button className="btn btn-default btn-sm">
                            <FontAwesomeIcon style={{fontSize: "11px"}} icon="angle-right" />
                        </button>
                        <button className="btn btn-default btn-sm">
                            <FontAwesomeIcon style={{fontSize: "11px"}} icon="angle-left" />
                        </button>
                    </div>
                    {menuDropdown}
                </div>
                <div className="col-xs-10">
                    {queryWrapper}
                </div>
            </div>
        )
    }
}
