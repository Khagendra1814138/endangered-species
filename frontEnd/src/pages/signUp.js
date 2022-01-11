import React from 'react';

import './publicMain.css';
import './signUp.css';

import {SignUpSuvNav} from "../subNav/subNavigation";


export const SignUp = () => {
  return( 
      <div className="pageMainFrame">
        <body className='pageBodyFrame'>

          <div className='container'>

            <div className = "mainSubHeadFrame">
              <line className = "thinLine"></line>
                <subhead className = "subheadLrg">Sign-Up</subhead>
              <line className = "thinLine"></line>
            </div>

            <box className = "box3">
              <box className = "formFrame">
                <form>
                  <label className='registerLabel'>ENTER NAME</label>
                  <input type="text" name="name" className='inputBox'/>

                  <label className='registerLabel'>PASSWORD</label>
                  <input type="text" name="password" className='inputBox'/>
                  
                  <label className='registerLabel'>EMAIL</label>
                  <input type="text" name="email" className='inputBox'/>
                </form>   
              </box>
              <input type="submit" value="SIGN UP" className='signUpBtn'/>
            </box>

          </div>

        </body>
        <SignUpSuvNav/>
    </div>
  );
}