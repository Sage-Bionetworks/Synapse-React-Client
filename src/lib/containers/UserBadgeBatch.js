// FILE NOT EXPORTED - DEMO ONLY
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
        getUserProfileData(this.props.principalIds, this.props.token).then(
            data => {
                this.setState({data})
            }
        ).catch(er => {
            console.log("Error on user badge batch call ", er)
        })
    }
 
    render() { 
        return (<UserBadgeView data={this.state.data}/>)
    }
}

UserBadgeBatch.propTypes = {
    synapseIds: PropTypes.arrayOf(String)
}