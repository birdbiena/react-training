import React from 'react';

import Input from './Input';
import Conunt from './Count';
import Clock from './Clock';
import List from './List';

import axios from 'axios';

import TableComponent from './Table/TableComponent';

class ToDoApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            headers: [],
            number: 0,
            isSelection: true,
            newToDo: ''
        }
    }

    onInputChange = (event) => {
        this.props.inputChange(event.target.value);
    }

    onInputSubmit = (event) => {
        event.preventDefault();
        this.props.inputSubmit();
    }

    onListItemClick = (i) => {
        this.props.listItemClick(i);
    }

    deleteListItem = (i) => {
        this.props.deleteListItem(i);
    }

    increment = () => {
        this.props.increment();
    }

    decrement = () => {
        this.props.decrement();
    }

    componentDidMount() {
        let todoUrl = `http://127.0.0.1:3001/api/todo/`;

        axios.get(todoUrl).then(response => {
            this.setState({
                list: response.data.list,
                number: response.data.number,
                headers: response.data.headers
            });
        }).catch(error => {
            console.log('error :', error);
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <Conunt countNumber={this.state.list.length} />
                            <Clock number={this.state.number} />
                            <hr />
                            <List
                                listItems={this.state.list}
                                listItemClick={this.onListItemClick}
                                deleteListItem={this.deleteListItem} />

                            <TableComponent
                                columns={this.state.headers}
                                listData={this.state.list}
                                isSelection={this.state.isSelection}
                            />

                            <Input
                                value={this.state.newToDo}
                                onChange={this.onInputChange}
                                onSubmit={this.onInputSubmit}
                                increment={this.increment}
                                decrement={this.decrement} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToDoApp;
