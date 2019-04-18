import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout, Row } from 'antd';

import TaskList from './../containers/TaskListContainer';

const { Content } = Layout;

class Contents extends React.Component {
  render() {
    return (
      <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
        <Row>
          <Switch>
            <Route exact={true} path="/list" component={TaskList} />
          </Switch>
        </Row>
      </Content>
    );
  }
}

export default Contents;
