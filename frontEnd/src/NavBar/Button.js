import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

import { RiLoginBoxFill } from 'react-icons/ri';
import { FaAddressBook } from 'react-icons/fa';

export function SignUpButton (){
    return(
        <Link exact to="./SignUp" id="loginSignup">
            <button className="btn"><FaAddressBook size="1.2em" color="white"/> Sign Up </button>
        </Link>
    )
}

export function LogInButton (){
    return(
        <Link exact to="./logIn" id="loginSignup">
            <button className="btn"><RiLoginBoxFill size="1.4em" color="white"/> Log In </button>
        </Link>
    )
}