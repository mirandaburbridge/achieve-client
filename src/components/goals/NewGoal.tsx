import React, { Component } from 'react';
import Container from "@material-ui/core/Container";
import TextField from '@material-ui/core/TextField';

export interface NewGoalProps {

}

export interface NewGoalState {
    url: string,
    goals: string
}

class NewGoal extends Component<NewGoalProps, NewGoalState> {
    constructor(props: NewGoalProps) {
        super(props);
        this.state = { url: `http://localhost:3000/goals`, goals: '' };
    }
    render() {
        return (
            <div>
                <Container>
                    <TextField id="outlined-basic" label="Goal Name" variant="outlined" />
                </Container>
            </div>
        );
    }
}

export default NewGoal;