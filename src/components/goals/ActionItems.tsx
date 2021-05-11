import React, { Component } from 'react';
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Checkbox from '@material-ui/core/Checkbox';
import { ActionItemResponse } from './ActionItemInterface';

export interface ActionItemsProps {
    token: any
}

export interface ActionItemsState {
    items: ActionItemResponse[],
    checked: boolean,
    token: any
}

class ActionItems extends Component<ActionItemsProps, ActionItemsState> {
    constructor(props: ActionItemsProps) {
        super(props);
        this.state = { items: [], checked: false, token: this.props.token };
    }

    componentDidMount() {
        this.fetchItems()
    }

    fetchItems = () => {
        fetch(`https://achieveserver.herokuapp.com/items/:userId`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            }
        })
            .then((res: any) => res.json())
            .then((json) => {
                console.log(json)
                this.setState({ items: json.items })
                console.log(this.state.items)
            })
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
                            {this.state.items.map((item) => {
                                console.log(item)
                                return (<li>
                                    <Checkbox
                                        color="default"
                                        inputProps={{ 'aria-label': 'uncontrolled-checkbox' }}
                                        key={item.id}
                                    />{item.description}</li>)
                            })}
                        </ul>
                    </Box>
                </Container>
            </div>
        );
    }
}

export default ActionItems;