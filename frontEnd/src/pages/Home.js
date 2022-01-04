import React from 'react';

import './publicMain.css';
import './Home.css';

import {HomeSuvNav} from "../subNav/subNavigation";


export const Home = () => {
  return (
    <div className="pageMainFrame">
      <box className = "landingImageBox">Header image</box>
      <body className='pageBodyFrame'>
        <div className='container'>
          <div className = "mainSubHeadFrame">
            <line className = "thinLine"></line>
              <subhead className = "subheadLrg">Extinct species!</subhead>
            <line className = "thinLine"></line>
          </div>
    

          <box className = "box">
            <box className = "speciesMainFrame">
              <image className='speciesImageLrg'>speciesImage</image>
              <label className='speciesName'>Name</label>
            </box>

            <box className = "speciesMainFrame">
              <image className='speciesImageLrg'>speciesImage</image>
              <label className='speciesName'>Name</label>
            </box>
          </box>

          <box className = "box">
            <box className = "speciesMainFrame">
              <image className='speciesImageMid'>speciesImage</image>
              <label className='speciesName'>Name</label>
            </box>

            <box className = "speciesMainFrame"> 
              <image className='speciesImageMid'>speciesImage</image>
              <label className='speciesName'>Name</label>
            </box>

            <box className = "speciesMainFrame"> 
              <image className='speciesImageMid'>speciesImage</image>
              <label className='speciesName'>Name</label>
            </box>
          </box>

          <paragragraph className="paragpaphLrg">
            Wass awass
          </paragragraph>
        </div>

        <div className='container'>
          <div className = "mainSubHeadFrame">
            <line className = "thinLine"></line>
            <subhead className = "subheadLrg">Why protect these species?</subhead>
            <line className = "thinLine"></line>
          </div>

          <box className = "box">
            <box className = "speciesMainFrame">
              <image className='speciesImageMid'>speciesImage</image>
              <label className='speciesName'>For Future Generation</label>
            </box>
            <box className = "speciesMainFrame"> 
              <image className='speciesImageMid'>speciesImage</image>
              <label className='speciesName'>Environment & Other Animals</label>
            </box>
            <box className = "speciesMainFrame"> 
              <image className='speciesImageMid'>speciesImage</image>
              <label className='speciesName'>Medical Purpose</label>
            </box>
          </box>
          
          <box className = "box2">
            <paragragraph className="paragpaphLrg">
              Wass awass
            </paragragraph>
            
            <paragragraph className="paragpaphLrg">
              Wass awass
            </paragragraph>
            
            <paragragraph className="paragpaphLrg">
              Wass awass
            </paragragraph>
          </box>
        </div>

      </body>
      <HomeSuvNav/>
    </div>
  );
}
  
