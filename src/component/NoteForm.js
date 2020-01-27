import React from "react";
import { connect } from "react-redux";

class NoteForm extends React.Component {
  state = {
    noteTitle: '',
    noteContent: '',
    id: ''
  };

  isChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
  };

  dataManipulate = (title, content) => {
    if (this.state.id) {
      //Edit Case
      let editObject = {...this.state};
      this.props.editDataStore(editObject);

      this.props.changeEditStatus();

    }else{
      //ADD CASE
      let item = {};
      item.title = title;
      item.content = content;

      this.props.addDataStore(item);
    }

  };



  UNSAFE_componentWillMount() {
    const data = this.props.data.editItem;
    if (data) {
      this.setState({
        noteTitle: data.noteTitle,
        noteContent: data.noteContent,
        id: data.key
      })
    }
  }

  render() {
    const data = this.props.data.editItem;
    return (
      <div className="col-4">
        <h3>Sửa Nội Dung Note</h3>
        <form >
          <div className="form-group">
            <label htmlFor="noteTittle">Tiêu Đề Note</label>
            <input
              onChange={e => this.isChange(e)}
              type="text"
              className="form-control"
              name="noteTitle"
              id="noteTitle"
              defaultValue={data.noteTitle}
            />
            <p id="helpIdNoteTitle" className="form-text text-muted">
              Điền tiêu đề vào đây
            </p>
          </div>
          <div className="form-group">
            <label htmlFor="noteContent">Nội Dung Note</label>
            <textarea
              onChange={e => this.isChange(e)}
              type="text"
              className="form-control"
              name="noteContent"
              defaultValue={data.noteContent}
              id="noteTitle"
            />
            <p id="helpIdNoteTitle" className="form-text text-muted">
              Điền nội dung vào đây
            </p>
          </div>
          <button
            onClick={() =>
              this.dataManipulate(this.state.noteTitle, this.state.noteContent)
            }
            type="submit"
            className="btn btn-primary btn-block"
          >
            Lưu
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.dataNote
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addDataStore: payload => {
      dispatch({
        type: "ADD_DATA",
        payload
      });
    },
    editDataStore: payload => {
      dispatch({
        type: "EDIT_DATA",
        payload
      });
    },
    changeEditStatus: () => {
      dispatch({
        type: "CHANGE_EDIT_STATUS"
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteForm);
