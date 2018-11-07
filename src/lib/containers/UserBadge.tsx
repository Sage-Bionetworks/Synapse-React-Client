import React from 'react';
import getUserProfileData from './getUserProfileData';
import UserBadgeView from './UserBadgeView';

type UserBadgeState = {
    data: any
};

type UserBadgeProps = {
    principalId: string,
    token: string
};

export default class UserBadge extends React.Component<UserBadgeProps, UserBadgeState> {
    constructor(props: any) {
        super(props);
        this.state = {data: {}};
    }
    componentDidMount() {
        getUserProfileData(this.props.principalId, this.props.token).then(
            data => {
                this.setState({ data });
            }
        );
    }
    render() {
        return <UserBadgeView data={this.state.data} />;
    }
}
