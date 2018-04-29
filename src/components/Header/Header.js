import React, { Component } from 'react';
// import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Navbar_Desktop">
          <div className="Navbar_Logo">

          </div>

          <div className="Navbar_Content">
            <div className="contacto">
              <a href="tel:666734745">Contact: <span>+34 666 734 745</span></a>
            </div>
            <div className="links">
              
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Header;