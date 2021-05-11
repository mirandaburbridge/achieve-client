import React, { Component } from 'react';
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { UserResponse } from './UserInterface';

export interface UserDisplayProps {
    token: any
}

export interface UserDisplayState {
    users: UserResponse[],
    open: boolean
}

class UserDisplay extends Component<UserDisplayProps, UserDisplayState> {
    constructor(props: UserDisplayProps) {
        super(props);
        this.state = { users: [], open: false };
    }

    componentDidMount() {
        this.fetchUsers()
    }

    async fetchUsers() {
        const response = await fetch(`http://localhost:3000/user/display`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            }
        })
        const jsonified = await response.json()
        this.setState({
            users: jsonified.message
        })
        if (jsonified.error) return this.setState(jsonified.error);
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <Container>
                    <h4>Users</h4>
                    <Box border={1}>
                        {this.state.users.map((user: UserResponse, index: number) => {
                            console.log(user)
                            return (<Card variant='outlined'>
                                <CardContent>
                                    <Typography variant='body2' component='p' key={user.id}>{user.username}</Typography>
                                </CardContent>
                                <CardContent>
                                    <Typography variant='body2' component='p' key={user.id}>{user.isAdmin}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='small' onClick={this.handleOpen}>Edit</Button>
                                </CardActions>
                                <CardActions>
                                    <Button size='small' onClick={this.handleOpen}>Delete</Button>
                                </CardActions>
                            </Card>)
                        })}
                    </Box>
                </Container>
            </div>
        );
    }
}

export default UserDisplay;