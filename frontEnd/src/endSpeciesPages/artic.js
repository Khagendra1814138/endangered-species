import React from 'react';
import { useState } from "react";
import ReactPlayer from 'react-player';

import '../pages/publicMain.css';
import './artic.css';

import {ArticPageSuvNav} from "../subNav/subNavigation";



import headerArtic from '../images/headerArtic.png';

//ARTIC SPECIES IMAGES
import eskimoCurlew from '../images/endArtic/eskimoCurlew.png';
import articWolf from '../images/endArtic/articWolf.png';
import belugaWhale from '../images/endArtic/belugaWhale.png';
import caribouRaindeer from '../images/endArtic/caribouRaindeer.png';
import lemming from '../images/endArtic/lemming.png';

import narwhal from '../images/endArtic/narwhal.png';
import muskOx from '../images/endArtic/muskOx.png';
import articFox from '../images/endArtic/articFox.png';
import orca from '../images/endArtic/orca.png';
import polarBear from '../images/endArtic/polarBear.png';

import woodBison from '../images/endArtic/woodBison.png';
import raindeers from '../images/endArtic/raindeers.png';
import redKnot from '../images/endArtic/redKnot.png';
import saimaaRingedSeal from '../images/endArtic/saimaaRingedSeal.png';
import walrus from '../images/endArtic/walrus.png';


import {FaPlusSquare} from 'react-icons/fa';
import {FaMinusSquare} from 'react-icons/fa';

export const Artic = () => {
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
      <box className = "landingImageBox2" style={{ backgroundImage: `url(${headerArtic})`}}></box>

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
            <subhead className = {darkMode ? "subheadLrgDrk" : "subheadLrg"}>Endangered Artic Animals</subhead>
          </div>

          <paragragraph style={{fontSize: `${fontSize}px`}} className = {darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
            Wass awass
          </paragragraph>


          <box className = "box4">
            <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                    <image className='articMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${articWolf})`}}></div>
                    </image>
                    <label className = {darkMode ? "articName-Dark" : "articName"}>Name</label>
                </box>

                <box className = "MedBox">
                    <image className='articMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${belugaWhale})`}}></div>
                    </image>
                    <label className = {darkMode ? "articName-Dark" : "articName"}>Name</label>
                </box>
            </box>

            <box className = "largeSpeciesImgFrame">
                <image className= 'articLargeImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${eskimoCurlew})`}}></div>
                </image>
                <label className = {darkMode ? "articName-Dark" : "articName"}>Species name</label>
            </box>

            <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                    <image className='articMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${caribouRaindeer})`}}></div>
                    </image>
                    <label className = {darkMode ? "articName-Dark" : "articName"}>Name</label>
                </box>

                <box className = "MedBox">
                    <image className='articMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${lemming})`}}></div>
                    </image>
                    <label className = {darkMode ? "articName-Dark" : "articName"}>Name</label>
                </box>
            </box>
          </box>
        </div>

        <div className= {darkMode ? "videoFrame-Dark" : "videoFrame"}>
            <line className = "thinLine"></line>
            <div className= {darkMode ? "video-Dark" : "video"}>
                <paragragraph className="video-Discription">A video about Beluga Whale.</paragragraph>
                <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=iZ808Z-2uFI"/>
            </div> 
            <line className = "thinLine"></line> 
        </div>



        <div className='container'>
          <box className = "box4">
            <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                    <image className='articMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${muskOx})`}}></div>
                    </image>
                    <label className = {darkMode ? "articName-Dark" : "articName2"}>Name</label>
                </box>

                <box className = "MedBox">
                    <image className='articMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${orca})`}}></div>
                    </image>
                    <label className = {darkMode ? "articName-Dark" : "articName2"}>Name</label>
                </box>
            </box>

            <box className = "largeSpeciesImgFrame">
                <image className= 'articLargeImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${narwhal})`}}></div>
                </image>
                <label className = {darkMode ? "articName-Dark" : "articName2"}>Species name</label>
            </box>

            <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                    <image className='articMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${polarBear})`}}></div>
                    </image>
                    <label className = {darkMode ? "articName-Dark" : "articName2"}>Name</label>
                </box>

                <box className = "MedBox">
                    <image className='articMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${raindeers})`}}></div>
                    </image>
                    <label className = {darkMode ? "articName-Dark" : "articName2"}>Name</label>
                </box>
            </box>
          </box>
        </div>

        <div className= {darkMode ? "videoFrame-Dark" : "videoFrame"}>
            <line className = "thinLine"></line>
            <div className= {darkMode ? "video-Dark" : "video"}>
                <paragragraph className="video-Discription">A video of Orca Hunting.</paragragraph>
                <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=9TLg-YlDog0"/>
            </div> 
            <line className = "thinLine"></line> 
        </div>
        


        <div className='container'>
          <box className = "box4">
            <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                    <image className='articMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${articFox})`}}></div>
                    </image>
                    <label className = {darkMode ? "articName-Dark" : "articName3"}>Name</label>
                </box>

                <box className = "MedBox">
                    <image className='articMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${redKnot})`}}></div>
                    </image>
                    <label className = {darkMode ? "articName-Dark" : "articName3"}>Name</label>
                </box>
            </box>

            <box className = "largeSpeciesImgFrame">
                <image className= 'articLargeImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${woodBison})`}}></div>
                </image>
                <label className = {darkMode ? "articName-Dark" : "articName3"}>Species name</label>
            </box>

            <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                    <image className='articMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${saimaaRingedSeal})`}}></div>
                    </image>
                    <label className = {darkMode ? "articName-Dark" : "articName3"}>Name</label>
                </box>

                <box className = "MedBox">
                    <image className='articMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${walrus})`}}></div>
                    </image>
                    <label className = {darkMode ? "articName-Dark" : "articName3"}>Name</label>
                </box>
            </box>
          </box>
        </div>

        <div className= {darkMode ? "videoFrame-Dark" : "videoFrame"}>
            <line className = "thinLine"></line>
            <div className= {darkMode ? "video-Dark" : "video"}>
                <paragragraph className="video-Discription">A video of Polar Bear Hunting.</paragragraph>
                <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=zNO0kxTClYo"/>
            </div> 
            <line className = "thinLine"></line> 
        </div>

      </body>
      <ArticPageSuvNav/>
    </div>
  );
}