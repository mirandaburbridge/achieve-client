import React, { Component } from 'react';
import Container from "@material-ui/core/Container";
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import NewActionItems from './NewActionItems'

export interface NewGoalProps {
    token: any
}

export interface NewGoalState {
    dueDate: string,
    description: string
}

class NewGoal extends Component<NewGoalProps, NewGoalState> {
    constructor(props: NewGoalProps) {
        super(props);
        this.state = { dueDate: '', description: '' };
    }

    handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        fetch(`http://localhost:3000/goals/create`, {
            method: 'POST',
            body: JSON.stringify({
                goal: {
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
                    <TextField id="outlined-basic" label="Due Date" variant="outlined" />
                    <TextField id="outlined-basic" label="Description" variant="outlined" />
                    <Button onClick={(e) => this.handleSubmit(e)}>Submit</Button>
                </Container>
                <NewActionItems token={this.props.token} />
            </div>
        );
    }
}

export default NewGoal;