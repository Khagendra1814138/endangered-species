import React from 'react';
import { Component } from "react";
import ReactPlayer from 'react-player';

import '../pages/publicMain.css';
import './arctic.css';

import {ArticSideBarPageNav} from "../sideBarPagesNav/EnArticSideBarPageNav";

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

import ArticMap from '../images/endArtic/ArticMap.PNG';


import FontSizeIncreaser from '../readAccessibilityGuideFunctions/fontSizeIncrease';
import DarkModeFunction from '../darkMode/darkMode';
// import config from '../config';


//Text To Voices
import {ArticParagraph1Voice} from "../textToVoice/endArticPageVoice";
import {ArticParagraph2Voice} from "../textToVoice/endArticPageVoice";
import {ArticParagraph3Voice} from "../textToVoice/endArticPageVoice";


export class Arctic extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
      fontSize: 18,
      // endangeredArticItems: [],
    };
  }

  
  // componentDidMount(){
  //     fetch(config.backendUrl + "api/articSpecies")
  //     .then (rest => rest.json())
  //     .then (endangeredArticRecords => {
  //     this.setState({
  //         isLoaded: true,
  //         endangeredArticItems: endangeredArticRecords,
  //       })
  //     console.log(endangeredArticRecords)
  //     });
  // }

  render(){

    return( 
      <div className={this.state.darkMode ? "pageMainFrameDark" : "pageMainFrameLight"}>

{/* //////////////////////////////////////////////////////FontSizeFunction////////////////////////////////////////////////////// */}
      <FontSizeIncreaser fontSize={this.state.fontSize} setFontSize={(size) => this.setState({ fontSize: size })} />
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div className='overflowHidden'>
          <box className = "landingImageBox2" style={{ backgroundImage: `url(${headerArtic})`}}></box>
        </div>
{/* //////////////////////////////////////////////////////DarkModeFunction////////////////////////////////////////////////////// */}
        <DarkModeFunction darkMode={this.state.darkMode} setDarkmode={(darkMode) => this.setState({darkMode})} />
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <body className='pageBodyFrame'>
          <ArticSideBarPageNav/>

          <div className = "mainSubHeadFrame">
            <subhead className = {this.state.darkMode ? "subheadLrgDrk" : "subheadLrg"}>Endangered Artic Animals</subhead>
          </div>

          <div className='container'>
        
            <div className = {this.state.darkMode ? "mapFrame-Dark" : "mapFrame"}>
              <line id="articLine"></line>
              <div className='articMap' style={{ backgroundImage: `url(${ArticMap})`}}></div>
            </div>
            
            <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
              The Arctic region is one of the most remote place on earth and is among the most spectacularly beautiful places on our planet.
              It is estimated that around 4 millions of people lives around the artic region.
              The people of Arctic coastal communities heavily rely on a healthy ocean life as a crutical source of food and to sustain a traditional way of life.
            </paragragraph>
            <ArticParagraph1Voice/>

            <box className = "box4">
              <box className = "mediumSpeciesImgFrame">
                  <box className = "MedBox">
                      <image className='articMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${articWolf})`}}></div>
                      </image>
                      <label className = {this.state.darkMode ? "articName-Dark" : "articName"}>
                        {/* {this.state.endangeredArticItems.length > 0 && (
                            <div>
                                {this.state.endangeredArticItems[4].name}
                            </div>
                        )} */}
                        Artic Wolf
                      </label>
                  </box>

                  <box className = "MedBox">
                      <image className='articMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${belugaWhale})`}}></div>
                      </image>
                      <label className = {this.state.darkMode ? "articName-Dark" : "articName"}>
                        {/* {this.state.endangeredArticItems.length > 0 && (
                          <div>
                            {this.state.endangeredArticItems[13].name}
                          </div>
                        )} */}
                        Beluga Whale
                      </label>
                  </box>
              </box>

              <box className = "largeSpeciesImgFrame">
                <box className = "speciesCardContainer">
                  <image className= 'articLargeImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${eskimoCurlew})`}}></div>
                  </image>
                  <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Stephen Pollard</label></div>

                  <label className = {this.state.darkMode ? "articName-Dark" : "articName"}>
                    {/* {this.state.endangeredArticItems.length > 0 && (
                      <div>
                        {this.state.endangeredArticItems[1].name}
                      </div>
                    )} */}
                    Eskimo Curlew
                  </label>
                </box>
              </box>

              <box className = "mediumSpeciesImgFrame">
                  <box className = "MedBox">
                    <box className = "speciesCardContainer">
                      <image className='articMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${caribouRaindeer})`}}></div>
                      </image>
                      <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Dmitry Chulov</label></div>

                      <label className = {this.state.darkMode ? "articName-Dark" : "articName"}>
                        {/* {this.state.endangeredArticItems.length > 0 && (
                          <div>
                            {this.state.endangeredArticItems[6].name}
                          </div>
                        )} */}
                        Raribou Raindeer
                      </label>
                    </box>
                  </box>

                  <box className = "MedBox">
                      <image className='articMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${lemming})`}}></div>
                      </image>
                      <label className = {this.state.darkMode ? "articName-Dark" : "articName"}>
                        {/* {this.state.endangeredArticItems.length > 0 && (
                          <div>
                            {this.state.endangeredArticItems[11].name}
                          </div>
                        )} */}
                        Artic Lemmings
                      </label>
                  </box>
              </box>
            </box>
          </div>


{/* ///////// V I D E O ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
<div className= {this.state.darkMode ? "video-Dark" : "video"}>
  <line className="thinLine"></line>
    <paragragraph className="video-Discription">A video about Beluga Whale.</paragragraph>
    <ReactPlayer className='videoFrame' controls={true} url="https://www.youtube.com/watch?v=iZ808Z-2uFI" height="450px" width="800px"/>
  <line className="thinLine"></line>
</div> 
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


          <div className='container'> 
            <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
              The Arctic region is also a home to the animal species found nowhere else on Earth. You can find the 400-year old Greenland shark, the longest living vertebrate on the earth.
              And Narwhals, the unicorn of the sea, and the colorful Spectacled Eider.
              Some of the most iconic animals species in the world like the Polar bears roams around artic region looking for ringed seals.
            </paragragraph>
            <ArticParagraph2Voice/>

            <box className = "box4">
              <box className = "mediumSpeciesImgFrame">
                  <box className = "MedBox">
                      <image className='articMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${muskOx})`}}></div>
                      </image>
                      <label className = {this.state.darkMode ? "articName-Dark" : "articName2"}>
                        {/* {this.state.endangeredArticItems.length > 0 && (
                          <div>
                            {this.state.endangeredArticItems[7].name}
                          </div>
                        )} */}
                        Musk Ox
                      </label>
                  </box>

                  <box className = "MedBox">
                      <image className='articMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${orca})`}}></div>
                      </image>
                      <label className = {this.state.darkMode ? "articName-Dark" : "articName2"}>
                        {/* {this.state.endangeredArticItems.length > 0 && (
                          <div>
                            {this.state.endangeredArticItems[14].name}
                          </div>
                        )} */}
                        Orca
                      </label>
                  </box>
              </box>

              <box className = "largeSpeciesImgFrame">
                <box className = "speciesCardContainer">
                  <image className= 'articLargeImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${narwhal})`}}></div>
                  </image>
                  <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Paul Nicklen</label></div>
                  
                  <label className = {this.state.darkMode ? "articName-Dark" : "articName2"}>
                    {/* {this.state.endangeredArticItems.length > 0 && (
                      <div>
                        {this.state.endangeredArticItems[12].name}
                      </div>
                    )} */}
                    Narwhale
                  </label>
                </box>
              </box>

              <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                    <image className='articMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${polarBear})`}}></div>
                    </image>
                    <label className = {this.state.darkMode ? "articName-Dark" : "articName2"}>
                      {/* {this.state.endangeredArticItems.length > 0 && (
                        <div>
                          {this.state.endangeredArticItems[3].name}
                        </div>
                      )} */}
                      Polar Bear
                    </label>
                </box>

                <box className = "MedBox">
                  <box className = "speciesCardContainer">
                    <image className='articMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${raindeers})`}}></div>
                    </image>
                    <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Gettyimage</label></div>

                    <label className = {this.state.darkMode ? "articName-Dark" : "articName2"}>
                      {/* {this.state.endangeredArticItems.length > 0 && (
                        <div>
                          {this.state.endangeredArticItems[9].name}
                        </div>
                      )} */}
                      Raindeers
                    </label>
                  </box>
                </box>
              </box>
            </box>
          </div>


{/* ///////// V I D E O ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
<div className= {this.state.darkMode ? "video-Dark" : "video"}>
  <line className="thinLine"></line>
    <paragragraph className="video-Discription">A video of Orca Hunting.</paragragraph>
    <ReactPlayer className='videoFrame' controls={true} url="https://www.youtube.com/watch?v=9TLg-YlDog0" height="450px" width="800px"/>
  <line className="thinLine"></line>
</div> 
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


          <div className='container'>
            <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
              The most well known marine migrations on the planet flows through the Bering Strait to reach the Arctic Ocean every year.
              Meaning the Artic region is very rich and diverse, and the area is important to the communities who live there and the planet.
            </paragragraph>
            <ArticParagraph3Voice/>

            <box className = "box4">
              <box className = "mediumSpeciesImgFrame">
                  <box className = "MedBox">
                      <image className='articMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${articFox})`}}></div>
                      </image>
                      <label className = {this.state.darkMode ? "articName-Dark" : "articName3"}>
                        {/* {this.state.endangeredArticItems.length > 0 && (
                          <div>
                            {this.state.endangeredArticItems[2].name}
                          </div>
                        )} */}
                        Artic Fox
                      </label>
                  </box>

                  <box className = "MedBox">
                    <box className = "speciesCardContainer">
                      <image className='articMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${redKnot})`}}></div>
                      </image>
                      <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Chuck Homler</label></div>

                      <label className = {this.state.darkMode ? "articName-Dark" : "articName3"}>
                        {/* {this.state.endangeredArticItems.length > 0 && (
                          <div>
                            {this.state.endangeredArticItems[0].name}
                          </div>
                        )} */}
                        Red Knot
                      </label>
                    </box>
                  </box>
              </box>

              <box className = "largeSpeciesImgFrame">
                <box className = "speciesCardContainer">
                  <image className= 'articLargeImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${woodBison})`}}></div>
                  </image>
                  <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Doug Lingstand</label></div>

                  <label className = {this.state.darkMode ? "articName-Dark" : "articName3"}>
                    {/* {this.state.endangeredArticItems.length > 0 && (
                      <div>
                        {this.state.endangeredArticItems[5].name}
                      </div>
                    )} */}
                    Wood Bison
                  </label>
                </box>
              </box>

              <box className = "mediumSpeciesImgFrame">
                  <box className = "MedBox">
                      <image className='articMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${saimaaRingedSeal})`}}></div>
                      </image>
                      <label className = {this.state.darkMode ? "articName-Dark" : "articName3"}>
                        {/* {this.state.endangeredArticItems.length > 0 && (
                          <div>
                            {this.state.endangeredArticItems[10].name}
                          </div>
                        )} */}
                        Saimaa Ringed Seal
                      </label>
                  </box>

                  <box className = "MedBox">
                    <box className = "speciesCardContainer">
                      <image className='articMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${walrus})`}}></div>
                      </image>
                      <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Joel Garlich-Miller</label></div>

                      <label className = {this.state.darkMode ? "articName-Dark" : "articName3"}>
                        {/* {this.state.endangeredArticItems.length > 0 && (
                          <div>
                            {this.state.endangeredArticItems[8].name}
                          </div>
                        )} */}
                        Pacific Walrus
                      </label>
                    </box>
                  </box>
              </box>
            </box>
          </div>


{/* ///////// V I D E O ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
<div className= {this.state.darkMode ? "video-Dark" : "video"}>
  <line className="thinLine"></line>
    <paragragraph className="video-Discription">A video of Polar Bear Hunting.</paragragraph>
    <ReactPlayer className='videoFrame' controls={true} url="https://www.youtube.com/watch?v=zNO0kxTClYo" height="450px" width="800px"/>
  <line className="thinLine"></line>
</div> 
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


        </body>
        <ArticPageSuvNav/>
      </div>
    );
  }
}