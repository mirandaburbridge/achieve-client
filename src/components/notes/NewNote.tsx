import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

export interface NewNoteProps {
    handleNoteOpen: any,
    handleNoteClose: any,
    open: boolean,
    token: any
}

export interface NewNoteState {
    description: string
}

class NewNote extends Component<NewNoteProps, NewNoteState> {
    constructor(props: NewNoteProps) {
        super(props);
        this.state = { description: '' };
    }

    handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        fetch(`http://localhost:3000/notes/create`, {
            method: 'POST',
            body: JSON.stringify({
                noteEntry: {
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
                this.setState({ description: '' })
                if (data.error) return this.setState(data.error);
                this.props.handleNoteClose();
            })

    }

    render() {
        return (
            <div>
                <Dialog
                    open={this.props.open}
                    onClose={this.props.handleNoteClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">New Note</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Make a new note
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
                            Close
            </Button>
                        <Button onClick={(e) => this.handleSubmit(e)} color="primary">
                            Submit
            </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default NewNote;