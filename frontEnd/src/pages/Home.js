import React from 'react';
import { useState } from "react";

import './publicMain.css';
import './Home.css';
import './darkmodeFunction.css';

import {HomeSuvNav} from "../subNav/subNavigation";


import headerImg from '../images/headerImg.png';
import splendedFrog from '../images/extinctSpecies/splendedFrog.jpg';
import goldenToad from '../images/extinctSpecies/goldenToad.jpg';
import PintaGiantTortise from '../images/extinctSpecies/PintaGiantTortise.jpg';
import PyreneanIbex from '../images/extinctSpecies/PyreneanIbex.jpg';
import WesternBlackRhinoceros from '../images/extinctSpecies/WesternBlackRhinoceros.jpg';

import futureGeneration from '../images/futureGeneration.jpg';
import environment from '../images/environment.jpg';
import medical from '../images/medical.jpg';


export const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "pageMainFrameDark" : "pageMainFrameLight"}>
      <box className = "landingImageBox" style={{ backgroundImage: `url(${headerImg})`}}></box>

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
            <subhead className = {darkMode ? "subheadLrgDrk" : "subheadLrg"}>Extinct Species!</subhead>
          </div>
    

          <box className = "box">
            <box className = "speciesMainFrame">
              <image className= {darkMode ? "extSpeciesImageLrgDark" : "extSpeciesImageLrgLight"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${splendedFrog})`}}></div>
              </image>
              <label className= {darkMode ? "extinctSpeciesName-Dark" : "extinctSpeciesName-Light"}>Name</label>
            </box>

            <box className = "speciesMainFrame">
              <image className= {darkMode ? "extSpeciesImageLrgDark" : "extSpeciesImageLrgLight"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${goldenToad})`}}></div>
              </image>
              <label className= {darkMode ? "extinctSpeciesName-Dark" : "extinctSpeciesName-Light"}>Name</label>
            </box>
          </box>

          <box className = "box">
            <box className = "speciesMainFrame">
              <image className= {darkMode ? "extSpeciesImageMidDark" : "extSpeciesImageMidLight"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${PintaGiantTortise})`}}></div>
              </image>
              <label className= {darkMode ? "extinctSpeciesName-Dark" : "extinctSpeciesName-Light"}>Name</label>
            </box>

            <box className = "speciesMainFrame"> 
              <image className= {darkMode ? "extSpeciesImageMidDark" : "extSpeciesImageMidLight"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${PyreneanIbex})`}}></div>
              </image>
              <label className= {darkMode ? "extinctSpeciesName-Dark" : "extinctSpeciesName-Light"}>Name</label>
            </box>

            <box className = "speciesMainFrame"> 
              <image className= {darkMode ? "extSpeciesImageMidDark" : "extSpeciesImageMidLight"}> 
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${WesternBlackRhinoceros})`}}></div> 
              </image>
              <label className= {darkMode ? "extinctSpeciesName-Dark" : "extinctSpeciesName-Light"}>Name</label>
            </box>
          </box>

          <paragragraph className = {darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
            Wass awass
          </paragragraph>
        </div>
      
        <div className='container'>
          <div className = "mainSubHeadFrame">
            <line className = "thinLine"></line>
            <subhead className = {darkMode ? "subheadLrgDrk" : "subheadLrg"}>Why protect these species?</subhead>
          </div>

          <box className = "box">
            <box className = "whyProtectFrame">
              <image className= {darkMode ? "extSpeciesImageMidDark" : "extSpeciesImageMidLight"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${futureGeneration})`}}></div> 
              </image>      
              <paragragraph className= {darkMode ? "verySmallPara-Dark" : "verySmallPara-Light"}>bla</paragragraph>
              <label className= {darkMode ? "whyProtectLabel-Dark" : "whyProtectLabel-Light"}>For Future Generation</label>
            </box>
            <box className = "whyProtectFrame"> 
              <image className= {darkMode ? "extSpeciesImageMidDark" : "extSpeciesImageMidLight"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${environment})`}}></div> 
              </image>
              <paragragraph className= {darkMode ? "verySmallPara-Dark" : "verySmallPara-Light"}>bla</paragragraph>
              <label className= {darkMode ? "whyProtectLabel-Dark" : "whyProtectLabel-Light"}>Enviro... & Other Species</label>
            </box>
            <box className = "whyProtectFrame"> 
              <image className= {darkMode ? "extSpeciesImageMidDark" : "extSpeciesImageMidLight"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${medical})`}}></div> 
              </image>
              <paragragraph className= {darkMode ? "verySmallPara-Dark" : "verySmallPara-Light"}>bla</paragragraph>
              <label className= {darkMode ? "whyProtectLabel-Dark" : "whyProtectLabel-Light"}>Medical Purpose</label>
            </box>
          </box>
        </div>
      </body>
      <HomeSuvNav/>
    </div>
  );
}
  