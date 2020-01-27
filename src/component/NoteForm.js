import React from "react";
import { connect } from "react-redux";

class NoteForm extends React.Component {
  state = {
    noteTitle: "",
    noteContent: "",
    id: ""
  };

  UNSAFE_componentWillMount() {
    const data = this.props.data.editItem;
    if (data) {
      this.setState({
        noteTitle: data.noteTitle,
        noteContent: data.noteContent,
        id: data.key
      });
    }
  }

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
      let editObject = { ...this.state };
      this.props.editDataStore(editObject);

      this.props.changeEditStatus();
      this.props.alertOn();
    } else {
      //ADD CASE
      let item = {};
      item.title = title;
      item.content = content;

      this.props.addDataStore(item);
      this.props.alertOn();
    }
  };

  changeCation = () => {
    if (this.props.addStatus) {
      return "Thêm Mới Nội Dung Note";
    } else{
      return "Sửa Nội Dung Note";
    }
  };

  submitForm = e => {
    e.preventDefault();

    this.props.changeEditStatus();
  };

  render() {
    const data = this.props.data.editItem;
    return (
      <div className="col-4">
        <h3>{this.changeCation()}</h3>
        <form onSubmit={e => this.submitForm(e)}>
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
    data: state.dataNote,
    addStatus: state.dataNote.isAdd
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
    },
    alertOn: () => {
      dispatch({
        type: "ALERT_ON"
      });
    },
    alertOff: () => {
      dispatch({
        type: "ALERT_OFF"
      });
    },


  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteForm);
