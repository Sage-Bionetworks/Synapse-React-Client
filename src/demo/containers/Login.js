import React from "react";

/*
    Basic login form to demonstrate Synapse login API call and session token retrieval.
*/
class Login extends React.Component {

    /*
        Records user credentials for login information,
        binds listeners to handle input changes accordingly.
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
        this.showToken = this.showToken.bind(this)
        this.showLoginFailure = this.showLoginFailure.bind(this)
    }

    handleChange(event) {
        const target = event.target
        const name = target.name
        const value = target.value
        this.setState(
            { [name]: value }
        );
    }

    handleLogin(event) {
        event.preventDefault()
        this.props.loginEndpoint(this.state.username, this.state.password).then(
            data => {
                this.props.onTokenChange({ token: data.sessionToken })
                this.setState({
                    isSignedIn: true,
                    hasLoginInFailed: false
                })
            }
        ).catch(
            err => {
                this.setState({
                    hasLoginInFailed: true,
                    errorMessage: 'Invalid username/password combination'
                })
            }
        );
    }

    showToken() {
        if (this.state.isSignedIn && this.props.token !== '' && !this.state.hasLoginInFailed) {
            return (<p> Your session token is {this.props.token} </p>)
        }
    }

    showLoginFailure() {
        if (this.state.hasLoginInFailed) {
            return (
                <div>
                    <small className="form-text text-danger">  {this.state.errorMessage} </small>
                    <div className="invalid-feedback" />
                </div>
            )
        }
    }

    showSignInState() {
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

    /*
        Basic login form with conditional rendering to show if user is logged in, their
        session token, and then an error message if the login failed.
    */
    render() {
        return (
            <div id="loginPage" className="container border">
                <h3 className="text-left"> Demo login with session token printed to screen</h3>
                {this.showSignInState()}
                {this.showToken()}
                
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
                    {this.showLoginFailure()}
                    <button onSubmit={this.handleLogin} type="submit" className="btn btn-primary m-1">Submit</button>
                </form>
            </div>
        )
    }
}

export default Login;