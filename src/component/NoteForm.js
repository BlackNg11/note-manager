import React from 'react'
import { connect } from 'react-redux';


class NoteForm extends React.Component {
  state = {
    noteTitle: '',
    noteContent: ''
  }

  isChange = (e) => {
    const name = e.target.name;
    const value = e.target.value

    this.setState({
      [name] : value
    })

  }

  addData = (title,content) => {
    let item = {};
    item.title = title;
    item.content = content;

    this.props.addDataStore(item)
  }

  submitBtn = (e) => {
    e.preventDefault();

    this.setState({
      noteTitle: '',
      noteContent: ''
    })
  }


  render () {
    const data = this.props.data;
    return(
      <div className='col-4'>
        <h3>Sửa Nội Dung Note</h3>
          <form onSubmit={(e) => this.submitBtn(e)}>
            <div className='form-group'>
              <label htmlFor='noteTittle'>Tiêu Đề Note</label>
              <input onChange={(e) => this.isChange(e)} type='text' className='form-control' name='noteTitle' value={this.state.noteTitle} id='noteTitle' value={data.editItem.noteTitle} />
              <p id='helpIdNoteTitle' className='form-text text-muted'>Điền tiêu đề vào đây</p>
            </div>
            <div className='form-group'>
              <label htmlFor='noteContent'>Nội Dung Note</label>
              <textarea  onChange={(e) => this.isChange(e)} type='text' className='form-control' name='noteContent' value={this.state.noteContent} value={data.editItem.noteContent} id='noteTitle' />
              <p id='helpIdNoteTitle' className='form-text text-muted'>Điền nội dung vào đây</p>
            </div>
            <button onClick={() => this.addData(this.state.noteTitle,this.state.noteContent)} type='submit' className='btn btn-primary btn-block'>Lưu</button>
          </form>
      </div>
    )

  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.dataNote
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addDataStore: (payload) => {
      dispatch({
        type: 'ADD_DATA',
        payload
      })
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NoteForm);
