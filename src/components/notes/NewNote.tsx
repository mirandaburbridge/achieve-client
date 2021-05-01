import React, { Component } from 'react';
import Container from "@material-ui/core/Container";
import TextField from '@material-ui/core/TextField';

export default class NewNote extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <Container>
                    <TextField id="outlined-basic" label="Note" variant="outlined" />
                </Container>
            </div>
        )
    }
};