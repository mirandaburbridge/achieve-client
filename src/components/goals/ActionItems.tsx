import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Checkbox from '@material-ui/core/Checkbox';

export interface ActionItemsProps {

}

export interface ActionItemsState {
    items: string[],
    checked: boolean,
    token: any
}

class ActionItems extends Component<ActionItemsProps, ActionItemsState> {
    constructor(props: ActionItemsProps) {
        super(props);
        this.state = { items: [], checked: false, token: localStorage.getItem('sessionToken') };

        console.log(this.state.token)
    }

    componentDidMount() {
        this.fetchItems()
    }

    async fetchItems() {
        const response = await fetch(`http://localhost:3000/items`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.state.token
            })
        })
        const jsonified = await response.json()
        this.setState({
            items: jsonified.message
        })
        if (jsonified.error) return this.setState(jsonified.error);
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event) {
            event.preventDefault()
        }
        this.setState({ checked: true });
    };

    render() {
        return (
            <div>
                <Container>
                    <h4>Action Items</h4>
                    <Box border={1}>
                        <ul>
                            <li>
                                <Checkbox
                                    color="default"
                                    checked={this.state.checked}
                                    onChange={(event) => this.handleChange(event)}
                                />
                            Item 1</li>
                            {this.state.items.map((item) => {
                                <li>
                                    <Checkbox
                                        color="default"
                                        inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                                    />{item}</li>
                            })}
                        </ul>
                    </Box>
                </Container>
            </div>
        );
    }
}

export default ActionItems;