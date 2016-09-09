/**
 * Created by liruxuan on 2016-08-31.
 */
import React from 'react';

class LaserTool extends React.Component {

  pointerCSS = null;
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

      let x = this.props.laserPointer.x;
      let y = this.props.laserPointer.y;

      if (x != 0 || y != 0) {
        this.pointerCSS = {
          display: "block",
          top:  y * this.container.offsetHeight,
          left: x * this.container.offsetWidth
        };
      } else {
        this.pointerCSS = {
          display: "none",
          top: 0,
          left: 0
        }
      }
    }

    return (
      <div id="laser" style={ this.pointerCSS }></div>
    )
  }
}

export default LaserTool;
