import React, { Component } from 'react'

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Signup from './Signup'
import Login from './Login'

export interface AuthProps {
    token: string
}

export interface AuthState {
    hasAccount: boolean
}

class Auth extends Component<AuthProps, AuthState> {
    constructor(props: AuthProps) {
        super(props)
        this.state = { hasAccount: false };
    }

    toggle = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (event) {
            event.preventDefault()
        }
        this.state.hasAccount ? this.setState({ hasAccount: false }) :
            this.setState({ hasAccount: true })
    }

    render() {
        return (
            <div className="auth-container">
                <Grid>
                    {this.state.hasAccount ? (
                        <Login updateToken={this.props.token} />
                    ) : (
                        <Signup updateToken={this.props.token} />
                    )}
                    <Button color="primary" onClick={(event) => this.toggle(event)}>
                        {this.state.hasAccount ? 'Already have an account? Login.' : "Don't have an account yet? Sign up."}
                    </Button>
                </Grid>
            </div>
        )
    }
}

export default Auth;