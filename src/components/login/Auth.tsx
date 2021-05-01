import React, { Component, useState } from 'react'

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Signup from './Signup'
import Login from './Login'

class Auth extends Component {
    constructor(props: any) {
        super(props)
    }

    const[authComp: any, setAuthComp: any] = useState(false);
    const onClick = () => setAuthComp(!authComp);

    render() {
        return (
            <div className="auth-container">
                <Grid>
                    {authComp ? (
                        <Signup updateToken={props.updateToken} />
                    ) : (
                        <Login updateToken={props.updateToken} />
                    )}
                    {authComp ? (
                        <Button color="primary" onClick={this.onClick}>
                            Already have an account? Login.
                        </Button>
                    ) : (
                        <Button color="primary" onClick={this.onClick}>
                            Don't have an account yet? Sign up.
                        </Button>
                    )}
                </Grid>
            </div>
        )
    }
}

export default Auth;