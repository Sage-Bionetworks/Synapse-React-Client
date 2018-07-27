import React from "react";

/**
 *  Demo of user session, show login screen and handling user login submission.
 *
 * @class Login
 * @extends {React.Component}
 */
class Login extends React.Component {

    /**
     * Creates a user session, maintaining credentials
     * @param {*} props
     * @memberof Login
     */
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            isSignedIn: false,
            hasLoginInFailed: false,
            errorMessage: '',
            dissmissButtonClicked: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.getTokenView = this.getTokenView.bind(this)
        this.getLoginFailureView = this.getLoginFailureView.bind(this)
        this.getSignInStateView = this.getSignInStateView.bind(this)
    }

    /**
     * Updates internal state with the event that was triggered
     *
     * @param {*} event Form update
     */
    handleChange(event) {
        const target = event.target
        const name = target.name
        const value = target.value
        this.setState(
            { [name]: value }
        );
    }

    /**
     * Handle user login on click
     *
     * @param {*} clickEvent Userclick event
     */
    handleLogin(clickEvent) {
        clickEvent.preventDefault()  // avoid page refresh
        this.props.loginEndpoint(this.state.username, this.state.password).then(
            data => {
                if (data.reason) {
                    // error in callback
                    throw new Error(data.reason)
                } else {
                    this.props.onTokenChange({ token: data.sessionToken })
                    this.setState({
                        isSignedIn: true,
                        hasLoginInFailed: false
                    })
                }
            }
        ).catch(
            err => {
                this.setState({
                    hasLoginInFailed: true,
                    errorMessage: err.reason
                })
            }
        )
    }

    /**
     * Shows user session token if they've signed in
     *
     * @returns View displaying user session on login, otherwise null.
     */
    getTokenView() {
        if (this.state.isSignedIn && this.props.token !== '' && !this.state.hasLoginInFailed) {
            return (<p> Your session token is {this.props.token} </p>)
        }
    }

    /**
     * Shows user login failure view on login failure
     *
     * @returns view to be displayed on user sign in error.
     */
    getLoginFailureView() {
        if (this.state.hasLoginInFailed) {
            return (
                <div>
                    <small className="form-text text-danger">  {this.state.errorMessage} </small>
                    <div className="invalid-feedback" />
                </div>
            )
        }
    }

    /**
     * Show whether user is signed in or not, display banner on login success
     *
     * @returns View corresponding to whether the user is signed in, whether they've dismissed
     * sign in banner
     */
    getSignInStateView() {
        if (!this.state.isSignedIn) {
            return (
                <p> You are currently <strong> <i> not </i> </strong> signed in to Synpase </p>
            )
        } else if (!this.state.dissmissButtonClicked){
            return (
                <div>
                    <p> You are currently <strong> <i> signed in </i> </strong> to Synapse </p>
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                        Synapse login successfull
                        <button type="button" className="close" onClick={() => {this.setState({dissmissButtonClicked: true})}}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div id="loginPage" className="container border">
                <h3 className="text-left"> Demo login with session token printed to screen</h3>
                {this.getSignInStateView()}
                {this.getTokenView()}
                <form autoComplete="on" onSubmit={this.handleLogin}>
                    <div className="form-group">
                        <label className="text-left" htmlFor="exampleEmail">
                            Synapse Email/Username:
                        </label>
                        <input placeholder="Enter email" className="form-control" id="exampleEmail" name="username" type="email" value={this.state.username} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="examplePassword">
                            Password:
                        </label>
                        <input placeholder="Enter password" className="form-control" id="examplePassword" name="password" type="password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    {this.getLoginFailureView()}
                    <button onSubmit={this.handleLogin} type="submit" className="btn btn-primary m-1">Submit</button>
                </form>
            </div>
        )
    }
}

export default Login;