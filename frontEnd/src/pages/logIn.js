import React from 'react';

import './publicMain.css';
import './logIn.css';

import {RiLoginBoxFill} from 'react-icons/ri';

import {SignInSuvNav} from "../subNav/subNavigation";

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
                            <input type="text" name="name" className='inputBox' placeholder='Enter your name'/>

                            <label className='registerLabel'>PASSWORD</label>
                            <input type="text" name="password" className='inputBox' placeholder='Enter your password'/>
                        </form>   
                    </box>
                    
                    <button type="submit" value="LOG IN" className='signUp-In-Btn'>
                        <box className="restartButtonIcon"><RiLoginBoxFill size="2em" color="white"/></box>
                        <label className='restartButtonLabel'>Log-In</label>
                    </button>
                </box>
            </div>

        </body>
        <SignInSuvNav/>
        </div>
    );
}