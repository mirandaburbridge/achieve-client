import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from "@material-ui/core/Container";

import NewGoal from "./NewGoal";

export default class Goals extends Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>
                <Container>
                    <ul>
                        //*list each goal
                    </ul>
                    //*link to NewGoal component
                    <Link to="/new" className="site-link">Create a new goal</Link>
                </Container>
            </div>
        )
    }
};