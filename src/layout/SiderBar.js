import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;

class SiderBar extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Icon type="user" />
            <Link to="/list/">
              <span>All Tasks</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="video-camera" />
            <Link to="/edit/">
              <span>edit</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span>History</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default SiderBar;
