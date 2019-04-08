import React from 'react';
import { Layout, Menu, Icon, Row, Col } from 'antd';
import ToDoAppContainer from './containers/toDoAppContainer';

const { Header, Sider, Content } = Layout;

class App extends React.Component {
  state = {
    collapsed: true
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Layout style={{height: '100%'}}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>All Tasks</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>Today</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>History</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280, }} >
          <Row>
            <Col span={12}>
            <ToDoAppContainer />
            </Col>
            <Col span={12}>
              <p>Edit</p>
            </Col>
          </Row>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
