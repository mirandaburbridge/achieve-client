import React, { Component } from 'react';
import Container from "@material-ui/core/Container";
import TextField from '@material-ui/core/TextField';

export interface NewNoteProps {

}

export interface NewNoteState {
    url: string,
    notes: string
}

class NewNote extends Component<NewNoteProps, NewNoteState> {
    constructor(props: NewNoteProps) {
        super(props);
        this.state = { url: `http://localhost:3000/notes`, notes: '' };
    }
    render() {
        return (
            <Container>
                <TextField id="outlined-basic" label="Note" variant="outlined" />
            </Container>
        );
    }
}

export default NewNote;