import React from 'react';
import {Component} from "react";
import ReactPlayer from 'react-player';

import '../../pages/publicMain.css';
import './extinctSpecies.css';

import {ExtinctSpeciesSideBarPageNav} from "../../sideBarPagesNav/EXTINCTsideBarPageNav";
import {ExtinctSpeciesSuvNav} from "../../subNav/subNavigation";
import extinctHeader from '../../images/extinctHeader.png';

import FontSizeIncreaser from '../../readAccessibilityGuideFunctions/fontSizeIncrease';
import DarkModeFunction from '../../darkMode/darkMode';

//Images

// import {ExtinctSpeciesCardSet1} from "../page-ExtinctSpecies/extinctSpeciesCardSet1"

import carolinaParakeet from '../../images/extinctSpecies/carolinaParakeet.png';
import Kamao from '../../images/extinctSpecies/Kamao.png';
import passengerPigeon from '../../images/extinctSpecies/passengerPigeon.png';
import dodo from '../../images/extinctSpecies/dodo.png';
import SplendidPoisonDartFrog from '../../images/extinctSpecies/SplendidPoisonDartFrog.png';
import GoldenToad2 from '../../images/extinctSpecies/GoldenToad2.png';

import PintaGiantTortise2 from '../../images/extinctSpecies/PintaGiantTortise2.png';
import PyreneanIbex2 from '../../images/extinctSpecies/PyreneanIbex2.png';
import WesternBlackRhinoceros2 from '../../images/extinctSpecies/WesternBlackRhinoceros2.png';
import TasmanianTiger from '../../images/extinctSpecies/TasmanianTiger.png';
import CaribbeanMonkSeal from '../../images/extinctSpecies/CaribbeanMonkSeal.png';
import ChristmasIslandPipistrelle from '../../images/extinctSpecies/ChristmasIslandPipistrelle.png';

import Tarpan from '../../images/extinctSpecies/Tarpan.png';
import barbaryLion from '../../images/extinctSpecies/barbaryLion.png';
import baliTiger from '../../images/extinctSpecies/baliTiger.png';
import CaspianTiger from '../../images/extinctSpecies/CaspianTiger.png';
import SmoothHandfish from '../../images/extinctSpecies/SmoothHandfish.png';
import BrambleCayMelomys from '../../images/extinctSpecies/BrambleCayMelomys.png';

