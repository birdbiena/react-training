import React from 'react';

class TableBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isSelection: this.props.isSelection
    };

    this.handleClickCheckbox = this.handleClickCheckbox.bind(this);
  }

  selectRow = row => {
    if (this.props.select) {
      this.props.select(row);
    }
  };

  handleClickCheckbox = event => {
    // console.log('this.state.selected :', this.props.selectedData);
    // console.log('event.target.checked :', event.target.checked);
  };

  render() {
    return (
      <tbody>
        {this.props.dataSource.map((item, i) => (
          <tr key={item.id} onClick={this.selectRow.bind(this, item)}>
            {this.state.isSelection && (
              <td>
                <input type="checkbox" checked={this.props.selectedData[item.id] ? this.props.selectedData[item.id].checked : false} onChange={this.handleClickCheckbox} />
              </td>
            )}
            <td> {item.description} </td>
            <td> {item.status} </td>
            <td> {item.update_time} </td>
            <td> {item.create_time} </td>
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
