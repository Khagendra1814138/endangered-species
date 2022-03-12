import React from 'react';
import { Component } from "react";
import ReactPlayer from 'react-player';

import '../pages/publicMain.css';
import './amphibians.css';

import {AmphibianPageSuvNav} from "../subNav/subNavigation";


import headerAmphibian from '../images/headerAmphibian.png';

import axolotl from '../images/endAmphibians/axolotl.png';
import lemurLeafFrog from '../images/endAmphibians/lemurLeafFrog.png';
import poisonDartFrog from '../images/endAmphibians/poisonDartFrog.png';

import AnodonthylaVallaniFrog from '../images/endAmphibians/frogs/AnodonthylaVallaniFrog.png';
import baleMountainsTreeFrog from '../images/endAmphibians/frogs/baleMountainsTreeFrog.png';
import corroboreeFrog from '../images/endAmphibians/frogs/corroboreeFrog.png';
import duskyGopherFrog from '../images/endAmphibians/frogs/duskyGopherFrog.png';
import flyingFrog from '../images/endAmphibians/frogs/flyingFrog.png';
import mantellaFrog from '../images/endAmphibians/frogs/mantellaFrog.png';
import panamanianGoldenFrog from '../images/endAmphibians/frogs/panamanianGoldenFrog.png';
import variableHarlequinFrog from '../images/endAmphibians/frogs/variableHarlequinFrog.png';

import chineseGiantSalamander from '../images/endAmphibians/salamander/chineseGiantSalamander.png';
import flatwoodsSalamander from '../images/endAmphibians/salamander/flatwoodsSalamander.png';
import slenderSalamander from '../images/endAmphibians/salamander/slenderSalamander.png';
import splayfootSalamanders from '../images/endAmphibians/salamander/splayfootSalamanders.png';


import FontSizeIncreaser from '../readAccessibilityGuideFunctions/fontSizeIncrease';
import DarkModeFunction from '../darkMode/darkMode';


//Text To Voices
import {AmphibianPara1Voice} from "../textToVoice/endAmphibianPageVoice";
import {AmphibianPara2Voice} from "../textToVoice/endAmphibianPageVoice";
import {AmphibianPara3Voice} from "../textToVoice/endAmphibianPageVoice";
import {AmphibianPara4Voice} from "../textToVoice/endAmphibianPageVoice";

