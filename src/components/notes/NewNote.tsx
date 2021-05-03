import React, { Component } from 'react';
import Container from "@material-ui/core/Container";
import TextField from '@material-ui/core/TextField';

export interface NewNoteProps {

}

export interface NewNoteState {

}

class NewNote extends Component<NewNoteProps, NewNoteState> {
    constructor(props: NewNoteProps) {
        super(props);
        this.state = { : };
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