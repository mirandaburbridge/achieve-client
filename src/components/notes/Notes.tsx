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
    url: string,
    notes: string[]
}

class Notes extends Component<NotesProps, NotesState> {
    constructor(props: NotesProps) {
        super(props);
        this.state = { url: `http://localhost:3000/notes`, notes: [] };
    }

    componentDidMount() {
        this.fetchNotes()
    }

    async fetchNotes() {
        const response = await fetch(this.state.url)
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
                        {/* {this.state.notes.map((note) => {
                            <Card variant='outlined'>
                                <CardContent>
                                    <Typography variant='body2' component='p'>{note}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='small'>Delete</Button>
                                </CardActions>
                            </Card>
                        })} */}

                        <Card variant='outlined'>
                            <CardContent>
                                <Typography variant='body2' component='p'>Filler note</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size='small'>Delete</Button>
                            </CardActions>
                        </Card>
                    </Box>
                </Container>
            </div>
        );
    }
}

export default Notes;