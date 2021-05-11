import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
// import Grid, { GridSpacing } from '@material-ui/core/Grid';

import ActionItems from '../goals/ActionItems';
import Notes from '../notes/Notes';
import Goals from '../goals/Goals';
import UserDisplay from '../admin/UserDisplay';

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
    isAdmin: boolean
}

class Home extends Component<HomeProps, HomeState> {
    constructor(props: HomeProps) {
        super(props);
        this.state = { isAdmin: false };
        console.log(this.props.token);

    }
    render() {
        return (
            this.state.isAdmin === false ? (
                <Router>
                    <Switch>
                        <div>
                            <ActionItems token={this.props.token} />
                            <Goals token={this.props.token} />
                            <Notes token={this.props.token} />
                        </div>
                    </Switch>
                </Router>
            ) : (
                <UserDisplay token={this.props.token} />
            )
        );
    }
}

export default Home;