import React from 'react';

const SelectAllCheckBox = ({ checked, onChange }) => <input type="checkbox" checked={checked} onChange={onChange} />;

class TableHead extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelection: this.props.isSelection
    };
  }

  render() {
    return (
      <thead>
        <tr>
          {this.state.isSelection && (
            <th scope="col"> <SelectAllCheckBox checked={this.props.status} onChange={this.props.select} /> </th>
          )}
          {this.props.columns.map((item, i) => (
            <th scope="col" key={item.key}> {item.name} </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHead;
