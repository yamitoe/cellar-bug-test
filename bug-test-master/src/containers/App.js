import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoginForm from "../components/LoginForm"
import { Glyphicon } from 'react-bootstrap';
import '../styles/App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showLoginForm: true,
      showCheckmark: false
    };
  }
  // Auto-bind syntax
  handleLogin =()=>{
    this.refs.navbutton.handleLogoutButton();
    this.setState({ 
      showLoginForm: true,
      showCheckmark: true
    });
  }

  handleLogout = ()=>{
    this.refs.navbutton.handleLogoutButton();
    this.setState({
      showLoginForm: true,
      showCheckmark: false
    });
  }

  render() {
    return (
      <div className='app'>
        <Navbar ref='navbutton' handleLogout={this.handleLogout} />
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
