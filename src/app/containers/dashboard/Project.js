import React from 'react';

class Project extends React.Component {
  render() {
    var index   = this.props.i;
    var project = this.props.project;

    return (
      <li>
        <div className="project-box">
          Project {index} : {project.meta_data.title}
        </div>
      </li>
    )
  }
}

export default Project;
