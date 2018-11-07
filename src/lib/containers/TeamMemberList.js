import React from 'react'
import UserBadgeBatch from './UserBadgeBatch'
import * as SynapseClient from '../utils/SynapseClient'

export default class TeamMemberList extends React.Component {
    constructor() {
        super()
        this.state = {
            principalIds: []
        }
    }

    componentDidMount() {
        SynapseClient.getTeamList(this.props.token, this.props.id).then(
            data => {
                let principalIds = data.results.map(el => {
                    return el.member.ownerId
                })
                this.setState({principalIds})
            }
        ).catch(
            er => {
                console.log("Error on getting team list ", er)
            }
        )
    }

    render() {
        if (this.state.principalIds.length === 0) {
            return (false)
        }
        return (<UserBadgeBatch
                    principalIds={this.state.principalIds}
                    token={this.props.token}
                />)
    }
}