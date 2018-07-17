import React from "react";

/*
    Basic login form to demonstrate Synapse login API call and session token retrieval.
*/
class Login extends React.Component {
    
    constructor (props) {
        super(props)
        this.state =  {
            username: '',
            password: '',
            isSignedIn: false,
            token: '',
            hasLoginInFailed: false
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
            { [name]: value}
        );
    }

    handleLogin(event) {
        event.preventDefault()
        this.props.loginEndpoint(this.state.username, this.state.password).then(
            data => {
                this.setState({
                    token: data.sessionToken,
                    isSignedIn: true,
                    hasLoginInFailed: false
                })
            }
        ).catch(
            err => {
                console.log('Failed to login with error\n', err)
                this.setState({
                    hasLoginInFailed: true
                })
            }
        );
    }

    showToken() {
        if (this.state.isSignedIn && this.state.token !== '' && !this.state.hasLoginInFailed) {
            return (<p> Your session token is {this.state.token} </p>)
        }
    }

    showLoginFailure() {
        if (this.state.hasLoginInFailed) {
            return (
                <div>
                    <small className="form-text text-danger">Error: Not a invalid username/password </small>
                    <div className="invalid-feedback" />
                </div>
            )
        }
    }

    showSignInState() {
        if (this.state.isSignedIn) {
            return (
                <p> You are currently <i> not </i> signed in to Synpase </p>
            )
        } else {
            return (
                <p> You are currently <i> signed in. </i> to Synapse </p>
            )
        }
    }

    render () {
        return (
            <div className="container border">
                <p className="text-left"> Sample Login with session token printed to screen </p>
                <p> You are currently <i> {this.state.isSignedIn ? '' : 'not' } </i> {} signed in </p>
                {this.showToken()}
                <form onSubmit={this.handleLogin}>
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
                    <button onSubmit={this.handleLogin} type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Login;