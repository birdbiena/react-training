import React from 'react';
import { Button, Form, Input, DatePicker } from 'antd';

const TodoListInput = ({ onChange, onSubmit, value, increment, decrement }) => (
    <Form layout="inline" onSubmit={onSubmit}>
        <Form.Item label="Email Address">
            <Input id="todoInput" placeholder="Add new TODO" value={value} onChange={onChange} />
        </Form.Item>

        <Form.Item label="Time">
            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
        </Form.Item>
        <br />

        <Form.Item>
            <Button type="primary" htmlType="submit" style={{ marginTop: '10px' }}>Add Item</Button>
            <Button type="primary" style={{ marginTop: '10px', marginLeft: '10px'}} onClick={increment}>+</Button>
            <Button type="primary" style={{ marginTop: '10px', marginLeft: '10px'}} onClick={decrement}>-</Button>
        </Form.Item>
    </Form>
);

export default TodoListInput;
