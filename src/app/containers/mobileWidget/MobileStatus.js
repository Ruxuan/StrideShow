import React from 'react';

class MobileStatus extends React.Component {
  render() {

    return (
      <div className="mobile-status">
        <h4>Mobile Status</h4>
        <div>
          <span>Status:</span>
          <span>{ this.props.mobileState.status }</span>
        </div>
        <div>
          <span>Model:</span>
          <span>{ this.props.mobileState.deviceInfo.model }</span>
        </div>
        <div>
          <span>ActiveProject:</span>
          <span>{ this.props.mobileState.activeProject }</span>
        </div>
        <div>
          <span>OS:</span>
          <span>{ this.props.mobileState.deviceInfo.OS }</span>
        </div>
        <div>
          <span>SDK:</span>
          <span>{ this.props.mobileState.deviceInfo.SDK }</span>
        </div>
      </div>
    )
  }
}

export default MobileStatus;
