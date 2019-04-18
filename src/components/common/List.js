import React from 'react';
import { Button } from 'antd';

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  done = (i) => {
    this.props.listItemClick.bind(null, i);
  }

  delete = (i) => {
    this.props.deleteListItem.bind(null, i);
  }

  render() {
    return (
      <div style={{display: 'none'}}>
        <ul>
          {this.props.listItems.map((el, i) => (
            <li key={i}>
              <div className="form-inline">
                <div className="form-group">
                  <span style={el.done ? { textDecoration: 'line-through', fontSize: '20px', marginRight: '10px' } : { textDecoration: 'none', fontSize: '20px', marginRight: '10px' }}
                    onClick={this.done(i)}>
                    {el.item}
                  </span>
                  <Button type="primary" shape="circle" icon="close-square" />
                  <button className="btn btn-danger pull-right" onClick={this.delete(i)}>
                    x
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default List;
