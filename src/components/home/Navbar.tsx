import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import NewNote from '../notes/NewNote';

export interface NavbarProps {
    clearToken: any,
    token: any
}

export interface NavbarState {
    anchorEl: any,
    open: boolean
}

class Navbar extends Component<NavbarProps, NavbarState> {
    constructor(props: NavbarProps) {
        super(props);
        this.state = { anchorEl: null, open: false };
    }

    handleClick = (event: any) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    handleNoteOpen = () => {
        this.setState({ open: true });
    };

    handleNoteClose = () => {
        this.setState({ open: false });
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
                    Open Menu
        </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleClose}
                >

                    <MenuItem><Link to="/goals">Goals</Link></MenuItem>
                    <MenuItem onClick={this.handleNoteOpen}>New Note</MenuItem>
                    <MenuItem onClick={this.props.clearToken}>Logout</MenuItem>
                </Menu >
                <NewNote handleNoteOpen={this.handleNoteOpen} handleNoteClose={this.handleNoteClose} open={this.state.open} token={this.props.token} />
            </div >
        );
    }
}

export default Navbar;