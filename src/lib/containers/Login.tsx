import React from "react";
import * as SynapseClient from "../utils/SynapseClient"
import GoogleIcon from "../assets/GoogleIcon";
import ButtonContent from "../assets/ButtonContent";

type LoginState = { 
    username: string,
    password: string,
    email: string,
    isSignedIn: boolean,
    hasLoginInFailed: boolean,
    errorMessage: string,
    dissmissButtonClicked: boolean,
    showRegistration: boolean
};

type Props = {
    onTokenChange : ((val: {}) => void),
    token : string | undefined,
    theme : string,
    icon : boolean,
    buttonText : string,
    authProvider : string,
    redirectURL : string,
}
/**
 *  Demo of user session, show login screen and handling user login submission.
 *
 *  To support Google SSO in your portal, you must add your domain to the Authorized Redirect URIs for Synapse authentication.
 *  This can be done by contacting synapseInfo@sagebionetworks.org to form a collaboration.
 *  Synapse engineers must add your redirect URL in the Google API console found at https://console.cloud.google.com/ for this functionality to work.
 *
 * @class Login
 * @extends {React.Component}
 */
class Login extends React.Component<Props, LoginState> {
    /**
     * Creates a user session, maintaining credentials
     * @param {*} props
     * @memberof Login
     */
    constructor(props: Props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",
            isSignedIn: false,
            hasLoginInFailed: false,
            errorMessage: "",
            dissmissButtonClicked: false,
            showRegistration: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.getTokenView = this.getTokenView.bind(this);
        this.getLoginFailureView = this.getLoginFailureView.bind(this);
        this.getSignInStateView = this.getSignInStateView.bind(this);
        this.onSignOut = this.onSignOut.bind(this);
        this.onSignIn = this.onSignIn.bind(this);
    }
    /**
     * Updates internal state with the event that was triggered
     *
     * @param {*} event Form update
     */
    handleChange(event: React.FormEvent<HTMLInputElement>): void {
        const target = event.currentTarget;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value } as Pick<any, any>);
    }
    /**
     * Handle user login on click
     *
     * @param {*} clickEvent Userclick event
     */
    handleLogin(clickEvent: React.SyntheticEvent) {
        clickEvent.preventDefault(); // avoid page refresh
        SynapseClient.login(this.state.username, this.state.password)
            .then((data: any) => {
                this.props.onTokenChange({ token: data.sessionToken });
                this.setState({
                    isSignedIn: true,
                    hasLoginInFailed: false,
                    errorMessage: ""
                });
            })
            .catch((err: any) => {
                this.setState({
                    hasLoginInFailed: true,
                    errorMessage: err.reason,
                    isSignedIn: false
                });
            });
    }
    handleRegistration(event: React.SyntheticEvent) {
        event.preventDefault(); // avoid page refresh
    }
    /**
     * Shows user session token if they've signed in
     *
     * @returns View displaying user session on login, otherwise null.
     */
    getTokenView() : (JSX.Element | boolean) {
        if (this.state.isSignedIn && this.props.token !== "" && !this.state.hasLoginInFailed) {
            return <p> Your session token is {this.props.token} </p>;
        }
        return false
    }
    /**
     * Shows user login failure view on login failure
     *
     * @returns view to be displayed on user sign in error.
     */
    getLoginFailureView () : (JSX.Element | boolean) {
        if (this.state.hasLoginInFailed) {
            return (
                <div>
                    <small className="form-text text-danger"> {this.state.errorMessage} </small>
                    <div className="invalid-feedback" />
                </div>
            );
        }
        return false
    }
    /**
     * Show whether user is signed in or not, display banner on login success
     *
     * @returns View corresponding to whether the user is signed in, whether they've dismissed
     * sign in banner
     */
    getSignInStateView() : (JSX.Element | boolean) {
        if (!this.state.isSignedIn) {
            return (
                <p>
                    {" "}
                    You are currently{" "}
                    <strong>
                        {" "}
                        <i> not </i>{" "}
                    </strong>{" "}
                    signed in to Synpase{" "}
                </p>
            );
        } else if (!this.state.dissmissButtonClicked) {
            return (
                <div>
                    <p>
                        {" "}
                        You are currently{" "}
                        <strong>
                            {" "}
                            <i> signed in </i>{" "}
                        </strong>{" "}
                        to Synapse{" "}
                    </p>
                    <div className="bg-success" role="alert">
                        Synapse login successfull
                        <button
                            type="button"
                            className="close"
                            onClick={() => {
                                this.setState({ dissmissButtonClicked: true });
                            }}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
            );
        }
        return false
    }
    componentDidMount() {
        let code: URL | null | string = new URL(window.location.href);
        // in test environment the searchParams isn't defined
        if (code.searchParams && (code = code.searchParams.get("code"))) {
            SynapseClient.oAuthSessionRequest(this.props.authProvider, code, `${this.props.redirectURL}?provider=${this.props.authProvider}`)
                .then((synToken: any) => {
                    this.props.onTokenChange({ token: synToken.sessionToken });
                    this.setState({
                        isSignedIn: true,
                        hasLoginInFailed: false,
                        errorMessage: ""
                    });
                })
                .catch((err: any) => {
                    if (err.statusCode === 404) {
                        this.setState({
                            showRegistration: true
                        });
                    }
                    console.log("Error on sso sign in ", err);
                });
        }
    }
    onSignIn(event: React.SyntheticEvent) {
        event.preventDefault();
        SynapseClient.oAuthUrlRequest(this.props.authProvider, `${this.props.redirectURL}?provider=${this.props.authProvider}`)
            .then((data: any) => {
                let authUrl = data.authorizationUrl;
                window.location = authUrl; // ping the url
            })
            .catch((err: any) => {
                console.log("Error on oAuth url ", err);
            });
    }
    onSignOut(event: any) {
        event.preventDefault();
        this.props.onTokenChange({ token: "" });
        this.setState({
            isSignedIn: false,
            hasLoginInFailed: false,
            errorMessage: ""
        });
    }
    render() {
        const { theme, icon, buttonText } = this.props;
        const { showRegistration } = this.state;
        let googleTheme = theme === "dark" ? "SRC-google-button-dark-color" : "SRC-google-button-light-color";
        if (showRegistration) {
            return (
                <div id="loginPage" className="container SRC-syn-border SRC-syn-border-spacing">
                    <h3>Create Synapse Account</h3>
                    <p>
                        {" "}
                        Please enter your email address and we will send you the instructions on how to complete the registration process through <a href={"https://www.synapse.org/"}>Synapse</a>.{" "}
                    </p>
                    <form onSubmit={this.handleLogin}>
                        <div className="form-group">
                            <input autoComplete="email" placeholder="Email Address" className="form-control" id="exampleEmail" name="email" type="text" value={this.state.email} onChange={this.handleChange} />
                        </div>
                        <button onSubmit={this.handleRegistration} type="submit" className="btn btn-success">
                            Send Registration Info
                        </button>
                    </form>
                </div>
            );
        }
        return (
            <div id="loginPage" className="container SRC-syn-border SRC-syn-border-spacing">
                <form onSubmit={this.handleLogin}>
                    <div className="form-group">
                        <input autoComplete="email" placeholder="Username or Email Address" className="form-control" id="exampleEmail" name="username" type="text" value={this.state.username} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <input autoComplete="password" placeholder="Password" className="form-control" id="examplePassword" name="password" type="password" value={this.state.password} onChange={this.handleChange} />
                    </div>
                    {this.getLoginFailureView()}
                    <button onSubmit={this.handleLogin} type="submit" className="btn btn-primary m-1">
                        Sign in
                    </button>
                </form>
                <p>Or Sign in with Google</p>
                <form>
                    {!this.state.isSignedIn && (
                        <button onClick={this.onSignIn} className={`SRC-google-button ${googleTheme}`}>
                            <GoogleIcon key={1} active={true} />
                            <ButtonContent icon={icon} key={2}>
                                {buttonText}
                            </ButtonContent>
                        </button>
                    )}
                    {this.state.isSignedIn && (
                        <button onClick={this.onSignOut} className={`SRC-google-button ${googleTheme}`}>
                            <ButtonContent icon={icon} key={3}>
                                Sign out
                            </ButtonContent>
                        </button>
                    )}
                </form>
            </div>
        );
    }
}
export default Login;
