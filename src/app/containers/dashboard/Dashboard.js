import React from 'react';

import UserMenu from '../user/UserMenu';
import DashboardMain from './DashboardMain';
import s from './dashboard.scss';

class Dashboard extends React.Component {
  render() {
    return (
      <div id='dashboard'>
        <div className='row user-panel'>
          <div className='col-sm-12'>
            <div className='user-menu-container'>
              <UserMenu />
            </div>
          </div>
        </div>
      <DashboardMain {...this.props} />
      </div>
    )
  }
}

export default Dashboard;
