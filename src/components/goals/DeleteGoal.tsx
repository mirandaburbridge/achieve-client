import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

export interface DeleteGoalProps {
    handleDeleteOpen: any,
    handleDeleteClose: any,
    openDelete: boolean,
    token: any
}

export interface DeleteGoalState {

}

class DeleteGoal extends Component<DeleteGoalProps, DeleteGoalState> {
    constructor(props: DeleteGoalProps) {
        super(props);
        // this.state = { :  };
    }

    deleteGoal(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        fetch(`https://achieveserver.herokuapp.com/goals/:noteID`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            }
        })
            .then((response) => response.json())
        this.props.handleDeleteClose();
    }

    render() {
        return (
            <div>
                <Dialog
                    open={this.props.openDelete}
                    onClose={this.props.handleDeleteClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Delete</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Are you sure you want to delete?
        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.handleDeleteClose} color="primary">
                            Cancel
        </Button>
                        <Button onClick={(e) => this.deleteGoal(e)} color="primary">
                            Submit
        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default DeleteGoal;