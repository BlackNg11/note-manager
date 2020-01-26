import React from 'react';
import Nav from './Nav';
import NoteForm from './NoteForm';
import NoteList from './NoteList';

import {noteData} from '../firebase';


class App extends React.Component {
  state = {

  }

  render () {
    return (
      <div>
        <Nav />
        <div className='container'>
          <div className='row'>
            <NoteList />
            <NoteForm />
          </div>
        </div>
      </div>
    );
  }
}



export default App;
