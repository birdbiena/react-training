import React from 'react';
import { Layout } from 'antd';

import SiderBar from './layout/SiderBar';
import Headers from './layout/Headers';
import Contents from './layout/Contents';

class App extends React.Component {
  state = {
    collapsed: true
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  Home = () => {
    return <h2>home</h2>;
  };

  render() {
    return (
      <Layout style={{ height: '100%' }}>
        <SiderBar collapsed={this.state.collapsed} />
        <Layout>
          <Headers collapsed={this.state.collapsed} toggle={this.toggle} />
          <Contents />
        </Layout>
      </Layout>
    );
  }
}

export default App;
