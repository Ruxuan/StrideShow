import React from 'react';
import DeviceInfo from './DeviceInfo';
import DeviceStatus from './DeviceStatus';
import s from './mobile-widget.scss';

class MobileWidget extends React.Component {

  handleOnClick(e) {
    e.stopPropagation();
  }

  render() {
    return (
      <div className="mobile-widget" onClick={this.handleOnClick}>
        Mobile Widget
        <DeviceInfo />
        <DeviceStatus />
      </div>
    )
  }
}

export default MobileWidget;
