import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { UserResponse } from './UserInterface';

export interface EditUserProps {
    token: any
}

export interface EditUserState {
    users: UserResponse[],
    username: string,
    isAdmin: boolean
}

class EditUser extends Component<EditUserProps, EditUserState> {
    constructor(props: EditUserProps) {
        super(props);
        this.state = { users: [], username: '', isAdmin: false };
    }

    editUser = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        fetch(`https://achieveserver.herokuapp.com/user/:userId`, {
            method: 'PUT',
            body: JSON.stringify({
                user: {
                    username: this.state.username,
                    isAdmin: this.state.isAdmin
                }
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            }
        })
            .then((response) => response.json())
            .then((data) => {
                this.setState({ username: '', isAdmin: true })
                if (data.error) return this.setState(data.error);
            })

    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
        this.setState({ isAdmin: true });
    };

    render() {
        return (
            <FormGroup>
                <TextField id="outlined-basic" label="username" variant="outlined" />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={this.state.isAdmin}
                            onChange={this.handleChange}
                            value="isAdmin" />
                    }
                    label="isAdmin?"
                />
                <Button onClick={(e) => this.editUser(e)}>Submit</Button>
            </FormGroup>
        );
    }
}

export default EditUser;