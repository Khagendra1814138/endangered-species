import React from 'react';
import {Component} from "react";
import ReactPlayer from 'react-player';

import './publicMain.css';
import './Home.css';
import './darkmodeFunction.css';

import {HomeSuvNav} from "../subNav/subNavigation";

import FontSizeIncreaser from '../readAccessibilityGuideFunctions/fontSizeIncrease';
import DarkModeFunction from '../darkMode/darkMode';

//Text To Voices
import {HomeParagraphOneVoice} from "../textToVoice/paragraphs";

import headerImg from '../images/headerImg.png';
import splendedFrog from '../images/extinctSpecies/splendedFrog.jpg';
import goldenToad from '../images/extinctSpecies/goldenToad.jpg';
import PintaGiantTortise from '../images/extinctSpecies/PintaGiantTortise.jpg';
import PyreneanIbex from '../images/extinctSpecies/PyreneanIbex.jpg';
import WesternBlackRhinoceros from '../images/extinctSpecies/WesternBlackRhinoceros.jpg';

import futureGeneration from '../images/futureGeneration.jpg';
import agriculture from '../images/agriculture.png';
import medical from '../images/medical.jpg';
import balanceEco from '../images/balanceEco.png';
import research from '../images/research.png';
import ecosystemService from '../images/ecosystemService.png';

//Sources for the information used:
// https://www.fws.gov/nativeamerican/pdf/why-save-endangered-species.pdf
// https://www.endangered.org/importance-of-the-endangered-species-act/

