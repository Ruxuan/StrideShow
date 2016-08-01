import React from 'react';

class DashboardMenu extends React.Component {

  render() {
    return (
      <div className="dashboard-menu">
        <div>New Project</div>
        <div>My projects</div>
        <div>Shared projects</div>
        <div>Starred</div>
        <div>Trash</div>
      </div>
    )
  }
}

export default DashboardMenu;
