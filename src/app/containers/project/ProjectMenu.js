import React from 'react';

class ProjectMenu extends React.Component {

  handleOnClick(e) {
    e.stopPropagation();
  }

  render() {
    var projectOptions;
    var projectTitle

    var activeProject = this.props.uiState.UIactiveProject;
    if (activeProject != 'deselect') {
      projectOptions = (
        <span>
          <span>Shareable Link</span>
          <span>Share Project</span>
          <span>View</span>
          <span>Delete</span>
          <span>More Options</span>
        </span>
      )

      projectTitle = this.props.projects[activeProject].meta_data.title;
    }

    return (
      <div className="project-menu" onClick={this.handleOnClick}>
        <div className='row'>
          <div className='col-sm-2'>ProjectMenu</div>
          <div className='col-sm-4'>
            /Path/to/project {projectTitle ? `/${projectTitle}` : null}
          </div>
          <div className='col-sm-6'>
            Options:
            { projectOptions }
          </div>
        </div>
      </div>
    )
  }
}

export default ProjectMenu;
