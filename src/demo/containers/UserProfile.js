import React from 'react'

/**
 * Class that demos obtatining a user's projects list
 */
class UserProfile extends React.Component {

    constructor () {
        super()
        this.state = {
            userName: ''
        }
        this.getUserProfile = this.getUserProfile.bind(this)
    }

    getUserProfile(event) {
        event.preventDefault()
        this.props.getUserProfileEndpoint(this.props.token).then(
            data => {
                this.props.onProfileChange({ownerId: data.ownerId})
                this.setState({
                    userName: data.userName
                })
            }
        ).catch(
            err => {
                this.setState({
                    hasLoginInFailed: true,
                    errorMessage: err
                })
            }
        );
    }

    render () {
        let welcomeBanner = null
        if (this.props.userName === '') {
            welcomeBanner = <h2> Welcome {this.state.userName} </h2>
        } else {
            welcomeBanner = <p> Sign in and click to get userProfile </p>
        }


        return (
            <div className="container border pt-2 mt-5">
                <h3> Demo of getting user profile </h3>
                {welcomeBanner}
                <button disabled={this.props.token === "" ? true: false} className={"btn " + (this.props.token === "" ? "btn-outline-secondary" :"btn-primary")} onClick={this.getUserProfile}> Get User Profile Information </button>
            </div>
        )
    }
}

export default UserProfile;