import TheNorthernWhiteRhinoceros from '../../images/extinctSpecies/TheNorthernWhiteRhinoceros.png';
import ZanzibarLeopard from '../../images/extinctSpecies/ZanzibarLeopard.png';
import TecopaPupfish from '../../images/extinctSpecies/TecopaPupfish.png';
import FalklandIslandsWolf from '../../images/extinctSpecies/FalklandIslandsWolf.png';
import JavanTiger from '../../images/extinctSpecies/JavanTiger.png';
import SchomburgksDeer from '../../images/extinctSpecies/SchomburgksDeer.png';



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
        <div className='overflowHidden'>
          <box className = "landingImageBox2" style={{ backgroundImage: `url(${extinctHeader})`}}>  </box>
        </div>
        <DarkModeFunction darkMode={this.state.darkMode} setDarkmode={(darkMode) => this.setState({darkMode})} />

        <body className='pageBodyFrame'>
        <ExtinctSpeciesSideBarPageNav/>

          <div className = "mainSubHeadFrame">
            <subhead className = {this.state.darkMode ? "subheadLrgDrk" : "subheadLrg"}>Extinct Species!</subhead>
          </div>

          <div className='container'>
            <box className="paragraphContainer">
              <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                <ExtinctParagraph1/>
              </paragragraph>
              <ExtinctParagraph1VOICE/>
            </box>
          </div>

    
          <div className='container'>

            <div className = {this.state.darkMode ? "pageDiscriptionTitle-Dark" : "pageDiscriptionTitle"}>
              The species desplayed below are some of the most recently extinct species declared by the IUCN.
              Learn how and why these species went extinct.
            </div>



            <div id={this.state.darkMode ? "EXtwoColumnGridContainer-Dark" : "EXtwoColumnGridContainer"}>
              <div id='flexFrame'>
                  <box id="twoHolder">
                      <box id="extImgFrame">
                        <image id='extinctSpeciesImage' style={{ backgroundImage: `url(${carolinaParakeet})`}}></image>
                        <div className="overlay overlayLeft"><label className="photograpgerName">Photograph by Wikimedia Commons</label></div>
                      </box>
                  </box>
                  <box id="twoHolder">
                      <subhead id={this.state.darkMode ? "extinctSpeciesName2-Dark" : "extinctSpeciesName2"}> Carloina Parakeet</subhead>
                      <p id={this.state.darkMode ? "extinctSpeciesParagraph-Dark" : "extinctSpeciesParagraph"} style={{fontSize: `${this.state.fontSize}px`}}> 
                        <ExtinctPara2/> 
                      </p>
                  </box> 
              </div>

              <line id = "extSpecieslinedown"></line>

              <div id='flexFrame'>
                  <box id="twoHolder">
                    <subhead id={this.state.darkMode ? "extinctSpeciesName-Dark" : "extinctSpeciesName"}> Kamao </subhead>
                    <p id={this.state.darkMode ? "extinctSpeciesParagraph2-Dark" : "extinctSpeciesParagraph2"} style={{fontSize: `${this.state.fontSize}px`}}> 
                      <ExtinctPara2/> 
                    </p>
                  </box>
                  <box id="twoHolder">
                      <box id="extImgFrame">
                        <image id='extinctSpeciesImage' style={{ backgroundImage: `url(${Kamao})`}}></image>
                        <div className="overlay overlayLeft"><label className="photograpgerName">Photograph by Lars Petersson</label></div>
                      </box>
                  </box>
              </div>
            </div>


            <div id={this.state.darkMode ? "EXtwoColumnGridContainer-Dark" : "EXtwoColumnGridContainer"}>
              <div id='flexFrame'>
                  <box id="twoHolder">
                      <box id="extImgFrame">
                        <image id='extinctSpeciesImage' style={{ backgroundImage: `url(${passengerPigeon})`}}></image>
                        <div className="overlay overlayLeft"><label className="photograpgerName">Photograph by ChicagoPhotographer</label></div>
                      </box>
                  </box>
                  <box id="twoHolder">
                    <subhead id={this.state.darkMode ? "extinctSpeciesName2-Dark" : "extinctSpeciesName2"}> Passenger Pigeon </subhead>
                    <p id={this.state.darkMode ? "extinctSpeciesParagraph-Dark" : "extinctSpeciesParagraph"} style={{fontSize: `${this.state.fontSize}px`}}> 
                      <ExtinctPara2/> 
                    </p>
                  </box> 
              </div>

              <line id = "extSpecieslinedown"></line>

              <div id='flexFrame'>
                <box id="twoHolder">
                    <subhead id={this.state.darkMode ? "extinctSpeciesName-Dark" : "extinctSpeciesName"}> Dodo </subhead>
                    <p id={this.state.darkMode ? "extinctSpeciesParagraph2-Dark" : "extinctSpeciesParagraph2"} style={{fontSize: `${this.state.fontSize}px`}}> 
                      <ExtinctPara2/> 
                    </p>
                </box>
                <box id="twoHolder">
                    <box id="extImgFrame">
                      <image id='extinctSpeciesImage' style={{ backgroundImage: `url(${dodo})`}}></image>
                      <div className="overlay overlayLeft"><label className="photograpgerName">Photograph by The Art of Pics/Shutterstock</label></div>
                    </box>
                </box>
              </div>
            </div>


            <div id={this.state.darkMode ? "EXtwoColumnGridContainer-Dark" : "EXtwoColumnGridContainer"}>
              <div id='flexFrame'>
                  <box id="twoHolder">
                      <box id="extImgFrame">
                        <image id='extinctSpeciesImage' style={{ backgroundImage: `url(${SplendidPoisonDartFrog})`}}></image>
                        <div className="overlay overlayLeft"><label className="photograpgerName">Photograph by Pete Oxford</label></div>
                      </box>
                  </box>
                  <box id="twoHolder">
                    <subhead id={this.state.darkMode ? "extinctSpeciesName2-Dark" : "extinctSpeciesName2"}> Splendid PoisonDart Frog </subhead>
                    <p id={this.state.darkMode ? "extinctSpeciesParagraph-Dark" : "extinctSpeciesParagraph"} style={{fontSize: `${this.state.fontSize}px`}}> 
                      <ExtinctPara2/> 
                    </p>
                  </box> 
              </div>

              <line id = "extSpecieslinedown"></line>

              <div id='flexFrame'>
                <box id="twoHolder">
                  <subhead id={this.state.darkMode ? "extinctSpeciesName-Dark" : "extinctSpeciesName"}> Golden Toad </subhead>
                  <p id={this.state.darkMode ? "extinctSpeciesParagraph2-Dark" : "extinctSpeciesParagraph2"} style={{fontSize: `${this.state.fontSize}px`}}> 
                    <ExtinctPara2/> 
                  </p>
                </box>
                <box id="twoHolder">
                    <box id="extImgFrame">
                      <image id='extinctSpeciesImage' style={{ backgroundImage: `url(${GoldenToad2})`}}></image>
                      {/* <div className="overlay overlayLeft"><label className="photograpgerName">Photograph by Lars Petersson</label></div> */}
                    </box>
                </box>
              </div>
            </div>
          </div>


