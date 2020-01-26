import React from 'react'

class NoteList extends React.Component {
  render () {
    return(
      <div className='card'>
        <div className='card-header' role='tab' id='note1'>
          <h5 className='mb-0'>
            <a data-toggle='collapse' data-parent='#noteList' href={`#number${this.props.index}`} aria-expanded='true' aria-controls='noteConten1'>{this.props.title}</a>
            <div className='btn-group float-right'>
              <button className='btn btn-outline-info'> Sửa </button>
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

export default NoteList;
