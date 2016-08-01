import React from 'react';
import s from './slideshow.scss';

class ImpressView extends React.Component {
  componentDidMount() {
    this.api = impress();
    this.api.init();
  }

  componentWillUnmount() {
    this.api.close();
  }

  render() {
    return (
      <div className="impress-view">
        <div className="fallback-message">
          <p>Your browser doesnt support the features required by impress.js</p>
          <p>For the best experience please use Google Chrome</p>
        </div>

        <div id="impress-container">
          <div id="impress-wrapper">
          <style>
            { this.props.css }
          </style>
            <div id="impress" dangerouslySetInnerHTML={this.props.dangerousHtml} />
          </div>
        </div>
      </div>
    )
  }
}

export default ImpressView;
