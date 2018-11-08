import React from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

// Add all icons to the library so you can use it in your page
library.add(faEllipsisV);
library.add(faSort);
library.add(faSortUp);
library.add(faSortDown);
const cloneDeep = require("lodash.clonedeep");
// Hold constants for next and previous button actions
const NEXT = "NEXT";
const PREVIOUS = "PREVIOUS";
const ICON_STATE: ("sort" | "sort-up" | "sort-down")[] = ["sort", "sort-up", "sort-down"];
let SORT_STATE = ["", "ASC", "DESC"];

type Info = {
    index: number,
    name: string
}

type SynapseTableState = {
    sortSelection: string[],
    offset: number,
    isOpen: boolean,
    isColumnSelected: boolean[],
    columnIconState: string[]
};

type SynapseTableProps = {
    visibleColumnCount?: number
    synapseId : string
}

import {QueryWrapperChildProps} from './QueryWrapper'

export default class SynapseTable extends React.Component<QueryWrapperChildProps & SynapseTableProps, SynapseTableState> {

    constructor(props: QueryWrapperChildProps & SynapseTableProps) {
        super(props);
        this.handleColumnClick = this.handleColumnClick.bind(this);
        this.handlePaginationClick = this.handlePaginationClick.bind(this);
        this.findSelectionIndex = this.findSelectionIndex.bind(this);
        this.toggleColumnSelection = this.toggleColumnSelection.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.advancedSearch = this.advancedSearch.bind(this);
        this.download = this.download.bind(this);
        this.getLengthOfPropsData = this.getLengthOfPropsData.bind(this);
        // store the offset and sorted selection that is currently held
        this.state = {
            sortSelection: [],
            offset: 0,
            isOpen: false,
            isColumnSelected: [],
            columnIconState: []
        };
    }
    /**
     * Handle a click on next or previous
     *
     * @memberof SynapseTable
     */
    handlePaginationClick = (eventType: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
        let queryRequest = this.props.getLastQueryRequest!();
        let currentOffset = queryRequest.query.offset;
        // if its a "previous" click subtract from the offset
        // otherwise its next and we paginate forward
        if (eventType === PREVIOUS) {
            currentOffset -= 25;
        }
        if (eventType === NEXT) {
            currentOffset += 25;
        }
        queryRequest.query.offset = currentOffset;
        this.props.executeQueryRequest!(queryRequest);
    };
    /**
     * Handle a column having been selected
     *
     * @memberof SynapseTable
     */
    handleColumnClick = (dict: Info) => (event: React.MouseEvent<HTMLTableHeaderCellElement>) => {
        let columnIconState = cloneDeep(this.state.columnIconState);
        if (columnIconState.length === 0) {
            columnIconState = Array(this.getLengthOfPropsData()).fill(0);
        }
        // get currently sorted items and remove/insert this selection
        let sortSelection = cloneDeep(this.state.sortSelection);
        let index = this.findSelectionIndex(sortSelection, dict.name);
        if (index !== -1) {
            sortSelection.splice(index, 1);
        }
        columnIconState[dict.index] = (columnIconState[dict.index] + 1) % ICON_STATE.length;
        if (columnIconState[dict.index] > 0) {
            sortSelection.unshift({
                column: dict.name,
                direction: SORT_STATE[columnIconState[dict.index]]
            });
        }
        let queryRequest = this.props.getLastQueryRequest!();
        queryRequest.query.sort = sortSelection;
        this.props.executeQueryRequest!(queryRequest);
        this.setState({
            sortSelection,
            columnIconState
        });
    };
    /**
     * Utility to search through array of objects and find object with key "column"
     * equal to input parameter "name"
     *
     * @param {*} sortSelection
     * @param {*} name
     * @returns -1 if not present, otherwise the index of the object
     * @memberof SynapseTable
     */
    findSelectionIndex(sortSelection: any[], name: string) {
        if (sortSelection.length !== 0) {
            // find if the current selection exists already and remove it
            return sortSelection.findIndex(el => {
                return el.column === name;
            });
        }
        return -1;
    }

    // TODO: implement this method
    download() {
        return
    }

