import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import NewActionItems from './NewActionItems';

export interface NewGoalProps {
    handleGoalOpen: any,
    handleGoalClose: any,
    open: boolean,
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
        fetch(`https://achieveserver.herokuapp.com/goals/create`, {
            method: 'POST',
            body: JSON.stringify({
                goal: {
                    dueDate: this.state.dueDate,
                    description: this.state.description
                }
            }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            }
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
                <Dialog
                    open={this.props.open}
                    onClose={this.props.handleGoalClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">New Goal</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Make a new goal
            </DialogContentText>
                        <TextField id="outlined-basic" label="Due Date" variant="outlined" />
                        <TextField id="outlined-basic" label="Description" variant="outlined" />
                        <Button onClick={(e) => this.handleSubmit(e)}>Submit</Button>
                        <NewActionItems token={this.props.token} />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.handleGoalClose} color="primary">
                            Done
            </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default NewGoal;