import React from 'react'
import PropTypes from 'prop-types'
import getUserProfileData from './getUserProfileData'
import UserBadgeView from './UserBadgeView'

export default class UserBadge extends React.Component {

    constructor() {
        super()
        this.state = {}
    }

    componentDidMount() {
        getUserProfileData([this.props.principalId], this.props.token).then(
            data => {
                this.setState({data})
            }
        );   
    }

    render() { 
        return (<UserBadgeView data={this.state.data}/>)
    }
}

UserBadgeBatch.propTypes = {
    synapseId: PropTypes.string
}