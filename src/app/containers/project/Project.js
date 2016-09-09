import React from 'react';
import { Link } from 'react-router';

class Project extends React.Component {
  constructor(arg) {
    super(arg);
    this.handleOnProjectClick = this.handleOnProjectClick.bind(this);
  }

  handleOnClick(e) {
    e.stopPropagation();
  }

  handleOnProjectClick(e) {
    var id            = this.props.i;
    var selected      = this.props.ui.selected;
    var selectProject = this.props.projectActions.selectProject;

    if (selected) {

    } else {
      e.preventDefault();
      e.stopPropagation();
      selectProject(id);
    }
  }

  render() {
    var index   = this.props.i;
    var project = this.props.project;
    var selected = this.props.ui.selected;

    var projectBoxClass;
    if (selected) {
      projectBoxClass = "project-box highlight";
    } else {
      projectBoxClass = "project-box";
    }

    return (
      <li onClick={ this.handleOnClick }>
        <Link to={`/demo/slideshow/${index}`}>
          <div className={projectBoxClass} onClick={this.handleOnProjectClick}>
            {index} : {project.meta_data.title}
          </div>
        </Link>
      </li>
    )
  }
}

export default Project;
