import React from 'react';
import { useState } from "react";
import ReactPlayer from 'react-player';

import '../pages/publicMain.css';
import './fungus.css';

import {FungiPageSuvNav} from "../subNav/subNavigation";
import headerFungus from '../images/headerFungus.png';

//fungus
import barbiePagoda from '../images/endFungus/barbiePagoda.png';
import armillariaEctypa from '../images/endFungus/armillariaEctypa.png';
import boletopsisNothofagi from '../images/endFungus/boletopsisNothofagi.png';
import boletusLoyo from '../images/endFungus/boletusLoyo.png';
import caterpillarFungus from '../images/endFungus/caterpillarFungus.png';

import bovistaPaludosa from '../images/endFungus/bovistaPaludosa.png';
import cystodermaCarpaticum from '../images/endFungus/cystodermaCarpaticum.png';
import destuntziaRubra from '../images/endFungus/destuntziaRubra.png';
import entolomaBloxamii from '../images/endFungus/entolomaBloxamii.png';
import entolomaRavinense from '../images/endFungus/entolomaRavinense.png';

import hygrocybeBoothii from '../images/endFungus/hygrocybeBoothii.png';
import greenCageFungus from '../images/endFungus/greenCageFungus.png';
import phylloporusPelletieri from '../images/endFungus/phylloporusPelletieri.png';
import tulostomaNiveum from '../images/endFungus/tulostomaNiveum.png';
import whiteFerula from '../images/endFungus/whiteFerula.png';

import {FaPlusSquare} from 'react-icons/fa';
import {FaMinusSquare} from 'react-icons/fa';

export const Fungus = () => {
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
        <box className = "landingImageBox2" style={{ backgroundImage: `url(${headerFungus})`}}></box>

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
              <subhead className = {darkMode ? "subheadLrgDrk" : "subheadLrg"}>Endangered Fungus Species</subhead>
            </div>
        
            <paragragraph style={{fontSize: `${fontSize}px`}} className = {darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
              Wass awass
            </paragragraph>


            <box className = "box4">
              <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                  <image className='fungusMediumImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${armillariaEctypa})`}}></div>
                  </image>
                  <label className = {darkMode ? "fungusName-Dark" : "fungusName"}>Name</label>
                </box>

                <box className = "MedBox">
                  <image className='fungusMediumImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${boletopsisNothofagi})`}}></div>
                  </image>
                  <label className = {darkMode ? "fungusName-Dark" : "fungusName"}>Name</label>
                </box>
              </box>

              <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                  <image className='fungusMediumImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${boletusLoyo})`}}></div>
                  </image>
                  <label className = {darkMode ? "fungusName-Dark" : "fungusName"}>Name</label>
                </box>

                <box className = "MedBox">
                  <image className='fungusMediumImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${caterpillarFungus})`}}></div>
                  </image>
                  <label className = {darkMode ? "fungusName-Dark" : "fungusName"}>Name</label>
                </box>
              </box>

              <box className = "largeSpeciesImgFrame">
                <image className= 'fungusLargeImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${barbiePagoda})`}}></div>
                </image>
                <label className = {darkMode ? "fungusName-Dark" : "fungusName"}>Species name</label>
              </box>
            </box>
          </div>

          <div className= {darkMode ? "videoFrame-Dark" : "videoFrame"}>
              <line className = "thinLine"></line>
              <div className= {darkMode ? "video-Dark" : "video"}>
                <paragragraph className="video-Discription">A video about why Fungus are Important.</paragragraph>
                <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=BlcKBKJ8uro"/>
              </div> 
              <line className = "thinLine"></line> 
          </div>




        
          <div className='container'>
            <box className = "box4">
              <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                  <image className='fungusMediumImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${cystodermaCarpaticum})`}}></div>
                  </image>
                  <label className = {darkMode ? "fungusName-Dark" : "fungusName2"}>Name</label>
                </box>

                <box className = "MedBox">
                  <image className='fungusMediumImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${destuntziaRubra})`}}></div>
                  </image>
                  <label className = {darkMode ? "fungusName-Dark" : "fungusName2"}>Name</label>
                </box>
              </box>

              <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                  <image className='fungusMediumImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${entolomaBloxamii})`}}></div>
                  </image>
                  <label className = {darkMode ? "fungusName-Dark" : "fungusName2"}>Name</label>
                </box>

                <box className = "MedBox">
                  <image className='fungusMediumImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${entolomaRavinense})`}}></div>
                  </image>
                  <label className = {darkMode ? "fungusName-Dark" : "fungusName2"}>Name</label>
                </box>
              </box>

              <box className = "largeSpeciesImgFrame">
                <image className= 'fungusLargeImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${bovistaPaludosa})`}}></div>
                </image>
                <label className = {darkMode ? "fungusName-Dark" : "fungusName2"}>Species name</label>
              </box>
            </box>
          </div>

          <div className= {darkMode ? "videoFrame-Dark" : "videoFrame"}>
              <line className = "thinLine"></line>
              <div className= {darkMode ? "video-Dark" : "video"}>
                <paragragraph className="video-Discription">A video about Mycelium Fungus</paragragraph>
                <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=cApVVuuqLFY"/>
              </div>
              <line className = "thinLine"></line>  
          </div>





          <div className='container'>
            <box className = "box4">
              <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                  <image className='fungusMediumImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${greenCageFungus})`}}></div>
                  </image>
                  <label className = {darkMode ? "fungusName-Dark" : "fungusName3"}>Name</label>
                </box>

                <box className = "MedBox">
                  <image className='fungusMediumImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${phylloporusPelletieri})`}}></div>
                  </image>
                  <label className = {darkMode ? "fungusName-Dark" : "fungusName3"}>Name</label>
                </box>
              </box>

              <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                  <image className='fungusMediumImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${tulostomaNiveum})`}}></div>
                  </image>
                  <label className = {darkMode ? "fungusName-Dark" : "fungusName3"}>Name</label>
                </box>

                <box className = "MedBox">
                  <image className='fungusMediumImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${whiteFerula})`}}></div>
                  </image>
                  <label className = {darkMode ? "fungusName-Dark" : "fungusName3"}>Name</label>
                </box>
              </box>

              <box className = "largeSpeciesImgFrame">
                <image className= 'fungusLargeImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${hygrocybeBoothii})`}}></div>
                </image>
                <label className = {darkMode ? "fungusName-Dark" : "fungusName3"}>Species name</label>
              </box>
            </box>
          </div>


          <div className= {darkMode ? "videoFrame-Dark" : "videoFrame"}>
              <line className = "thinLine"></line>
              <div className= {darkMode ? "video-Dark" : "video"}>
                <paragragraph className="video-Discription">A video about Killer Fungus.</paragragraph>
                <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=ROQrbWkV4HI"/>
              </div> 
              <line className = "thinLine"></line> 
          </div>



        </body>
        <FungiPageSuvNav/>
      </div>
    );
}