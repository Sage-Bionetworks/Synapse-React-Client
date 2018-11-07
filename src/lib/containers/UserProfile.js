// FILE NOT EXPORTED - DEMO ONLY
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
                    userName: data.userName,
                    errorMessage: ""
                })
            }
        ).catch(
            err => {
                this.setState({
                    hasLoginInFailed: true,
                    errorMessage: err.reason
                })
            }
        );
    }

    render () {
        let welcomeBanner = null
        if (this.state.userName !== '') {
            welcomeBanner = <h2> WELCOME BACK, {this.state.userName} </h2>
        } else {
            welcomeBanner = <p> <a href="#top"> Sign in </a> and click to get userProfile </p>
        }


        return (
            <div className="container SRC-syn-border SRC-syn-border-spacing">
                <h3> Demo of getting user profile </h3>
                <button disabled={this.props.token === "" ? true: false} className={"btn mb-1 btn-primary"} onClick={this.getUserProfile}> Get User Profile Information </button>
                {welcomeBanner}
                {this.state.errorMessage}
            </div>
        )
    }
}

export default UserProfile;