import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from "@material-ui/core/Container";

export interface GoalsProps {
    token: any
}

export interface GoalsState {
    goals: string[]
}

class Goals extends Component<GoalsProps, GoalsState> {
    constructor(props: GoalsProps) {
        super(props);
        this.state = { goals: [] };
    }

    componentDidMount() {
        this.fetchGoals()
    }



    async fetchGoals() {
        const response = await fetch(`http://localhost:3000/goals`)
        const jsonified = await response.json()
        this.setState({
            goals: jsonified.message
        })
    }

    render() {
        return (
            <div>
                <Container>
                    <ul>
                        {this.state.goals.map((goal) =>
                            (<li>{goal}</li>))}
                    </ul>
                    <Link to="/create" className="site-link">Create a new goal</Link>
                </Container>
            </div>
        );
    }
}

export default Goals;