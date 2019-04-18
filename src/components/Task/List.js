import React from 'react';
import * as moment from 'moment';

import { List, Avatar, Button } from 'antd';

class TaskList extends React.Component {
  state = {
    style: {
      padding: '12px'
    }
  };

  handleClickDelete = (event, item) => {
    event.preventDefault();
    this.props.delFun(item);
  };

  handelClickEdit = (event, item) => {
    event.preventDefault();
    this.props.editFun(item);
  };

  formatDate = (create_time) => {
    return moment(create_time).startOf('day').fromNow();
  };

  render() {
    let { tasks } = this.props;

    return (
      <List
        style={this.state.style}
        itemLayout="vertical"
        dataSource={tasks}
        renderItem={item => (
          <List.Item key={item.id}
            actions={[ this.formatDate(item.create_time) ]}
            extra={[
              <Button key={`del_${item.id}`} type="danger" size={'small'} onClick={event => this.handleClickDelete(event, item)}>remove</Button>,
              <Button key={`edit_${item.id}`} type="danger" size={'small'} onClick={event => this.handelClickEdit(event, item)}>edit</Button>
            ]}>
            <List.Item.Meta
              avatar={<Avatar src="http://127.0.0.1:3001/images/Naruto.jpg" />}
              title={item.description.substring(0, 20)}
              description={ item.description }
            />
          </List.Item>
        )}
      />
    );
  }
}

export default TaskList;