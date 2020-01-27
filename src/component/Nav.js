import React from 'react'
import { connect } from "react-redux";

class Nav extends React.Component {
  handleAdd = (e) => {
    e.preventDefault();

    this.props.changeEditStatus();
    this.props.changeAddStatus();

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

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.dataNote
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditStatus: () => {
      dispatch({
        type: "CHANGE_EDIT_STATUS"
      });
    },
    changeAddStatus: () => {
      dispatch({
        type: "CHANGE_ADD_STATUS"
      });
    }
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
