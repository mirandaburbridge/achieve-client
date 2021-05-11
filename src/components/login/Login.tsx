import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress, Typography } from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';


export interface LoginProps {
    updateToken: any
}

export interface LoginState {
    username: string,
    password: string,
    loading: boolean,
    error: string,
    isAdmin: boolean
}

class Login extends Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
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

    handleCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event) {
            event.preventDefault()
        }
        this.setState({ isAdmin: true });
    };

    handleSubmit = (e: any) => {
        this.setState({ loading: true });
        e.preventDefault();
        fetch(`http://localhost:3000/user/login`, {
            method: "POST",
            body: JSON.stringify({
                user: { username: this.state.username, password: this.state.password },
            }),
            headers: new Headers({
                "Content-Type": "application/json",
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                this.setState({ loading: false });
                if (data.error) return this.setState(data.error);
                this.props.updateToken(data.sessionToken, data.user.id);
            })
            .catch((err) => this.setState({ loading: false }));
    };

    render() {
        return (
            <div>
                <Container>
                    <Typography variant="h4">Login</Typography>
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
                        <Checkbox
                            color="default"
                            checked={false}
                            onChange={this.handleCheck}
                            value='Admin'
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

export default Login;