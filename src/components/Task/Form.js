import React from 'react';
import { Input, TimePicker, Form, Radio, Select, Button } from 'antd';

const { Option, OptGroup } = Select;

class TaskForm extends React.PureComponent {
  onChange = e => {
    console.log('e :', e);
  };

  selectHandleChange = e => {
    console.log('e :', e);
  };

  render() {
    let { item } = this.props;

    return (
      <Form style={{ padding: '12px' }}>
        <Form.Item label="描述">
          <Input placeholder="input with clear icon" onChange={this.onChange} value={item.description} />
        </Form.Item>

        <Form.Item label="时间">
          <TimePicker minuteStep={15} secondStep={10} />
        </Form.Item>

        <Form.Item label="状态">
          <Radio.Group defaultValue="inProgress" buttonStyle="solid">
            <Radio.Button value="inProgress">进行中</Radio.Button>
            <Radio.Button value="done">已完成</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="类型">
          <Select defaultValue="Service Worker" style={{ width: 200 }} onChange={this.selectHandleChange}>
            <OptGroup label="开发">
              <Option value="Service Worker">Service Worker</Option>
              <Option value="Manifest">Manifest</Option>
            </OptGroup>
            <OptGroup label="学习">
              <Option value="React">React</Option>
              <Option value="Vue">Vue</Option>
              <Option value="AngularJS">AngularJS</Option>
            </OptGroup>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Add
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default TaskForm;
