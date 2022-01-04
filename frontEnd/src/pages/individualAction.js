import React from 'react';

import './publicMain.css';
import {IndividualActonSuvNav} from "../subNav/subNavigation";

export const IndividualAction = () => {
  return( 
    <div className="pageMainFrame">
      <body className='pageBodyFrame'>

        <div className='container'>
    
          <div className = "mainSubHeadFrame">
            <line className = "thinLine"></line>
              <subhead className = "subheadLrg">Take daily individual actions</subhead>
            <line className = "thinLine"></line>
          </div>

          <paragragraph className="paragpaphLrg">
            Wass awass
          </paragragraph>

          <box className = "box">
            <box className = "threatParagraphFrame">
              <label className='threatTitle'>Threat Sub-Head</label>
              <paragragraph className='paragraphMed'>AMPHIBIANS</paragragraph>
            </box>
            <image className='imageMedium'>Threat Image</image>
          </box>

          <line className = "largeLine"></line>

          <box className = "box">
            <box className = "threatParagraphFrame">
              <label className='threatTitle'>Threat Sub-Head</label>
              <paragragraph className='paragraphMed'>AMPHIBIANS</paragragraph>
            </box>
            <image className='imageMedium'>Threat Image</image>
          </box>
          
          <line className = "largeLine"></line>

          <box className = "box">
            <box className = "threatParagraphFrame">
              <label className='threatTitle'>Threat Sub-Head</label>
              <paragragraph className='paragraphMed'>AMPHIBIANS</paragragraph>
            </box>
            <image className='imageMedium'>Threat Image</image>
          </box>

          <line className = "largeLine"></line>

          <box className = "box">
            <box className = "threatParagraphFrame">
              <label className='threatTitle'>Threat Sub-Head</label>
              <paragragraph className='paragraphMed'>AMPHIBIANS</paragragraph>
            </box>
            <image className='imageMedium'>Threat Image</image>
          </box>
          
        </div>

      </body>
      <IndividualActonSuvNav/>
    </div>
  );
}