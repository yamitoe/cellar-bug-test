import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoginForm from "../components/LoginForm"
import { Glyphicon } from 'react-bootstrap';
import '../styles/App.css';

class App extends Component {

  // ESNext syntax, babel auto complies "this" prefix for state so constructor() method can be removed
    state = {
      showLoginForm: true,
      showCheckmark: false,
      // Moving state up
      showLogoutButton: false
    };
  
  // Auto-bind syntax
  handleLogin =()=>{
    this.setState({ 
      showLoginForm: true,
      showCheckmark: true,
      showLogoutButton: true
    });
  }

  handleLogout = ()=>{
    this.setState({
      showLoginForm: true,
      showCheckmark: false,
      showLogoutButton: false
    });
  }


  render() {
    return (
      <div className='app'>
        {/* Benefit is the data is actaully hidden and won't be prerenderd when it was "invisible" */}
        <Navbar ref='navbutton' handleLogout={this.handleLogout} showLogoutButton={this.state.showLogoutButton} />
        {
          this.state.showLoginForm
          &&
          <LoginForm handleLogin={this.handleLogin} />
        }
        {
          this.state.showCheckmark 
          && 
          <div className={'text-center mt9x'}>
            <Glyphicon glyph='glyphicon glyphicon-ok-sign' />
            <h2>Great work!</h2>
          </div>
        }
        <Footer />
      </div>
    );
  }
}

export default App;
