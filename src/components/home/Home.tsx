import React, { Component } from 'react';
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
// import Grid, { GridSpacing } from '@material-ui/core/Grid';

import ActionItems from '../goals/ActionItems';
import Notes from '../notes/Notes';

// const useStyles = makeStyles((theme: Theme) =>
//     createStyles({
//         root: {
//             flexGrow: 1,
//         },
//         paper: {
//             height: 140,
//             width: 100,
//         },
//         control: {
//             padding: theme.spacing(2),
//         },
//     }),
// );
// const[spacing, setSpacing] = useState<GridSpacing>(2);
// const classes = useStyles();

export interface HomeProps {
    token: any
}

export interface HomeState {

}

class Home extends Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);
        // this.state = { : };
    }
    render() {
        return (
            <div>
                {/* <Grid container spacing={2}>
                    <Grid item sm={6}> */}
                <ActionItems token={this.props.token} />
                {/* </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item sm={6}> */}
                <Notes token={this.props.token} />
                {/* </Grid>
                </Grid> */}
            </div>
        );
    }
}

export default Home;