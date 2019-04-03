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
        this.props.increment(this.props.toDoApp.number);
    }

    decrement = () => {
        this.props.decrement(this.props.toDoApp.number);
    }

    componentDidMount() {
        let todoUrl = `/api/todo/`;
        let token = localStorage.getItem('token');

        axios.defaults.headers.common = {
            'Authorization': `bearer ${token}`
        }

        axios.get(todoUrl).then(response => {
            this.props.setList(response.data);
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
                            <Conunt countNumber={this.props.toDoApp.list.length} />
                            <Clock number={this.props.toDoApp.number} />
                            <hr />
                            <List
                                listItems={this.props.toDoApp.list}
                                listItemClick={this.onListItemClick}
                                deleteListItem={this.deleteListItem} />

                            <TableComponent
                                columns={this.props.toDoApp.headers}
                                listData={this.props.toDoApp.list}
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
