import React from 'react';
import {Component} from "react";

import '../../pages/publicMain.css';
import './extinctSpecies.css';

import {HomeSuvNav} from "../../subNav/subNavigation";
import extinctHeader from '../../images/extinctHeader.png';

import FontSizeIncreaser from '../../readAccessibilityGuideFunctions/fontSizeIncrease';
import DarkModeFunction from '../../darkMode/darkMode';

//Text To Voices
import {ExtinctParagraph1VOICE} from "../page-ExtinctSpecies/extinctSpeciesVoice";

//Text paragraph
import {ExtinctParagraph1} from'./extinctSpeciesParagraph.js';
import {ExtinctPara2} from'./extinctSpeciesParagraph.js';


export class ExtinctSpecies extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
      fontSize: 18,
      ExtinctSpeciesItems: [],
    };
  }

  render(){

    return (

      <div className={this.state.darkMode ? "pageMainFrameDark" : "pageMainFrameLight"}>

        <FontSizeIncreaser fontSize={this.state.fontSize} setFontSize={(size) => this.setState({ fontSize: size })} />

        <box className = "landingImageBox2" style={{ backgroundImage: `url(${extinctHeader})`}}>
          
        </box>

        <DarkModeFunction darkMode={this.state.darkMode} setDarkmode={(darkMode) => this.setState({darkMode})} />

        <body className='pageBodyFrame'>

          <div className='container'>
            <div className = "mainSubHeadFrame">
              <subhead className = {this.state.darkMode ? "subheadLrgDrk" : "subheadLrg"}>Extinct Species!</subhead>
            </div>
            <box className="paragraphContainer">
              <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                <ExtinctParagraph1/>
              </paragragraph>
              <ExtinctParagraph1VOICE/>
            </box>
          </div>

          <div id='twoColumnGridContainer'>

            <div id='flexFrame'>
              <box id="twoHolder">
                <box id="extImgFrame">
                  <image id='extinctSpeciesImage'></image>
                  <div className="overlay overlayLeft"><label className="photograpgerName">Photograph by Christopher Klassen</label></div>
                </box>
              </box>

              <box id="twoHolder">
                <subhead id='extinctSpeciesName'> This is the title </subhead>
                <p id="extinctSpeciesParagraph" style={{fontSize: `${this.state.fontSize}px`}}> 
                  <ExtinctPara2/> 
                </p>
              </box> 
            </div>

            <div id='flexFrame'>
              <box id="twoHolder">
                <subhead id='extinctSpeciesName'> This is the title </subhead>
                <p id="extinctSpeciesParagraph2" style={{fontSize: `${this.state.fontSize}px`}}> <ExtinctPara2/> </p>
              </box>

              <box id="twoHolder">
                <box id="extImgFrame">
                  <image id='extinctSpeciesImage'></image>
                </box>
              </box>
            </div>




            <div id='flexFrame'>
              <box id="twoHolder">
                <box id="extImgFrame">
                  <image id='extinctSpeciesImage'></image>
                  <div className="overlay overlayLeft"><label className="photograpgerName">Photograph by Christopher Klassen</label></div>
                </box>
              </box>

              <box id="twoHolder">
                <subhead id='extinctSpeciesName'> This is the title </subhead>
                <p style={{fontSize: `${this.state.fontSize}px`}} id="extinctSpeciesParagraph"> <box>This is the Paragraph </box></p>
              </box> 
            </div>

            <div id='flexFrame'>
              <box id="twoHolder">
                <subhead id='extinctSpeciesName'> This is the title </subhead>
                <p style={{fontSize: `${this.state.fontSize}px`}} id="extinctSpeciesParagraph2"> This is the Paragraph </p>
              </box>

              <box id="twoHolder">
                <box id="extImgFrame">
                  <image id='extinctSpeciesImage'></image>
                </box>
              </box>
            </div>



            
          </div>



        </body>
        <HomeSuvNav/>
      </div>    
    );
  }
}