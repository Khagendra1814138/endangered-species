import React from 'react';
import { Component } from "react";
import {Link} from 'react-router-dom';
import ReactPlayer from 'react-player';

import './../publicMain.css';
import '../page-SpeciesCauses/causesPage.css'
import '../page-TakeAction/takeAction.css'

import iucn from '../../images/pagesImages/iucn.png';
import wwf from '../../images/pagesImages/wwf.png';
import otp from '../../images/pagesImages/otp.png';
// import itf from '../../images/pagesImages/itf.png';
import ecosia from '../../images/pagesImages/ecosia.png';
import toc from '../../images/pagesImages/toc.png';
import oc from '../../images/pagesImages/oc.png';



import {TakeActonSuvNav} from "../../subNav/subNavigation";
import header7 from '../../images/header7.png';

import FontSizeIncreaser from '../../readAccessibilityGuideFunctions/fontSizeIncrease';
import DarkModeFunction from '../../darkMode/darkMode';

//Text paragraphs
import {TakeActionParagraph1} from'./takeActionParagraph';

import {WWFsupportPARAGRAPH} from'./takeActionParagraph';
import {IUCNsupportPARAGRAPH} from'./takeActionParagraph';
import {OTPsupportPARAGRAPH} from'./takeActionParagraph';
import {ECOSIAsupportPARAGRAPH} from'./takeActionParagraph';
import {TOCsupportPARAGRAPH} from'./takeActionParagraph';
import {OCsupportPARAGRAPH} from'./takeActionParagraph';

//Text To Voices
import {TakeActionParaVoice} from "../../textToVoice/takeActionPageVoice";
import {WWFParaVoice} from "../../textToVoice/takeActionPageVoice";
import {IUCNParaVoice} from "../../textToVoice/takeActionPageVoice";
import {OTPParaVoice} from "../../textToVoice/takeActionPageVoice";
import {UseEcosiaParaVoice} from "../../textToVoice/takeActionPageVoice";
import {TOCParaVoice} from "../../textToVoice/takeActionPageVoice";
import {OCParaVoice} from "../../textToVoice/takeActionPageVoice";

