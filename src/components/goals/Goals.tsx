import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { GoalResponse } from './GoalsInterface';
import EditGoal from './EditGoal';
import DeleteGoal from './DeleteGoal';

export interface GoalsProps {
    token: any
}

export interface GoalsState {
    goals: GoalResponse[],
    openEdit: boolean,
    openDelete: boolean
}

class Goals extends Component<GoalsProps, GoalsState> {
    constructor(props: GoalsProps) {
        super(props);
        this.state = { goals: [], openEdit: false, openDelete: false };
    }

    componentDidMount() {
        this.fetchGoals()
    }



    fetchGoals = () => {
        fetch(`http://localhost:3000/goals/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            }
        })
            .then((res: any) => res.json())
            .then((json) => {
                console.log(json)
                this.setState({ goals: json.goals })
                console.log(this.state.goals)
            })
    }

    handleEditOpen = () => {
        this.setState({ openEdit: true });
    };

    handleEditClose = () => {
        this.setState({ openEdit: false });
    };

    handleDeleteOpen = () => {
        this.setState({ openDelete: true });
    };

    handleDeleteClose = () => {
        this.setState({ openDelete: false });
    };

    render() {
        return (
            <div>
                <Container>
                    <h4>Goals</h4>
                    <Box border={1}>
                        {this.state.goals.map((goal: GoalResponse, index: number) => {
                            console.log(goal)
                            return (<Card variant='outlined'>
                                <CardContent>
                                    <Typography variant='body2' component='p' key={goal.id}>{goal.description}</Typography>
                                </CardContent>
                                <CardContent>
                                    <Typography variant='body2' component='p' key={goal.id}>{goal.dueDate}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='small' onClick={this.handleEditOpen}>Edit</Button>
                                </CardActions>
                                <CardActions>
                                    <Button size='small' onClick={this.handleDeleteOpen}>Delete</Button>
                                </CardActions>
                            </Card>)
                        })}
                    </Box>
                    <EditGoal handleEditOpen={this.handleEditOpen} handleEditClose={this.handleEditClose} openEdit={this.state.openEdit} token={this.props.token} />
                    <DeleteGoal handleDeleteOpen={this.handleDeleteOpen} handleDeleteClose={this.handleDeleteClose} openDelete={this.state.openDelete} token={this.props.token} />
                </Container>
            </div>
        );
    }
}

export default Goals;