import React from "react";
import { useState } from "react";

import './publicMain.css';
import './causes.css';

import {CausesSuvNav} from "../subNav/subNavigation";
import header5 from '../images/header5.png';

import PlasticPollution from '../images/pagesImages/PlasticPollution.jpg';
import ChemicalPollution from '../images/pagesImages/ChemicalPollution.jpg';
import Infrastructures from '../images/pagesImages/Infrastructures.jpg';
import climateChange from '../images/pagesImages/climateChange.jpg';
import illegalPoach from '../images/pagesImages/illegalPoach.jpg';
import habitatDistruction from '../images/pagesImages/habitatDistruction.jpg';
import InvasiveSpecies from '../images/pagesImages/InvasiveSpecies.jpg';
import overFishing from '../images/pagesImages/overFishing.jpg';
import oilRig from '../images/pagesImages/oilRig.jpg';
import disease from '../images/pagesImages/disease.jpg';


export const Causes = () => {
  const [darkMode, setDarkMode] = useState(false);

  return( 
    <div className={darkMode ? "pageMainFrameDark" : "pageMainFrameLight"}>
      <box className = "landingImageBox2" style={{ backgroundImage: `url(${header5})`}}></box>
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
            <subhead className={darkMode ? "subheadLrgDrk" : "subheadLrg"}>Causes threatning the species</subhead>
          </div>

          <paragragraph className="paragpaphLrg">
            Wass awass
          </paragragraph>

          <box className = "box">
            <image className={darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
              <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${PlasticPollution})`}}></div>
            </image>

            <box className={darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
              <label className={darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>P l a s t i c - P o l l u t i o n</label>
              <paragragraph className={darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                Plastic Pollution are slick
              </paragragraph>
            </box>
          </box>

          <line className = "largeLine"></line>

          <box className = "box">
            <image className={darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
              <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${ChemicalPollution})`}}></div>
            </image>

            <box className={darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
              <label className={darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>C h e m i c a l - P o l l u t i o n</label>
              <paragragraph className={darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                Plastic Pollution are slick
              </paragragraph>
            </box>
          </box>

          <line className = "largeLine"></line>

          <box className = "box">
            <image className={darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
             <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${Infrastructures})`}}></div>
            </image>

            <box className={darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
              <label className={darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>I n f r a s t r u c t u r e 's</label>
              <paragragraph className={darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                Plastic Pollution are slick
              </paragragraph>
            </box>
          </box>
          
          <line className = "largeLine"></line>

          <box className = "box">
            <image className={darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
              <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${climateChange})`}}></div>
            </image>

            <box className={darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
              <label className={darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>C l i m a t e - C h a n g e</label>
              <paragragraph className={darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                Plastic Pollution are slick
              </paragragraph>
            </box>
          </box>

          <line className = "largeLine"></line>

          <box className = "box">
            <image className={darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
              <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${illegalPoach})`}}></div>
            </image>
      
            <box className={darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
              <label className={darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>i l l e g a l - T r a d i n g</label>
              <paragragraph className={darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                Plastic Pollution are slick
              </paragragraph>
            </box>
          </box>

          
          <line className = "largeLine"></line>

          <box className = "box">
            <image className={darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
              <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${habitatDistruction})`}}></div>
            </image>

            <box className={darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
              <label className={darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>H a b i t a t - D i s t r u c t i o n</label>
              <paragragraph className={darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                Plastic Pollution are slick
              </paragragraph>
            </box>
          </box>

          <line className = "largeLine"></line>

          <box className = "box">
            <image className={darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
              <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${InvasiveSpecies})`}}></div>
            </image>
    
            <box className={darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
              <label className={darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>I n v a s i v e - S p e c i e s</label>
              <paragragraph className={darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                Plastic Pollution are slick
              </paragragraph>
            </box>
          </box>

          <line className = "largeLine"></line>

          <box className = "box">
            <image className={darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
              <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${overFishing})`}}></div>
            </image>
    
            <box className={darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
              <label className={darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>O v e r - F i s h i n g</label>
              <paragragraph className={darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                Plastic Pollution are slick
              </paragragraph>
            </box>
          </box>

          <line className = "largeLine"></line>

          <box className = "box">
            <image className={darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
              <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${disease})`}}></div>
            </image>
     
            <box className={darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
              <label className={darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>D i s e a s e</label>
              <paragragraph className={darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                Plastic Pollution are slick
              </paragragraph>
            </box>
          </box>

          <line className = "largeLine"></line>

          <box className = "box">
            <image className={darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
              <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${oilRig})`}}></div>
            </image>
    
            <box className={darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
              <label className={darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>O i l & G a s - D e v e l o p m e n t</label>
              <paragragraph className={darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                Plastic Pollution are slick
              </paragragraph>
            </box>
          </box>

        </div>
        
      </body>
      <CausesSuvNav/>
    </div>
  );
}