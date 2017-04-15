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
		<div className="mobile-google-play">
			Get the mobile app on Google Play
			<a href="https://play.google.com/store/apps/details?id=com.strideshow.liruxuan.missioncontrol&hl=en&utm_source=global_co&utm_medium=prtnr&utm_content=Mar2515&utm_campaign=PartBadge&pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
				<img alt="Get it on Google Play" src="https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png"/>
			</a>
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
            <div className="sectioner">
              <MobileWidget
                networkState={this.props.networkState}
                networkActions={this.props.networkActions}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DashboardMain;
