import React from 'react';

import './publicMain.css';
import './logIn.css';
// import {TakeActonSuvNav} from "../subNav/subNavigation";

export const LogInPage = () => {
    return( 
      <div className="pageMainFrame">
        <body className='pageBodyFrame'>
                
            <div className='container'>

                <div className = "mainSubHeadFrame">
                    <subhead className = "subheadLrg">Log-In</subhead>
                </div>

                <box className = "box3">
                    <box className = "LoginformFrame">
                        <form>
                            <label className='registerLabel'>NAME</label>
                            <input type="text" name="name" className='inputBox'/>

                            <label className='registerLabel'>PASSWORD</label>
                            <input type="text" name="password" className='inputBox'/>
                        </form>   
                    </box>
                    <input type="submit" value="LOG IN" className='signUpBtn'/>
                </box>
            </div>
  
        </body>
      </div>
    );
  }