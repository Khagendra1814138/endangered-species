import React from 'react';
import { Link } from 'react-router-dom';
import {Component} from "react";
import ReactPlayer from 'react-player';

import '../publicMain.css';
import './Home.css';


//Icons
import {GiFrog} from 'react-icons/gi';
import {GiSadCrab} from 'react-icons/gi';
import {GiSpottedBug} from 'react-icons/gi';
import {GiPalmTree} from 'react-icons/gi';
import {GiMantaRay} from 'react-icons/gi';
import {GiReptileTail} from 'react-icons/gi';
import {GiCoral} from 'react-icons/gi';
import {GiMammoth} from 'react-icons/gi';
import {GiHummingbird} from 'react-icons/gi';
import {GiPineTree} from 'react-icons/gi';

import {FaShieldAlt} from 'react-icons/fa';
import {GiOpenBook} from 'react-icons/gi';
import {FaHandHoldingHeart} from 'react-icons/fa';

import {HomeSideBarPageNav} from "../../sideBarPagesNav/HOMEsideBarPageNav";

//Suv navigation
import {HomeSuvNav} from "../../subNav/subNavigation";

import FontSizeIncreaser from '../../readAccessibilityGuideFunctions/fontSizeIncrease';
import DarkModeFunction from '../../darkMode/darkMode';

//Paragraphs
import {AgriculturePARAGRAPH} from "./homeParagraph";
import {ForFutureGenerationPARAGRAPH} from "./homeParagraph";
import {MedicalPurposePARAGRAPH} from "./homeParagraph";
import {BalanceEcosystemPARAGRAPH} from "./homeParagraph";
import {MonitorEnvironmentPARAGRAPH} from "./homeParagraph";
import {EcosystemServicePARAGRAPH} from "./homeParagraph";

//Text To Voices
import {HomeParagraphOneVoice} from "../../textToVoice/paragraphs";

import headerImg from '../../images/headerImg.png';
import splendedFrog from '../../images/extinctSpecies/splendedFrog.jpg';
import goldenToad from '../../images/extinctSpecies/goldenToad.jpg';
import PintaGiantTortise from '../../images/extinctSpecies/PintaGiantTortise.jpg';
import PyreneanIbex from '../../images/extinctSpecies/PyreneanIbex.jpg';
import WesternBlackRhinoceros from '../../images/extinctSpecies/WesternBlackRhinoceros.jpg';

import extSpecies from '../../images/extinctSpecies/extSpecies.png';
import chaingingHabit from '../../images/home/chaingingHabit.png';
import supportOrganisation from '../../images/home/supportOrganisation.png';
import threatsToSpecies from '../../images/home/threatsToSpecies.png';
import endangeredSpecies from '../../images/home/endangeredSpecies.png';
import takeQuiz from '../../images/home/takeQuiz.png';

import futureGeneration from '../../images/home/futureGeneration2.png';
import agriculture from '../../images/home/agriculture3.png';
import medical from '../../images/home/medical2.png';
import balanceEco from '../../images/home/balanceEco2.png';
import research from '../../images/home/research2.png';
import ecosystemService from '../../images/home/ecosystemService2.png';
// import config from '../../config';

//Sources for the information used:
// https://www.fws.gov/nativeamerican/pdf/why-save-endangered-species.pdf
// https://www.endangered.org/importance-of-the-endangered-species-act/
// https://edis.ifas.ufl.edu/pdf/UW/UW06400.pdf

