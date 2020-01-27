import React from 'react'
import { connect } from 'react-redux';

class NoteItem extends React.Component {
  changeCaption = () => {
    if (this.props.statusEdit.isEdit) {
      return 'Đóng'
    }else {
      return 'Sửa'
    }
  }

  twoActionButton = () => {
    //action 1
    this.props.changeEditStatus();

    //action 2,get data form store
    this.props.getEditData(this.props.note);
  }

  render () {
    return(
      <div className='card'>
        <div className='card-header' role='tab' id='note1'>
          <h5 className='mb-0'>
            <a data-toggle='collapse' data-parent='#noteList' href={`#number${this.props.index}`} aria-expanded='true' aria-controls='noteConten1'>{this.props.title}</a>
            <div className='btn-group float-right'>
              <button className='btn btn-outline-info' onClick={() => this.twoActionButton()}>
                {this.changeCaption()}
              </button>
              <button className='btn btn-outline-secondary'> Xóa </button>
            </div>
          </h5>
        </div>
        <div id={`number${this.props.index}`} className='collapse in' role='tabpanel' aria-labelledby='note1'>
          <div className='card-body'>
            {this.props.content}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    statusEdit: state.dataNote
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    changeEditStatus: () => {
      dispatch({
        type: 'CHANGE_EDIT_STATUS',
      })
    },
    getEditData: (editObject) => {
      dispatch({
        type: 'GET_EDIT_DATA',
        editObject
      })
  }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NoteItem);
