import React from 'react';
import ProjectMenu from '../project/ProjectMenu';
import ProjectGrid from '../project/ProjectGrid';
import MobileWidget from '../mobileWidget/MobileWidget';
import DashboardMenu from './DashboardMenu';

class DashboardMain extends React.Component {
  constructor(arg) {
    super(arg);
    this.handleOnMainClick = this.handleOnMainClick.bind(this);
  }

  handleOnMainClick(e) {
    var selectProject = this.props.projectActions.selectProject;
    selectProject('deselect');
  }

  // TODO: use reselect selectors to display projects on the grid
  render() {
    return (
      <div className='row dashboard-main' onClick={this.handleOnMainClick}>
        <div className='col-sm-2 side-menu-control-room'>
          <div className='side-menu-container'>
            <DashboardMenu />
          </div>
        </div>
        <div className='col-sm-10 project-control-room'>
          <div className='top-menu-container'>
            <ProjectMenu
              projects={this.props.projects}
              uiState={this.props.uiState}
              projectActions={this.props.projectActions} />
          </div>
          <div className='grid-container'>
            <ProjectGrid
              projects={this.props.projects}
              uiState={this.props.uiState}
              projectActions={this.props.projectActions} />
          </div>
          <div className='mobile-widget-container'>
            <MobileWidget
              networkState={this.props.networkState}
              networkActions={this.props.networkActions}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default DashboardMain;
