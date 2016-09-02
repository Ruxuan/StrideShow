/**
 * Created by liruxuan on 2016-08-31.
 */
import React from 'react';

class LaserTool extends React.Component {

  pointerCSS  = null;
  container  = null;

  shouldComponentUpdate(nextProps, nextState) {
    var currentX = this.props.laserPointer.x;
    var currentY = this.props.laserPointer.y;

    var nextX = nextProps.laserPointer.x;
    var nextY = nextProps.laserPointer.y;

    return nextX != currentX || nextY != currentY
  }

  render() {

    if (this.container === null) {
      this.container = document.getElementById("impress-container");
    } else {
      // TODO: wrong if dimensions of phone and monitor are different
      // TODO: better measure of relative? Send screen size info
      this.pointerCSS = {
        top:  this.props.laserPointer.y * this.container.offsetHeight,
        left: this.props.laserPointer.x * this.container.offsetWidth
      };
    }

    return (
      <div id="laser" style={ this.pointerCSS }></div>
    )
  }
}

export default LaserTool;