export class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
      fontSize: 18,
      ExtinctSpeciesItems: [],
    };
  }

  componentDidMount(){
    fetch("http://localhost:5000/api/extinctSpecies")
    .then (rest => rest.json())
    .then (extinctSpeciesRecord => {
    this.setState({
        isLoaded: true,
        ExtinctSpeciesItems: extinctSpeciesRecord,
      })
    console.log(extinctSpeciesRecord)
    });
  }


  render(){

    return (

      <div className={this.state.darkMode ? "pageMainFrameDark" : "pageMainFrameLight"}>

        <FontSizeIncreaser fontSize={this.state.fontSize} setFontSize={(size) => this.setState({ fontSize: size })} />

        <box className = "landingImageBox" style={{ backgroundImage: `url(${headerImg})`}}>
          <h1>40,000+ Species are in danger of extinction!</h1>
        </box>

        <DarkModeFunction darkMode={this.state.darkMode} setDarkmode={(darkMode) => this.setState({darkMode})} />

        <body className='pageBodyFrame'>
          <div className='container'>

            <div className = "mainSubHeadFrame">
              <subhead className = {this.state.darkMode ? "subheadLrgDrk" : "subheadLrg"}>What are Endangered Species?</subhead>
            </div>

            <div className= {this.state.darkMode ? "videoFrame-Dark" : "videoFrame"}>
                <line className = "thinLine"></line>
                <div className= {this.state.darkMode ? "video-Dark" : "video"}>
                  <paragragraph className="video-Discription">A video guide on what are Endangered Species.</paragragraph>
                  <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=6tjDCZrGnxc"/>
                </div>
                <line className = "thinLine"></line> 
            </div>

          </div>

          <div className='container'>
            <div className = "mainSubHeadFrame">
              <subhead className = {this.state.darkMode ? "subheadLrgDrk" : "subheadLrg"}>Extinct Species!</subhead>
            </div>
            <box className="paragraphContainer">
              <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                Did you know that over 900+ species of plants and animals have gone extinct over the five centuries.
                And more than 70 species are now considered as extinct in the wild! stated by the IUCN. 
                Extinct in the wild means that the species is the only living members kept in captivity or as a naturalized population outside its historic range due to massive habitat loss.
                The UN report states that around 1 million animal and plant species are now threatened with extinction, many within decades.
              </paragragraph>
              <HomeParagraphOneVoice/>
            </box>
          
      
            <box className = "box">
              <box className = "speciesMainFrame">
                <box className = "speciesCardContainer">
                  <image className= {this.state.darkMode ? "extSpeciesImageLrgDark" : "extSpeciesImageLrgLight"}>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${splendedFrog})`}}></div>
                  </image>
                  <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Pete Oxford</label></div>
                    
                  <label className= {this.state.darkMode ? "extinctSpeciesName-Dark" : "extinctSpeciesName-Light"}>
                    {/* {this.state.items.map((item) => (
                      <div>
                        {item.name}
                      </div
                    >))} */}
                    {this.state.ExtinctSpeciesItems.length > 0 && (
                      <div>
                        {/* <a href={`/${this.state.items[5]._id}`}> */}
                          {this.state.ExtinctSpeciesItems[5].name}
                        {/* </a> */}
                      </div>
                    )}
                  </label>
                </box>
              </box>

              <box className = "speciesMainFrame">
                <image className= {this.state.darkMode ? "extSpeciesImageLrgDark" : "extSpeciesImageLrgLight"}>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${goldenToad})`}}></div>
                </image>

                <label className= {this.state.darkMode ? "extinctSpeciesName-Dark" : "extinctSpeciesName-Light"}>
                  {this.state.ExtinctSpeciesItems.length > 0 && (
                    <div>
                      {this.state.ExtinctSpeciesItems[4].name}
                    </div>
                  )}
                </label>
              </box>
            </box>

            <box className = "box">
              <box className = "speciesMainFrame">
                <box className = "speciesCardContainer">
                  <image className= {this.state.darkMode ? "extSpeciesImageMidDark" : "extSpeciesImageMidLight"}>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${PintaGiantTortise})`}}></div>
                  </image>
                  <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Christopher Klassen</label></div>

                  <label className= {this.state.darkMode ? "extinctSpeciesName-Dark" : "extinctSpeciesName-Light"}>
                    {this.state.ExtinctSpeciesItems.length > 0 && (
                      <div>
                        {this.state.ExtinctSpeciesItems[3].name}
                      </div>
                    )}
                  </label>
                </box>
              </box>

              <box className = "speciesMainFrame"> 
                <image className= {this.state.darkMode ? "extSpeciesImageMidDark" : "extSpeciesImageMidLight"}>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${PyreneanIbex})`}}></div>
                </image>
                <label className= {this.state.darkMode ? "extinctSpeciesName-Dark" : "extinctSpeciesName-Light"}>
                  {this.state.ExtinctSpeciesItems.length > 0 && (
                    <div>
                      {this.state.ExtinctSpeciesItems[1].name}
                    </div>
                  )}
                </label>
              </box>

              <box className = "speciesMainFrame"> 
                <box className = "speciesCardContainer">
                  <image className= {this.state.darkMode ? "extSpeciesImageMidDark" : "extSpeciesImageMidLight"}> 
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${WesternBlackRhinoceros})`}}></div> 
                  </image>
                  <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Dr Richard Emslie</label></div>

                  <label className= {this.state.darkMode ? "extinctSpeciesName-Dark" : "extinctSpeciesName-Light"}>
                    {this.state.ExtinctSpeciesItems.length > 0 && (
                      <div>
                        {this.state.ExtinctSpeciesItems[2].name}
                      </div>
                    )}
                  </label>
                </box>
              </box>
            </box>


            <div className= {this.state.darkMode ? "videoFrame-Dark" : "videoFrame"}>
              <line className = "thinLine"></line>
              <div className= {this.state.darkMode ? "video-Dark" : "video"}>
                <paragragraph className="video-Discription">A video of extinct species.</paragragraph>
                <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=nAzqGn-LHCw&t=388s"/>
              </div> 
              <line className = "thinLine"></line>
            </div>
          </div>

      
        
          <div className='container'>
            <div className = "mainSubHeadFrame">
              <subhead className = {this.state.darkMode ? "subheadLrgDrk" : "subheadLrg"}>Why protect these species?</subhead>
            </div>

            <box className = "box">
              <box className = "whyProtectFrame"> 
                <image className= {this.state.darkMode ? "extSpeciesImageMidDark" : "extSpeciesImageMidLight"}>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${agriculture})`}}></div> 
                </image>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className= {this.state.darkMode ? "verySmallPara-Dark" : "verySmallPara-Light"}>
                  There are insects and other animals species that prey on certain crop and rice paddy pests. Cetrian plants species contain natural-toxins,
                  which can repel harmful insects. These are called “biological controls,” and are a safe, effective,
                  and less expensive alternative to synthetic chemicals.
                </paragragraph>
                <label className= {this.state.darkMode ? "whyProtectLabel-Dark" : "whyProtectLabel-Light"}>Agriculture</label>
              </box>

              <box className = "whyProtectFrame">
                <image className= {this.state.darkMode ? "extSpeciesImageMidDark" : "extSpeciesImageMidLight"}>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${futureGeneration})`}}></div> 
                </image>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className= {this.state.darkMode ? "verySmallPara-Dark" : "verySmallPara-Light"}>
                  People get a lot of pleasure out of seeing and interacting with animals species. 
                  so species that go extinct now are no longer around for us or future generations to see and enjoy.
                  They can only learn about them in books and on the internet.  And, that is heartbreaking.
                </paragragraph>
                <label className= {this.state.darkMode ? "whyProtectLabel-Dark" : "whyProtectLabel-Light"}>For Future Generation</label>
              </box>

              <box className = "whyProtectFrame"> 
                <image className= {this.state.darkMode ? "extSpeciesImageMidDark" : "extSpeciesImageMidLight"}>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${medical})`}}></div> 
                </image>
      
                  <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className= {this.state.darkMode ? "verySmallPara-Dark" : "verySmallPara-Light"}>
                    Over 50% of the 150 most prescribed medicines were originally derived from a plant or other natural product. 
                    The cures for many diseases may eventually come from plants, therefore,
                    we must protect all species before they are lost forever from nature’s medicine cabinet.
                  </paragragraph>
                
                <label className= {this.state.darkMode ? "whyProtectLabel-Dark" : "whyProtectLabel-Light"}>Medical Purpose</label>
              </box>
            </box>

            <box className = "box">
              <box className = "whyProtectFrame">
                <image className= {this.state.darkMode ? "extSpeciesImageMidDark" : "extSpeciesImageMidLight"}>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${balanceEco})`}}></div> 
                </image>
                
                  <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className= {this.state.darkMode ? "verySmallPara-Dark" : "verySmallPara-Light"}>
                    Animals and plant species are the key foundation of a Healthy ecosystems. 
                    When a species becomes endangered, then it indicates that the ecosystem is slowly falling apart. 
                    Healthy ecosystem ensures that human beings have access to clean air and water, and fertile land for agriculture. 
                  </paragragraph>
              
                <label className= {this.state.darkMode ? "whyProtectLabel-Dark" : "whyProtectLabel-Light"}>Balance Ecosystem</label>
              </box>

              <box className = "whyProtectFrame"> 
                <image className= {this.state.darkMode ? "extSpeciesImageMidDark" : "extSpeciesImageMidLight"}>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${research})`}}></div> 
                </image>
      
                  <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className= {this.state.darkMode ? "verySmallPara-Dark" : "verySmallPara-Light"}>
                    Many individual species are uniquely important as indicators of
                    environmental quality. Such as, freshwater fishes are indication of a healthy water.
                    So if a ntive species starts to rapidly decline, then its a sign of threat/danger,
                    allowing us to step-in find a solution to resolve that threat. 
                  </paragragraph>
        
                <label className= {this.state.darkMode ? "whyProtectLabel-Dark" : "whyProtectLabel-Light"}>Monitor Environment</label>
              </box>
              
              <box className = "whyProtectFrame"> 
                <image className= {this.state.darkMode ? "extSpeciesImageMidDark" : "extSpeciesImageMidLight"}>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${ecosystemService})`}}></div> 
                </image>
        
                  <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className= {this.state.darkMode ? "verySmallPara-Dark" : "verySmallPara-Light"}>
                    This include air & water purification, detoxification and decomposition of wastes,
                    climate regulation, regeneration of soil fertility, and the production and maintenance of biological diversity.
                    Phytoremediation is an example of the ecosystem services provided by plants.
                  </paragragraph>
              
                <label className= {this.state.darkMode ? "whyProtectLabel-Dark" : "whyProtectLabel-Light"}>Ecosystem Service</label>
              </box>
            </box>

            <div className= {this.state.darkMode ? "videoFrame-Dark" : "videoFrame"}>
              <line className = "thinLine"></line>
              <div className= {this.state.darkMode ? "video-Dark" : "video"}>
                <paragragraph className="video-Discription">A video warning why we must act now to prevent extinction of species.</paragragraph>
                <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=dbCR0KSU52g&t=155s"/>
              </div> 
              <line className = "thinLine"></line>
            </div>
          </div>

        </body>
        <HomeSuvNav/>
      </div>    
    );
  }
}


  