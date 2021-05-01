import React, { Component, useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';

import ActionItems from '../goals/ActionItems';
import Notes from '../notes/Notes';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            height: 140,
            width: 100,
        },
        control: {
            padding: theme.spacing(2),
        },
    }),
);

export default class Home extends Component {
    constructor(props: any) {
        super(props);
    }
    // const[spacing, setSpacing] = useState<GridSpacing>(2);
    // const classes = useStyles();

    render() {
        return (
            <div>
                <Grid container spacing={2}>
                    <Grid item sm={6}>
                        <ActionItems />
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item sm={6}>
                        <Notes />
                    </Grid>
                </Grid>
            </div>
        )
    }
};