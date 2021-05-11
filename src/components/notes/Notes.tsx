import React, { Component } from 'react';
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteNote from './DeleteNote';
import { NoteResponse } from './NoteInterface';

export interface NotesProps {
    token: any
}

export interface NotesState {
    notes: NoteResponse[],
    // notes: string[],
    open: boolean
}

class Notes extends Component<NotesProps, NotesState> {
    constructor(props: NotesProps) {
        super(props);
        this.state = { notes: [], open: false };
    }

    componentDidMount() {
        this.fetchNotes()
    }

    fetchNotes = () => {
        fetch(`https://achieveserver.herokuapp.com/notes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            }
        })
            .then((res: any) => res.json())
            .then((json) => {
                console.log(json)
                this.setState({ notes: json.notes })
                console.log(this.state.notes)
            })
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <Container>
                    <h4>Note</h4>
                    <Box border={1}>
                        {this.state.notes.map((note: NoteResponse, index: number) => {
                            console.log(note)
                            return (<Card variant='outlined'>
                                <CardContent>
                                    <Typography variant='body2' component='p' key={note.id}>{note.description}</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size='small' onClick={this.handleOpen}>Delete</Button>
                                </CardActions>
                            </Card>)
                        })}
                    </Box>
                </Container>
                <DeleteNote handleOpen={this.handleOpen} handleClose={this.handleClose} open={this.state.open} token={this.props.token} />
            </div>
        );
    }
}

export default Notes;