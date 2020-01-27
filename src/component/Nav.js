import React from 'react'

class Nav extends React.Component {
  handleAdd = (e) => {
    e.preventDefault();
  }

  render () {
    return(
      <nav className='navbar navbar-expand-sm navbar-dark' style={{backgroundColor: 'black'}}>
        <a className='navbar-brand' href='#'>Hello World</a>
        <div className='collapse navbar-collapse justify-content-end' id='collapsibleNavId'>
          <ul className='navbar-nav mt-2 mt-lg-0'>
            <li className='nav-item active' >
              <a className='nav-link' href='#' >Home</a>
            </li>
            <li className='nav-item active'>
              <a className='nav-link' href='#' onClick={(e) => this.handleAdd(e)}>Creat Note</a>
            </li>
          </ul>
        </div>
      </nav>
    )

  }
}

export default Nav;
