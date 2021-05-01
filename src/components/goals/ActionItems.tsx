import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Goals from "./Goals";

export default class ActionItems extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <Container>
                    <h4>Action Items</h4>
                    <Box border={1}>
                        <ul>
                            //*list each action item
                        </ul>
                    </Box>
                </Container>
            </div>
        )
    }
};