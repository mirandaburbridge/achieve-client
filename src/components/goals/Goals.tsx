import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from "@material-ui/core/Container";

export interface GoalsProps {

}

export interface GoalsState {
    url: string,
    goals: string[]
}

class Goals extends React.Component<GoalsProps, GoalsState> {
    constructor(props: GoalsProps) {
        super(props);
        this.state = { url: `http://localhost:3000/goals`, goals: [] };
    }

    componentDidMount() {
        this.fetchGoals()
    }

    async fetchGoals() {
        const response = await fetch(this.state.url)
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
                        {this.state.goals.map(goal = <li>{goal}</li>)}
                    </ul>
                    <Link to="/create" className="site-link">Create a new goal</Link>
                </Container>
            </div>
        );
    }
}

export default Goals;