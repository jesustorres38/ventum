import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Header extends Component {

  render() {
    const {pathname} = this.props.location;

    return (
      <div className='Header'>


        <div className='Navbar_Desktop'>
          <div className="Navbar_Logo">
            <Link to='/'><img src="/images/logo.jpg" alt="logo-ventum" /></Link>
          </div>

          <div className="Navbar_Content">

            <div className="contacto">
              <a href="tel:+34626482695">Contact: <span>+34 626 482 695</span></a>
              <a href="mailto:info@ventum.barcelona">Email: <span>info@ventum.barcelona</span></a>
              <div className="redes">
                <a href="https://www.facebook.com/ventum.bcn/" target='_blank' rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/ventum.barcelona/" target='_blank' rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              </div>
            </div>

            <div className="links">
              <ul>

                <li className={pathname === '/' ? 'active':''}><Link to="/">Home</Link></li>
                <li className={pathname === '/equipment' ? 'active':''}><Link to="/equipment">Equipment</Link></li>
                <li className={pathname === '/itinerary' ? 'active':''}><Link to="/itinerary">Itinerary</Link></li>
                <li className={pathname === '/prices' ? 'active':''}><Link to="/prices">Prices</Link></li>
                <li className={pathname === '/contact' ? 'active':''}><AnchorLink href='#contact'>Contact</AnchorLink></li>
                
              </ul>
            </div>

          </div>

        </div>



        <div className='Navbar_Mobile'>

          <i className="fas fa-bars" id='bars' onClick={() => {this.abrir()}}></i>
          <i className="fas fa-times hide" id='times' onClick={() => {this.cerrar()}}></i>
         
          <div className='wrapper cerrado' id='sideNav'>

            <div className="content">

              <a href="tel:+34626482695">Call: <span>+34 626 482 695</span></a>
              <a href="mailto:info@ventum.barcelona">Email: <span>info@ventum.barcelona</span></a>
              <div className="redes">
                <a href="https://www.facebook.com/ventum.bcn/" target='_blank' rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/ventum.barcelona/" target='_blank' rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              </div>
              <Link id='link' to="/" className={pathname === '/' ? 'active link':'link'}>Home</Link>
              <Link id='link' to="/equipment" className={pathname === '/equipment' ? 'active link':'link'}>Equipment</Link>
              <Link id='link' className={pathname === '/itinerary' ? 'active link':'link'} to="/itinerary">Itinerary</Link>
              <Link id='link' to="/prices" className={pathname === '/prices' ? 'active link':'link'}>Prices</Link>
              <AnchorLink id='link' href='#contact' className='link'>Contact</AnchorLink>
              <div className="logo">
                <Link to='/'><img id='link'  src="/images/logo-mobile.png" alt="logo-ventum" /></Link>
              </div>         
                
            </div>
          
          </div>
        </div>
      </div>
    );
  }

  abrir = () => {
    document.getElementById('sideNav').classList.add('abierto')
    document.getElementById('bars').classList.add('hide')
    document.getElementById('times').classList.remove('hide')
    document.addEventListener('click', this.outsideClickListener);
  }

  cerrar = () => {
    document.getElementById('sideNav').classList.remove('abierto');
    document.getElementById('bars').classList.remove('hide')
    document.getElementById('times').classList.add('hide')
  }

  outsideClickListener = (event) => {
    if(event){
        this.cerrar();
        document.removeEventListener('click', this.outsideClickListener)
    }
  }


}

export default Header;