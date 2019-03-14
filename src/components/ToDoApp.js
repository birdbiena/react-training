import React from 'react';

import Input from './Input';
import Conunt from './Count';
import Clock from './Clock';
import List from './List';

import TableComponent from './Table/TableComponent';

class ToDoApp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isSelection: true
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
                                value={this.props.toDoApp.newToDo}
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
