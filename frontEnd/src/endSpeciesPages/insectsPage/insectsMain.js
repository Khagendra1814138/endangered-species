import React from 'react';
import ReactPlayer from 'react-player';
import {Component} from "react";

import '../../pages/publicMain.css';
import './insects.css';
import './insectsPageGrid.css';


import {InsectsPageSuvNav} from "../../subNav/subNavigation";
import headerInsects from '../../images/headerInsects2.png';

import FontSizeIncreaser from '../../readAccessibilityGuideFunctions/fontSizeIncrease';
import DarkModeFunction from '../../darkMode/darkMode';

//Beetles Card
import {BeetlesCardsSet} from "./beetles"
//Grasshoppers Card
import {GrasshoppersCardsSet} from "./grasshoppers"
//Stick Insects and Crickets Cards
import {StickInsectsAndCricketsCardsSet} from "./stickInsectsAndCrickets"
//Bees Cards
import {BeesCardsSet} from "./bees"
//Butterflies and Moths Cards
import {ButterflysAndMothsCardsSet} from "./butterflysAndMoths"

import {DragonflyAndDamselflyCardsSet} from "./dragonflyAndDamselfly"

import {SpidersCardsSet} from "./spiders"


//Paragraphs
import {InsectsTopParagraph} from "./insectsParagraphs"
//Text To Voices
import {InsectMainParagraphVOICE} from "./insectsParagraphVOICE";



export class Insects extends Component {
  
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

        <box className = "landingImageBox2" style={{ backgroundImage: `url(${headerInsects})`}}>
          
        </box>

        <DarkModeFunction darkMode={this.state.darkMode} setDarkmode={(darkMode) => this.setState({darkMode})} />

        <body className='pageBodyFrame'>

          <div className='container'>
            <div className = "mainSubHeadFrame">
              <subhead className = {this.state.darkMode ? "subheadLrgDrk" : "subheadLrg"}>Endangered Insects Species</subhead>
            </div>
          </div>


          <div className='blockFrame'>
            <h3> title </h3>
            <image> Image </image>
            <p> Paragraph </p>
          </div>

          
          <div className='flexFrame'>
            <box className="twoHolder">
            <image> Image </image>
            </box>

            <box className="twoHolder">
            <h3> This is the title </h3>
            <p> This is the Paragraph </p>
            <button id='linkBtn'> This is button </button>
            </box> 
          </div>

          <box className="paragraphContainer">
            <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
              <InsectsTopParagraph/>
            </paragragraph>
            <InsectMainParagraphVOICE/>
          </box>

          <BeetlesCardsSet/>

    {/* ///////// V I D E O ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}          
          <div className= {this.state.darkMode ? "video-Dark" : "video"}>
            <line className="thinLine"></line> 
                <paragragraph className="video-Discription">A video about the Critically endangered Scottish wildcats.</paragragraph>
                <ReactPlayer className='videoFrame' height="450px" width="800px" controls={true} url="https://www.youtube.com/watch?v=g3W3yr8NopU&t=93s"/>
            <line className="thinLine"></line> 
          </div> 
    {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <GrasshoppersCardsSet/>

          <box className="paragraphContainer">
            <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
              <InsectsTopParagraph/>
            </paragragraph>
            <InsectMainParagraphVOICE/>
          </box>

          <StickInsectsAndCricketsCardsSet/>

    {/* ///////// V I D E O ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}          
          <div className= {this.state.darkMode ? "video-Dark" : "video"}>
              <line className="thinLine"></line> 
                  <paragragraph className="video-Discription">A video about the Critically endangered Scottish wildcats.</paragragraph>
                  <ReactPlayer className='videoFrame' height="450px" width="800px" controls={true} url="https://www.youtube.com/watch?v=g3W3yr8NopU&t=93s"/>
              <line className="thinLine"></line> 
          </div> 
    {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <BeesCardsSet/>

          <box className="paragraphContainer">
            <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
              <InsectsTopParagraph/>
            </paragragraph>
            <InsectMainParagraphVOICE/>
          </box>

          <ButterflysAndMothsCardsSet/>

    {/* ///////// V I D E O ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}          
          <div className= {this.state.darkMode ? "video-Dark" : "video"}>
              <line className="thinLine"></line> 
                  <paragragraph className="video-Discription">A video about the Critically endangered Scottish wildcats.</paragragraph>
                  <ReactPlayer className='videoFrame' height="450px" width="800px" controls={true} url="https://www.youtube.com/watch?v=g3W3yr8NopU&t=93s"/>
              <line className="thinLine"></line> 
          </div> 
    {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <DragonflyAndDamselflyCardsSet/>

          <box className="paragraphContainer">
            <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
              <InsectsTopParagraph/>
            </paragragraph>
            <InsectMainParagraphVOICE/>
          </box>

          <SpidersCardsSet/>

   {/* ///////// V I D E O ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}          
          <div className= {this.state.darkMode ? "video-Dark" : "video"}>
              <line className="thinLine"></line> 
                  <paragragraph className="video-Discription">A video about the Critically endangered Scottish wildcats.</paragragraph>
                  <ReactPlayer className='videoFrame' height="450px" width="800px" controls={true} url="https://www.youtube.com/watch?v=g3W3yr8NopU&t=93s"/>
              <line className="thinLine"></line> 
          </div> 
    {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

 


        </body>
        <InsectsPageSuvNav/>
      </div>    
    );
  }
}