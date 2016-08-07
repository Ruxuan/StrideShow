import React from 'react';
import InternetStatus from './InternetStatus';
import MobileStatus from './MobileStatus';
import SocketStatus from './SocketStatus';
import s from './mobile-widget.scss';

class MobileWidget extends React.Component {
  // TODO: rename to NetworkWidget

  handleOnClick(e) {
    e.stopPropagation();
  }

  render() {
    return (
      <div className="mobile-widget" onClick={this.handleOnClick}>
        <div className="row">
          <div className="col-sm-4">
            <MobileStatus mobileState={this.props.networkState.mobile} />
          </div>
          <div className="col-sm-4">
            <SocketStatus socketState={this.props.networkState.socket} />
          </div>
          <div className="col-sm-4">
            <InternetStatus internetState={this.props.networkState.internet} />
          </div>
        </div>
      </div>
    )
  }
}

export default MobileWidget;
