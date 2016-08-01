import React from 'react';

class UserMenu extends React.Component {
  render() {
    return (
      <div className="user-menu">
        <div className='row'>
          <div className='col-sm-2'>User Menu</div>
          <div className='col-sm-5'>Search bar</div>
          <div className='col-sm-5'>User Profile</div>
        </div>
      </div>
    )
  }
}

export default UserMenu;
