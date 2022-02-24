import React from 'react';
import { useState } from "react";
import ReactPlayer from 'react-player';

import '../pages/publicMain.css';
import './aquatic.css';

import {AquaticPageSuvNav} from "../subNav/subNavigation";


import headerAquatic from '../images/headerAquatic.png';
//dolphins
import hectorsDolphins from '../images/endAquatic/dolphin/hectorsDolphins.png';
import amazonRiverDolphin from '../images/endAquatic/dolphin/amazonRiverDolphin.png';
import IrrawaddyDolphin from '../images/endAquatic/dolphin/IrrawaddyDolphin.png';
import vaquita from '../images/endAquatic/dolphin/vaquita.png';
import yangtzeFinless from '../images/endAquatic/dolphin/yangtzeFinless.png';

//sharks
import whaleShark from '../images/endAquatic/shark/whaleShark.png';
import greatWhiteShark from '../images/endAquatic/shark/greatWhiteShark.png';
import hammerhead from '../images/endAquatic/shark/hammerhead.png';
import oceanicWhitetip from '../images/endAquatic/shark/oceanicWhitetip.png';
import sandTiger from '../images/endAquatic/shark/sandTiger.png';

//turtles
import loggerheadTurtle from '../images/endAquatic/turtle/loggerheadTurtle.png';
import greenTurtle from '../images/endAquatic/turtle/greenTurtle.png';
import hawkbillTurtles from '../images/endAquatic/turtle/hawkbillTurtles.png';
import leatherBack from '../images/endAquatic/turtle/leatherBack.png';
import oliveRidley from '../images/endAquatic/turtle/oliveRidley.png';

//whales
import blueWhale from '../images/endAquatic/whale/blueWhale.png';
import bowheadWhale from '../images/endAquatic/whale/bowheadWhale.png';
import finWhale from '../images/endAquatic/whale/finWhale.png';
import greyWhale from '../images/endAquatic/whale/greyWhale.png';
import seiWhale from '../images/endAquatic/whale/seiWhale.png';

//Other fishes and not fishes
import galapagosPenguin from '../images/endAquatic/galapagosPenguin.png';
import hoodedSeal from '../images/endAquatic/hoodedSeal.png';
import marineLguana from '../images/endAquatic/marineLguana.png';
import hawaiianMonkSeal from '../images/endAquatic/hawaiianMonkSeal.png';
import dugong from '../images/endAquatic/dugong.png';

import manatees from '../images/endAquatic/manatees.png';
import atlanticSalmon from '../images/endAquatic/atlanticSalmon.png';
import blueFinTuna from '../images/endAquatic/blueFinTuna.png';
import sturgeon from '../images/endAquatic/sturgeon.png';
import europeanEel from '../images/endAquatic/europeanEel.png';


import seaOtter from '../images/endAquatic/seaOtter.png';
import caribbeanElectricRay from '../images/endAquatic/caribbeanElectricRay.png';
import giantDevilRay from '../images/endAquatic/giantDevilRay.png';
import humpheadWarasse from '../images/endAquatic/humpheadWarasse.png';
import stellarSeaLion from '../images/endAquatic/stellarSeaLion.png';


import {FaPlusSquare} from 'react-icons/fa';
import {FaMinusSquare} from 'react-icons/fa';


