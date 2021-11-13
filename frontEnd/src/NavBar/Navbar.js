import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);

  const onMouseEnter = () => {
      setDropdown(true);
  };

  const onMouseLeave = () => {
      setDropdown(false);
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='./Home/home' className='navbar-logo'> EPIC </Link>
        <div className='menu-icon' onClick={handleClick}>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          <li className='nav-item'>
            <Link to='/' className='nav-links'> Home </Link>
          </li>

          <li className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to='./esPages/esHome' className='nav-links'> Endangered Species </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link
              to='/'
              className='nav-links'
              
            >
              Causes
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              to='/'
              className='nav-links'
            >
              Your Action
            </Link>
          </li>
 
        </ul>
        <Button/>
      </nav>
    </>
  );
}

export default Navbar;