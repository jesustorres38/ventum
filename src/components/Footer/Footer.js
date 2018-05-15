import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './App.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <div className="Footer-1">
          <div className="info">
            <img src="/images/logo-footer.png" alt="logo-footer" />
            <a href="tel:+34626482695">Phone: <span>+34 626 482 695</span></a>
            <a href="mailto:marcabad@ventum.barcelona">Email: <span>marcabad@ventum.barcelona</span></a>
            <p>C/ Port Barcelona <br/> CP: 08025 Barcelona (Spain)</p>
          </div>
          <div className="menu">
            <Link to="/equipment">Equipment</Link>
            <Link to="/itinerary">Itinerary</Link>
            <Link className="last" to="/prices">Prices</Link>
          </div>
          <div className="redes">
            <p>REDES</p>
          </div>
          
        </div>
        <div className="Footer-2">
          <p>&copy; Copyright {(new Date()).getFullYear()} Ventum Barcelona</p>
        </div>
      </div>
    );
  }
}

export default Footer;