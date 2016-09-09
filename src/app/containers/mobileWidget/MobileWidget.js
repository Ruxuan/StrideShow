import React from 'react';
import InternetStatus from './InternetStatus';
import MobileStatus from './MobileStatus';
import SocketStatus from './SocketStatus';
import s from './mobileWidget.scss';

class MobileWidget extends React.Component {
  // TODO: rename to NetworkWidget

  handleOnClick(e) {
    e.stopPropagation();
  }

  render() {
    return (
      <div className="mobile-widget" onClick={this.handleOnClick}>
        <div className="row">
          <div className="col-sm-5">
            <MobileStatus mobileState={this.props.networkState.mobile} />
          </div>
          <div className="col-sm-5">
            <SocketStatus socketState={this.props.networkState.socket} />
          </div>
          <div className="col-sm-2">
            <InternetStatus internetState={this.props.networkState.internet} />
          </div>
        </div>
      </div>
    )
  }
}

export default MobileWidget;
