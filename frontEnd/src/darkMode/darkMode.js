import React from 'react';
import { useState } from "react";

import './darkMode.css';


function DarkMode() {
    const [darkMode, setDarkMode] = useState(false);

    return (

        <div className={darkMode ? "pageMainFrameDark" : "pageMainFrameLight"}>
     
               
                    <span style={{ color: darkMode ? "grey" : "orange" }}>☀︎</span>
                    
                    <div className="switch-checkbox">
                        <label className="switch">
                            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
                            <span className="slider round"> </span>
                        </label>
                    </div>

                    <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
                 
                    <h1>Cool its {darkMode ? "Dark" : "Light"} Mode </h1>



                    <div className="darkModeFrame">

                        <div className = "mainSubHeadFrame">
                            <line className = "thinLine"></line>
                            <subhead className = {darkMode ? "subheadLrgDrk" : "subheadLrg"}>Why protect these species?</subhead>
                        </div>
        
                    </div>
    
        </div>
    );
  }
  
  export default DarkMode;