export class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
      fontSize: 18,
      ExtinctSpeciesItems: [],
    };
  }

  // componentDidMount(){
  //   fetch(config.backendUrl + "api/extinctSpecies")
  //   .then (rest => rest.json())
  //   .then (extinctSpeciesRecord => {
  //   this.setState({
  //       isLoaded: true,
  //       ExtinctSpeciesItems: extinctSpeciesRecord,
  //     })
  //   console.log(extinctSpeciesRecord)
  //   });
  // }


  render(){

    return (

      <div className={this.state.darkMode ? "pageMainFrameDark" : "pageMainFrameLight"}>

        <FontSizeIncreaser fontSize={this.state.fontSize} setFontSize={(size) => this.setState({ fontSize: size })} />
        <div className='overflowHidden'>
          <box className = "landingImageBox" style={{ backgroundImage: `url(${headerImg})`}}>
            <h1>Thousands of Animal, Fungi and Plant species are in danger</h1>
            <div className='headerImageParagraph'>Learn about the different types of endangered species around the world and how to protect them.</div>
          </box>  
        </div>

        <DarkModeFunction darkMode={this.state.darkMode} setDarkmode={(darkMode) => this.setState({darkMode})} />

        <body className='pageBodyFrame'>
        <HomeSideBarPageNav/>
          <div className='container'>
            <title className = {this.state.darkMode ? "largeTitle-Light" : "largeTitle-Dark"}> 
              More than 41,000+ species of plants and animals are in danger of extinction!
            </title>

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


          <div className='container'>
            <box id= {this.state.darkMode ? "endPercentage_GRID-Dark" : "endPercentage_GRID"}>
              <div id='endPercentage_FRAME'>
                <div id='speciesGroupLabel'>AMPHIBIANS</div>
                <div className = "box-noshadow">
                  <div id='percentageDisplay'>41%</div>
                  <div id='speciesGroupIcon'><GiFrog size="6em" color="#12836E"/></div>
                </div>
              </div>

              <div id='endPercentage_FRAME'>
                <div id='speciesGroupLabel'>REPTILES</div>
                <div className = "box-noshadow">
                  <div id='percentageDisplay'>21%</div>
                  <div id='speciesGroupIcon'><GiReptileTail size="6em" color="#12836E"/></div>
                </div>
              </div>
              
              <div id='endPercentage_FRAME'>
                <div id='speciesGroupLabel'>INSECTS</div>
                <div className = "box-noshadow">
                  <div id='percentageDisplay'>33%</div>
                  <div id='speciesGroupIcon'><GiSpottedBug size="6em" color="#12836E"/></div>
                </div>
              </div>

              <div id='endPercentage_FRAME'>
                <div id='speciesGroupLabel'>MAMMALS</div>
                <div className = "box-noshadow">
                  <div id='percentageDisplay'>27%</div>
                  <div id='speciesGroupIcon'><GiMammoth size="6em" color="#12836E"/></div>
                </div>
              </div>

              <div id='endPercentage_FRAME'>
                <div id='speciesGroupLabel'>BIRDS</div>
                <div className = "box-noshadow">
                  <div id='percentageDisplay'>13%</div>
                  <div id='speciesGroupIcon'><GiHummingbird size="6em" color="#12836E"/></div>
                </div>
              </div>


              <div id='endPercentage_FRAME'>
                <div id='speciesGroupLabel'>SHARKS & RAYS</div>
                <div className = "box-noshadow">
                  <div id='percentageDisplay'>37%</div>
                  <div id='speciesGroupIcon'><GiMantaRay size="6em" color="#12836E"/></div>
                </div>
              </div>

              <div id='endPercentage_FRAME'>
                <div id='speciesGroupLabel'>REEF CORALS</div>
                <div className = "box-noshadow">
                  <div id='percentageDisplay'>33%</div>
                  <div id='speciesGroupIcon'><GiCoral size="6em" color="#12836E"/></div>
                </div>
              </div>

              <div id='endPercentage_FRAME'>
                <div id='speciesGroupLabel'>SELECTED CRUSTACEANS</div>
                <div className = "box-noshadow">
                  <div id='percentageDisplay'>28%</div>
                  <div id='speciesGroupIcon'><GiSadCrab size="6em" color="#12836E"/></div>
                </div>
              </div>

              <div id='endPercentage_FRAME'>
                <div id='speciesGroupLabel'>CONIFERS</div>
                <div className = "box-noshadow">
                  <div id='percentageDisplay'>34%</div>
                  <div id='speciesGroupIcon'><GiPineTree size="6em" color="#12836E"/></div>
                </div>
              </div>

              <div id='endPercentage_FRAME'>
                <div id='speciesGroupLabel'>CYCADS</div>
                <div className = "box-noshadow">
                  <div id='percentageDisplay'>69%</div>
                  <div id='speciesGroupIcon'><GiPalmTree size="6em" color="#12836E"/></div>
                </div>
              </div>
            </box>
          </div>  




          <div className='container'>
            <box className = "shadow_block_box">
              <box className='box-noshadow'>
                <subhead id = {this.state.darkMode ? "recentlyExtinctSubhead-Dark" : "recentlyExtinctSubhead"}>These are the recently extinc species</subhead>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} id = {this.state.darkMode ? "recentlyExtinctParagraph-Dark" : "recentlyExtinctParagraph"}>
                  The animals deplayed below are some of the most recently extinct species.
                  The splended posion frog was declared extinct on 2020.
                  The Giant Pinta Island tortoise was declared extinct on 2012,
                  and the Western Black Rhinoceros was declared extinct on 2006.
                </paragragraph>
              </box>

              <box className = "box-noshadow">
                <box id = "extinct_speciesMainFrame">
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

             

                      {/* {this.state.ExtinctSpeciesItems.length > 0 && (<div>{this.state.ExtinctSpeciesItems[5].name}</div>)} */}
                      Splended Frog
                    </label>
                  </box>
                </box>

                <box id = "extinct_speciesMainFrame">
                  <image className= {this.state.darkMode ? "extSpeciesImageLrgDark" : "extSpeciesImageLrgLight"}>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${goldenToad})`}}></div>
                  </image>

                  <label className= {this.state.darkMode ? "extinctSpeciesName-Dark" : "extinctSpeciesName-Light"}>
                    {/* {this.state.ExtinctSpeciesItems.length > 0 && (<div>{this.state.ExtinctSpeciesItems[4].name}</div>)} */}
                    Golden Toad
                  </label>
                </box>
              </box>

              <box className = "box-noshadow">
                <box id = "extinct_speciesMainFrame">
                  <box className = "speciesCardContainer">
                    <image className= {this.state.darkMode ? "extSpeciesImageMidDark" : "extSpeciesImageMidLight"}>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${PintaGiantTortise})`}}></div>
                    </image>
                    <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Christopher Klassen</label></div>

                    <label className= {this.state.darkMode ? "extinctSpeciesName-Dark" : "extinctSpeciesName-Light"}>
                      {/* {this.state.ExtinctSpeciesItems.length > 0 && (
                        <div>
                          {this.state.ExtinctSpeciesItems[3].name}
                        </div>
                      )} */}
                      Pinta Giant Tortise
                    </label>
                  </box>
                </box>

                <box id = "extinct_speciesMainFrame"> 
                  <image className= {this.state.darkMode ? "extSpeciesImageMidDark" : "extSpeciesImageMidLight"}>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${PyreneanIbex})`}}></div>
                  </image>
                  <label className= {this.state.darkMode ? "extinctSpeciesName-Dark" : "extinctSpeciesName-Light"}>
                    {/* {this.state.ExtinctSpeciesItems.length > 0 && (
                      <div>
                        {this.state.ExtinctSpeciesItems[1].name}
                      </div>
                    )} */}
                    Pyrenean Ibex
                  </label>
                </box>

                <box id = "extinct_speciesMainFrame"> 
                  <box className = "speciesCardContainer">
                    <image className= {this.state.darkMode ? "extSpeciesImageMidDark" : "extSpeciesImageMidLight"}> 
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${WesternBlackRhinoceros})`}}></div> 
                    </image>
                    <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Dr Richard Emslie</label></div>

                    <label className= {this.state.darkMode ? "extinctSpeciesName-Dark" : "extinctSpeciesName-Light"}>
                      {/* {this.state.ExtinctSpeciesItems.length > 0 && (
                        <div>
                          {this.state.ExtinctSpeciesItems[2].name}
                        </div>
                      )} */}
                      Western Black Rhinoceros
                    </label>
                  </box>
                </box>
              </box>
            </box>
          </div>
          

      
        
          <div className='container'>
            <div className = "mainSubHeadFrame">
              <subhead className = {this.state.darkMode ? "subheadLrgDrk" : "subheadLrg"}>Why protect these species?</subhead>
            </div>

            <box className = "guideIcon"><FaShieldAlt size="6em" color="#12836E"/></box>
            

            <box className = "box_long">
              <box className = {this.state.darkMode ? "whyProtectFrame-Dark" : "whyProtectFrame-light"}> 
                <image className = {this.state.darkMode ? "whyProtectImageFrame-Dark" : "whyProtectImageFrame-light"}>
                  <div className='whyProtectImage' style={{ backgroundImage: `url(${agriculture})`}}></div> 
                </image>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className= {this.state.darkMode ? "verySmallPara-Dark" : "verySmallPara-Light"}>
                  <AgriculturePARAGRAPH/>
                </paragragraph>
                <label className= {this.state.darkMode ? "whyProtectLabel-Dark" : "whyProtectLabel-Light"}>Agriculture</label>
              </box>

              <box className = {this.state.darkMode ? "whyProtectFrame-Dark" : "whyProtectFrame-light"}>
                <image className = {this.state.darkMode ? "whyProtectImageFrame-Dark" : "whyProtectImageFrame-light"}>
                  <div className='whyProtectImage' style={{ backgroundImage: `url(${futureGeneration})`}}></div> 
                </image>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className= {this.state.darkMode ? "verySmallPara-Dark" : "verySmallPara-Light"}>
                  <ForFutureGenerationPARAGRAPH/>
                </paragragraph>
                <label className= {this.state.darkMode ? "whyProtectLabel-Dark" : "whyProtectLabel-Light"}>For Future Generation</label>
              </box>

              <box className = {this.state.darkMode ? "whyProtectFrame-Dark" : "whyProtectFrame-light"}> 
                <image className = {this.state.darkMode ? "whyProtectImageFrame-Dark" : "whyProtectImageFrame-light"}>
                  <div className='whyProtectImage' style={{ backgroundImage: `url(${medical})`}}></div> 
                </image>
      
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className= {this.state.darkMode ? "verySmallPara-Dark" : "verySmallPara-Light"}>
                  <MedicalPurposePARAGRAPH/>
                </paragragraph>
                
                <label className= {this.state.darkMode ? "whyProtectLabel-Dark" : "whyProtectLabel-Light"}>Medical Purpose</label>
              </box>
           

           
           
              <box className = {this.state.darkMode ? "whyProtectFrame-Dark" : "whyProtectFrame-light"}>
                <image className = {this.state.darkMode ? "whyProtectImageFrame-Dark" : "whyProtectImageFrame-light"}>
                  <div className='whyProtectImage' style={{ backgroundImage: `url(${balanceEco})`}}></div> 
                </image>
                
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className= {this.state.darkMode ? "verySmallPara-Dark" : "verySmallPara-Light"}>
                  <BalanceEcosystemPARAGRAPH/>
                </paragragraph>
              
                <label className= {this.state.darkMode ? "whyProtectLabel-Dark" : "whyProtectLabel-Light"}>Balance Ecosystem</label>
              </box>

              <box className = {this.state.darkMode ? "whyProtectFrame-Dark" : "whyProtectFrame-light"}> 
                <image className = {this.state.darkMode ? "whyProtectImageFrame-Dark" : "whyProtectImageFrame-light"}>
                  <div className='whyProtectImage' style={{ backgroundImage: `url(${research})`}}></div> 
                </image>
      
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className= {this.state.darkMode ? "verySmallPara-Dark" : "verySmallPara-Light"}>
                  <MonitorEnvironmentPARAGRAPH/>
                </paragragraph>
        
                <label className= {this.state.darkMode ? "whyProtectLabel-Dark" : "whyProtectLabel-Light"}>Monitor Environment</label>
              </box>
              
              <box className = {this.state.darkMode ? "whyProtectFrame-Dark" : "whyProtectFrame-light"}> 
                <image className = {this.state.darkMode ? "whyProtectImageFrame-Dark" : "whyProtectImageFrame-light"}>
                  <div className='whyProtectImage' style={{ backgroundImage: `url(${ecosystemService})`}}></div> 
                </image>
        
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className= {this.state.darkMode ? "verySmallPara-Dark" : "verySmallPara-Light"}>
                  <EcosystemServicePARAGRAPH/>
                </paragragraph>
              
                <label className= {this.state.darkMode ? "whyProtectLabel-Dark" : "whyProtectLabel-Light"}>Ecosystem Service</label>
              </box>
            </box>
          </div>

       
{/* ///////// V I D E O ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */} 
<div className= {this.state.darkMode ? "video-Dark" : "video"}>
  <paragragraph className = "video-Discription">A video warning why we must act now to prevent extinction of species.</paragragraph>
  <ReactPlayer className = "videoFrame" light={false} controls={true} url="https://www.youtube.com/watch?v=dbCR0KSU52g&t=155s" height='574px' width='1020px'/>
