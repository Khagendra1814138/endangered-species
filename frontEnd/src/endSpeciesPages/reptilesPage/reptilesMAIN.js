import React from 'react';
import {Component} from "react";
import ReactPlayer from 'react-player';

import '../../pages/publicMain.css';
import './reptiles.css';
import './reptilesNameSTYLES.css';


import {ReptilesPageSuvNav} from "../../subNav/subNavigation";
import headerReptiles from '../../images/headerReptiles.png';

import FontSizeIncreaser from '../../readAccessibilityGuideFunctions/fontSizeIncrease';
import DarkModeFunction from '../../darkMode/darkMode';

//Text To Voices
import {HomeParagraphOneVoice} from "../../textToVoice/paragraphs";




//Turtles and Tortoises Cards & Paragraph
import {TurtlesAndTortoisesCardSet1} from "./turtlesAndTortoises";
import {TurtlesAndTortoisesCardSet2} from "./turtlesAndTortoises";

import {TurtlesAndTortoisesParagraph} from "./reptilesParagragraph";

//Crocodiles and Allligators
import {CrocodilesAndAlligatorsCardSet} from "./crocodilesAndAlligators";

//Lizards, Iguans and Chameleon
import {LizardsSet1} from "./lizard,IgunaAndChameleon";
import {LizardsSet2} from "./lizard,IgunaAndChameleon";

//Snakes
import {SnakesCardSet1} from "./snakes";
import {SnakesCardSet2} from "./snakes";

export class Reptiles extends Component {
  
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

        <box className = "landingImageBox2" style={{ backgroundImage: `url(${headerReptiles})`}}>
        </box>

        <DarkModeFunction darkMode={this.state.darkMode} setDarkmode={(darkMode) => this.setState({darkMode})} />

        <body className='pageBodyFrame'>

          <div className='container'>
            <div className = "mainSubHeadFrame">
              <subhead className = {this.state.darkMode ? "subheadLrgDrk" : "subheadLrg"}>Endangered Reptiles Species</subhead>
            </div>
            <box className="paragraphContainer">
              <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                Did you know that over 900+ species of plants and animals have gone extinct over the five centuries.
                And more than 70 species are now considered as extinct in the wild! stated by the IUCN. 
                Extinct in the wild means that the species is the only living members kept in captivity or as a naturalized population outside its historic range due to massive habitat loss.
                The UN report states that around 1 million animal and plant species are now threatened with extinction, many within decades.
                {/* https://ourworldindata.org/extinctions#:~:text=Extinctions%20have%20been%20a%20natural,in%20the%20last%20five%20centuries. */}
              </paragragraph>
              <HomeParagraphOneVoice/>
            </box>
          </div>


          <TurtlesAndTortoisesCardSet1/>

      {/* ///////// V I D E O ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}          
          <div className= {this.state.darkMode ? "video-Dark" : "video"}>
              <line className="thinLine"></line> 
                  <paragragraph className="video-Discription">A video about the Critically endangered Scottish wildcats.</paragragraph>
                  <ReactPlayer className='videoFrame' height="450px" width="800px" controls={true} url="https://www.youtube.com/watch?v=g3W3yr8NopU&t=93s"/>
              <line className="thinLine"></line> 
          </div> 
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <TurtlesAndTortoisesCardSet2/>


          <box className="paragraphContainer">
            <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
              <TurtlesAndTortoisesParagraph/>
            </paragragraph>
            <HomeParagraphOneVoice/>
          </box>

          <CrocodilesAndAlligatorsCardSet/>

          <box className="paragraphContainer">
            <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
              <TurtlesAndTortoisesParagraph/>
            </paragragraph>
            <HomeParagraphOneVoice/>
          </box>

          <LizardsSet1/>

          {/* ///////// V I D E O ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}          
          <div className= {this.state.darkMode ? "video-Dark" : "video"}>
              <line className="thinLine"></line> 
                  <paragragraph className="video-Discription">A video about the Critically endangered Scottish wildcats.</paragragraph>
                  <ReactPlayer className='videoFrame' height="450px" width="800px" controls={true} url="https://www.youtube.com/watch?v=g3W3yr8NopU&t=93s"/>
              <line className="thinLine"></line> 
          </div> 
          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <LizardsSet2/>
          <box className="paragraphContainer">
            <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
              <TurtlesAndTortoisesParagraph/>
            </paragragraph>
            <HomeParagraphOneVoice/>
          </box>

          <SnakesCardSet1/>

          {/* ///////// V I D E O ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}          
          <div className= {this.state.darkMode ? "video-Dark" : "video"}>
            <line className="thinLine"></line> 
              <paragragraph className="video-Discription">A video about the Critically endangered Scottish wildcats.</paragragraph>
              <ReactPlayer className='videoFrame' height="450px" width="800px" controls={true} url="https://www.youtube.com/watch?v=g3W3yr8NopU&t=93s"/>
            <line className="thinLine"></line> 
          </div> 
          {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <SnakesCardSet2/>

          <box className="paragraphContainer">
            <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
              <TurtlesAndTortoisesParagraph/>
            </paragragraph>
            <HomeParagraphOneVoice/>
          </box>



        </body>
        <ReptilesPageSuvNav/>
      </div>    
    );
  }
}