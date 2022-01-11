import React from 'react';

import './publicMain.css';
import {TakeActonSuvNav} from "../subNav/subNavigation";


export const TakeAction = () => {
  return( 
    <div className="pageMainFrame">
      <body className='pageBodyFrame'>

        <div className='container'>
          
          <div className = "mainSubHeadFrame">
            <line className = "thinLine"></line>
            <subhead className = "subheadLrg">Take larger actions</subhead>
          </div>

          <paragragraph className="paragpaphLrg">
            Wass awass
          </paragragraph>

          <box className = "box">
            <box className = "threatParagraphFrame">
              <label className='threatTitle'> WWF </label>
              <paragragraph className='actionParagraph'>AMPHIBIANS</paragragraph>
              <button className='takeActionBtn'>Visit WWF</button>
            </box>
            <image className='imageMedium'>Threat Image</image>
          </box>

          <box className = "box">
            <box className = "threatParagraphFrame">
              <label className='threatTitle'>Threat Sub-Head</label>
              <paragragraph className='actionParagraph'>AMPHIBIANS</paragragraph>
              <button className='takeActionBtn'>Go there</button>
            </box>
            <image className='imageMedium'>Threat Image</image>
          </box>
          
          <line className = "largeLine"></line>

          <box className = "box">
            <box className = "threatParagraphFrame">
              <label className='threatTitle'> WWF </label>
              <paragragraph className='actionParagraph'>AMPHIBIANS</paragragraph>
              <button className='takeActionBtn'>Visit WWF</button>
            </box>
            <image className='imageMedium'>Threat Image</image>
          </box>

          <box className = "box">
            <box className = "threatParagraphFrame">
              <label className='threatTitle'>Threat Sub-Head</label>
              <paragragraph className='actionParagraph'>AMPHIBIANS</paragragraph>
              <button className='takeActionBtn'>Go there</button>
            </box>
            <image className='imageMedium'>Threat Image</image>
          </box>


        </div>

      </body>
      <TakeActonSuvNav/>
    </div>
  );
}