import React, { useState } from 'react';
import { SignUpButton } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';

import {FaBook} from 'react-icons/fa';
import {FaAngleDown} from 'react-icons/fa';



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
    <div>
      <nav className='navbar'>
        
        <Link to='/' className='navbar-logo'> <FaBook size="2.5em" color="#1888ff"/> </Link>

        <div className='menu-icon' onClick={handleClick}></div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          <li className='nav-item'>
            <Link to='/' className='nav-links'> Home </Link>
          </li>

          <li className='nav-item'onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <Link to='/endangeredSpecies' className='nav-links'> Endangered Species <FaAngleDown size="1.5em" color="white"/> </Link>
            {dropdown && <Dropdown />}
          </li>

          <li className='nav-item'>
            <Link to='/causes' className='nav-links'>Causes</Link>
          </li>

          <li className='nav-item'>
            <Link to='/individualAction'className='nav-links'>Individual Action</Link>
          </li>

          <li className='nav-item'>
            <Link to='/takeAction'className='nav-links'>Take Action</Link>
          </li>

        </ul>
        <SignUpButton/>
      </nav>
    </div>
  );
}

export default Navbar;