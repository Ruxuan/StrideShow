import React from 'react';

class SocketStatus extends React.Component {
  render() {

    return (
      <div className="socket-status">
        <h4>Socket Status</h4>
        <div>
          <span>Status:</span>
          <span>{ this.props.socketState.status }</span>
        </div>
        <div>
          <span>Room:</span>
          <span>{ this.props.socketState.room }</span>
        </div>
        <div>
          <span>Active Project:</span>
          <span>{ this.props.socketState.activeProject }</span>
        </div>
        <div>
          <span>OS:</span>
          <span>{ this.props.socketState.computerInfo.OS }</span>
        </div>
        <div>
          <span>Browser:</span>
          <span>{ this.props.socketState.computerInfo.browser.name} v
            { this.props.socketState.computerInfo.browser.version }</span>
        </div>
      </div>
    )
  }
}

export default SocketStatus;
