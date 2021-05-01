import React, { Component } from 'react';
import Container from "@material-ui/core/Container";
import TextField from '@material-ui/core/TextField';

export default class NewGoal extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <Container>
                    <TextField id="outlined-basic" label="Goal Name" variant="outlined" />
                </Container>
            </div>
        )
    }
};