import React from 'react';

// import Input from './Input';
// import Conunt from './Count';
// import Clock from './Clock';
// import List from './List';

import { List, Avatar } from 'antd';
import * as moment from 'moment';

import axios from 'axios';

// import TableComponent from './Table/TableComponent';

class ToDoApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      headers: [],
      number: 0,
      isSelection: true,
      newToDo: ''
    };
  }

  onInputChange = event => {
    this.props.inputChange(event.target.value);
  };

  onInputSubmit = event => {
    event.preventDefault();
    this.props.inputSubmit();
  };

  onListItemClick = i => {
    this.props.listItemClick(i);
  };

  deleteListItem = i => {
    this.props.deleteListItem(i);
  };

  increment = () => {
    this.props.increment(this.props.toDoApp.number);
  };

  decrement = () => {
    this.props.decrement(this.props.toDoApp.number);
  };

  componentDidMount() {
    let todoUrl = `/api/todo/`;
    let token = localStorage.getItem('token');

    axios.defaults.headers.common = {
      Authorization: `bearer ${token}`
    };

    axios
      .get(todoUrl)
      .then(response => {
        this.props.setList(response.data.data);
      })
      .catch(error => {
        console.log('error :', error);
      });
  }

  render() {
    return (
      <List
        itemLayout="horizontal"
        dataSource={this.props.toDoApp.list}
        renderItem={item => (
          <List.Item
            actions={[
              moment(item.create_time)
                .startOf('day')
                .fromNow()
            ]}
            style={{ padding: '12px' }}
          >
            <List.Item.Meta avatar={<Avatar src="http://127.0.0.1:3001/images/Naruto.jpg" />} title={item.description.substring(0, 20)} description={<a href="/#">{item.description}</a>} />
          </List.Item>
        )}
      />
    );
  }
}

export default ToDoApp;
