import React from "react";

import './publicMain.css';
import './endangeredSpecies.css';

import {EndangeredSpeciesSuvNav} from "../subNav/subNavigation";

export const EndangeredSpecies = () => {
  return( 
    <div className="pageMainFrame">
      <body className='pageBodyFrame'>
        <div className='container'>
          <div className = "mainSubHeadFrame">
            <line className = "thinLine"></line>
              <subhead className = "subheadLrg">Endangered Species</subhead>
            <line className = "thinLine"></line>
          </div>

          <paragragraph className="paragpaphLrg">
            Wass awass
          </paragragraph>

          <box className = "box">
            <box className = "speciesMainFrame">
              <image className='speciesImageMid'>speciesImage</image>
              <label className='speciesName'>A M P H I B I A N S</label>
            </box>

            <box className = "speciesMainFrame"> 
              <image className='speciesImageMid'>speciesImage</image>
              <label className='speciesName'>B I R D S</label>
            </box>

            <box className = "speciesMainFrame">
              <image className='speciesImageMid'>speciesImage</image> 
              <label className='speciesName'>M A M M E L S</label>
            </box>
          </box>

          <line className = "largeLine"></line>

          <box className = "box">
            <box className = "speciesMainFrame">
              <image className='speciesImageMid'>speciesImage</image>
              <label className='speciesName'>A Q U A T I C</label>
            </box>

            <box className = "speciesMainFrame">
              <image className='speciesImageMid'>speciesImage</image> 
              <label className='speciesName'>A R T I C</label>
            </box>

            <box className = "speciesMainFrame">
              <image className='speciesImageMid'>speciesImage</image> 
              <label className='speciesName'>P L A N T S</label>
            </box>
          </box>

          <line className = "largeLine"></line>

          <box className = "box">
            <box className = "speciesMainFrame">
              <image className='speciesImageMid'>speciesImage</image>
              <label className='speciesName'>F U N G U S</label>
            </box>
            
            <line className = "largeLineDown"></line>

            <box className = "speciesMainFrame"> 
              <image className='speciesImageMid'>speciesImage</image>
              <label className='speciesName'>Endangered Species in UK</label>
            </box>
          </box>


          <paragragraph className="paragpaphLrg">
            Wass awass
          </paragragraph>
        </div>

      </body>

      <EndangeredSpeciesSuvNav/>
    </div>
  );
}