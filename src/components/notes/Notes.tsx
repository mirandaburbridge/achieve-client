import React, { Component } from 'react';
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export interface NotesProps {
    token: any
}

export interface NotesState {
    notes: string[]
}

class Notes extends Component<NotesProps, NotesState> {
    constructor(props: NotesProps) {
        super(props);
        this.state = { notes: [] };
    }

    componentDidMount() {
        this.fetchNotes()
    }

    async fetchNotes() {
        const response = await fetch(`http://localhost:3000/notes`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
        const jsonified = await response.json()
        this.setState({
            notes: jsonified.message
        })
    }

    render() {
        return (
            <div>
                <Container>
                    <h4>Note</h4>
                    <Box border={1}>
                        {this.state.notes.map((note) => {
                            <Card variant='outlined'>
                                <CardContent>
                                    <Typography variant='body2' component='p'>{note}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='small' onClick={this.deleteNote}>Delete</Button>
                                </CardActions>
                            </Card>
                        })}
                        <Card variant='outlined'>
                            <CardContent>
                                <Typography variant='body2' component='p'>Filler note</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size='small' onClick={this.deleteNote}>Delete</Button>
                            </CardActions>
                        </Card>
                    </Box>
                </Container>
            </div>
        );
    }
}

export default Notes;