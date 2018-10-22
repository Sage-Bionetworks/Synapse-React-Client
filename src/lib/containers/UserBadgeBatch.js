import React from 'react'
import PropTypes from 'prop-types'
import getUserProfileData from './getUserProfileData'
import UserBadgeView from './UserBadgeView'

export default class UserBadgeBatch extends React.Component {

    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        getUserProfileData(this.props.synapseIds, this.props.token).then(
            data => {
                this.setState({data})
            }
        )
    }
 
    render() { 
        return (<UserBadgeView data={this.state.data}/>)
    }
}

UserBadgeBatch.propTypes = {
    synapseIds: PropTypes.arrayOf(String)
}