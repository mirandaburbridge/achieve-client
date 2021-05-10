import React, { Component } from 'react';
import Container from "@material-ui/core/Container";
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';

export interface EditGoalProps {
    token: any
}

export interface EditGoalState {
    dueDate: string,
    description: string
}

class EditGoal extends Component<EditGoalProps, EditGoalState> {
    constructor(props: EditGoalProps) {
        super(props);
        this.state = { dueDate: '', description: '' };
    }

    editGoal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        fetch(`http://localhost:3000/goals/:goalID`, {
            method: 'PUT',
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
            <Container>
                <TextField id="outlined-basic" label="Due Date" variant="outlined" />
                <TextField id="outlined-basic" label="Description" variant="outlined" />
                <Button onClick={(e) => this.editGoal(e)}>Submit</Button>
            </Container>
        );
    }
}

export default EditGoal;