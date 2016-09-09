import React from 'react';
import MobileWidget from '../mobileWidget/MobileWidget';
import ImpressView from './ImpressView';

class Slideshow extends React.Component {

  render() {
    const index   = this.props.params.index;
    const project = this.props.projects[index];

    const css       = project.presentation.css;
    const meta_data = project.meta_data;

    const html      = project.presentation.html;
    const dangerous = {__html: html};

    return (
      <div className="slideshow">
        <div className="row info-container">
          <div className="col-sm-6 meta-data">
            <h3>Now playing: { meta_data.title } by { meta_data.author }</h3>
          </div>
          <div className="col-sm-6 mobile-widget-container">
            <MobileWidget networkState={this.props.networkState} />
          </div>
        </div>
        <div>
          <ImpressView
            i              = { index }
            title          = { meta_data.title }
            impressState   = { this.props.impressState }
            impressActions = { this.props.impressActions }
            dangerousHtml  = { dangerous }
            css            = { css } />
        </div>
      </div>
    )
  }
}

export default Slideshow;
