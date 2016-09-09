import React from 'react';

class DashboardMenu extends React.Component {

  constructor(s) {
    super(s);

    this.sorry = this.sorry.bind(this);
  }

  sorry(e) {
    alert("This feature isn't available in the demo");
  }

  render() {
    return (
      <div className="dashboard-menu" onClick={ this.sorry }>
        <div>New Project</div>
        <div>My projects</div>
        <div>Shared projects</div>
        <div>Starred</div>
        <div>Trash</div>
        <div>FolderSpace</div>
      </div>
    )
  }
}

export default DashboardMenu;
