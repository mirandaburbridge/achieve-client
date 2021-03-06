import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

export interface DeleteNoteProps {
    handleOpen: any,
    handleClose: any,
    open: boolean,
    token: any
}

export interface DeleteNoteState {

}

class DeleteNote extends React.Component<DeleteNoteProps, DeleteNoteState> {
    constructor(props: DeleteNoteProps) {
        super(props);
        // this.state = { : };
    }

    deleteNote(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        e.preventDefault();
        fetch(`https://achieveserver.herokuapp.com/notes/:noteID`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            }
        })
            .then((response) => response.json())
        this.props.handleClose();
    }

    render() {
        return (
            <div>
                <Dialog
                    open={this.props.open}
                    onClose={this.props.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Delete</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Are you sure you want to delete?
        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="outlined-basic" label="Note" variant="outlined"
                            fullWidth
                            onChange={(e) => this.setState({ description: e.target.value })}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.handleClose} color="primary">
                            Cancel
        </Button>
                        <Button onClick={(e) => this.deleteNote(e)} color="primary">
                            Submit
        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default DeleteNote;