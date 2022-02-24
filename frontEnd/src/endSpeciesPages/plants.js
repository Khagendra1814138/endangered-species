import React from 'react';
import { useState } from "react";
import ReactPlayer from 'react-player';

import '../pages/publicMain.css';
import './plants.css';

import {PlantPageSuvNav} from "../subNav/subNavigation";
import headerPlants from '../images/headerPlants.png';

//cycades
import middelburgCycad from '../images/endPlant/Cycad/middelburgCycad.png';
import encephalartosLatifrons from '../images/endPlant/Cycad/encephalartosLatifrons.png';
import lillieCycad from '../images/endPlant/Cycad/lillieCycad.png';
import palmaCorcho from '../images/endPlant/Cycad/palmaCorcho.png';
import vendaCycad from '../images/endPlant/Cycad/vendaCycad.png';

//cycades
import baobabTree from '../images/endPlant/Trees/baobabTree.png';
import corkTree from '../images/endPlant/Trees/corkTree.png';
import dragonTree from '../images/endPlant/Trees/dragonTree.png';
import monkeyTree from '../images/endPlant/Trees/monkeyTree.png';
import quiverTree from '../images/endPlant/Trees/quiverTree.png';

//strange plants
import titanArum from '../images/endPlant/strangePlants/titanArum.png';
import euphorbiaObesa from '../images/endPlant/strangePlants/euphorbiaObesa.png';
import flyingVenusTrap from '../images/endPlant/strangePlants/flyingVenusTrap.png';
import Rafflesia from '../images/endPlant/strangePlants/Rafflesia.png';
import taccaChantrieri from '../images/endPlant/strangePlants/taccaChantrieri.png';


import {FaPlusSquare} from 'react-icons/fa';
import {FaMinusSquare} from 'react-icons/fa';


export const Plants = () => {
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
      <box className = "landingImageBox2" style={{ backgroundImage: `url(${headerPlants})`}}></box>

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
            <subhead className = {darkMode ? "subheadLrgDrk" : "subheadLrg"}>Endangered Plant Species</subhead>
          </div>

          <paragragraph style={{fontSize: `${fontSize}px`}} className = {darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
            Did you know that more than 15 Billions of plants are chopped down each year! And a single tree can absorbe up to
            48 Pounds of carbon dioxide (Co2) every year, making them the best natural carbon scrubber machine. 
          </paragragraph>


          <box className = "box4">
            <box className = "mediumSpeciesImgFrame">
              <box className = "MedBox">
                <image className='plantsMediumImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${encephalartosLatifrons})`}}></div>
                </image>
                <label className = {darkMode ? "plantsName-Dark" : "plantsName"}>Name</label>
              </box>

              <box className = "MedBox">
                <image className='plantsMediumImage'>
                 <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${lillieCycad})`}}></div>
                </image>
                <label className = {darkMode ? "plantsName-Dark" : "plantsName"}>Name</label>
              </box>
            </box>

            <box className = "mediumSpeciesImgFrame">
              <box className = "MedBox">
                <image className='plantsMediumImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${palmaCorcho})`}}></div>
                </image>
                <label className = {darkMode ? "plantsName-Dark" : "plantsName"}>Name</label>
              </box>

              <box className = "MedBox">
                <image className='plantsMediumImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${vendaCycad})`}}></div>
                </image>
                <label className = {darkMode ? "plantsName-Dark" : "plantsName"}>Name</label>
              </box>
            </box>

            <box className = "largeSpeciesImgFrame">
              <image className= 'plantsLargeImage'>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${middelburgCycad})`}}></div>
              </image>
              <label className = {darkMode ? "plantsName-Dark" : "plantsName"}>Species name</label>
            </box>
          </box>
        </div>

        <div className= {darkMode ? "videoFrame-Dark" : "videoFrame"}>
            <line className = "thinLine"></line>
            <div className= {darkMode ? "video-Dark" : "video"}>
              <paragragraph className="video-Discription">A video about Cycads Plants.</paragragraph>
              <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=VtziMzq-nnk"/>
            </div> 
            <line className = "thinLine"></line> 
        </div>


        
        <div className='container'>
          <box className = "box4">
            <box className = "mediumSpeciesImgFrame">
              <box className = "MedBox">
                <image className='plantsMediumImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${corkTree})`}}></div>
                </image>
                <label className = {darkMode ? "plantsName-Dark" : "plantsName2"}>Name</label>
              </box>

              <box className = "MedBox">
                <image className='plantsMediumImage'>
                 <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${dragonTree})`}}></div>
                </image>
                <label className = {darkMode ? "plantsName-Dark" : "plantsName2"}>Name</label>
              </box>
            </box>

            <box className = "mediumSpeciesImgFrame">
              <box className = "MedBox">
                <image className='plantsMediumImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${monkeyTree})`}}></div>
                </image>
                <label className = {darkMode ? "plantsName-Dark" : "plantsName2"}>Name</label>
              </box>

              <box className = "MedBox">
                <image className='plantsMediumImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${quiverTree})`}}></div>
                </image>
                <label className = {darkMode ? "plantsName-Dark" : "plantsName2"}>Name</label>
              </box>
            </box>

            <box className = "largeSpeciesImgFrame">
              <image className= 'plantsLargeImage'>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${baobabTree})`}}></div>
              </image>
              <label className = {darkMode ? "plantsName-Dark" : "plantsName2"}>Species name</label>
            </box>
          </box>
        </div>

        <div className= {darkMode ? "videoFrame-Dark" : "videoFrame"}>
            <line className = "thinLine"></line>
            <div className= {darkMode ? "video-Dark" : "video"}>
              <paragragraph className="video-Discription">A video about Dragon Trees.</paragragraph>
              <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=tyJU4e5Tyjo"/>
            </div> 
            <line className = "thinLine"></line> 
        </div>




        <div className='container'>
          <box className = "box4">
            <box className = "mediumSpeciesImgFrame">
              <box className = "MedBox">
                <image className='plantsMediumImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${euphorbiaObesa})`}}></div>
                </image>
                <label className = {darkMode ? "plantsName-Dark" : "plantsName3"}>Name</label>
              </box>

              <box className = "MedBox">
                <image className='plantsMediumImage'>
                 <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${flyingVenusTrap})`}}></div>
                </image>
                <label className = {darkMode ? "plantsName-Dark" : "plantsName3"}>Name</label>
              </box>
            </box>

            <box className = "mediumSpeciesImgFrame">
              <box className = "MedBox">
                <image className='plantsMediumImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${Rafflesia})`}}></div>
                </image>
                <label className = {darkMode ? "plantsName-Dark" : "plantsName3"}>Name</label>
              </box>

              <box className = "MedBox">
                <image className='plantsMediumImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${taccaChantrieri})`}}></div>
                </image>
                <label className = {darkMode ? "plantsName-Dark" : "plantsName3"}>Name</label>
              </box>
            </box>

            <box className = "largeSpeciesImgFrame">
              <image className= 'plantsLargeImage'>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${titanArum})`}}></div>
              </image>
              <label className = {darkMode ? "plantsName-Dark" : "plantsName3"}>Species name</label>
            </box>
          </box>
        </div>

        <div className= {darkMode ? "videoFrame-Dark" : "videoFrame"}>
            <line className = "thinLine"></line>
            <div className= {darkMode ? "video-Dark" : "video"}>
              <paragragraph className="video-Discription">A video about Rafflesia Flower.</paragragraph>
              <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=YxIpl38rsMo"/>
            </div> 
            <line className = "thinLine"></line> 
        </div>


      </body>
      <PlantPageSuvNav/>
    </div>
  );
}