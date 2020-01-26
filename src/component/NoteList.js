import React from 'react'
import NoteItem from './NoteItem';
import {noteData} from '../firebase';

class NoteList extends React.Component {
  state = {
    dataFirebase: []
  }

  componentWillMount() {
    let arrData = [];
    noteData.on('value',(notes) => {
      notes.forEach((note, i) => {
        const key = note.key;
        const noteTitle = note.val().title;
        const noteContent = note.val().content;

        arrData.push({
          key,
          noteTitle,
          noteContent
        })
      });
      this.setState({
        dataFirebase: arrData
      })
    })
  }

  getData = () => {
    if (this.state.dataFirebase) {
      return (
        this.state.dataFirebase.map((val,index) => {
          ;
          return (
            <NoteItem key={index} index={index} title={val.noteTitle} content={val.noteContent}/>
          )
        })
      )
    }
  }

  render () {

    return(
      <div className='col'>
        <div id='noteList' role='tablist' aria-multiselectable='true'>
          {this.getData()}
        </div>
      </div>
    )

  }
}

export default NoteList;
