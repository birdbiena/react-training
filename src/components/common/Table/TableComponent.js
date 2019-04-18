import React from 'react';

import TableHead from './TableHead';
import TableBody from './TableBody';

import Pagination from './Pagination';


class TableComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: {},
      selectAllState: false,
      selectSize: 0,

      columns: this.props.columns || [],
      dataSource: this.props.listData || [],
      isSelection: this.props.isSelection || false
    };
  }

  /**
   * 行选择
   * @param {行数据} row
   */
  selectRow = (row) => {
    let _selected = Object.assign({}, this.state.selected),
      _selectAllState = true,
      _selectSize = this.state.selectSize;

    if (!_selected[row.id]) {
      _selectSize += 1;
    }

    _selected[row.id] = {
      checked: _selected[row.id] ? !_selected[row.id].checked : true,
      item: row
    };

    if (_selectSize === this.props.listData.length) {
      for (let item in _selected) {
        if (_selected[item].checked === false) {
          _selectAllState = false;
          break;
        }
      }
    } else {
      _selectAllState = false;
    }

    this.setState({ selected: _selected, selectAllState: _selectAllState, selectSize: _selectSize });
  }

  /**
   * 全选
   * @param {点击事件} event
   */
  selectAll = (event) => {
    let _selected = Object.assign({}, this.state.selected),
      _selectAllState = event.target.checked,
      _selectSize = this.props.listData.length;

    this.props.listData.forEach(element => {
      if (_selected[element.id]) {
        _selected[element.id].checked = event.target.checked;
      } else {
        _selected[element.id] = {
          checked: event.target.checked,
          item: element
        };
      }
    });

    this.setState({ selected: _selected, selectAllState: _selectAllState, selectSize: _selectSize });
  }

  /**
   * 暂时无效。
   * @param {event} event
   */
  handleClickCheckbox = (event) => {
    // console.log('this.state.selected :', this.state.selected);
    // console.log('event.target.checked :', event.target.checked);
  }

  render() {
    return (
      <>
        <table className="table table-sm table-dark table-hover">
          <TableHead
            columns={this.props.columns}
            status={this.state.selectAllState}
            select={this.selectAll}
            isSelection={this.state.isSelection}
          />

          <TableBody
            dataSource={this.props.listData}
            selectedData={this.state.selected}
            select={this.selectRow}
            isSelection={this.state.isSelection}
          />
        </table>
        <Pagination />
      </>
    );
  }
}

export default TableComponent;