</div> 
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}        


          <div className='container'>
            <div className = "mainSubHeadFrame">
              <subhead className = {this.state.darkMode ? "subheadLrgDrk" : "subheadLrg"}>What are you going to learn</subhead>
            </div>
            <box className = "guideIcon"><GiOpenBook size="6em" color="#12836E"/></box>

            <div id="twoCol-Box">
              <div id = {this.state.darkMode ? "imageBox-Dark" : "imageBox"}>
                <line className = "thinLine"></line>
                  <image id="getStartedImage" style={{ backgroundImage: `url(${extSpecies})`}}></image>
                <line className = "thinLine"></line>
              </div>

              <div id='paragraphBox'>
                <title className = {this.state.darkMode ? "getStartedTitle-Dark" : "getStartedTitle"}>So many species have gone extinct over the decades</title>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "getStartedParagraph-Dark" : "getStartedParagraph"}>
                  More than 99% of the four billion species that have evolved on Earth are now gone.
                  The IUCH states that at least 900 species have gone extinct in the past five centuries.
                  Watch videos and Learn amazing facts and information about some of the recently extinct species.
                </paragragraph>

                <Link className='linkStyle' to="/extinctSpecies"> 
                  <button className='getStartedButton'>Get Started</button>
                </Link> 
              </div>
            </div>

            <div id="twoCol-Box">
              <div id='paragraphBox'>
                <title className = {this.state.darkMode ? "getStartedTitle-Dark" : "getStartedTitle"}>Currently there are more than 41 thousnd of species in danger</title>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "getStartedParagraph-Dark" : "getStartedParagraph"}>
                  You can learn about the different types of endangered animals, plants and fungi species.
                  For example, animals such as large mammels, insects, ambphibans and plants such as flowers and large trees.
                  Also, learn about endnagered fungi species such as mushrooms and watch videos.
                </paragragraph>

                <Link className='linkStyle' to="/endangeredSpecies"> 
                  <button className='getStartedButton'>Get Started</button>
                </Link> 
              </div>

              <div id = {this.state.darkMode ? "imageBox-Dark" : "imageBox"}>
                <line className = "thinLine"></line>
                  <image id="getStartedImage" style={{ backgroundImage: `url(${endangeredSpecies})`}}></image>
                <line className = "thinLine"></line>
              </div>
            </div>

            <div id="twoCol-Box">
              <div id = {this.state.darkMode ? "imageBox-Dark" : "imageBox"}>
                <line className = "thinLine"></line>
                  <image id="getStartedImage" style={{ backgroundImage: `url(${threatsToSpecies})`}}></image>
                <line className = "thinLine"></line>
              </div>

              <div id='paragraphBox'>
                <title className = {this.state.darkMode ? "getStartedTitle-Dark" : "getStartedTitle"}>There are many different threats effecting these species</title>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "getStartedParagraph-Dark" : "getStartedParagraph"}>
                  Human activities like pollution and climate change are one of the main cause that is threathing these endangered species.
                  But there also exists other natural threats like diseases.
                  Learn more about the different types of threats effecting these endangered species.
                </paragragraph>

                <Link className='linkStyle' to="/causes"> 
                  <button className='getStartedButton'>Get Started</button>
                </Link> 
              </div>
            </div>
          </div>




          <div className='container'>
            <div className = "mainSubHeadFrame">
              <subhead className = {this.state.darkMode ? "subheadLrgDrk" : "subheadLrg"}>How can you contribute</subhead>
            </div>
            <box className = "guideIcon"><FaHandHoldingHeart size="6em" color="#12836E"/></box>

            <div id="twoCol-Box">
              <div id='paragraphBox'>
                <title className = {this.state.darkMode ? "getStartedTitle-Dark" : "getStartedTitle"}>You can helpe these endangered species by your daily action</title>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "getStartedParagraph-Dark" : "getStartedParagraph"}>
                  We human are the main contributors toward endangering these species.
                  Just by changing our daily life habits will have a huge positive impact on protecting these endangered species.
                  For example, reducing our daily electric energy consuption and burning less fossil fules.
                </paragragraph>
                
                <Link className='linkStyle' to="/individualAction"> 
                  <button className='getStartedButton'>Get Started</button>
                </Link> 
              </div>

              <div id = {this.state.darkMode ? "imageBox-Dark" : "imageBox"}>
                <line className = "thinLine"></line>
                  <image id="getStartedImage" style={{ backgroundImage: `url(${chaingingHabit})`}}></image>
                <line className = "thinLine"></line>
              </div>
            </div>

            <div id="twoCol-Box">
              <div id = {this.state.darkMode ? "imageBox-Dark" : "imageBox"}>
                <line className = "thinLine"></line>
                  <image id="getStartedImage" style={{ backgroundImage: `url(${supportOrganisation})`}}></image>
                <line className = "thinLine"></line>
              </div>

              <div id='paragraphBox'>
                <title className = {this.state.darkMode ? "getStartedTitle-Dark" : "getStartedTitle"}>Support organisations that is helping to save the endangered species</title>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "getStartedParagraph-Dark" : "getStartedParagraph"}>
                  There are many organisations like the WWF, that are already healping to save these endangered species.
                  From cleaning ocean, planting trees and saving specific species of animals.
                  You can join the battle by supporing these organisation and their causes.
                </paragragraph>

                <Link className='linkStyle' to="/takeAction"> 
                  <button className='getStartedButton'>Get Started</button>
                </Link> 
              </div>
            </div>

            <div id="twoCol-Box">
              <div id='paragraphBox'>
                <title className = {this.state.darkMode ? "getStartedTitle-Dark" : "getStartedTitle"}>Wanna test how much you have learned about endangered species</title>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "getStartedParagraph-Dark" : "getStartedParagraph"}>
                  From vising this web application, you may have leanred lots of new information. 
                  Such as, why these endangered species are important to the environment and how they benifit us directly.
                  You can test your knowledge about the endangered and extinct species by taking a quiz.
                </paragragraph>

                <Link className='linkStyle' to="/quiz"> 
                  <button className='getStartedButton'>Get Started</button>
                </Link> 
              </div>

              <div id = {this.state.darkMode ? "imageBox-Dark" : "imageBox"}>
                <line className = "thinLine"></line>
                  <image id="getStartedImage" style={{ backgroundImage: `url(${takeQuiz})`}}></image>
                <line className = "thinLine"></line>
              </div>
            </div>

            <div id="twoCol-Box">
              <div id = {this.state.darkMode ? "imageBox-Dark" : "imageBox"}>
                <line className = "thinLine"></line>
                  <image id="getStartedImage">Image</image>
                <line className = "thinLine"></line>
              </div>
              
              <div id='paragraphBox'>
                <title className = {this.state.darkMode ? "getStartedTitle-Dark" : "getStartedTitle"}>Play games</title>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "getStartedParagraph-Dark" : "getStartedParagraph"}>Paragraph</paragragraph>
                <button className='getStartedButton'>Get Started</button>
              </div>
            </div>
          </div>
        </body>
        <HomeSuvNav/>
      </div>    
    );
  }
}


  