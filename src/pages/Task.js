import React from 'react';
import _ from 'lodash';

import { Col } from 'antd';

import TaskList from '../components/Task/List';
import TaskForm from '../components/Task/Form';

class Task extends React.Component {
  state = {
    currentItem: {
      id: '',
      description: '',
      status: 0,
      create_time: '',
      update_time: '',
      user_login_id: ''
    }
  };

  handleReload = event => {
    event.preventDefault();
    this.props.getAllTask();
  };

  handleDelete = item => {
    this.props.delTask(item.id);
  };

  handleEdit = item => {
    this.setState(state => ({
      currentItem: Object.assign({}, state.currentItem, item)
    }));
  };

  componentWillMount() {}

  /**
   * 组件初始化的时候不调用，组件接收新props的时候调用。
   * 更新  重新调用render
   * @param {props} nextProps
   */
  componentWillReceiveProps(nextProps) {
  //   if (_.isEqual(this.props, nextProps)) {
  //     return;
  //   }

  //   let { item } = nextProps;

  //   this.setState({ item });
  }

  /**
   * 比较传入内容是否有区别，再去调用render
   *
   * @param {*} nextProps
   * @param {*} nextState
   */
  shouldComponentUpdate(nextProps, nextState) {
    return !_.isEqual(nextProps, this.props) || !_.isEqual(nextState, this.state);
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <Col span={12}>
          <TaskList tasks={this.props.tasks} delFun={this.handleDelete} editFun={this.handleEdit} />
        </Col>
        <Col span={12}>
          <TaskForm item={this.state.currentItem} style={{ padding: '12px' }} />
        </Col>
      </>
    );
  }
}

export default Task;
