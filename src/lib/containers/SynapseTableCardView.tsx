import React from 'react';
import PropTypes from 'prop-types'
import { STUDY, DATASET, FUNDER, PUBLICATION, TOOL } from '../utils/SynapseConstants';
import { Study, Tool, Publication, Dataset, Funder } from './row_renderers';
// Instead of giving each of the Study/Tool/etc components the same
// props we make a simple container that does

type RowContainerProps = {
    children: any,
    data: any,
    limit: number,
    hideOrganizationLink: boolean,
    schema: any
}

const RowContainer: React.SFC<RowContainerProps> = ({ children, data, limit, ...rest }) => {
    return data.queryResult.queryResults.rows.map(
        (rowData: any, index: number) => {
            if (index < limit) {
                return (
                    <React.Fragment key={rowData.rowId}>
                        {React.Children.map(children,
                         (child: any) => {
                                return React.cloneElement(child, { data: rowData.values, ...rest });
                            })}
                    </React.Fragment>
                );
            } else {
                return false;
            }
    });
};
type SynapseTableCardViewProps = {
    type: string,
    data?: any,
    limit?: number,
    hideOrganizationLink?: boolean
};
class SynapseTableCardView extends React.Component<SynapseTableCardViewProps, {}> {

    static propTypes = {
        type: PropTypes.oneOf([STUDY, DATASET, FUNDER, PUBLICATION, TOOL]),
        limit: PropTypes.number,
        hideOrganizationLink: PropTypes.bool
    }

    constructor(props: SynapseTableCardViewProps) {
        super(props);
        this.renderChild = this.renderChild.bind(this);
    }

    renderChild() {
        const { type } = this.props;
        switch (type) {
            case STUDY:
                return <Study />;
            case DATASET:
                return <Dataset />;
            case FUNDER:
                return <Funder />;
            case PUBLICATION:
                return <Publication />;
            case TOOL:
                return <Tool />;
            default:
                return; // this should never happen
        }
    }

    render() {
        const { data, limit = Infinity, hideOrganizationLink = false } = this.props;
        if (data === undefined) {
            return <div className="container"> </div>;
        }
        let schema = {};
        data.queryResult.queryResults.headers.forEach(
            (element: any, index: any) => {
                schema[element.name] = index;
            });
        return (
            <RowContainer hideOrganizationLink={hideOrganizationLink} limit={limit} data={data} schema={schema}>
                {this.renderChild()}
            </RowContainer>
        );
    }
}

export default SynapseTableCardView;
