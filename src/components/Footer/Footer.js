import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    const { pathname } = this.props.location;
    return (
      <div className="Footer" id='contact'>
        <div className="Footer-1">
          <div className="info">
            <Link to='/'><img src="/images/logo-footer.png" alt="logo-footer" /></Link>
            <a href="tel:+34626482695">Phone: <span>+34 626 482 695</span></a>
            <a href="mailto:marcabad@ventum.barcelona">Email: <span>marcabad@ventum.barcelona</span></a>
            <p>C/ Port Olimpic de Barcelona <br/> CP: 08005 Barcelona (Spain)</p>
          </div>
          <div className="redes">
            <h1>Follow us:</h1>
            <p><i className="fab fa-facebook-f"></i><a href="https://www.facebook.com/ventum.bcn/" target='_blank' rel="noopener noreferrer">Facebook</a></p>
            <p><i className="fab fa-instagram"></i><a  href="https://www.instagram.com/ventum.barcelona/" target='_blank' rel="noopener noreferrer">Instagram</a></p>
          </div>
          <div className="menu">
            <h1>See more:</h1>
            <div>
              <Link className={pathname === '/equipment' ? 'active':''} to="/equipment">Equipment</Link>
              <Link className={pathname === '/itinerary' ? 'active':''}to="/itinerary">Itinerary</Link>
              <Link className={pathname === '/prices' ? 'last active':'last'} to="/prices">Prices</Link>
            </div>
          </div>
        </div>
        <div className="Footer-2">
          <p><i className="far fa-copyright"></i> Copyright {(new Date()).getFullYear()} Ventum Barcelona</p>
        </div>
      </div>
    );
  }
}

export default Footer;