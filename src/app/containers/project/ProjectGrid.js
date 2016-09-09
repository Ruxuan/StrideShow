import React from 'react';
import Project from './Project';
import s from './project.scss';

class ProjectGrid extends React.Component {
  render() {
    var grid = this.props.projects.map((project, i) => {
      return <Project
                key={i}
                i={i}
                project={project}
                ui={this.props.uiState.UIprojectGrid[i]}
                projectActions={this.props.projectActions} />
    });

    return (
      <div className="project-grid">
        <ul>
          { grid }
        </ul>
      </div>
    )
  }
}

export default ProjectGrid;
