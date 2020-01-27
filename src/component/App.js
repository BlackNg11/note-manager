import React from 'react';
import { connect } from 'react-redux';

import Nav from './Nav';
import NoteForm from './NoteForm';
import NoteList from './NoteList';



class App extends React.Component {

  showForm = () => {
    if (this.props.statusEdit.isEdit) {
      return   <NoteForm />
    }
  }

  render () {
    return (
      <div>
        <Nav />
        <div className='container'>
          <div className='row'>
            <NoteList />
            {
              this.showForm()
            }
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    statusEdit: state.dataNote
  }
}


export default connect(mapStateToProps)(App);
