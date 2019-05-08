import React from 'react';
import _ from 'lodash';

import { Col, Button } from 'antd';

import TaskList from '../components/Task/List';
import TaskForm from '../components/Task/Form';

class Task extends React.Component {
  state = {
    currentItem: {}
  };

  refTaskFormModal = React.createRef();

  handleOpen = (event, item) => {
    event.preventDefault();

    this.setState(
      {
        currentItem: Object.assign({}, item)
      },
      () => {
        this.refTaskFormModal.showModal();
      }
    );
  };

  handleReload = event => {
    event.preventDefault();
    this.props.getAllTask();
  };

  handleDelete = (event, item) => {
    event.preventDefault();
    this.props.delTask(item.id);
  };

  handleEdit = (item) => {
    this.props.updateTask(item);
  };

  handleAdd = (item) => {
    this.props.addTask(item);
  };

  componentWillMount() {}

  /**
   * 组件初始化的时候不调用，组件接收新props的时候调用。
   * 更新  重新调用render
   * @param {props} nextProps
   */
  componentWillReceiveProps(nextProps) {}

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
    let { tasks } = this.props;
    console.log('tasks :', tasks);
    return (
      <>
      <Col span={24}>
        <Button icon="edit" onClick={this.refTaskFormModal.showModal}></Button>
      </Col>
      <Col span={24}>
        <TaskList tasks={this.props.tasks} delFun={this.handleDelete} editFun={this.handleOpen} />
        <TaskForm wrappedComponentRef={form => (this.refTaskFormModal = form)} item={this.state.currentItem} addFun={this.handleAdd} editFun={this.handleEdit} />
      </Col>
      </>
    );
  }
}

export default Task;
