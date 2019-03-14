import React from 'react';

class Pagination extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageSize: [5, 10, 15],
      defaultPageSize: 5,
      pages: [],
      currentPage: 1,
      totalPages: 10
    };
  }

  componentWillMount() {
    let _pages = this.getPages(this.state.currentPage, this.state.totalPages);

    this.setState({
      pages: _pages
    });
  }

  test() {
    
  }

  testOne() {

  }

  testTwo() {

  }

  previous() {}

  next() {}

  go(page) {
    if (page.active) {
      return false;
    }

    let _page = this.getPages(page.number, this.state.totalPages);

    this.setState({
      pages: _page,
      currentPage: page.number
    });
  }

  /**
   * 1 ... 3 4 [5] 6 7... 20
   * 1 2 3 [4] 5 6 ... 20
   * [1] [2] [3] 4 5 ... 20
   * 
   * 1 ... 15 16 [17] 18 19 20
   */
  getPages = (currentPage, totalPages) => {
    let _pages = [],
      startPage = 1,
      endPage = totalPages,
      maxSize = 10;

    startPage = (Math.ceil(currentPage / maxSize) - 1) * maxSize + 1;
    endPage = Math.min(startPage + maxSize - 1, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      let page = this.makePage(i, `${i}`, i === currentPage);
      _pages.push(page);
    }

    return _pages;
  };

  makePage = (number, text, active) => {
    return {
      number: number,
      text: text,
      active: active
    };
  };

  render() {
    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-end">
          <li className="page-item disabled">
            <a className="page-link" tabIndex="-1" aria-disabled="true" onClick={this.previous}>
              Previous
            </a>
          </li>
          {this.state.pages.map((page, i) => (
            <li className={page.active ? 'page-item active' : 'page-item'} key={i} aria-current="page">
              <a className="page-link" onClick={this.go.bind(this, page)}>
                {page.text}
              </a>
            </li>
          ))}
          <li className="page-item">
            <a className="page-link" onClick={this.next}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;
