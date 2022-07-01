import React from "react";
import { Component } from "react";
import ReactPlayer from 'react-player';


import './causesPage.css'

import {CausesSuvNav} from "../../subNav/subNavigation";
import header5 from '../../images/header5.png';

import PlasticPollution from '../../images/pagesImages/PlasticPollution.jpg';
import ChemicalPollution from '../../images/pagesImages/ChemicalPollution.jpg';
import Infrastructures from '../../images/pagesImages/Infrastructures.jpg';
import climateChange from '../../images/pagesImages/climateChange.jpg';
import illegalPoach from '../../images/pagesImages/illegalPoach.jpg';
import habitatDistruction from '../../images/pagesImages/habitatDistruction.jpg';
import InvasiveSpecies from '../../images/pagesImages/InvasiveSpecies.jpg';
import overFishing from '../../images/pagesImages/overFishing.jpg';
import oilRig from '../../images/pagesImages/oilRig.jpg';
import disease from '../../images/pagesImages/disease.jpg';


import FontSizeIncreaser from '../../readAccessibilityGuideFunctions/fontSizeIncrease';
import DarkModeFunction from '../../darkMode/darkMode';

//Texts
import {CausesParagaph1} from "./causesParagraph";
import {PlasticPollutionPARAGRAPH} from "./causesParagraph";
import {ChemicalPollutionPARAGRAPH} from "./causesParagraph";
import {InfrastructuresPARAGRAPH} from "./causesParagraph";
import {ClimateChangePARAGRAPH} from "./causesParagraph";
import {IllegalTradingPARAGRAPH} from "./causesParagraph";
import {HabitatDistructionPARAGRAPH} from "./causesParagraph";
import {InvasiveSpeciesPARAGRAPH} from "./causesParagraph";
import {OverFishingPARAGRAPH} from "./causesParagraph";
import {DiseasePARAGRAPH} from "./causesParagraph";
import {OilGasDevelopmentPARAGRAPH} from "./causesParagraph";



//Text To Voices
import {CausesPageParagraphVoice} from "../../textToVoice/causesPageVoice";
import {PlasticPollutionVoice} from "../../textToVoice/causesPageVoice";
import {ChemicalPollutionVoice} from "../../textToVoice/causesPageVoice";
import {InfrastructuresParagraphVoice} from "../../textToVoice/causesPageVoice";
import {ClimateChangeParagraphVoice} from "../../textToVoice/causesPageVoice";
import {IllegalTradingParagraphVoice} from "../../textToVoice/causesPageVoice";
import {HabitatDistructionParagraphVoice} from "../../textToVoice/causesPageVoice";
import {InvasiveSpeciesParagraphVoice} from "../../textToVoice/causesPageVoice";
import {OverFishingParagraphVoice} from "../../textToVoice/causesPageVoice";
import {DiseaseParagraphVoice} from "../../textToVoice/causesPageVoice";
import {OilGasDevelopmentParagraphVoice} from "../../textToVoice/causesPageVoice";

