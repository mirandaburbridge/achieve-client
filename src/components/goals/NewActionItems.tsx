import React, { Component } from 'react';
import Container from "@material-ui/core/Container";
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

export interface NewActionItemsProps {
    token: any
}

export interface NewActionItemsState {
    dueDate: string,
    description: string,
    token: any
}

class NewActionItems extends Component<NewActionItemsProps, NewActionItemsState> {
    constructor(props: NewActionItemsProps) {
        super(props);
        this.state = { dueDate: '', description: '', token: this.props.token };
    }

    handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        fetch(`http://localhost:3000/action/:goalId`, {
            method: 'POST',
            body: JSON.stringify({
                item: {
                    dueDate: this.state.dueDate,
                    description: this.state.description
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((response) => response.json())
            .then((data) => {
                this.setState({ dueDate: '', description: '' })
                if (data.error) return this.setState(data.error);
            })

    }

    render() {
        return (
            <div>
                <Container>
                    <h4>Action Item</h4>
                    <TextField id="outlined-basic" label="Due Date" variant="outlined" />
                    <TextField id="outlined-basic" label="Description" variant="outlined" />
                    <Button onClick={(e) => this.handleSubmit(e)}>Submit</Button>
                </Container>
            </div>
        );
    }
}

export default NewActionItems;