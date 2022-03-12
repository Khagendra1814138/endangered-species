import React from 'react';
import { Component } from "react";
import {Link} from 'react-router-dom';
import ReactPlayer from 'react-player';

import './publicMain.css';
import './causes.css';

import iucn from '../images/pagesImages/iucn.png';
import wwf from '../images/pagesImages/wwf.png';
import otp from '../images/pagesImages/otp.png';
// import itf from '../images/pagesImages/itf.png';
import ecosia from '../images/pagesImages/ecosia.png';
import toc from '../images/pagesImages/toc.png';
import oc from '../images/pagesImages/oc.png';



import {TakeActonSuvNav} from "../subNav/subNavigation";
import header7 from '../images/header7.png';

import FontSizeIncreaser from '../readAccessibilityGuideFunctions/fontSizeIncrease';
import DarkModeFunction from '../darkMode/darkMode';

//Text To Voices
import {TakeActionParaVoice} from "../textToVoice/takeActionPageVoice";
import {WWFParaVoice} from "../textToVoice/takeActionPageVoice";
import {IUCNParaVoice} from "../textToVoice/takeActionPageVoice";
import {OTPParaVoice} from "../textToVoice/takeActionPageVoice";
import {UseEcosiaParaVoice} from "../textToVoice/takeActionPageVoice";
import {TOCParaVoice} from "../textToVoice/takeActionPageVoice";
import {OCParaVoice} from "../textToVoice/takeActionPageVoice";

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
          <div className='container'>
            
            <div className = "mainSubHeadFrame">
              <subhead className={this.state.darkMode ? "subheadLrgDrk" : "subheadLrg"}>Take larger actions</subhead>
            </div>

            <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
              You can help the endangered species from your house with just a click of a button. 
              There are already many different reliable organizations out there working to conserve and protect the endangered species and their ecosystem.
              From organisations that plants trees, save endangered animals to cleaning plastic on the oceans and many more.
              Do your research and find the one that suits your interests and join them to continue supporting their work to support the endangered species.
              Below, there are list of trustworthy organisations recommendation.
            </paragragraph>
            <TakeActionParaVoice/>

            <box className = "box">
              <image className={this.state.darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${wwf})`}}></div>
              </image>

              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>Support World Wildlife Fund (WWF)</label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "actionParagraph-Dark" : "actionParagraph-Light"}>
                  WWF is one of the most well-known conservation organization that fight against climate change and for wildlife conservation.
                  They have been doing this for decades.
                  They have made a huge positive impact to our natural world both in ocean and on the land.
                  They supports any endangered species that need protecting from the Antarctic to Mexico to Africa.
                  They help endnagered species like: Tigers, Orangutans, Marine Turtles, Rhinos, Chimpanzees, Elephants, Leopards, Dolphins, Gorillas, Whales.
                  {/* https://medium.com/@GVI/10-of-the-best-organizations-to-follow-that-help-endangered-animals-e2735a787269 */}
                </paragragraph>
                <Link className={this.state.darkMode ? "takeActionBtn-Dark" : "takeActionBtn-Light"} 
                  to={{ pathname: "https://support.wwf.org.uk/"}} target="_blank">Visit WWF
                </Link>
              </box>
            </box>
            <WWFParaVoice/>
                    
            <div className= {this.state.darkMode ? "videoFrame-Dark" : "videoFrame-White"}>
                <line className = "thinLine"></line>
                <div className= {this.state.darkMode ? "video-Dark" : "video"}>
                  <paragragraph className="video-Discription">A video about the World Wildlife Fund.</paragragraph>
                  <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=Tss6HtHlLuw"/>
                </div> 
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
                  The International Union for Conservation of Nature was the worlds first global environmental organisation that works towards finding solutions to pressing environmental challenges.
                  There are over 185 countries that form the union and they have thousands of field projects around the globe.
                  The IUCN also work together to collect data on biodiversity and runs the "Save Our Species project".
                  The aim of this project is to protect and support threatened and endagered species as well as their their habitats.
                  {/* https://medium.com/@GVI/10-of-the-best-organizations-to-follow-that-help-endangered-animals-e2735a787269 */}
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
                  The One Tree Planted is a non-profit organisation that aims to focus on reforestation all around the world.
                  The organisation operates in six region across the world, including North America, Latin America, the Pacific, Europ, African and Asia.
                  OTP works as the intermediary for tree planting by collecting donations then allocating the donation to its reforestation partners like NGO's, small conservation organizations, watershed groups and local governmental agencies.
                  As of December, 2020, they have planted more than 10 million trees.
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
                  Ecosia is a search engine like google and it dontates 80% of its profit to nonprofit organisation that focuses on reforestation.
                  Ecosia operates all around the world including North America, South America, Europ, Africa, Asia and Australia.
                  It main income is though the advertisements payment.
                  Ecosia has around 15 millions users and the users conducts around 10,000 search every minutes.
                  By July 2020, it has planted over 100 million trees, resulting in over 50,000 metric tonnes of CO2 being removed from the atmosphere each month.
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
                  They are a nonprofit engineering organization that develops technology to clean plastic pollution. 
                  They have developed technologies, which helps to extract plastic pollution from the oceans and intercept plastic in rivers before it can reach the ocean.
                  They aims to launch around 60 such systems across the world. 
                  As of 2021, such asystem have been deployed in Jamica, Indonesia, Vietnam and more...
                  They aim to prevent 80% of riverine trash coming from 1000 rivers worldwide and remove 90% of floating ocean plastic by 2040.
                </paragragraph>
                <Link className={this.state.darkMode ? "takeActionBtn-Dark" : "takeActionBtn-Light"} 
                  to={{ pathname: "https://theoceancleanup.com/" }} target="_blank">Visit TOC
                </Link>
              </box>
            </box>
            <TOCParaVoice/>
            
            <div className= {this.state.darkMode ? "videoFrame-Dark" : "videoFrame-White"}>
                <line className = "thinLine"></line>
                <div className= {this.state.darkMode ? "video-Dark" : "video"}>
                  <paragragraph className="video-Discription">A video about The Ocean Cleanup.</paragragraph>
                  <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=pgxYHSFwQQU"/>
                </div> 
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
                  Ocean Conservancy is a non-profit organisation that aims to promote healthy and safe ocean ecosystems, and to oppose practices that threaten oceanic life. 
                  Their program includes protection of special marine habitats such as the restoring of the coral reef through the coral tree nursaries, protection of marine species, sea turtles and their habitats.
                  Restoring sustainable fisheries, reducing the human impact on ocean ecosystems, international ocean cleanup to remove trash from the ocean, and 
                  protecting artic marine species from an oill spill. 
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