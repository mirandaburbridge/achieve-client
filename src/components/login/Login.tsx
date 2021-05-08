import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress, Typography } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//     root: {
//         "& .MuiTextField-root": {
//             margin: theme.spacing(1),
//             width: "25ch",
//         },
//     },
// }));
// const classes = useStyles();

export interface LoginProps {
    updateToken: any
}

export interface LoginState {
    username: string,
    password: string,
    loading: boolean,
    error: string
}

class Login extends Component<LoginProps, LoginState> {
    constructor(props: LoginProps) {
        super(props);
        this.state = { username: '', password: '', loading: false, error: '' };
    }

    handleSubmit = (e) => {
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