    // Direct user to synapse corresponding synapse table
    advancedSearch(event: React.MouseEvent<HTMLAnchorElement>) {
        event.preventDefault();
        let lastQueryRequest = this.props.getLastQueryRequest!();
        let { query } = lastQueryRequest;
        // base 64 encode the json of the query and go to url with the encoded object
        let encodedQuery = btoa(JSON.stringify(query));
        let synTable = this.props.synapseId;
        let location: Location = new Location()
        location.assign(`https://www.synapse.org/#!Synapse:${synTable}/tables/query/${encodedQuery}`)
        window.location = location;
    }
    /**
     * Handles the opening and closing of the column select menu, this method
     * is only necessary because react overrides the behavior that bootstrap
     * embeds in its menus
     *
     * @memberof SynapseTable
     */
    toggleDropdown() {
        const { isOpen } = this.state;
        this.setState({ isOpen: !isOpen });
    }

    getLengthOfPropsData() {
        const { data } = this.props;
        const { queryResult } = data;
        const { queryResults } = queryResult;
        const { headers } = queryResults;
        return headers.length;
    }
    /**
     * Handles the toggle of a column select, this will cause the table to
     * either show the column or hide depending on the prior state of the column
     *
     * @memberof SynapseTable
     */
    toggleColumnSelection = (index: number) => (event: React.MouseEvent<HTMLLIElement>) => {
        event.preventDefault();
        // lazily update the component with this information
        // this only runs once
        let isColumnSelected: boolean [];
        if (this.state.isColumnSelected.length === 0) {
            // unpack all the data
            let lengthOfPropsData = this.getLengthOfPropsData();
            let defaultSelection;
            // fill visibleColumnCount with true and the rest as false
            if (this.props.visibleColumnCount === 0) {
                // if set to zero then its all true
                defaultSelection = Array(lengthOfPropsData).fill(true);
            } else {
                defaultSelection = Array(this.props.visibleColumnCount).fill(true);
                defaultSelection.push(...Array(lengthOfPropsData - this.props.visibleColumnCount!).fill(false));
            }
            isColumnSelected = defaultSelection;
        } else {
            isColumnSelected = cloneDeep(this.state.isColumnSelected);
        }
        isColumnSelected[index] = !isColumnSelected[index];
        this.setState({ isColumnSelected });
    };
    /**
     * Display the view
     */
    render() {
        if (this.props.data.length === 0) {
            return false;
        }
        // unpack all the data
        const { data } = this.props;
        const { queryResult } = data;
        const { queryResults } = queryResult;
        const { rows } = queryResults;
        const { headers } = queryResults;
        // Step 1: Format the column headers, we have to track a few variables --
        // whether the column should be shown by default or if the state now mandates it
        // be shown
        let headersFormatted = headers.map((column: any, index: number) => {
            // two cases when rendering the column headers on init load
            // of the page we have to show only this.props.visibleColumnCount many
            // columns, afterwards we rely on the isColumnSelected to get choices
            let {visibleColumnCount = 0} = this.props
            let initRender: boolean = index < visibleColumnCount && this.state.isColumnSelected.length === 0
            initRender = initRender || (visibleColumnCount === 0 && this.state.isColumnSelected.length === 0)
            let subsequentRender = this.state.isColumnSelected[index] && this.state.isColumnSelected.length !== 0
            if (initRender || subsequentRender) {
                let isSelected = this.findSelectionIndex(this.state.sortSelection, column.name) !== -1;
                return (
                    <th onClick={this.handleColumnClick({ name: column.name, index })} key={column.name} className={"SRC-hand-cursor " + (isSelected ? "SRC-salmon-background" : "")}>
                        <a style={{ color: "black" }} className={`padding-left-2 padding-right-2 ${isSelected ? "SRC-anchor-light" : ""}`}>
                            {column.name}
                            <FontAwesomeIcon className={`${isSelected ? "SRC-selected-table-icon" : "SRC-primary-text-color"} pull-right`} icon={ICON_STATE[this.state.columnIconState[index]]}/>
                        </a>
                    </th>
                );
            }
            // avoid eslint complaint below by returning undefined
            return undefined;
        });
        // Step 2: Format the row values, tracking the same information that the columns have to.
        // grab the row data and format it
        // e.g. <tr> <td> some value </td> </tr>
        let rowsFormatted: JSX.Element [] = [];
        rows.forEach((expRow: any, i: any) => {
            let rowFormatted = (
                <tr key={`(${expRow.rowId})`}>
                    {expRow.values.map( (value: string, j: number) => {
                        let columnName = headers[j].name;
                        let index = this.findSelectionIndex(this.state.sortSelection, columnName);
                        let {visibleColumnCount = 0} = this.props
                        let isRowActiveInit: boolean = j < visibleColumnCount && this.state.isColumnSelected.length === 0;
                        isRowActiveInit = isRowActiveInit || (visibleColumnCount === 0 && this.state.isColumnSelected.length === 0);
                        let isRowActiveSubsequent = this.state.isColumnSelected[j] && this.state.isColumnSelected.length !== 0;
                        if (isRowActiveInit || isRowActiveSubsequent) {
                            return (
                                <td className="SRC_noBorderTop" key={`(${i},${j})`}>
                                    <p className={`${index === -1 ? "" : "SRC-boldText"}`}> {value} </p>
                                </td>
                            );
                        }
                        // avoid eslint complaint below by returning undefined
                        return undefined;
                    })}
                </tr>
            );
            rowsFormatted.push(rowFormatted);
        });
        // handle displaying the previous button -- if offset is zero then it
        // shouldn't be displayed
        let pastZero: boolean = this.props.getLastQueryRequest!().query.offset > 0;
        let x_data: any[] = [];
        data.facets.forEach((item: any) => {
            if (item.facetType === "enumeration" && item.columnName === this.props.filter) {
                item.facetValues.forEach(
                    (facetValue: any) => {
                        if (item.columnName) {
                            x_data.push({ columnName: item.columnName, ...facetValue });
                        }
                });
            }
        });
        // edge case -- if they are all false then they are considered all true..
        // sum up the counts of data
        let anyTrue = false;
        let totalAllFalseCase = 0;
        let totalStandardCase = 0;
        for (let key in x_data) {
            if (x_data.hasOwnProperty(key)) {
                anyTrue = anyTrue || x_data[key].isSelected;
                totalAllFalseCase += x_data[key].count;
                totalStandardCase += x_data[key].isSelected ? x_data[key].count : 0;
            }
        }
        let total = anyTrue ? totalStandardCase : totalAllFalseCase;
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <span>
                            {!this.props.isLoading && <strong> Showing {this.props.showNothing ? 0 : total} Files </strong>}
                            <span className={this.props.isLoading ? "spinner" : ""} style={this.props.isLoading ? {} : { display: "none" }} />
                            {this.props.isLoading && <strong> &nbsp;&nbsp; Table results updating... </strong>}
                        </span>
                        <span className="SRC-floatRight">
                            <span className={` dropdown ${this.state.isOpen ? "open" : ""}`}>
                                <button className="btn SRC-marginRightFivePx SRC-paddingSevenPx btn-default dropdown-toggle" onClick={this.toggleDropdown} type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                    <FontAwesomeIcon icon="ellipsis-v" />
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                    {headers.map((header: any, index: number) => {
                                        let isColumnSelected: boolean | undefined = this.state.isColumnSelected[index];
                                        let {visibleColumnCount = 0} = this.props
                                        if (isColumnSelected === undefined) {
                                            isColumnSelected = (index < visibleColumnCount) || (visibleColumnCount === 0);
                                        }
                                        return (
                                            <li className={`${isColumnSelected ? "SRC-table-anchor-chosen" : ""}`} key={header.name} onClick={this.toggleColumnSelection(index)}>
                                                <a className="SRC-no-focus" href="">
                                                    {header.name}
                                                </a>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </span>
                            <a onClick={this.advancedSearch} href="">
                                <u> Advanced Search </u>
                            </a>
                        </span>
                    </div>
                </div>
                <div className="container-fluid SRC-overflowAuto">
                    <div className="row">
                        <table className="table table-striped table-condensed">
                            <thead className="SRC_borderTop">
                                <tr>
                                    {headersFormatted.map((headerFormatted: any) => {
                                        return headerFormatted;
                                    })}
                                </tr>
                            </thead>

                            {!this.props.showNothing && (
                                <tbody>
                                    {rowsFormatted.map(rowFormatted => {
                                        return rowFormatted;
                                    })}
                                </tbody>
                            )}
                        </table>
                        {!this.props.showNothing &&
                            pastZero && (
                                <button onClick={this.handlePaginationClick(PREVIOUS)} className="btn btn-default SRC-table-button" type="button">
                                    Previous
                                </button>
                            )}
                        {!this.props.showNothing && (
                            <button onClick={this.handlePaginationClick(NEXT)} className="btn btn-default SRC-table-button" type="button">
                                Next
                            </button>
                        )}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}