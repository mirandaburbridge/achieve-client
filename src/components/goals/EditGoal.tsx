import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { GoalResponse } from './GoalsInterface';

export interface EditGoalProps {
    token: any,
    handleEditOpen: any,
    handleEditClose: any,
    openEdit: boolean
}

export interface EditGoalState {
    dueDate: string,
    description: string,
    goals: GoalResponse[]
}

class EditGoal extends Component<EditGoalProps, EditGoalState> {
    constructor(props: EditGoalProps) {
        super(props);
        this.state = { dueDate: '', description: '', goals: [] }
    }

    editGoal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        fetch(`http://localhost:3000/goals/:goalId`, {
            method: 'PUT',
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
            <Dialog
                open={this.props.openEdit}
                onClose={this.props.handleEditClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Edit</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Edit your goal
        </DialogContentText>
                    <TextField id="outlined-basic" label="Due Date" variant="outlined" />
                    <TextField id="outlined-basic" label="Description" variant="outlined" />
                    <Button onClick={(e) => this.editGoal(e)}>Submit</Button>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.props.handleEditClose} color="primary">
                        Cancel
        </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default EditGoal;