import React from 'react';
import { useState } from "react";

import './publicMain.css';
import './causes.css';

import {TakeActonSuvNav} from "../subNav/subNavigation";
import header7 from '../images/header7.png';

export const TakeAction = () => {
  const [darkMode, setDarkMode] = useState(false);

  return( 
    <div className={darkMode ? "pageMainFrameDark" : "pageMainFrameLight"}>
      <box className = "landingImageBox2" style={{ backgroundImage: `url(${header7})`}}></box>
{/* //////////////////////////////////////////////////////DarkModeFunction////////////////////////////////////////////////////// */}
      <div className="darkModeSwitchContainer">
        <span style={{ color: darkMode ? "grey" : "orange" }}>☀︎</span>  
          <div className="switch-checkbox">
            <label className="switch">
              <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
              <span className="slider round"> </span>
            </label>
          </div>
        <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
      </div>
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

      <body className='pageBodyFrame'>
        <div className='container'>
          
          <div className = "mainSubHeadFrame">
            <line className = "thinLine"></line>
            <subhead className={darkMode ? "subheadLrgDrk" : "subheadLrg"}>Take larger actions</subhead>
          </div>

          <paragragraph className="paragpaphLrg">
            Wass awass
          </paragragraph>

          <box className = "box">
            <box className={darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
              <label className={darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>WWF</label>
              <paragragraph className={darkMode ? "actionParagraph-Dark" : "actionParagraph-Light"}>
                Plastic Pollution are slick
              </paragragraph>
              <button className={darkMode ? "takeActionBtn-Dark" : "takeActionBtn-Light"}>Visit WWF</button>
            </box>

            <image className={darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
              {/* <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${recycle})`}}></div> */}
            </image>
          </box>
        </div>  


        <div className='container'>
          <line className = "largeLine"></line>
          <box className = "box">
            <box className={darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
              <label className={darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>WWF</label>
              <paragragraph className={darkMode ? "actionParagraph-Dark" : "actionParagraph-Light"}>
                Plastic Pollution are slick
              </paragragraph>
              <button className={darkMode ? "takeActionBtn-Dark" : "takeActionBtn-Light"}>Visit WWF</button>
            </box>

            <image className={darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
              {/* <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${recycle})`}}></div> */}
            </image>
          </box>
        </div>


        <div className='container'>
          <line className = "largeLine"></line>
          <box className = "box">
            <box className={darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
              <label className={darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>WWF</label>
              <paragragraph className={darkMode ? "actionParagraph-Dark" : "actionParagraph-Light"}>
                Plastic Pollution are slick
              </paragragraph>
              <button className={darkMode ? "takeActionBtn-Dark" : "takeActionBtn-Light"}>Visit WWF</button>
            </box>

            <image className={darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
              {/* <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${recycle})`}}></div> */}
            </image>
          </box>
        </div>
          

        <div className='container'>
          <line className = "largeLine"></line>
          <box className = "box">
            <box className={darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
              <label className={darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>WWF</label>
              <paragragraph className={darkMode ? "actionParagraph-Dark" : "actionParagraph-Light"}>
                Plastic Pollution are slick
              </paragragraph>
              <button className={darkMode ? "takeActionBtn-Dark" : "takeActionBtn-Light"}>Visit WWF</button>
            </box>

            <image className={darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
              {/* <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${recycle})`}}></div> */}
            </image>
          </box>
        </div>

        <div className='container'>
          <line className = "largeLine"></line>
          <box className = "box">
            <box className={darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
              <label className={darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>WWF</label>
              <paragragraph className={darkMode ? "actionParagraph-Dark" : "actionParagraph-Light"}>
                Plastic Pollution are slick
              </paragragraph>
              <button className={darkMode ? "takeActionBtn-Dark" : "takeActionBtn-Light"}>Visit WWF</button>
            </box>

            <image className={darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
              {/* <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${recycle})`}}></div> */}
            </image>
          </box>
        </div>

      </body>
      <TakeActonSuvNav/>
    </div>
  );
}