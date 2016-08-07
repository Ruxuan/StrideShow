import React from 'react';

class SocketStatus extends React.Component {
  render() {
    var status = this.props.socketState.status;
    var room = this.props.socketState.room;

    return (
      <div>
        <h4>Socket Status</h4>
        <div>
          Status: { status }
        </div>
        <div>
          Room: { room }
        </div>
      </div>
    )
  }
}

export default SocketStatus;
