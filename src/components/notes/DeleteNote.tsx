import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

export interface DeleteNoteProps {

}

export interface DeleteNoteState {

}

class DeleteNote extends React.Component<DeleteNoteProps, DeleteNoteState> {
    constructor(props: DeleteNoteProps) {
        super(props);
        this.state = { : };
    }

    deleteNote() {
        const response = await fetch(`http://localhost:3000/notes`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.state.token
            })
        })
        const jsonified = await response.json()
        this.setState({
            items: jsonified.message
        })
        if (jsonified.error) return this.setState(jsonified.error);
    }

    render() {
        return (
            <div>
                <Dialog
                    open={this.props.open}
                    onClose={this.props.handleNoteClose}
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
                        <Button onClick={this.props.handleNoteClose} color="primary">
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