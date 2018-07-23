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
                console.log('data is ', data)
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
        if (this.state.userName !== '') {
            welcomeBanner = <h2> WELCOME BACK, {this.state.userName} </h2>
        } else {
            welcomeBanner = <p> <a href="#top"> Sign in </a> and click to get userProfile </p>
        }


        return (
            <div className="container border pt-2 mt-5">
                <h3> Demo of getting user profile </h3>
                <button disabled={this.props.token === "" ? true: false} className={"btn mb-1 " + (this.props.token === "" ? "btn-outline-secondary" :"btn-primary")} onClick={this.getUserProfile}> Get User Profile Information </button>
                {welcomeBanner}
            </div>
        )
    }
}

export default UserProfile;