{/* ///////// V I D E O ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
<div className= {this.state.darkMode ? "video-Dark" : "video"}>
  <line className = "thinLine"></line>
    <div className="video-Discription">A video footage of recently extinct species captured by camera.</div>
    <ReactPlayer className='videoFrame' light={true} controls={true} url="https://www.youtube.com/watch?v=nAzqGn-LHCw&t=388s" height="450px" width="800px"/>
  <line className = "thinLine"></line>
</div>
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}  


        <div className='container'>

          <div id={this.state.darkMode ? "EXtwoColumnGridContainer-Dark" : "EXtwoColumnGridContainer"}>
            <div id='flexFrame'>
              <box id="twoHolder">
                <subhead id={this.state.darkMode ? "extinctSpeciesName-Dark" : "extinctSpeciesName"}> Pinta Giant Tortise </subhead>
                  <p id={this.state.darkMode ? "extinctSpeciesParagraph2-Dark" : "extinctSpeciesParagraph2"} style={{fontSize: `${this.state.fontSize}px`}}> 
                    <ExtinctPara2/> 
                  </p>
              </box> 
              <box id="twoHolder">
                <box id="extImgFrame">
                  <image id='extinctSpeciesImage' style={{ backgroundImage: `url(${PintaGiantTortise2})`}}></image>
                  <div className="overlay overlayLeft"><label className="photograpgerName">Photograph by Christopher Klassen</label></div>
                </box>
              </box>
            </div>

            <line id = "extSpecieslinedown"></line>

            <div id='flexFrame'>
              <box id="twoHolder">
                <box id="extImgFrame">
                  <image id='extinctSpeciesImage' style={{ backgroundImage: `url(${PyreneanIbex2})`}}></image>
                  {/* <div className="overlay overlayLeft"><label className="photograpgerName">Photograph by Christopher Klassen</label></div> */}
                </box>
              </box>
              <box id="twoHolder">
                <subhead id={this.state.darkMode ? "extinctSpeciesName2-Dark" : "extinctSpeciesName2"}> Pyrenean Ibex </subhead>
                <p id={this.state.darkMode ? "extinctSpeciesParagraph-Dark" : "extinctSpeciesParagraph"} style={{fontSize: `${this.state.fontSize}px`}}> 
                  <ExtinctPara2/> 
                </p>
              </box>
            </div>
          </div>


          <div id={this.state.darkMode ? "EXtwoColumnGridContainer-Dark" : "EXtwoColumnGridContainer"}>
            <div id='flexFrame'>
              <box id="twoHolder">
                <subhead id={this.state.darkMode ? "extinctSpeciesName-Dark" : "extinctSpeciesName"}> The Western Black Rhinos </subhead>
                <p id={this.state.darkMode ? "extinctSpeciesParagraph2-Dark" : "extinctSpeciesParagraph2"} style={{fontSize: `${this.state.fontSize}px`}}> 
                  <ExtinctPara2/> 
                </p>
              </box> 
              <box id="twoHolder">
                <box id="extImgFrame">
                  <image id='extinctSpeciesImage' style={{ backgroundImage: `url(${WesternBlackRhinoceros2})`}}></image>
                  <div className="overlay overlayLeft"><label className="photograpgerName">Photograph by Dr Richard Emslie</label></div>
                </box>
              </box>
            </div>

            <line id = "extSpecieslinedown"></line>

            <div id='flexFrame'>
              <box id="twoHolder">
                <box id="extImgFrame">
                  <image id='extinctSpeciesImage' style={{ backgroundImage: `url(${TasmanianTiger})`}}></image>
                  <div className="overlay overlayLeft"><label className="photograpgerName">Photograph by Getty Images</label></div>
                </box>
              </box>
              <box id="twoHolder">
                <subhead id={this.state.darkMode ? "extinctSpeciesName2-Dark" : "extinctSpeciesName2"}> Tasmanian Tiger </subhead>
                <p id={this.state.darkMode ? "extinctSpeciesParagraph-Dark" : "extinctSpeciesParagraph"} style={{fontSize: `${this.state.fontSize}px`}}> 
                  <ExtinctPara2/> 
                </p>
              </box>
            </div>
          </div>


          <div id={this.state.darkMode ? "EXtwoColumnGridContainer-Dark" : "EXtwoColumnGridContainer"}>
            <div id='flexFrame'>
              <box id="twoHolder">
                <subhead id={this.state.darkMode ? "extinctSpeciesName-Dark" : "extinctSpeciesName"}> Caribbean Monk Seal </subhead>
                <p id={this.state.darkMode ? "extinctSpeciesParagraph2-Dark" : "extinctSpeciesParagraph2"} style={{fontSize: `${this.state.fontSize}px`}}> 
                  <ExtinctPara2/> 
                </p>
              </box> 
              <box id="twoHolder">
                <box id="extImgFrame">
                  <image id='extinctSpeciesImage' style={{ backgroundImage: `url(${CaribbeanMonkSeal})`}}></image>
                  {/* <div className="overlay overlayLeft"><label className="photograpgerName">Photograph by </label></div> */}
                </box>
              </box>
            </div>

            <line id = "extSpecieslinedown"></line>

            <div id='flexFrame'>
              <box id="twoHolder">
                <box id="extImgFrame">
                  <image id='extinctSpeciesImage' style={{ backgroundImage: `url(${ChristmasIslandPipistrelle})`}}></image>
                  <div className="overlay overlayLeft"><label className="photograpgerName">Photograph by Chris Tidemann</label></div>
                </box>
              </box>
              <box id="twoHolder">
                <subhead id={this.state.darkMode ? "extinctSpeciesName2-Dark" : "extinctSpeciesName2"}> Christmas Island Bat </subhead>
                <p id={this.state.darkMode ? "extinctSpeciesParagraph-Dark" : "extinctSpeciesParagraph"} style={{fontSize: `${this.state.fontSize}px`}}> 
                  <ExtinctPara2/> 
                </p>
              </box>
            </div>
          </div>
        </div>


