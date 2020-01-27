import React from 'react'
import NoteItem from './NoteItem';
import {noteData} from '../firebase';

class NoteList extends React.Component {
  state = {
    dataFirebase: []
  }

  UNSAFE_componentWillMount(){
    noteData.on('value',(notes) => {
      let arrData = [];
      notes.forEach((note, i) => {
        const key = note.key;
        const noteTitle = note.val().title;
        const noteContent = note.val().content;

        arrData = [...arrData, {key,noteTitle,noteContent}]
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
          return (
            <NoteItem key={index} note={val} index={index} title={val.noteTitle} content={val.noteContent}/>
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
