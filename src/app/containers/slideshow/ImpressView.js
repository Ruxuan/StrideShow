import React from 'react';
import s from './slideshow.scss';

class ImpressView extends React.Component {

  componentDidMount() {
    var index = this.props.i;
    var title = this.props.title;

    this.props.impressActions.attachSocket(title, index);

    this.api = impress();
    this.api.init();
  }

  componentWillUnmount() {
    this.api.close();
    this.props.impressActions.detachSocket();
  }

  componentWillReceiveProps(nextState) {
    // TODO: figure out why this is component is being re-rendered so much. Something to do with impress() and init()
    var currentSlideIndex = this.props.impressState.slideIndex;
    var nextSlideIndex    = nextState.impressState.slideIndex;

    if (currentSlideIndex !== nextSlideIndex) {
      this.api.goto(nextSlideIndex);
    }
  }

  render() {
    return (
      <div className="impress-view">
        <div className="fallback-message">
          <p>Your browser doesnt support the features required by impress.js</p>
          <p>For the best experience please use Google Chrome</p>
        </div>

        <div id="impress-container">
            <style>
              { this.props.css }
            </style>
            <div id="impress" dangerouslySetInnerHTML={this.props.dangerousHtml} />
        </div>
      </div>
    )
  }
}

export default ImpressView;
