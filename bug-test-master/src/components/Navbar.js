import React, { Component } from 'react';
import '../styles/App.css';

class Navbar extends Component {
  
  render() {
    let sessionButton;
    if (this.props.showLogoutButton) {
      sessionButton = (<button className='flat-button border-gray' onClick={this.props.handleLogout}>Sign Out</button>);
    }
    return (
      <div className='app-navbar'>
        <div className='flex-container'>
          <div className='header'>React Debug App</div>
          {sessionButton}
        </div>
      </div>
    );
  }
}

export default Navbar;