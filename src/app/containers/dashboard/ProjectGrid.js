import React from 'react';
import Project from './Project';

class ProjectGrid extends React.Component {
  render() {
    var grid = this.props.presentations.map((project, i) => {
      return <Project key={i} i={i} project={project} />
    })

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