export class Amphibians extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        darkMode: false,
        fontSize: 18,
        endangeredAmphibiansItems: [],
      };
    }

    componentDidMount(){
        fetch("http://localhost:5000/api/amphibianSpecies")
        .then (rest => rest.json())
        .then (endangeredAmphibiansRecords => {
        this.setState({
            isLoaded: true,
            endangeredAmphibiansItems: endangeredAmphibiansRecords,
          })
        console.log(endangeredAmphibiansRecords)
        });
    }

    render(){

        return( 
            <div className={this.state.darkMode ? "pageMainFrameDark" : "pageMainFrameLight"}>

{/* //////////////////////////////////////////////////////FontSizeFunction////////////////////////////////////////////////////// */}
            <FontSizeIncreaser fontSize={this.state.fontSize} setFontSize={(size) => this.setState({ fontSize: size })} />
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                <box className = "landingImageBox2" style={{ backgroundImage: `url(${headerAmphibian})`}}></box>

{/* //////////////////////////////////////////////////////DarkModeFunction////////////////////////////////////////////////////// */}
                <DarkModeFunction darkMode={this.state.darkMode} setDarkmode={(darkMode) => this.setState({darkMode})} />
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                
                <body className='pageBodyFrame'>
                    <div className='container'>
                        
                        <div className = "mainSubHeadFrame">
                            <subhead className = {this.state.darkMode ? "subheadLrgDrk" : "subheadLrg"}>Endangered Amphibians</subhead>
                        </div>
                
                        <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                            Did you know that Amphibians were the first vertebrates to colonise the land evolving around 370 million years ago.
                            They have already survived four mass extinction events.
                            <br></br>
                            <br></br>
                            The IUCN Red List states that around 40% of Amphibians species are already threatned with Extinction.
                            It is very important to stop this extinction because Amphibians like frogs, toad and salamander are critical part of the nature as they are both predetor and prey.
                            <br></br>
                            <br></br>
                            Apmhibians species mainly eats insects pests, which can benifit Agriculture around the world.
                            They eat insects like musquitos, helping to reduce the spread of diseases like malaria.
                        </paragragraph>
                        <AmphibianPara1Voice/>
                        {/* https://www.durrell.org/wildlife/amphibian-blog/eight-reasons-amphibians-are-amazing#:~:text=1.,spread%20of%20disease%2C%20including%20malaria. */}

                    <div className='container'>
                        <box className = "box4">
                            <box className = "largeSpeciesImgFrame">
                                <box className = "speciesCardContainer">
                                    <image className= 'amphibianLargeImage'>
                                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${axolotl})`}}></div>
                                    </image>
                                    <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by John Cancalosi</label></div>

                                    <label className= {this.state.darkMode ? "amphibianName-Dark" : "amphibianName"}>
                                        {this.state.endangeredAmphibiansItems.length > 0 && (
                                            <div>
                                                {this.state.endangeredAmphibiansItems[0].name}
                                            </div>
                                        )}
                                    </label>
                                </box>
                            </box>

                            <box className = "mediumSpeciesImgFrame">
                                <box className = "MedBox">
                                    <image className='amphibianMediumImage'>
                                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${chineseGiantSalamander})`}}></div>
                                    </image>
                                    <label className= {this.state.darkMode ? "amphibianName-Dark" : "amphibianName"}>
                                        {this.state.endangeredAmphibiansItems.length > 0 && (
                                            <div>
                                                {this.state.endangeredAmphibiansItems[1].name}
                                            </div>
                                        )}
                                    </label>
                                </box>

                                <box className = "MedBox">
                                    <box className = "speciesCardContainer">
                                        <image className='amphibianMediumImage'>
                                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${flatwoodsSalamander})`}}></div>
                                        </image>
                                        <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Sean M. Rovito</label></div>
                                        
                                        <label className= {this.state.darkMode ? "amphibianName-Dark" : "amphibianName"}>
                                            {this.state.endangeredAmphibiansItems.length > 0 && (
                                                <div>
                                                    {this.state.endangeredAmphibiansItems[4].name}
                                                </div>
                                            )}
                                        </label>
                                    </box>
                                </box>
                            </box>

                            <box className = "mediumSpeciesImgFrame">
                                <box className = "MedBox">
                                    <box className = "speciesCardContainer">
                                        <image className='amphibianMediumImage'>
                                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${slenderSalamander})`}}></div>
                                        </image>
                                        <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Stephen Friedt</label></div>

                                        <label className= {this.state.darkMode ? "amphibianName-Dark" : "amphibianName"}>
                                            {this.state.endangeredAmphibiansItems.length > 0 && (
                                                <div>
                                                    {this.state.endangeredAmphibiansItems[3].name}
                                                </div>
                                            )}
                                        </label>
                                    </box>
                                </box>

                                <box className = "MedBox">
                                    <image className='amphibianMediumImage'>
                                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${splayfootSalamanders})`}}></div>
                                    </image>
                                    <label className= {this.state.darkMode ? "amphibianName-Dark" : "amphibianName"}>
                                        {this.state.endangeredAmphibiansItems.length > 0 && (
                                            <div>
                                                {this.state.endangeredAmphibiansItems[2].name}
                                            </div>
                                        )}
                                    </label>
                                </box>
                            </box>
                        </box>

                        
                    </div>
                    <div className= {this.state.darkMode ? "videoFrame-Dark" : "videoFrame"}>
                        <line className = "thinLine"></line>
                        <div className= {this.state.darkMode ? "video-Dark" : "video"}>
                            <paragragraph className="video-Discription">A video of Axolotel.</paragragraph>
                            <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=lL87xhk63FM"/>
                        </div> 
                        <line className = "thinLine"></line> 
                    </div>

                    <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                       Amphibians have moist, permeable skin, which makes them vulnerable to drought and toxic substances, 
                       meaning they can be used as an indicator of the ecosystem health. For example, the health of important ecosystems such as forests and wetlands.
                       Amphibians skin contains different types of peptides, which can perhaps offer possible medical cures for many varities of human diseases.
                    </paragragraph>
                    <AmphibianPara2Voice/>


                    <div className='container'>
                        <box className = "box4">
                            <box className = "largeSpeciesImgFrame">
                                <box className = "speciesCardContainer">
                                    <image className= 'amphibianLargeImage'>
                                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${lemurLeafFrog})`}}></div>
                                    </image>
                                    <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Frogmana</label></div>
                                    
                                    <label className= {this.state.darkMode ? "amphibianName-Dark" : "amphibianName2"}>
                                        {this.state.endangeredAmphibiansItems.length > 0 && (
                                            <div>
                                                {this.state.endangeredAmphibiansItems[5].name}
                                            </div>
                                        )}
                                    </label>
                                </box>
                            </box>

                            <box className = "mediumSpeciesImgFrame">
                                <box className = "MedBox">
                                    <box className = "speciesCardContainer">
                                        <image className='amphibianMediumImage'>
                                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${AnodonthylaVallaniFrog})`}}></div>
                                        </image>
                                        <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Miguel Vences</label></div>

                                        <label className= {this.state.darkMode ? "amphibianName-Dark" : "amphibianName2"}>
                                            {this.state.endangeredAmphibiansItems.length > 0 && (
                                                <div>
                                                    {this.state.endangeredAmphibiansItems[11].name}
                                                </div>
                                            )}
                                        </label>
                                    </box>
                                </box>

                                <box className = "MedBox">
                                    <image className='amphibianMediumImage'>
                                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${baleMountainsTreeFrog})`}}></div>
                                    </image>
                                    <label className= {this.state.darkMode ? "amphibianName-Dark" : "amphibianName2"}>
                                        {this.state.endangeredAmphibiansItems.length > 0 && (
                                            <div>
                                                {this.state.endangeredAmphibiansItems[12].name}
                                            </div>
                                        )}
                                    </label>
                                </box>
                            </box>

                            <box className = "mediumSpeciesImgFrame">
                                <box className = "MedBox">
                                    <box className = "speciesCardContainer">
                                        <image className='amphibianMediumImage'>
                                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${corroboreeFrog})`}}></div>
                                        </image>
                                        <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Critter Man</label></div>
                                        
                                        <label className= {this.state.darkMode ? "amphibianName-Dark" : "amphibianName2"}>
                                            {this.state.endangeredAmphibiansItems.length > 0 && (
                                                <div>
                                                    {this.state.endangeredAmphibiansItems[13].name}
                                                </div>
                                            )}
                                        </label>
                                    </box>
                                </box>

                                <box className = "MedBox">
                                    <box className = "speciesCardContainer">
                                        <image className='amphibianMediumImage'>
                                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${duskyGopherFrog})`}}></div>
                                        </image>
                                        <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by John A. Tupy</label></div>
                                        
                                        <label className= {this.state.darkMode ? "amphibianName-Dark" : "amphibianName2"}>
                                            {this.state.endangeredAmphibiansItems.length > 0 && (
                                                <div>
                                                    {this.state.endangeredAmphibiansItems[10].name}
                                                </div>
                                            )}
                                        </label>
                                    </box>
                                </box>
                            </box>
                        </box>
                    </div>

                    <div className= {this.state.darkMode ? "videoFrame-Dark" : "videoFrame"}>
                        <line className = "thinLine"></line>
                        <div className= {this.state.darkMode ? "video-Dark" : "video"}>
                            <paragragraph className="video-Discription">A video of Endangered Frogs Species.</paragragraph>
                            <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=Uja_QE4cZV0"/>
                        </div> 
                        <line className = "thinLine"></line> 
                    </div>

                    
                    <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                        Amphibians species are already used in medicines to treat humans. For example, medicines like painkillers, high blood pressure medication and 
                        even to block deadly disease like HIV transmission and treat anti-biotic resistant bacterial strains.
                        Therefore, as this special species starts to disappear, so do the potential treatments and cures to human diseases.
                    </paragragraph>
                    <AmphibianPara3Voice/>


                    <div className='container'>
                        <box className = "box4">
                            <box className = "largeSpeciesImgFrame">
                                <box className = "speciesCardContainer">
                                    <image className= 'amphibianLargeImage'>
                                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${poisonDartFrog})`}}></div>
                                    </image>
                                    <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Kikker Dirk</label></div>
                                    
                                    <label className= {this.state.darkMode ? "amphibianName-Dark" : "amphibianName3"}>
                                        {this.state.endangeredAmphibiansItems.length > 0 && (
                                            <div>
                                                {this.state.endangeredAmphibiansItems[7].name}
                                            </div>
                                        )}
                                    </label>
                                </box>
                            </box>

                            <box className = "mediumSpeciesImgFrame">
                                <box className = "MedBox">
                                    <box className = "speciesCardContainer">
                                        <image className='amphibianMediumImage'>
                                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${flyingFrog})`}}></div>
                                        </image>
                                        <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Thai National Park</label></div>

                                        <label className= {this.state.darkMode ? "amphibianName-Dark" : "amphibianName3"}>
                                            {this.state.endangeredAmphibiansItems.length > 0 && (
                                                <div>
                                                    {this.state.endangeredAmphibiansItems[8].name}
                                                </div>
                                            )}
                                        </label>
                                    </box>
                                </box>
                

                                <box className = "MedBox">
                                    <box className = "speciesCardContainer">
                                        <image className='amphibianMediumImage'>
                                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${mantellaFrog})`}}></div>
                                        </image>
                                        <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Frank Vassen</label></div>

                                        <label className= {this.state.darkMode ? "amphibianName-Dark" : "amphibianName3"}>
                                            {this.state.endangeredAmphibiansItems.length > 0 && (
                                                <div>
                                                    {this.state.endangeredAmphibiansItems[14].name}
                                                </div>
                                            )}
                                        </label>
                                    </box>
                                </box>
                            </box>

                            <box className = "mediumSpeciesImgFrame">
                                <box className = "MedBox">
                                    <box className = "speciesCardContainer">
                                        <image className='amphibianMediumImage'>
                                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${panamanianGoldenFrog})`}}></div>
                                        </image>
                                        <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Brian Gratwicke</label></div>

                                        <label className= {this.state.darkMode ? "amphibianName-Dark" : "amphibianName3"}>
                                            {this.state.endangeredAmphibiansItems.length > 0 && (
                                                <div>
                                                    {this.state.endangeredAmphibiansItems[9].name}
                                                </div>
                                            )}
                                        </label>
                                    </box>
                                </box>

                                <box className = "MedBox">
                                    <image className='amphibianMediumImage'>
                                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${variableHarlequinFrog})`}}></div>
                                    </image>
                                    <label className= {this.state.darkMode ? "amphibianName-Dark" : "amphibianName3"}>
                                        {this.state.endangeredAmphibiansItems.length > 0 && (
                                            <div>
                                                {this.state.endangeredAmphibiansItems[6].name}
                                            </div>
                                        )}
                                    </label>
                                </box>
                            </box>
                        </box>
                    </div>
                    
                    <div className= {this.state.darkMode ? "videoFrame-Dark" : "videoFrame"}>
                        <line className = "thinLine"></line>
                        <div className= {this.state.darkMode ? "video-Dark" : "video"}>
                            <paragragraph className="video-Discription">A video of Gliding Leaf Frogs.</paragragraph>
                            <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=tf1bytsDDho"/>
                        </div> 
                        <line className = "thinLine"></line> 
                    </div>

                          
                    <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                        One of the most fascinating thing about Amphibians are that most of them have ability to regrow their limbs.
                        This ablility is currently being studied by scientists around the world to gain new knowledge on how to improve tissue regeneration and growth.
                    </paragragraph>
                    <AmphibianPara4Voice/>
                </div>

            </body>
            <AmphibianPageSuvNav/>
        </div>
        );
    }
}