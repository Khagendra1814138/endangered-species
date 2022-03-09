import React from 'react';

import './publicMain.css';
import './signUp.css';

import {FaAddressBook} from 'react-icons/fa';

import {SignUpSuvNav} from "../subNav/subNavigation";

export const SignUp = () => {
  return( 
      <div className="pageMainFrame">
        <body className='pageBodyFrame'>

          <div className='container'>

            <div className = "mainSubHeadFrame">
                <subhead className = "subheadLrg">Sign-Up</subhead>
            </div>

            <box className = "box3">
              <box className = "formFrame">
                <form>
                  <label className='registerLabel'>ENTER NAME</label>
                  <input type="text" name="name" className='inputBox' placeholder='Enter your user name'/>

                  <label className='registerLabel'>PASSWORD</label>
                  <input type="text" name="password" className='inputBox' placeholder='Enter your password'/>
                  
                  <label className='registerLabel'>EMAIL</label>
                  <input type="text" name="email" className='inputBox' placeholder='Enter your email'/>
                </form>   
              </box>
              
              <button type="submit" value="SIGN UP" className='signUp-In-Btn'>
                <box className="restartButtonIcon"><FaAddressBook size="2em" color="white"/></box>
                <label className='restartButtonLabel'>Sign-Up</label>
              </button>
            </box>

          </div>

        </body>
        <SignUpSuvNav/>
    </div>
  );
}