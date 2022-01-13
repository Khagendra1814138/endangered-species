import React from 'react';
import { useState } from "react";

import '../pages/publicMain.css';
import './mammels.css';


import {MammelsPageSuvNav} from "../subNav/subNavigation";


import {SmallMammelsCarousel} from "./mammelsCarousel";
import {LargeMammelsCarousel} from "./mammelsCarousel";
import {RhinosCarousel} from "./mammelsCarousel";
import {BigCatsCarousel} from "./mammelsCarousel";
import {PrimatesCarousel} from "./mammelsCarousel";

import {FaPlusSquare} from 'react-icons/fa';
import {FaMinusSquare} from 'react-icons/fa';

import header6 from '../images/header6.png';

//Small Mammels
import fruitBat from '../images/endMammels/smallMammels/fruitBat.png';
import tasmanianDevil from '../images/endMammels/smallMammels/tasmanianDevil.png';

//large Mammels
import panda from '../images/endMammels/largeMammels/panda.png';
import redPanda from '../images/endMammels/largeMammels/redPanda.png';

//Rhinoceros
import javanRhino from '../images/endMammels/Rhino/javanRhino.png';
import sumatranRhino from '../images/endMammels/Rhino/sumatranRhino.png';

//Big Cats
import snowLeopard from '../images/endMammels/bigCats/snowLeopard.png';
import tiger from '../images/endMammels/bigCats/tiger.png';

//Primates
import gibbons from '../images/endMammels/primates/gibbons.png';
import spiderMonkey from '../images/endMammels/primates/spiderMonkey.png';


export const Mammels = () => {
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

  return( 
    <div className={darkMode ? "pageMainFrameDark" : "pageMainFrameLight"}>
      <FontSizeIncreaser/>
      <box className = "landingImageBox2" style={{ backgroundImage: `url(${header6})`}}></box>

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
            <subhead className = {darkMode ? "subheadLrgDrk" : "subheadLrg"}>Endangered Mammels</subhead>
          </div>

          <paragragraph style={{fontSize: `${fontSize}px`}} className = {darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
            Wass awass
          </paragragraph>

          <div className = "mainSubHeadFrame">
            <line className = "thinLine"></line>
            <subhead className = {darkMode ? "subheadSmlDrk" : "subheadSml"}>S m a l l - M a m m e l s</subhead>
          </div>

          <box className = "box">
            <box className = "speciesMainFrame"> 
              <image className = {darkMode ? "mammelsSmallImage-Dark" : "smallMammelsImage"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${fruitBat})`}}></div>
              </image>
              <label className = {darkMode ? "mammelsName-Dark" : "smallMammelsName"}>Name</label>
            </box>

            <box className = "speciesMainFrame"> 
              <image className = {darkMode ? "mammelsSmallImage-Dark" : "smallMammelsImage"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${tasmanianDevil})`}}></div>
              </image>
              <label className = {darkMode ? "mammelsName-Dark" : "smallMammelsName"}>Name</label>
            </box>
          </box>
        
          <SmallMammelsCarousel/>
          <paragragraph style={{fontSize: `${fontSize}px`}} className = {darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
            Wass awass
          </paragragraph>
        </div>  

       


        <div className='container'>
          <div className = "mainSubHeadFrame">
            <line className = "thinLine"></line>
            <subhead className = {darkMode ? "subheadSmlDrk" : "subheadSml"}>L a r g e - M a m m e l s</subhead>
          </div>

          <box className = "box">
            <box className = "speciesMainFrame">
              <image className = {darkMode ? "mammelsSmallImage-Dark" : "largeMammelsImage"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${panda})`}}></div>
              </image>
              <label className = {darkMode ? "mammelsName-Dark" : "largeMammelsName"}>Name</label>
            </box>

            <box className = "speciesMainFrame"> 
              <image className = {darkMode ? "mammelsSmallImage-Dark" : "largeMammelsImage"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${redPanda})`}}></div>
              </image>
              <label className = {darkMode ? "mammelsName-Dark" : "largeMammelsName"}>Name</label>
            </box>
          </box>

          <LargeMammelsCarousel/>
          <paragragraph style={{fontSize: `${fontSize}px`}} className = {darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
            Wass awass
          </paragragraph>
        </div>





        <div className='container'>
          <div className = "mainSubHeadFrame">
            <line className = "thinLine"></line>
            <subhead className = {darkMode ? "subheadSmlDrk" : "subheadSml"}>R h i n o c e r o s</subhead>
          </div>

          <box className = "box">
            <box className = "speciesMainFrame">
              <image className = {darkMode ? "mammelsSmallImage-Dark" : "smallRhinoImage"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${javanRhino})`}}></div>
              </image>
              <label className = {darkMode ? "mammelsName-Dark" : "rhinoName"}>Name</label>
            </box>

            <box className = "speciesMainFrame"> 
              <image className = {darkMode ? "mammelsSmallImage-Dark" : "smallRhinoImage"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${sumatranRhino})`}}></div>
              </image>
              <label className = {darkMode ? "mammelsName-Dark" : "rhinoName"}>Name</label>
            </box>
          </box>

          <RhinosCarousel/>
          <paragragraph style={{fontSize: `${fontSize}px`}} className = {darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
            Wass awass
          </paragragraph>
        </div>





      <div className='container'>

        <div className = "mainSubHeadFrame">
          <line className = "thinLine"></line>
          <subhead className = {darkMode ? "subheadSmlDrk" : "subheadSml"}>B i g - C a t s</subhead>
        </div>

        <box className = "box">
          <box className = "speciesMainFrame">
            <image className = {darkMode ? "mammelsSmallImage-Dark" : "bigCatsImage"}>
              <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${snowLeopard})`}}></div>
            </image>
            <label className = {darkMode ? "mammelsName-Dark" : "bigCatsName"}>Name</label>
          </box>

          <box className = "speciesMainFrame"> 
            <image className = {darkMode ? "mammelsSmallImage-Dark" : "bigCatsImage"}>
              <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${tiger})`}}></div>
            </image>
            <label className = {darkMode ? "mammelsName-Dark" : "bigCatsName"}>Name</label>
          </box>
        </box>
        
        <BigCatsCarousel/>
        <paragragraph style={{fontSize: `${fontSize}px`}} className = {darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
            Wass awass
        </paragragraph>
      </div>
        


      <div className='container'>  

          <div className = "mainSubHeadFrame">
            <line className = "thinLine"></line>
            <subhead className = {darkMode ? "subheadSmlDrk" : "subheadSml"}>P r i m a t e s</subhead>
          </div>

          <box className = "box">
            <box className = "speciesMainFrame">
              <image className = {darkMode ? "mammelsSmallImage-Dark" : "primatesImage"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${spiderMonkey})`}}></div>
              </image>
              <label className = {darkMode ? "mammelsName-Dark" : "primatesName"}>Name</label>
            </box>

            <box className = "speciesMainFrame"> 
              <image className = {darkMode ? "mammelsSmallImage-Dark" : "primatesImage"}> 
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${gibbons})`}}></div>
              </image>
              <label className = {darkMode ? "mammelsName-Dark" : "primatesName"}>Name</label>
            </box>
          </box>

          <PrimatesCarousel/>
          <paragragraph style={{fontSize: `${fontSize}px`}} className = {darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
            Wass awass
          </paragragraph>
        </div>

      </body>
      <MammelsPageSuvNav/>
    </div>
  );
}