export const Aquatic = () => {
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
      <box className = "landingImageBox2" style={{ backgroundImage: `url(${headerAquatic})`}}></box>

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
            <subhead className = {darkMode ? "subheadLrgDrk" : "subheadLrg"}>Endangered Aquatic Animals</subhead>
          </div>

          <paragragraph style={{fontSize: `${fontSize}px`}} className = {darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
            Wass awass
          </paragragraph>



          <box className = "box4">
            <box className = "mediumSpeciesImgFrame">
                <box className = "speciesCardContainer">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${amazonRiverDolphin})`}}></div>
                    </image>
                    <div class="overlay  overlayLeft">
                      <label class="photograpgerName">Photo by Your Mum</label>
                    </div>
                    <label className = {darkMode ? "aquaticName-Dark" : "aquaticName"}>Name</label>
                </box>

                <box className = "containerx">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${IrrawaddyDolphin})`}}></div>
                    </image>
                    <label className = {darkMode ? "aquaticName-Dark" : "aquaticName"}>Name</label>
                </box>
            </box>
            
            <box className = "speciesCardContainer">
                <image className= 'aquaticLargeImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${hectorsDolphins})`}}></div>
                </image>

                <div class="overlay  overlayLeft">
                  <label class="photograpgerName">Photograph by Your Mum</label>
                </div>
                
                <label className = {darkMode ? "aquaticName-Dark" : "aquaticName"}>Species name</label>
            </box>

            <box className = "mediumSpeciesImgFrame">
                <box className = "containerx">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${vaquita})`}}></div>
                    </image>
                    <label className = {darkMode ? "aquaticName-Dark" : "aquaticName"}>Name</label>
                </box>

                <box className = "containerx">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${yangtzeFinless})`}}></div>
                    </image>
                    <label className = {darkMode ? "aquaticName-Dark" : "aquaticName"}>Name</label>
                </box>
            </box>
          </box>
        </div>

        <div className= {darkMode ? "videoFrame-Dark" : "videoFrame"}>
            <line className = "thinLine"></line>
            <div className= {darkMode ? "video-Dark" : "video"}>
              <paragragraph className="video-Discription">A video about the Amazon river dolphins.</paragragraph>
              <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=Yty9Zf8ie2g"/>
            </div> 
            <line className = "thinLine"></line> 
        </div>




        <div className='container'>
          <box className = "box4">
            <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${greatWhiteShark})`}}></div>
                    </image>
                    <label className = {darkMode ? "aquaticName-Dark" : "aquaticName"}>Name</label>
                </box>

                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${hammerhead})`}}></div>
                    </image>
                    <label className = {darkMode ? "aquaticName-Dark" : "aquaticName"}>Name</label>
                </box>
            </box>
            
            <box className = "largeSpeciesImgFrame">
                <image className= 'aquaticLargeImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${whaleShark})`}}></div>
                </image>
                <label className = {darkMode ? "aquaticName-Dark" : "aquaticName"}>Species name</label>
            </box>

            <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${oceanicWhitetip})`}}></div>
                    </image>
                    <label className = {darkMode ? "aquaticName-Dark" : "aquaticName"}>Name</label>
                </box>

                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${sandTiger})`}}></div>
                    </image>
                    <label className = {darkMode ? "aquaticName-Dark" : "aquaticName"}>Name</label>
                </box>
            </box>
          </box>
        </div>





        <div className='container'>
          <box className = "box4">
            <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${greenTurtle})`}}></div>
                    </image>
                    <label className = {darkMode ? "aquaticName-Dark" : "aquaticName"}>Name</label>
                </box>

                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${hawkbillTurtles})`}}></div>
                    </image>
                    <label className = {darkMode ? "aquaticName-Dark" : "aquaticName"}>Name</label>
                </box>
            </box>
            
            <box className = "largeSpeciesImgFrame">
                <image className= 'aquaticLargeImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${loggerheadTurtle})`}}></div>
                </image>
                <label className = {darkMode ? "aquaticName-Dark" : "aquaticName"}>Species name</label>
            </box>

            <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${leatherBack})`}}></div>
                    </image>
                    <label className = {darkMode ? "aquaticName-Dark" : "aquaticName"}>wasa</label>
                </box>

                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${oliveRidley})`}}></div>
                    </image>
                    <label className = {darkMode ? "aquaticName-Dark" : "aquaticName"}>Name</label>
                </box>
            </box>
          </box>
        </div>

        <div className= {darkMode ? "videoFrame-Dark" : "videoFrame"}>
            <line className = "thinLine"></line>
            <div className= {darkMode ? "video-Dark" : "video"}>
              <paragragraph className="video-Discription">A video about the Whale Sharks.</paragragraph>
              <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=E9tpPWK7sag"/>
            </div> 
            <line className = "thinLine"></line> 
        </div>




        <div className='container'>
          <box className = "box4">
            <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${bowheadWhale})`}}></div>
                    </image>
                    <label className = {darkMode ? "aquaticName-Dark" : "aquaticName"}>Name</label>
                </box>

                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${finWhale})`}}></div>
                    </image>
                    <label className = {darkMode ? "aquaticName-Dark" : "aquaticName"}>Name</label>
                </box>
            </box>
            
            <box className = "largeSpeciesImgFrame">
                <image className= 'aquaticLargeImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${blueWhale})`}}></div>
                </image>
                <label className = {darkMode ? "aquaticName-Dark" : "aquaticName"}>Species name</label>
            </box>

            <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${greyWhale})`}}></div>
                    </image>
                    <label className = {darkMode ? "aquaticName-Dark" : "aquaticName"}>Name</label>
                </box>

                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${seiWhale})`}}></div>
                    </image>
                    <label className = {darkMode ? "aquaticName-Dark" : "aquaticName"}>Name</label>
                </box>
            </box>
          </box>
        </div>





        <div className='container'>
          <box className = "box4">
            <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${hoodedSeal})`}}></div>
                    </image>
                    <label className = {darkMode ? "aquaticName-Dark" : "aquaticName"}>Name</label>
                </box>

                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${marineLguana})`}}></div>
                    </image>
                    <label className = {darkMode ? "aquaticName-Dark" : "aquaticName"}>Name</label>
                </box>
            </box>
            
            <box className = "largeSpeciesImgFrame">
                <image className= 'aquaticLargeImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${galapagosPenguin})`}}></div>
                </image>
                <label className = {darkMode ? "aquaticName-Dark" : "aquaticName"}>Species name</label>
            </box>

            <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${hawaiianMonkSeal})`}}></div>
                    </image>
                    <label className = {darkMode ? "aquaticName-Dark" : "aquaticName"}>Name</label>
                </box>

                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${dugong})`}}></div>
                    </image>
                    <label className = {darkMode ? "aquaticName-Dark" : "aquaticName"}>Name</label>
                </box>
            </box>
          </box>
        </div>

        <div className= {darkMode ? "videoFrame-Dark" : "videoFrame"}>
            <line className = "thinLine"></line>
            <div className= {darkMode ? "video-Dark" : "video"}>
              <paragragraph className="video-Discription">A video about Sea Turtles.</paragragraph>
              <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=5Rmv3nliwCs"/>
           </div> 
           <line className = "thinLine"></line> 
        </div>





        <div className='container'>
          <box className = "box4">
            <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${atlanticSalmon})`}}></div>
                    </image>
                    <label className = {darkMode ? "aquaticName-Dark" : "aquaticName"}>Name</label>
                </box>

                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${blueFinTuna})`}}></div>
                    </image>
                    <label className = {darkMode ? "aquaticName-Dark" : "aquaticName"}>Name</label>
                </box>
            </box>
            
            <box className = "largeSpeciesImgFrame">
                <image className= 'aquaticLargeImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${manatees})`}}></div>
                </image>
                <label className = {darkMode ? "aquaticName-Dark" : "aquaticName"}>Species name</label>
            </box>

            <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${sturgeon})`}}></div>
                    </image>
                    <label className = {darkMode ? "aquaticName-Dark" : "aquaticName"}>Name</label>
                </box>

                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${europeanEel})`}}></div>
                    </image>
                    <label className = {darkMode ? "aquaticName-Dark" : "aquaticName"}>Name</label>
                </box>
            </box>
          </box>
        </div>




        <div className='container'>
          <box className = "box4">
            <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${caribbeanElectricRay})`}}></div>
                    </image>
                    <label className = {darkMode ? "aquaticName-Dark" : "aquaticName"}>Name</label>
                </box>

                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${giantDevilRay})`}}></div>
                    </image>
                    <label className = {darkMode ? "aquaticName-Dark" : "aquaticName"}>Name</label>
                </box>
            </box>
            
            <box className = "largeSpeciesImgFrame">
                <image className= 'aquaticLargeImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${seaOtter})`}}></div>
                </image>
                <label className = {darkMode ? "aquaticName-Dark" : "aquaticName"}>Species name</label>
            </box>

            <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${humpheadWarasse})`}}></div>
                    </image>
                    <label className = {darkMode ? "aquaticName-Dark" : "aquaticName"}>Name</label>
                </box>

                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${stellarSeaLion})`}}></div>
                    </image>
                    <label className = {darkMode ? "aquaticName-Dark" : "aquaticName"}>Name</label>
                </box>
            </box>
          </box>
        </div>

        <div className= {darkMode ? "videoFrame-Dark" : "videoFrame"}>
            <line className = "thinLine"></line>
            <div className= {darkMode ? "video-Dark" : "video"}>
              <paragragraph className="video-Discription">A video of Giant Manta Ray.</paragragraph>
              <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=dCfBQfBiovA"/>
            </div> 
            <line className = "thinLine"></line> 
        </div>


      </body>
      <AquaticPageSuvNav/>
    </div>
  );
}