import React from 'react';
import { useState } from "react";

import './publicMain.css';
import './causes.css';

import {IndividualActonSuvNav} from "../subNav/subNavigation";

import header6 from '../images/header6.png';
import share from '../images/pagesImages/share.jpg';
import shopping from '../images/pagesImages/shopping.jpg';
import recycle from '../images/pagesImages/recycle.jpg';
import supportOrganisation from '../images/pagesImages/supportOrganisation.jpg';
import healthyEating from '../images/pagesImages/healthyEating.jpg';
import publicTransport from '../images/pagesImages/publicTransport.png';
import electricity from '../images/pagesImages/electricity.jpg';
import healthyGarden from '../images/pagesImages/healthyGarden.jpg';
import voice from '../images/pagesImages/voice.jpg';
import travel from '../images/pagesImages/travel.jpg';


export const IndividualAction = () => {
  const [darkMode, setDarkMode] = useState(false);

  return( 
    <div className={darkMode ? "pageMainFrameDark" : "pageMainFrameLight"}>
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
            <subhead className={darkMode ? "subheadLrgDrk" : "subheadLrg"}>Take daily individual actions</subhead>
          </div>

          <paragragraph className="paragpaphLrg">
            Wass awass
          </paragragraph>

          <box className = "box">
            <box className={darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
              <label className={darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>S h a r e - I n f o r m a t i o n</label>
              <paragragraph className={darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                Plastic Pollution are slick
              </paragragraph>
            </box>

            <image className={darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
              <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${share})`}}></div>
            </image>
          </box>


          <line className = "largeLine"></line>


          <box className = "box">
            <box className={darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
              <label className={darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>P u r c h a s i n g - H a b i t</label>
              <paragragraph className={darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                Plastic Pollution are slick
              </paragragraph>
            </box>

            <image className={darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
              <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${shopping})`}}></div>
            </image>
          </box>
          

          <line className = "largeLine"></line>


          <box className = "box">
            <box className={darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
              <label className={darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>R e c y c l e & R e u s e</label>
              <paragragraph className={darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                Plastic Pollution are slick
              </paragragraph>
            </box>

            <image className={darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
              <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${recycle})`}}></div>
            </image>
          </box>


          <line className = "largeLine"></line>


          <box className = "box">
            <box className={darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
              <label className={darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>S u p p o r t - O r g a n i s a t i o n 's</label>
              <paragragraph className={darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                Plastic Pollution are slick
              </paragragraph>
            </box>

            <image className={darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
              <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${supportOrganisation})`}}></div>
            </image>
          </box>

          
          <line className = "largeLine"></line>


          <box className = "box">
            <box className={darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
              <label className={darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>R e d u c e - M e a t & D a i r y</label>
              <paragragraph className={darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                Plastic Pollution are slick
              </paragragraph>
            </box>

            <image className={darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
              <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${healthyEating})`}}></div>
            </image>
          </box>

          
          <line className = "largeLine"></line>


          <box className = "box">
            <box className={darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
              <label className={darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>P u b l i c - T r a n s p o r t</label>
              <paragragraph className={darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                Plastic Pollution are slick
              </paragragraph>
            </box>

            <image className={darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
              <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${publicTransport})`}}></div>
            </image>
          </box>

          
          <line className = "largeLine"></line>


          <box className = "box">
            <box className={darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
              <label className={darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>R e d u c e E l e c t r i c i t y - C o n s u m p t i o n</label>
              <paragragraph className={darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                Plastic Pollution are slick
              </paragragraph>
            </box>

            <image className={darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
              <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${electricity})`}}></div>
            </image>
          </box>

          
          <line className = "largeLine"></line>


          <box className = "box">
            <box className={darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
              <label className={darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>K e e p Y o u r G a r d e n - H e a l t h y</label>
              <paragragraph className={darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                Plastic Pollution are slick
              </paragragraph>
            </box>

            <image className={darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
              <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${healthyGarden})`}}></div>
            </image>
          </box>
          
          
          <line className = "largeLine"></line>


          <box className = "box">
            <box className={darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
              <label className={darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>U s e Y o u r - V o i c e</label>
              <paragragraph className={darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                Plastic Pollution are slick
              </paragragraph>
            </box>

            <image className={darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
              <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${voice})`}}></div>
            </image>
          </box>

          
          <line className = "largeLine"></line>


          <box className = "box">
            <box className={darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
              <label className={darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>T r a v e l - C o m p a s s i o n a t e l y</label>
              <paragragraph className={darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                Plastic Pollution are slick
              </paragragraph>
            </box>

            <image className={darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
              <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${travel})`}}></div>
            </image>
          </box>
          
        </div>
      </body>
      <IndividualActonSuvNav/>
    </div>
  );
}