import React from 'react';
import { Col, List, Avatar, Button } from 'antd';
import * as moment from 'moment';
import _ from 'lodash';

import TaskForm from './TaskForm';

class TaskList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      headers: [
        { key: 'description', name: 'Description', dataIndex: 'description' },
        { key: 'state',       name: 'State',       dataIndex: 'state'       },
        { key: 'create_time', name: 'CreateTime',  dataIndex: 'create_time' },
        { key: 'update_time', name: 'UpdateTime',  dataIndex: 'update_time' }
      ],
      currentItem: {}
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleReload = this.handleReload.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleClick(item, event) {
    event.preventDefault();

    // Object.assign({}, state.currentItem, item)
    // 不改变传入参数的情况进行setState
    this.setState(state => ({
      currentItem: Object.assign({}, state.currentItem, item)
    }));
  }

  handleReload(event) {
    event.preventDefault();
    this.props.getAllTask();
  }

  handleDelete(id, event) {
    event.preventDefault();
    this.props.delTask(id);
  }

  handleEdit(id, event) {
    event.preventDefault();
  }

  componentWillMount() {}

  componentWillReceiveProps(nextProps) {}

  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(nextProps, this.props) || !_.isEqual(nextState, this.state);
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <Col span={12}>
          <Button type="primary" icon="reload" onClick={this.handleReload} />
          <List
            style={{ padding: '12px' }}
            itemLayout="vertical"
            dataSource={this.props.tasks}
            renderItem={item => (
              <List.Item key={item.id}
                actions={[ moment(item.create_time).startOf('day').fromNow() ]}
                extra={[
                  <Button key={`del_${item.id}`} type="danger" size={'small'} onClick={event => this.handleDelete(item.id, event)}>remove</Button>,
                  <Button key={`edit_${item.id}`} type="danger" size={'small'} onClick={event => this.handleEdit(item.id, event)}>edit</Button>
                ]}>
                <List.Item.Meta
                  avatar={<Avatar src="http://127.0.0.1:3001/images/Naruto.jpg" />}
                  title={item.description.substring(0, 20)}
                  description={
                    <a href="#" onClick={event => this.handleClick(item, event)}>
                      {item.description}
                    </a>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
        <Col span={12}>
          <TaskForm item={this.state.currentItem} style={{ padding: '12px' }} />
        </Col>
      </>
    );
  }
}

export default TaskList;
