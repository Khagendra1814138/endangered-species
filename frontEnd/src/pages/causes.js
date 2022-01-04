import React from "react";

import './publicMain.css';
import {CausesSuvNav} from "../subNav/subNavigation";

export const Causes = () => {
  return( 
    <div className="pageMainFrame">
      <body className='pageBodyFrame'>

        <div className='container'>

          <div className = "mainSubHeadFrame">
            <line className = "thinLine"></line>
              <subhead className = "subheadLrg">Causes threatning the species</subhead>
            <line className = "thinLine"></line>
          </div>

          <paragragraph className="paragpaphLrg">
            Wass awass
          </paragragraph>

          <box className = "box">
            <image className='imageMedium'>Threat Image</image>
            <box className = "threatParagraphFrame">
              <label className='threatTitle'>Plastic Pollution</label>
              <paragragraph className='paragraphMed'>AMPHIBIANS</paragragraph>
            </box>
          </box>

          <line className = "largeLine"></line>

          <box className = "box">
            <image className='imageMedium'>Threat Image</image>
            <box className = "threatParagraphFrame">
              <label className='threatTitle'>Global Warming</label>
              <paragragraph className='paragraphMed'>AMPHIBIANS</paragragraph>
            </box>
          </box>
          
          <line className = "largeLine"></line>

          <box className = "box">
            <image className='imageMedium'>Threat Image</image>
            <box className = "threatParagraphFrame">
              <label className='threatTitle'>Threat Sub-Head</label>
              <paragragraph className='paragraphMed'>AMPHIBIANS</paragragraph>
            </box>
          </box>

          <line className = "largeLine"></line>

          <box className = "box">
            <image className='imageMedium'>Threat Image</image>
            <box className = "threatParagraphFrame">
              <label className='threatTitle'>Threat Sub-Head</label>
              <paragragraph className='paragraphMed'>AMPHIBIANS</paragragraph>
            </box>
          </box>

        </div>
        
      </body>
      <CausesSuvNav/>
    </div>
  );
}