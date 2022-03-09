import React from 'react';
import { Component } from "react";
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


import FontSizeIncreaser from '../readAccessibilityGuideFunctions/fontSizeIncrease';
import DarkModeFunction from '../darkMode/darkMode';

export class Artic extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
      fontSize: 18,
      endangeredArticItems: [],
    };
  }

  
  componentDidMount(){
      fetch("http://localhost:5000/api/articSpecies")
      .then (rest => rest.json())
      .then (endangeredArticRecords => {
      this.setState({
          isLoaded: true,
          endangeredArticItems: endangeredArticRecords,
        })
      console.log(endangeredArticRecords)
      });
  }

  render(){

    return( 
      <div className={this.state.darkMode ? "pageMainFrameDark" : "pageMainFrameLight"}>

{/* //////////////////////////////////////////////////////FontSizeFunction////////////////////////////////////////////////////// */}
      <FontSizeIncreaser fontSize={this.state.fontSize} setFontSize={(size) => this.setState({ fontSize: size })} />
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <box className = "landingImageBox2" style={{ backgroundImage: `url(${headerArtic})`}}></box>

{/* //////////////////////////////////////////////////////DarkModeFunction////////////////////////////////////////////////////// */}
        <DarkModeFunction darkMode={this.state.darkMode} setDarkmode={(darkMode) => this.setState({darkMode})} />
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <body className='pageBodyFrame'>
          <div className='container'>
            <div className = "mainSubHeadFrame">
              <subhead className = {this.state.darkMode ? "subheadLrgDrk" : "subheadLrg"}>Endangered Artic Animals</subhead>
            </div>

            <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
              The Arctic region is one of the most remote place on earth and is among the most spectacularly beautiful places on our planet.
              It is estimated that around 4 millions of people lives around the artic region.
              The people of Arctic coastal communities heavily rely on a healthy ocean life as a crutical source of food and to sustain a traditional way of life.
              <br></br>
              <br></br>
              The Arctic region is also a home to the animal species found nowhere else on Earth. You can find the 400-year old Greenland shark, the longest living vertebrate on the earth.
              And Narwhals, the unicorn of the sea, and the colorful Spectacled Eider.
              Some of the most iconic animals species in the world like the Polar bears roams around artic region looking for ringed seals.
              <br></br>
              <br></br>
              The most well known marine migrations on the planet flows through the Bering Strait to reach the Arctic Ocean every year.
              Meaning the Artic region is very rich and diverse, and the area is important to the communities who live there and the planet.
            </paragragraph>


            <box className = "box4">
              <box className = "mediumSpeciesImgFrame">
                  <box className = "MedBox">
                      <image className='articMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${articWolf})`}}></div>
                      </image>
                      <label className = {this.state.darkMode ? "articName-Dark" : "articName"}>
                        {this.state.endangeredArticItems.length > 0 && (
                            <div>
                                {this.state.endangeredArticItems[4].name}
                            </div>
                        )}
                      </label>
                  </box>

                  <box className = "MedBox">
                      <image className='articMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${belugaWhale})`}}></div>
                      </image>
                      <label className = {this.state.darkMode ? "articName-Dark" : "articName"}>
                        {this.state.endangeredArticItems.length > 0 && (
                          <div>
                            {this.state.endangeredArticItems[13].name}
                          </div>
                        )}
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
                    {this.state.endangeredArticItems.length > 0 && (
                      <div>
                        {this.state.endangeredArticItems[1].name}
                      </div>
                    )}
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
                        {this.state.endangeredArticItems.length > 0 && (
                          <div>
                            {this.state.endangeredArticItems[6].name}
                          </div>
                        )}
                      </label>
                    </box>
                  </box>

                  <box className = "MedBox">
                      <image className='articMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${lemming})`}}></div>
                      </image>
                      <label className = {this.state.darkMode ? "articName-Dark" : "articName"}>
                        {this.state.endangeredArticItems.length > 0 && (
                          <div>
                            {this.state.endangeredArticItems[11].name}
                          </div>
                        )}
                      </label>
                  </box>
              </box>
            </box>
          </div>

          <div className= {this.state.darkMode ? "videoFrame-Dark" : "videoFrame"}>
              <line className = "thinLine"></line>
              <div className= {this.state.darkMode ? "video-Dark" : "video"}>
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
                      <label className = {this.state.darkMode ? "articName-Dark" : "articName2"}>
                        {this.state.endangeredArticItems.length > 0 && (
                          <div>
                            {this.state.endangeredArticItems[7].name}
                          </div>
                        )}
                      </label>
                  </box>

                  <box className = "MedBox">
                      <image className='articMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${orca})`}}></div>
                      </image>
                      <label className = {this.state.darkMode ? "articName-Dark" : "articName2"}>
                        {this.state.endangeredArticItems.length > 0 && (
                          <div>
                            {this.state.endangeredArticItems[14].name}
                          </div>
                        )}
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
                    {this.state.endangeredArticItems.length > 0 && (
                      <div>
                        {this.state.endangeredArticItems[12].name}
                      </div>
                    )}
                  </label>
                </box>
              </box>

              <box className = "mediumSpeciesImgFrame">
                  <box className = "MedBox">
                      <image className='articMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${polarBear})`}}></div>
                      </image>
                      <label className = {this.state.darkMode ? "articName-Dark" : "articName2"}>
                        {this.state.endangeredArticItems.length > 0 && (
                          <div>
                            {this.state.endangeredArticItems[3].name}
                          </div>
                        )}
                      </label>
                  </box>

                  <box className = "MedBox">
                    <box className = "speciesCardContainer">
                      <image className='articMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${raindeers})`}}></div>
                      </image>
                      <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Gettyimage</label></div>

                      <label className = {this.state.darkMode ? "articName-Dark" : "articName2"}>
                        {this.state.endangeredArticItems.length > 0 && (
                          <div>
                            {this.state.endangeredArticItems[9].name}
                          </div>
                        )}
                      </label>
                    </box>
                  </box>
              </box>
            </box>
          </div>

          <div className= {this.state.darkMode ? "videoFrame-Dark" : "videoFrame"}>
              <line className = "thinLine"></line>
              <div className= {this.state.darkMode ? "video-Dark" : "video"}>
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
                      <label className = {this.state.darkMode ? "articName-Dark" : "articName3"}>
                        {this.state.endangeredArticItems.length > 0 && (
                          <div>
                            {this.state.endangeredArticItems[2].name}
                          </div>
                        )}
                      </label>
                  </box>

                  <box className = "MedBox">
                    <box className = "speciesCardContainer">
                      <image className='articMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${redKnot})`}}></div>
                      </image>
                      <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Chuck Homler</label></div>

                      <label className = {this.state.darkMode ? "articName-Dark" : "articName3"}>
                        {this.state.endangeredArticItems.length > 0 && (
                          <div>
                            {this.state.endangeredArticItems[0].name}
                          </div>
                        )}
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
                    {this.state.endangeredArticItems.length > 0 && (
                      <div>
                        {this.state.endangeredArticItems[5].name}
                      </div>
                    )}
                  </label>
                </box>
              </box>

              <box className = "mediumSpeciesImgFrame">
                  <box className = "MedBox">
                      <image className='articMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${saimaaRingedSeal})`}}></div>
                      </image>
                      <label className = {this.state.darkMode ? "articName-Dark" : "articName3"}>
                        {this.state.endangeredArticItems.length > 0 && (
                          <div>
                            {this.state.endangeredArticItems[10].name}
                          </div>
                        )}
                      </label>
                  </box>

                  <box className = "MedBox">
                    <box className = "speciesCardContainer">
                      <image className='articMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${walrus})`}}></div>
                      </image>
                      <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Joel Garlich-Miller</label></div>

                      <label className = {this.state.darkMode ? "articName-Dark" : "articName3"}>
                        {this.state.endangeredArticItems.length > 0 && (
                          <div>
                            {this.state.endangeredArticItems[8].name}
                          </div>
                        )}
                      </label>
                    </box>
                  </box>
              </box>
            </box>
          </div>

          <div className= {this.state.darkMode ? "videoFrame-Dark" : "videoFrame"}>
              <line className = "thinLine"></line>
              <div className= {this.state.darkMode ? "video-Dark" : "video"}>
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
}