export class TakeAction extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
      fontSize: 18,
    };
  }

  render(){


    return( 
      <div className={this.state.darkMode ? "pageMainFrameDark" : "pageMainFrameLight"}>

  {/* //////////////////////////////////////////////////////FontSizeFunction////////////////////////////////////////////////////// */}
      <FontSizeIncreaser fontSize={this.state.fontSize} setFontSize={(size) => this.setState({ fontSize: size })} />
  {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <box className = "landingImageBox2" style={{ backgroundImage: `url(${header7})`}}></box>

  {/* //////////////////////////////////////////////////////DarkModeFunction////////////////////////////////////////////////////// */}
        <DarkModeFunction darkMode={this.state.darkMode} setDarkmode={(darkMode) => this.setState({darkMode})} />
  {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <body className='pageBodyFrame'>
          
          <div className = "mainSubHeadFrame">
            <subhead className={this.state.darkMode ? "subheadLrgDrk" : "subheadLrg"}>Take larger steps</subhead>
          </div>

          <div className='container'>
            
            <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
              <TakeActionParagraph1/>
            </paragragraph>
            <TakeActionParaVoice/>

            <div className = {this.state.darkMode ? "pageDiscriptionTitle-Dark" : "pageDiscriptionTitle"}>
              Below we have listed many trustworthy organisations that are supporting the enangered species and their habitats.
              Learn who they are, what they do and join their battle.
            </div>

            <box className = "box">
              <image className={this.state.darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${wwf})`}}></div>
              </image>

              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>Support World Wildlife Fund (WWF)</label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "actionParagraph-Dark" : "actionParagraph-Light"}>
                  <WWFsupportPARAGRAPH/>
                </paragragraph>
                <Link className={this.state.darkMode ? "takeActionBtn-Dark" : "takeActionBtn-Light"} 
                  to={{ pathname: "https://support.wwf.org.uk/"}} target="_blank">Visit WWF
                </Link>
              </box>
            </box>
            <WWFParaVoice/>
                    
        
            <div className= {this.state.darkMode ? "video-Dark" : "video"}>
              <line className = "thinLine"></line>
                <paragragraph className="video-Discription">A video about the World Wildlife Fund.</paragragraph>
                <ReactPlayer className='videoFrame'
                  controls={true} 
                  url="https://www.youtube.com/watch?v=Tss6HtHlLuw"
                  height="450px" 
                  width="800px" 
                />
              <line className = "thinLine"></line>
            </div> 
   

          </div>  


          <div className={this.state.darkMode ? "container" : "container2"}>
            <box className = "box">
              <image className={this.state.darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${iucn})`}}></div>
              </image>

              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}> Support IUCN </label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "actionParagraph-Dark" : "actionParagraph-Light"}>
                 <IUCNsupportPARAGRAPH/>
                </paragragraph>
                <Link className={this.state.darkMode ? "takeActionBtn-Dark" : "takeActionBtn-Light"} 
                  to={{ pathname: "https://www.iucn.org/" }} target="_blank">Visit IUCN
                </Link>
              </box>
            </box>
            <IUCNParaVoice/>
          </div>


          <div className='container'>
            <box className = "box"> 
              <image className={this.state.darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${otp})`}}></div>
              </image>

              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>Support One Tree Planted (OTP)</label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "actionParagraph-Dark" : "actionParagraph-Light"}>
                  <OTPsupportPARAGRAPH/>
                </paragragraph>
                <Link className={this.state.darkMode ? "takeActionBtn-Dark" : "takeActionBtn-Light"} 
                  to={{ pathname: "https://onetreeplanted.org/" }} target="_blank">Visit OTP
                </Link>
              </box>
            </box>
            <OTPParaVoice/>
          </div>
            

          <div className={this.state.darkMode ? "container" : "container2"}>
            <box className = "box">
              <image className={this.state.darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${ecosia})`}}></div>
              </image>

              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>Use Ecosia Search Engine</label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "actionParagraph-Dark" : "actionParagraph-Light"}>
                  <ECOSIAsupportPARAGRAPH/>
                </paragragraph>
                <Link className={this.state.darkMode ? "takeActionBtn-Dark" : "takeActionBtn-Light"} 
                  to={{ pathname: "https://www.ecosia.org/.org/" }} target="_blank">Visit Ecosia
                </Link>
              </box>
            </box>
            <UseEcosiaParaVoice/>
          </div>

          <div className='container'>
            <box className = "box">
              <image className={this.state.darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${toc})`}}></div>
              </image>

              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>Support The Ocean Cleanup (TOC)</label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "actionParagraph-Dark" : "actionParagraph-Light"}>
                  <TOCsupportPARAGRAPH/>
                </paragragraph>
                <Link className={this.state.darkMode ? "takeActionBtn-Dark" : "takeActionBtn-Light"} 
                  to={{ pathname: "https://theoceancleanup.com/" }} target="_blank">Visit TOC
                </Link>
              </box>
            </box>
            <TOCParaVoice/>
            
            <div className= {this.state.darkMode ? "video-Dark" : "video"}>
              <line className = "thinLine"></line>
                <paragragraph className="video-Discription">A video about The Ocean Cleanup.</paragragraph>
                <ReactPlayer className='videoFrame' 
                  controls={true} 
                  url="https://www.youtube.com/watch?v=pgxYHSFwQQU"
                  height="450px" 
                  width="800px"
                />
              <line className = "thinLine"></line>
            </div> 

          </div>

          <div className={this.state.darkMode ? "container" : "container2"}>
            <box className = "box">
              <image className={this.state.darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${oc})`}}></div>
              </image>
              
              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>Support Ocean Conservancy (OC)</label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "actionParagraph-Dark" : "actionParagraph-Light"}>
                  <OCsupportPARAGRAPH/>
                </paragragraph>
                <Link className={this.state.darkMode ? "takeActionBtn-Dark" : "takeActionBtn-Light"} 
                  to={{ pathname: "https://www.ecosia.org/.org/" }} target="_blank">Visit OC
                </Link>
              </box>
            </box>
            <OCParaVoice/>
          </div>
        
        </body>
        <TakeActonSuvNav/>
      </div>
    );
  }
}