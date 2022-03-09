import React from 'react';

import './darkMode.css';


export default function DarkModeFunction({ darkMode, setDarkmode }){
	return(
        <div className="darkModeSwitchContainer">
          
          <span style={{ color: darkMode ? "grey" : "orange" }}>
            <div className="darmodeLabel">Light</div>☀︎
          </span>  
            <div className="switch-checkbox"> 
              <label className="switch"> 
                <input type="checkbox" onChange={() => setDarkmode(!darkMode)} /> 
                <span className="slider round" > </span>
              </label>
            </div>
          <span style={{ color: darkMode ? "#00ACED" : "grey" }}>☽
            <div className="darmodeLabel">Dark</div>
          </span>
        </div>
	);
};