import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, CircularProgress } from "@material-ui/core";

// import { BASEURL } from "../../context/base-url-context";

// let username: string;
// let password: string;




class Signup extends Component {
    constructor(props: any) {
        super(props);
    }

    const[username: string, setUsername: string] = useState("");
    const[password: string, setPassword: string] = useState("");
    // const[loading, setLoading] = useState(false);
    // const[error, setError] = useState("");
    // const classes = useStyles();

    handleSubmit(event) {
        // event.preventDefault();
        // setLoading(true);
        fetch(`http://localhost:3000/user/create`, {
            method: "POST",
            body: JSON.stringify({
                user: { username: username, password: password }
            }),
            headers: new Headers({
                "Content-Type": "application/json",
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                setLoading(false);
                if (data.error) return setError(data.error);
                this.props.updateToken(data.sessionToken);
            });
    }

    render() {
        return (
            <div>
                <Container>
                    <Typography variant="h4">Sign-Up</Typography>
                    <form noValidate onSubmit={this.handleSubmit}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Required"
                            defaultValue="username"
                            variant="outlined"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            autoComplete="current-password"
                            variant="outlined"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                        <Button variant="contained" color="primary" type="submit">
                            {loading ? (
                                <CircularProgress size={25} color="inherit" />
                            ) : (
                                "SignUp"
                            )}
                        </Button>
                    </form>
                    {error ? <Typography color="secondary">{error}</Typography> : null}
                </Container>
            </div>
        )
    }
};

export default Signup;