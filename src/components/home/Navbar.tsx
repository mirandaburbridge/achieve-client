import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';
// import Typography from '@material-ui/core/Typography';

export default class Navbar extends Component {
    constructor(props: any) {
        super(props);
    }
    const[anchorEl, setAnchorEl] = React.useState<null | HTMLElement > (null);

const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
};

const handleClose = () => {
    setAnchorEl(null);
};

render() {
    return (
        <div>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Open Menu
      </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem>
                    <Link to="/goals" className="site-link">Goals</Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/notes" className="site-link">Notes</Link>
                </MenuItem>
                <MenuItem>Logout</MenuItem>

            </Menu>
        </div>
    );
}
}