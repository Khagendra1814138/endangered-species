import React from 'react';
import ReactPlayer from 'react-player';
import {Component} from "react";

import '../../pages/publicMain.css';
import './insects.css';
import './insectsPageGrid.css';

//SideBarPageNav
import {InsectsSideBarPageNav} from "../../sideBarPagesNav/EnInsectsSideBarPageNav";

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
import {InsectsMainParagraph} from "./insectsParagraphs"
import {DietParagraph} from "./insectsParagraphs"
import {PollinatorParagraph} from "./insectsParagraphs"
import {CleaningFertelisingPestcontrolParagraph} from "./insectsParagraphs"
import {EconomyParagraph} from "./insectsParagraphs"

//Text To Voices
import {InsectMainParagraphVOICE} from "./insectsVOICE";
import {InsectsDietVOICE} from "./insectsVOICE";
import {InsectsPollinatorVOICE} from "./insectsVOICE";
import {InsectsCleanFertelPestContVOICE} from "./insectsVOICE";
import {InsectsEconomyVOICE} from "./insectsVOICE";


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

        <div className='overflowHidden'>
          <box className = "landingImageBox2" style={{ backgroundImage: `url(${headerInsects})`}}></box>
        </div>

        <InsectsSideBarPageNav/>
        <DarkModeFunction darkMode={this.state.darkMode} setDarkmode={(darkMode) => this.setState({darkMode})} />

        <body className='pageBodyFrame'>

          <div className = "mainSubHeadFrame">
            <subhead className = {this.state.darkMode ? "subheadLrgDrk" : "subheadLrg"}>Endangered Insects Species</subhead>
          </div>
    

          <div className='container'>
            <box className="paragraphContainer">
              <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                <InsectsMainParagraph/>
              </paragragraph>
              <InsectMainParagraphVOICE/>
            </box>

            <BeetlesCardsSet/>
          </div>


{/* ///////// V I D E O ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}          
<div className= {this.state.darkMode ? "video-Dark" : "video"}>
  <line className="thinLine"></line> 
      <paragragraph className="video-Discription">A video about the Critically endangered Scottish wildcats.</paragragraph>
      <ReactPlayer className='videoFrame'  controls={true} url="https://www.youtube.com/watch?v=g3W3yr8NopU&t=93s" height="450px" width="800px"/>
  <line className="thinLine"></line> 
</div> 
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          

          <div className='container'>
            <GrasshoppersCardsSet/>

            <box className="paragraphContainer">
              <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                <DietParagraph/>
              </paragragraph>
              <InsectsDietVOICE/>
            </box>

            <StickInsectsAndCricketsCardsSet/>
          </div>


{/* ///////// V I D E O ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}          
<div className= {this.state.darkMode ? "video-Dark" : "video"}>
  <line className="thinLine"></line> 
    <paragragraph className="video-Discription">A video about the Critically endangered Scottish wildcats.</paragragraph>
    <ReactPlayer className='videoFrame' controls={true} url="https://www.youtube.com/watch?v=g3W3yr8NopU&t=93s" height="450px" width="800px"/>
  <line className="thinLine"></line> 
</div> 
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
          

          <div className='container'>
            <BeesCardsSet/>

            <box className="paragraphContainer">
              <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                <PollinatorParagraph/>
              </paragragraph>
              <InsectsPollinatorVOICE/>
            </box>

            <ButterflysAndMothsCardsSet/>
          </div>


{/* ///////// V I D E O ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}          
<div className= {this.state.darkMode ? "video-Dark" : "video"}>
  <line className="thinLine"></line> 
    <paragragraph className="video-Discription">A video about the Critically endangered Scottish wildcats.</paragragraph>
    <ReactPlayer className='videoFrame' controls={true} url="https://www.youtube.com/watch?v=g3W3yr8NopU&t=93s" height="450px" width="800px"/>
  <line className="thinLine"></line> 
</div> 
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


          <div className='container'>
            <DragonflyAndDamselflyCardsSet/>

            <box className="paragraphContainer">
              <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                <CleaningFertelisingPestcontrolParagraph/>
              </paragragraph>
              <InsectsCleanFertelPestContVOICE/>
            </box>

            <SpidersCardsSet/>
          </div>


{/* ///////// V I D E O ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}          
<div className= {this.state.darkMode ? "video-Dark" : "video"}>
  <line className="thinLine"></line> 
    <paragragraph className="video-Discription">A video about the Critically endangered Scottish wildcats.</paragragraph>
    <ReactPlayer className='videoFrame' controls={true} url="https://www.youtube.com/watch?v=g3W3yr8NopU&t=93s" height="450px" width="800px"/>
  <line className="thinLine"></line> 
</div> 
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


          <div className='container'>
            <box className="paragraphContainer">
              <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                <EconomyParagraph/>
              </paragragraph>
              <InsectsEconomyVOICE/>
            </box>
          </div>
        </body>
        <InsectsPageSuvNav/>
      </div>    
    );
  }
}