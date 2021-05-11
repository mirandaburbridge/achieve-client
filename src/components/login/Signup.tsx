import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, CircularProgress } from "@material-ui/core";



export interface SignupProps {
    updateToken: any
}

export interface SignupState {
    username: string,
    password: string,
    loading: boolean,
    error: string,
    isAdmin: boolean
}

class Signup extends Component<SignupProps, SignupState> {
    constructor(props: SignupProps) {
        super(props);
        this.state = { username: '', password: '', loading: false, error: '', isAdmin: false };
    }

    useStyles = makeStyles((theme) => ({
        root: {
            "& .MuiTextField-root": {
                margin: theme.spacing(1),
                width: "25ch",
            },
        },
    }));

    handleSubmit = (e: any) => {
        this.setState({ loading: true });
        e.preventDefault();
        fetch(`https://achieveserver.herokuapp.com/user/create`, {
            method: "POST",
            body: JSON.stringify({
                user: { username: this.state.username, password: this.state.password }
            }),
            headers: new Headers({
                "Content-Type": "application/json",
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                this.setState({ loading: false });
                if (data.error) return this.setState(data.error);
                this.props.updateToken(data.sessionToken);
            })
            .catch((err) => this.setState({ loading: false }));
    }

    render() {
        return (
            <div>
                <Container>
                    <Typography variant="h4">Sign Up</Typography>
                    <form noValidate onSubmit={this.handleSubmit}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="username"
                            variant="outlined"
                            onChange={(e) => this.setState({ username: e.target.value })}
                            value={this.state.username}
                        />

                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="outlined"
                            onChange={(e) => this.setState({ password: e.target.value })}
                            value={this.state.password}
                        />
                        <Button variant="contained" color="primary" type="submit">
                            {this.state.loading ? <CircularProgress size={25} color="inherit" /> : "Login"}
                        </Button>
                    </form>
                    {this.state.error ? <Typography color="secondary">{this.state.error}</Typography> : null}
                </Container>
            </div>
        );
    }
}

export default Signup;