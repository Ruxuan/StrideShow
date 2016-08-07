import React from 'react';

class InternetStatus extends React.Component {
  render() {
    var status = this.props.internetState.status;

    return (
      <div>
        <h4>Internet Status</h4>
        { status }
      </div>
    )
  }
}

export default InternetStatus;
