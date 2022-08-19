import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "../../Button";
import "../pages/NavbarStyle.css"
import { IconContext } from 'react-icons/lib';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showWindow = () => {
    if( window.innerWidth <= 499 ) {
      setButton(false);
    } else {
      setButton(true);
    }
  }

  window.addEventListener('resize', showWindow)

  useEffect (() => {
    showWindow();
  }, [])

  return (
    <>
    <IconContext.Provider value={{ color: '#fff' }}>
      <div className="navbar">
        <div className='navbar-container container'>
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <MdFingerprint className="navbar-icon"/>
            WALKER
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/service" className="nav-links" onClick={closeMobileMenu}>
                Service
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/product" className="nav-links" onClick={closeMobileMenu}>
                Product
              </Link>
            </li>
            <li className="nav-btn">
              {button ? (
                <Link to='/sign-up' className="btn-link" onClick={closeMobileMenu}>
                  <Button buttonstyle="btn--outline">SIGN UP</Button>
                </Link>
              ) : (
                <Link className="btn-link" >
                  <Button buttonstyle="btn--outline" buttonSize="btn--mobile" >
                    SIGN UP
                  </Button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
