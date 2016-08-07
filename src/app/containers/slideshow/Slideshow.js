import React from 'react';
import MobileWidget from '../mobileWidget/MobileWidget';
import ImpressView from './ImpressView';

class Slideshow extends React.Component {

  render() {
    const index = this.props.params.index;
    const project = this.props.projects[index];

    const css  = project.presentation.css;
    const meta_data = project.meta_data;

    const html = project.presentation.html;
    const dangerous = {__html: html};

    return (
      <div className="slideshow">
        <h3>Now playing: { meta_data.title } by { meta_data.author }</h3>
        <ImpressView dangerousHtml={dangerous} css={css} />
        <div>
          <MobileWidget />
        </div>
      </div>
    )
  }
}

export default Slideshow;