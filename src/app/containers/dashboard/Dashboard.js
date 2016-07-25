import React from 'react';
import { Link } from 'react-router';

import ProjectMenu from './ProjectMenu';
import Menu        from './Menu';
import ProjectGrid from './ProjectGrid';
import MobileWidget from '../mobileWidget/MobileWidget';

class Dashboard extends React.Component {
  render() {
    return (
      <div id='dashboard'>
        <div className='top-menu-container'>
          <ProjectMenu />
        </div>
        <div>
          <div className='side-menu-container'>
            <Menu />
          </div>
          <div className='grid-container'>
            <ProjectGrid {...this.props} />
          </div>
        </div>
        <div>
          <MobileWidget />
        </div>
      </div>
    )
  }
}

export default Dashboard;
