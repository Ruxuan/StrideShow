import React from 'react';
import { Link } from 'react-router';

class ProjectMenu extends React.Component {

  constructor(s) {
    super(s);

    this.sorry = this.sorry.bind(this);
  }

  handleOnClick(e) {
    e.stopPropagation();
  }

  sorry(e) {
    alert("This feature isn't available in the demo");
  }

  render() {
    var projectOptions;
    var projectTitle;

    var activeProject = this.props.uiState.UIactiveProject;
    if (activeProject != 'deselect') {
      projectOptions = (
        <span className="project-options">
          <span onClick={this.sorry}> Shareable Link </span>
          <span onClick={this.sorry}> Share Project </span>

          <Link to={`/demo/slideshow/${activeProject}`}>
            <span> View </span>
          </Link>

          <span onClick={this.sorry}> Delete </span>
          <span onClick={this.sorry}> More Options </span>
        </span>
      );

      projectTitle = this.props.projects[activeProject].meta_data.title;
    }

    return (
      <div className="project-menu" onClick={ this.handleOnClick }>
        <div className='row'>
          <div className='col-sm-2'>ProjectMenu</div>
          <div className='col-sm-4'>
            /Path/to/project{projectTitle ? `/${projectTitle}` : null}
          </div>
          <div className='col-sm-6'>
            Options: { projectOptions }
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectMenu;
