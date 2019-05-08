import React from 'react';
import _ from 'lodash';
import * as moment from 'moment';

import { List, Button } from 'antd';

class TaskList extends React.Component {
  state = {
    style: {
      padding: '12px'
    }
  }

  formatDate = time => {
    return moment(time).startOf('day').fromNow();
  };

  /**
   * 组件初始化的时候不调用，组件接收新props的时候调用。
   * 更新  重新调用render
   * @param {props} nextProps
   */
  componentWillReceiveProps(nextProps) {
    if (_.isEqual(nextProps, this.props)) {
      return;
    }
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

  render() {
    let { tasks, delFun, editFun } = this.props;

    return (
      <List
        style={this.state.style}
        itemLayout="vertical"
        dataSource={tasks}
        renderItem={item => (
          <List.Item
            key={item.id}
            actions={[this.formatDate(item.update_time)]}
            extra={[
              <Button key={`edit_${item.id}`} icon="delete" onClick={event => delFun(event, item)}></Button>,
              <Button key={`del_${item.id}`} icon="edit" style={{marginLeft: '8px'}} onClick={event => editFun(event, item)}></Button>
            ]}
          >
            <List.Item.Meta title={item.description.substring(0, 20)} />
          </List.Item>
        )}
      />
    );
  }
}

export default TaskList;