//Sources
//https://ourworldindata.org/threats-to-wildlife
export class Causes extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
      fontSize: 18,
    };
  }

  render(){

    return (
      <div className={this.state.darkMode ? "pageMainFrameDark" : "pageMainFrameLight"}>

{/* //////////////////////////////////////////////////////FontSizeFunction////////////////////////////////////////////////////// */}
        <FontSizeIncreaser fontSize={this.state.fontSize} setFontSize={(size) => this.setState({ fontSize: size })} />
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <box className = "landingImageBox2" style={{ backgroundImage: `url(${header5})`}}></box>
        
{/* //////////////////////////////////////////////////////DarkModeFunction////////////////////////////////////////////////////// */}
        <DarkModeFunction darkMode={this.state.darkMode} setDarkmode={(darkMode) => this.setState({darkMode})} />
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <body className='pageBodyFrame'>
          <div className='container'>

            <div className = "mainSubHeadFrame">
              <subhead className={this.state.darkMode ? "subheadLrgDrk" : "subheadLrg"}>Causes threatning the species</subhead>
            </div>

            <box className="paragraphContainer">
              <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                <CausesParagaph1/>
              </paragragraph>
              <CausesPageParagraphVoice/>
            </box>
      

            <box className = "box">
              <image className={this.state.darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${PlasticPollution})`}}></div>
              </image>

              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>P l a s t i c - P o l l u t i o n</label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                  <PlasticPollutionPARAGRAPH/>
                </paragragraph>
              </box>
            </box>
            <PlasticPollutionVoice/>

            <div className= {this.state.darkMode ? "videoFrame-Dark" : "videoFrame"}>
              <line className = "thinLine"></line>
              <div className= {this.state.darkMode ? "video-Dark" : "video"}>
                <paragragraph className="video-Discription">A video of plastic pollution effects.</paragragraph>
                <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=IA9O9YUbQew"/>
              </div>
              <line className = "thinLine"></line>
            </div>

            {/* <line className = "largeLine"></line> */}

            <box className = "box">
              <box className = "speciesCardContainer">
                <image className={this.state.darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${ChemicalPollution})`}}></div>
                </image>
                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Shutterstock</label></div>
              </box>

              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>C h e m i c a l - P o l l u t i o n</label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                  <ChemicalPollutionPARAGRAPH/>
                  {/* https://blog.cwf-fcf.org/index.php/en/threats-chemical-pollution/ */}
                </paragragraph>
              </box>
            </box>
            <ChemicalPollutionVoice/>

            <line className = "largeLine"></line>

            <box className = "box">
              <box className = "speciesCardContainer">
                <image className={this.state.darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${Infrastructures})`}}></div>
                </image>
                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Gettyimages</label></div>
              </box>
              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>I n f r a s t r u c t u r e 's</label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                  <InfrastructuresPARAGRAPH/>
                </paragragraph>
              </box>
            </box>
            <InfrastructuresParagraphVoice/>
            
            <line className = "largeLine"></line>

            <box className = "box">
              <image className={this.state.darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${climateChange})`}}></div>
              </image>

              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>C l i m a t e - C h a n g e</label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                  <ClimateChangePARAGRAPH/>
                </paragragraph>
              </box>
            </box>
            <ClimateChangeParagraphVoice/>

            <div className= {this.state.darkMode ? "videoFrame-Dark" : "videoFrame"}>
              <line className = "thinLine"></line>
              <div className= {this.state.darkMode ? "video-Dark" : "video"}>
                <paragragraph className="video-Discription">A video of how climate change is effecting our planet.</paragragraph>
                <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=dIsjcG7hTmo"/>
              </div> 
              <line className = "thinLine"></line>
            </div>

            {/* <line className = "largeLine"></line> */}

            <box className = "box">
              <box className = "speciesCardContainer">
                <image className={this.state.darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${illegalPoach})`}}></div>
                </image>
                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Jerome Starkey</label></div>
              </box>
        
              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>i l l e g a l - T r a d i n g</label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                  <IllegalTradingPARAGRAPH/>
                </paragragraph>
              </box>
            </box>
            <IllegalTradingParagraphVoice/>

            
            <line className = "largeLine"></line>

            <box className = "box">
              <box className = "speciesCardContainer">
                <image className={this.state.darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${habitatDistruction})`}}></div>
                </image>
                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Reuters</label></div>
              </box>

              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>H a b i t a t - D i s t r u c t i o n</label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                  <HabitatDistructionPARAGRAPH/>
                </paragragraph>
              </box>
            </box>
            <HabitatDistructionParagraphVoice/>

            <div className= {this.state.darkMode ? "videoFrame-Dark" : "videoFrame"}>
              <line className = "thinLine"></line>
              <div className= {this.state.darkMode ? "video-Dark" : "video"}>
                <paragragraph className="video-Discription">A video of how deforestation effects out planet.</paragragraph>
                <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=Ic-J6hcSKa8"/>
              </div> 
              <line className = "thinLine"></line>
            </div>
  {/* 
            <line className = "largeLine"></line> */}

            <box className = "box">
              <image className={this.state.darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${InvasiveSpecies})`}}></div>
              </image>
      
              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>I n v a s i v e - S p e c i e s</label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                  <InvasiveSpeciesPARAGRAPH/>
                </paragragraph>
              </box>
            </box>
            <InvasiveSpeciesParagraphVoice/>

            <line className = "largeLine"></line>

            <box className = "box">
              <image className={this.state.darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${overFishing})`}}></div>
              </image>
      
              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>O v e r - F i s h i n g</label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                  <OverFishingPARAGRAPH/>
                </paragragraph>
              </box>
            </box>
            <OverFishingParagraphVoice/>

            <div className= {this.state.darkMode ? "videoFrame-Dark" : "videoFrame"}>
              <line className = "thinLine"></line>
              <div className= {this.state.darkMode ? "video-Dark" : "video"}>
                <paragragraph className="video-Discription">A video of over fishing.</paragragraph>
                <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=Q1EcQQsJrmg"/>
              </div> 
              <line className = "thinLine"></line>
            </div>

            {/* <line className = "largeLine"></line> */}

            <box className = "box">
              <box className = "speciesCardContainer">
                <image className={this.state.darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${disease})`}}></div>
                </image>
                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Brian GratWicke</label></div>
              </box>
              
              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>D i s e a s e</label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                  <DiseasePARAGRAPH/>
                </paragragraph>
              </box>
            </box>
            <DiseaseParagraphVoice/>

            <line className = "largeLine"></line>

            <box className = "box">
              <image className={this.state.darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${oilRig})`}}></div>
              </image>
      
              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>O i l & G a s - D e v e l o p m e n t</label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                  <OilGasDevelopmentPARAGRAPH/>
                  {/* https://www.worldwildlife.org/threats */}
                </paragragraph>
              </box>
            </box>
            <OilGasDevelopmentParagraphVoice/>

          </div>
        
        </body>
        <CausesSuvNav/>
      </div>
    );
  }
}