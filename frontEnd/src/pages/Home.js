import React from 'react';
import { useState } from "react";

import './publicMain.css';
import './Home.css';
import './darkmodeFunction.css';

import {FaPlusSquare} from 'react-icons/fa';
import {FaMinusSquare} from 'react-icons/fa';

import {HomeSuvNav} from "../subNav/subNavigation";


import headerImg from '../images/headerImg.png';
import splendedFrog from '../images/extinctSpecies/splendedFrog.jpg';
import goldenToad from '../images/extinctSpecies/goldenToad.jpg';
import PintaGiantTortise from '../images/extinctSpecies/PintaGiantTortise.jpg';
import PyreneanIbex from '../images/extinctSpecies/PyreneanIbex.jpg';
import WesternBlackRhinoceros from '../images/extinctSpecies/WesternBlackRhinoceros.jpg';

import futureGeneration from '../images/futureGeneration.jpg';
import agriculture from '../images/agriculture.png';
import medical from '../images/medical.jpg';
import balanceEco from '../images/balanceEco.png';
import research from '../images/research.png';
import ecosystemService from '../images/ecosystemService.png';

//Sources for the information used:
// https://www.fws.gov/nativeamerican/pdf/why-save-endangered-species.pdf
// https://www.endangered.org/importance-of-the-endangered-species-act/

export const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(20);

  function FontSizeIncreaser(){
    return(
      <div className='buttonsContainer'>
        <button className="paraButton" onClick={() => setFontSize(fontSize + 2)}><FaPlusSquare size="3em" color="orange"/></button>
        <div className='fontSizeDisplay'>{fontSize}</div>
        <button className="paraButton" onClick={() => setFontSize(fontSize - 2)}><FaMinusSquare size="3em" color="orange"/></button>
      </div>
    )
  };


  return (
    <div className={darkMode ? "pageMainFrameDark" : "pageMainFrameLight"}>
      <FontSizeIncreaser/>
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
          
       
          <paragragraph style={{fontSize: `${fontSize}px`}} className = {darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
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
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${agriculture})`}}></div> 
              </image>
              <paragragraph className= {darkMode ? "verySmallPara-Dark" : "verySmallPara-Light"}>
                There are insects and other animals species that prey on certain crop and rice paddy pests. Cetrian plants species contain natural-toxins,
                which can repel harmful insects. These are called “biological controls,” and are a safe, effective,
                and less expensive alternative to synthetic chemicals.
              </paragragraph>
              <label className= {darkMode ? "whyProtectLabel-Dark" : "whyProtectLabel-Light"}>Agriculture</label>
            </box>

            <box className = "whyProtectFrame">
              <image className= {darkMode ? "extSpeciesImageMidDark" : "extSpeciesImageMidLight"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${futureGeneration})`}}></div> 
              </image>
              <paragragraph className= {darkMode ? "verySmallPara-Dark" : "verySmallPara-Light"}>
                People get a lot of pleasure out of seeing and interacting with animals species. 
                so species that go extinct now are no longer around for us or future generations to see and enjoy.
                They can only learn about them in books and on the internet.  And, that is heartbreaking.
              </paragragraph>
              <label className= {darkMode ? "whyProtectLabel-Dark" : "whyProtectLabel-Light"}>For Future Generation</label>
            </box>

            <box className = "whyProtectFrame"> 
              <image className= {darkMode ? "extSpeciesImageMidDark" : "extSpeciesImageMidLight"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${medical})`}}></div> 
              </image>
     
                <paragragraph className= {darkMode ? "verySmallPara-Dark" : "verySmallPara-Light"}>
                  Over 50% of the 150 most prescribed medicines were originally derived from a plant or other natural product. 
                  The cures for many diseases may eventually come from plants, therefore,
                  we must protect all species before they are lost forever from nature’s medicine cabinet.
                </paragragraph>
              
              <label className= {darkMode ? "whyProtectLabel-Dark" : "whyProtectLabel-Light"}>Medical Purpose</label>
            </box>
          </box>

          <box className = "box">
            <box className = "whyProtectFrame">
              <image className= {darkMode ? "extSpeciesImageMidDark" : "extSpeciesImageMidLight"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${balanceEco})`}}></div> 
              </image>
               
                <paragragraph className= {darkMode ? "verySmallPara-Dark" : "verySmallPara-Light"}>
                  Animals and plant species are the key foundation of a Healthy ecosystems. 
                  When a species becomes endangered, then it indicates that the ecosystem is slowly falling apart. 
                  Healthy ecosystem ensures that human beings have access to clean air and water, and fertile land for agriculture. 
                </paragragraph>
            
              <label className= {darkMode ? "whyProtectLabel-Dark" : "whyProtectLabel-Light"}>Balance Ecosystem</label>
            </box>

            <box className = "whyProtectFrame"> 
              <image className= {darkMode ? "extSpeciesImageMidDark" : "extSpeciesImageMidLight"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${research})`}}></div> 
              </image>
     
                <paragragraph className= {darkMode ? "verySmallPara-Dark" : "verySmallPara-Light"}>
                  Many individual species are uniquely important as indicators of
                  environmental quality. Such as, freshwater fishes are indication of a healthy water.
                  So if a ntive species starts to rapidly decline, then its a sign of threat/danger,
                  allowing us to step-in find a solution to resolve that threat. 
                </paragragraph>
       
              <label className= {darkMode ? "whyProtectLabel-Dark" : "whyProtectLabel-Light"}>Monitor Environment</label>
            </box>
            
            <box className = "whyProtectFrame"> 
              <image className= {darkMode ? "extSpeciesImageMidDark" : "extSpeciesImageMidLight"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${ecosystemService})`}}></div> 
              </image>
      
                <paragragraph className= {darkMode ? "verySmallPara-Dark" : "verySmallPara-Light"}>
                  This include air & water purification, detoxification and decomposition of wastes,
                  climate regulation, regeneration of soil fertility, and the production and maintenance of biological diversity.
                  Phytoremediation is an example of the ecosystem services provided by plants.
                </paragragraph>
            
              <label className= {darkMode ? "whyProtectLabel-Dark" : "whyProtectLabel-Light"}>Ecosystem Service</label>
            </box>
          </box>

        </div>
      </body>
      <HomeSuvNav/>
    </div>
  );
}
  