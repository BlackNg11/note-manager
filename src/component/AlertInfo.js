import React from "react";
import { connect } from "react-redux";

import { Alert, AlertContainer } from "react-bs-notifier";

class AlertInfo extends React.Component {
  handleDismiss = () => {
    this.props.alertOff()
  }
  render() {
    if (this.props.alertShow === false) {
      return null
    }
    return (
      <AlertContainer>
        <Alert type="success" onDismiss={() => this.handleDismiss()} timeout={2000}>Thành Công</Alert>
      </AlertContainer>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    alertShow : state.dataNote.alertShow
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    alertOff: () => {
      dispatch({
        type: "ALERT_OFF"
      });
    }
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlertInfo);
