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

}

export interface NotesState {

}

class Notes extends Component<NotesProps, NotesState> {
    constructor(props: NotesProps) {
        super(props);
        this.state = { : };
    }
    render() {
        return (
            <div>
                <Container>
                    <h4>Note</h4>
                    <Box border={1}>
                        <Card variant='outlined'>
                            <CardContent>
                                <Typography variant='body2' component='p'>Filler note</Typography>
                            </CardContent>
                            <CardActions>
                                <Button size='small'>Delete</Button>
                            </CardActions>
                        </Card>
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