import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
// import Link from '@material-ui/core/Link';

export interface NavbarProps {

}

export interface NavbarState {
    anchorEl: any
}

class Navbar extends Component<NavbarProps, NavbarState> {
    constructor(props: NavbarProps) {
        super(props);
        this.state = { anchorEl: null };
    }

    handleClick = (event: any) => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
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
                    {/* <Link to='/goals'>
                        <MenuItem>Goals</MenuItem>
                    </Link> */}
                    <MenuItem onClick={this.handleClose}>Goals</MenuItem>

                    <MenuItem onClick={this.handleClose}>New Note</MenuItem>
                    <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                </Menu >
            </div >
        );
    }
}

export default Navbar;