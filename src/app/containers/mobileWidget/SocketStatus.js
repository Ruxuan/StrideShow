import React from 'react';

class SocketStatus extends React.Component {
  render() {
    var status        = this.props.socketState.status;
    var room          = this.props.socketState.room;
    var activeProject = this.props.socketState.activeProject;

    return (
      <div>
        <h4>Socket Status</h4>
        <div>
          Status: { status }
        </div>
        <div>
          Room: { room }
        </div>
        <div>
          Active Project: { activeProject }
        </div>
      </div>
    )
  }
}

export default SocketStatus;
