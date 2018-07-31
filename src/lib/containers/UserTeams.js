import React from 'react'

/**
 * Class that demos obtatining a user's Team list
 */
class UserTeam extends React.Component {

    constructor () {
        super()
        this.state = {
            team: [],
            errorMessage: ''
        }
        this.getUserTeams = this.getUserTeams.bind(this)
    }

    getUserTeams() {
        this.props.getUserTeamEndpoint(this.props.token, this.props.ownerId)
        .then(
            data => {
                this.setState({
                        team: data.results,
                        errorMessage: ""
                    })
                }
        ).catch(
            err => {
                this.setState({
                    errorMessage: err.reason
                })
            }
        )
    }

    render () {

        let listTeam = null

        if (this.props.token === "" || this.props.ownerId === "") {
            listTeam = <p> <a href="#top"> Sign in </a> <strong> and </strong> get userProfile then click the button to get user teams. </p>
        } else {
            listTeam = this.state.team.map((fav) =>
                <li key={fav.id}> {fav.name} </li>
            );
        }

        let buttonIsOn = (this.props.token === "" || this.props.ownerId === "") 

        return (
            <div className="container border pt-2 mt-5">
                <h3> Demo of getting user teams</h3>
                <button disabled={buttonIsOn ? true: false} className={"mb-1 btn " + (buttonIsOn ? "btn-outline-secondary" :"btn-primary")} onClick={this.getUserTeams}> All </button>
                {listTeam}
                {this.state.errorMessage}
            </div>
        )
    }
}

export default UserTeam;