import { Link } from 'react-router-dom';

import { FaBook } from 'react-icons/fa';


import { SignUpButton, LogInButton } from './Button';

import './loginNavBar.css';


function LoginNavbar() {
    return (
      <div>
        <nav id='loginNavbar'>
          <Link to='/' className='navbar-logo'> <FaBook size="2.6em" color="#1888ff"/>
          <div id='logoLabel'>  
            Endangered <br></br>
            Species 
            </div>
          </Link>
          <LogInButton/>
          <SignUpButton/>
        </nav>
      </div>
    );
  }
  
  export default LoginNavbar;