import React from 'react';
import _ from 'lodash';
import { Input, Form, Radio, Modal } from 'antd';

const RadioGroup = Radio.Group;

class TaskForm extends React.Component {
  state = {
    user_login_id: '099C18124ED811E9B4337E1A06CF0192',
    visible: false,
    confirmLoading: false,
    item: {}
  };

  // 指向给父类的yfmk用。使用Recat.createRef()
  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleChange = e => {
    console.log('e.target.value :', e.target.value);
  };

  handleOk = () => {
    let { addFun, editFun, item } = this.props;

    this.setState({
      confirmLoading: true
    });

    this.props.form.validateFields((error, values) => {
      if (error) {
        this.setState({
          confirmLoading: false
        });

        return;
      }

      this.setState({
        visible: false,
        confirmLoading: false
      });

      if (item.id) {
        editFun(Object.assign({}, item, values));
      } else {
        values.user_login_id = this.state.user_login_id;
        addFun(values);
      }
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
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

  render() {
    const { visible, confirmLoading } = this.state;
    const { item } = this.props;
    const { getFieldDecorator } = this.props.form;

    return (
      <Modal
        visible={visible}
        confirmLoading={confirmLoading}
        destroyOnClose={true}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        >
        <Form style={{ padding: '12px' }} onSubmit={this.handleOk}>
          <Form.Item label="描述">
            {getFieldDecorator('description', {
              initialValue: item.description || '',
              rules: [{
                required: true,
                message: 'Input something!'
              }]
            })(<Input placeholder="Input something!" />)}
          </Form.Item>

          <Form.Item label="状态">
            {
              getFieldDecorator('status', {
                initialValue: item.status || 0
              })(
                <RadioGroup buttonStyle="solid">
                  <Radio.Button value={-1}>已超时</Radio.Button>
                  <Radio.Button value={0}>进行中</Radio.Button>
                  <Radio.Button value={1}>已完成</Radio.Button>
                </RadioGroup>
              )
            }
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

export default Form.create()(TaskForm);
