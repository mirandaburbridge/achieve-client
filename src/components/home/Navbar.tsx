import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import NewNote from '../notes/NewNote';
import NewGoal from '../goals/NewGoal';

export interface NavbarProps {
    clearToken: any,
    token: any
}

export interface NavbarState {
    anchorEl: any,
    openNote: boolean,
    openGoal: boolean,
    token: any
}

class Navbar extends Component<NavbarProps, NavbarState> {
    constructor(props: NavbarProps) {
        super(props);
        this.state = { anchorEl: null, openNote: false, openGoal: false, token: this.props.token };
    }

    handleClick = (event: any) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    handleNoteOpen = () => {
        this.setState({ openNote: true });
    };

    handleNoteClose = () => {
        this.setState({ openNote: false });
    };

    handleGoalOpen = () => {
        this.setState({ openGoal: true });
    };

    handleGoalClose = () => {
        this.setState({ openGoal: false });
    };


    render() {
        const { anchorEl } = this.state;

        return (
            <div>
                <Button
                    aria-owns={anchorEl ? 'simple-menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    Menu
        </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >

                    <MenuItem onClick={this.handleGoalOpen}>New Goal</MenuItem>
                    <MenuItem onClick={this.handleNoteOpen}>New Note</MenuItem>
                    <MenuItem onClick={this.props.clearToken}>Logout</MenuItem>
                </Menu >
                <NewGoal handleGoalOpen={this.handleGoalOpen} handleGoalClose={this.handleGoalClose} open={this.state.openGoal} token={this.props.token} />
                <NewNote handleNoteOpen={this.handleNoteOpen} handleNoteClose={this.handleNoteClose} open={this.state.openNote} token={this.props.token} />
            </div >
        );
    }
}

export default Navbar;