{/* ///////// V I D E O ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */} 
        <div className= {this.state.darkMode ? "video-Dark" : "video"}>
          <line className = "thinLine"></line>
            <div className="video-Discription">A video footage of recently extinct species captured by camera.</div>
            <ReactPlayer className='videoFrame' light={true} controls={true} url="https://www.youtube.com/watch?v=nAzqGn-LHCw&t=388s" height="450px" width="800px"/>
          <line className = "thinLine"></line>
        </div>
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


        <div className='container'>
          <div id={this.state.darkMode ? "EXtwoColumnGridContainer-Dark" : "EXtwoColumnGridContainer"}>
            <div id='flexFrame'>
                <box id="twoHolder">
                    <box id="extImgFrame">
                      <image id='extinctSpeciesImage' style={{ backgroundImage: `url(${Tarpan})`}}></image>
                      {/* <div className="overlay overlayLeft"><label className="photograpgerName">Photograph by </label></div> */}
                    </box>
                </box>
                <box id="twoHolder">
                  <subhead id={this.state.darkMode ? "extinctSpeciesName2-Dark" : "extinctSpeciesName2"}> Tarpan </subhead>
                  <p id={this.state.darkMode ? "extinctSpeciesParagraph-Dark" : "extinctSpeciesParagraph"} style={{fontSize: `${this.state.fontSize}px`}}> 
                    <ExtinctPara2/> 
                  </p>
                </box> 
            </div>

            <line id = "extSpecieslinedown"></line>

            <div id='flexFrame'>
                <box id="twoHolder">
                  <subhead id={this.state.darkMode ? "extinctSpeciesName-Dark" : "extinctSpeciesName"}> Barbary Lion </subhead>
                  <p id={this.state.darkMode ? "extinctSpeciesParagraph2-Dark" : "extinctSpeciesParagraph2"} style={{fontSize: `${this.state.fontSize}px`}}> 
                    <ExtinctPara2/> 
                  </p>
                </box>
                <box id="twoHolder">
                    <box id="extImgFrame">
                    <image id='extinctSpeciesImage' style={{ backgroundImage: `url(${barbaryLion})`}}></image>
                    {/* <div className="overlay overlayLeft"><label className="photograpgerName">Photograph by </label></div> */}
                    </box>
                </box>
            </div>
          </div>


          <div id={this.state.darkMode ? "EXtwoColumnGridContainer-Dark" : "EXtwoColumnGridContainer"}>
            <div id='flexFrame'>
                <box id="twoHolder">
                    <box id="extImgFrame">
                      <image id='extinctSpeciesImage' style={{ backgroundImage: `url(${baliTiger})`}}></image>
                      {/* <div className="overlay overlayLeft"><label className="photograpgerName">Photograph by </label></div> */}
                    </box>
                </box>
                <box id="twoHolder">
                    <subhead id={this.state.darkMode ? "extinctSpeciesName2-Dark" : "extinctSpeciesName2"}> Bali Tiger </subhead>
                    <p id={this.state.darkMode ? "extinctSpeciesParagraph-Dark" : "extinctSpeciesParagraph"} style={{fontSize: `${this.state.fontSize}px`}}> 
                      <ExtinctPara2/> 
                    </p>
                </box> 
            </div>

            <line id = "extSpecieslinedown"></line>

            <div id='flexFrame'>
              <box id="twoHolder">
                <subhead id={this.state.darkMode ? "extinctSpeciesName-Dark" : "extinctSpeciesName"}> Caspian Tiger </subhead>
                <p id={this.state.darkMode ? "extinctSpeciesParagraph2-Dark" : "extinctSpeciesParagraph2"} style={{fontSize: `${this.state.fontSize}px`}}> 
                  <ExtinctPara2/> 
                </p>
              </box>
              <box id="twoHolder">
                  <box id="extImgFrame">
                    <image id='extinctSpeciesImage' style={{ backgroundImage: `url(${CaspianTiger})`}}></image>
                    {/* <div className="overlay overlayLeft"><label className="photograpgerName">Photograph by </label></div> */}
                  </box>
              </box>
            </div>
          </div>


          <div id={this.state.darkMode ? "EXtwoColumnGridContainer-Dark" : "EXtwoColumnGridContainer"}>
            <div id='flexFrame'>
                <box id="twoHolder">
                    <box id="extImgFrame">
                    <image id='extinctSpeciesImage' style={{ backgroundImage: `url(${SmoothHandfish})`}}></image>
                    <div className="overlay overlayLeft"><label className="photograpgerName">Photograph by Auscape/Getty</label></div>
                    </box>
                </box>
                <box id="twoHolder">
                  <subhead id={this.state.darkMode ? "extinctSpeciesName2-Dark" : "extinctSpeciesName2"}> Smooth Handfish</subhead>
                  <p id={this.state.darkMode ? "extinctSpeciesParagraph-Dark" : "extinctSpeciesParagraph"} style={{fontSize: `${this.state.fontSize}px`}}> 
                    <ExtinctPara2/> 
                  </p>
                </box> 
            </div>

            <line id = "extSpecieslinedown"></line>

            <div id='flexFrame'>
              <box id="twoHolder">
                <subhead id={this.state.darkMode ? "extinctSpeciesName-Dark" : "extinctSpeciesName"}> Bramble Cay Melomys </subhead>
                <p id={this.state.darkMode ? "extinctSpeciesParagraph2-Dark" : "extinctSpeciesParagraph2"} style={{fontSize: `${this.state.fontSize}px`}}> 
                  <ExtinctPara2/> 
                </p>
              </box>
              <box id="twoHolder">
                  <box id="extImgFrame">
                  <image id='extinctSpeciesImage' style={{ backgroundImage: `url(${BrambleCayMelomys})`}}></image>
                  {/* <div className="overlay overlayLeft"><label className="photograpgerName">Photograph by </label></div> */}
                  </box>
              </box>
            </div>
          </div>
          
        </div>


