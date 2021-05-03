import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Checkbox from '@material-ui/core/Checkbox';

export interface ActionItemsProps {

}

export interface ActionItemsState {
    url: string,
    items: string[],
    checked: boolean
}

class ActionItems extends Component<ActionItemsProps, ActionItemsState> {
    constructor(props: ActionItemsProps) {
        super(props);
        this.state = { url: `http://localhost:3000/goals`, items: [], checked: false };
    }

    componentDidMount() {
        this.fetchItems()
    }

    async fetchItems() {
        const response = await fetch(this.state.url)
        const jsonified = await response.json()
        this.setState({
            items: jsonified.message
        })
    }

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setChecked(event.target.checked);
    // };

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
                                    inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                                />
                            Item 1</li>
                            {this.state.items.map(item = <li>
                                <Checkbox
                                    color="default"
                                    inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                                />{item}</li>)}
                        </ul>
                    </Box>
                </Container>
            </div>
        );
    }
}

export default ActionItems;