{/* ///////// V I D E O ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
<div className= {this.state.darkMode ? "video-Dark" : "video"}>
  <line className = "thinLine"></line>
    <div className="video-Discription">A video footage of recently extinct species captured by camera.</div>
    <ReactPlayer className='videoFrame' light={true} controls={true} url="https://www.youtube.com/watch?v=nAzqGn-LHCw&t=388s" height="450px" width="800px"/>
  <line className = "thinLine"></line>
</div>
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


        <div className='container'>

          <div id={this.state.darkMode ? "EXtwoColumnGridContainer-Dark" : "EXtwoColumnGridContainer"}>
            <div id='flexFrame'>
              <box id="twoHolder">
                <subhead id={this.state.darkMode ? "extinctSpeciesName-Dark" : "extinctSpeciesName"}> The Northern White Rhinos </subhead>
                  <p id={this.state.darkMode ? "extinctSpeciesParagraph2-Dark" : "extinctSpeciesParagraph2"} style={{fontSize: `${this.state.fontSize}px`}}> 
                    <ExtinctPara2/> 
                  </p>
              </box> 
              <box id="twoHolder">
                <box id="extImgFrame">
                  <image id='extinctSpeciesImage' style={{ backgroundImage: `url(${TheNorthernWhiteRhinoceros})`}}></image>
                  {/* <div className="overlay overlayLeft"><label className="photograpgerName">Photograph by </label></div> */}
                </box>
              </box>
            </div>

            <line id = "extSpecieslinedown"></line>

            <div id='flexFrame'>
              <box id="twoHolder">
                <box id="extImgFrame">
                  <image id='extinctSpeciesImage' style={{ backgroundImage: `url(${ZanzibarLeopard})`}}></image>
                  {/* <div className="overlay overlayLeft"><label className="photograpgerName">Photograph by </label></div> */}
                </box>
              </box>
              <box id="twoHolder">
                <subhead id={this.state.darkMode ? "extinctSpeciesName2-Dark" : "extinctSpeciesName2"}> Zanzibar Leopard </subhead>
                <p id={this.state.darkMode ? "extinctSpeciesParagraph-Dark" : "extinctSpeciesParagraph"} style={{fontSize: `${this.state.fontSize}px`}}> 
                  <ExtinctPara2/> 
                </p>
              </box>
            </div>
          </div>


          <div id={this.state.darkMode ? "EXtwoColumnGridContainer-Dark" : "EXtwoColumnGridContainer"}>
            <div id='flexFrame'>
              <box id="twoHolder">
                <subhead id={this.state.darkMode ? "extinctSpeciesName-Dark" : "extinctSpeciesName"}> Tecopa Pupfish </subhead>
                <p id={this.state.darkMode ? "extinctSpeciesParagraph2-Dark" : "extinctSpeciesParagraph2"} style={{fontSize: `${this.state.fontSize}px`}}> 
                  <ExtinctPara2/> 
                </p>
              </box> 
              <box id="twoHolder">
                <box id="extImgFrame">
                  <image id='extinctSpeciesImage' style={{ backgroundImage: `url(${TecopaPupfish})`}}></image>
                  <div className="overlay overlayLeft"><label className="photograpgerName">Photograph by Olin Feuerbacher</label></div>
                </box>
              </box>
            </div>

            <line id = "extSpecieslinedown"></line>

            <div id='flexFrame'>
              <box id="twoHolder">
                <box id="extImgFrame">
                  <image id='extinctSpeciesImage' style={{ backgroundImage: `url(${FalklandIslandsWolf})`}}></image>
                  <div className="overlay overlayLeft"><label className="photograpgerName">Photograph by Kane Fleury</label></div>
                </box>
              </box>
              <box id="twoHolder">
                <subhead id={this.state.darkMode ? "extinctSpeciesName2-Dark" : "extinctSpeciesName2"}> Falkland Islands Wolf </subhead>
                <p id={this.state.darkMode ? "extinctSpeciesParagraph-Dark" : "extinctSpeciesParagraph"} style={{fontSize: `${this.state.fontSize}px`}}> 
                  <ExtinctPara2/> 
                </p>
              </box>
            </div>
          </div>

          <div id={this.state.darkMode ? "EXtwoColumnGridContainer-Dark" : "EXtwoColumnGridContainer"}>
            <div id='flexFrame'>
              <box id="twoHolder">
                <subhead id={this.state.darkMode ? "extinctSpeciesName-Dark" : "extinctSpeciesName"}> Javan Tiger </subhead>
                <p id={this.state.darkMode ? "extinctSpeciesParagraph2-Dark" : "extinctSpeciesParagraph2"} style={{fontSize: `${this.state.fontSize}px`}}> 
                  <ExtinctPara2/> 
                </p>
              </box> 
              <box id="twoHolder">
                <box id="extImgFrame">
                  <image id='extinctSpeciesImage' style={{ backgroundImage: `url(${JavanTiger})`}}></image>
                  {/* <div className="overlay overlayLeft"><label className="photograpgerName">Photograph by</label></div> */}
                </box>
              </box>
            </div>
            
            <line id = "extSpecieslinedown"></line>

            <div id='flexFrame'>
              <box id="twoHolder">
                <box id="extImgFrame">
                  <image id='extinctSpeciesImage' style={{ backgroundImage: `url(${SchomburgksDeer})`}}></image>
                  {/* <div className="overlay overlayLeft"><label className="photograpgerName">Photograph by</label></div> */}
                </box>
              </box>
              <box id="twoHolder">
                <subhead id={this.state.darkMode ? "extinctSpeciesName2-Dark" : "extinctSpeciesName2"}> Schomburgks Deer </subhead>
                <p id={this.state.darkMode ? "extinctSpeciesParagraph-Dark" : "extinctSpeciesParagraph"} style={{fontSize: `${this.state.fontSize}px`}}> 
                  <ExtinctPara2/> 
                </p>
              </box>
            </div>
          </div>
        </div>


          <video id={this.state.darkMode ? "ExtinctVideoframe-Dark" : "ExtinctVideoframe-Light"}>
            
          </video>



        </body>
        <ExtinctSpeciesSuvNav/>
      </div>    
    );
  }
}