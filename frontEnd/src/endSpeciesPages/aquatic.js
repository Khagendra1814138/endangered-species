import React from 'react';
import { Component } from "react";
import ReactPlayer from 'react-player';

import '../pages/publicMain.css';
import './aquatic.css';

import {AquaticSideBarPageNav} from "../sideBarPagesNav/EnAquaticSideBarPageNav";

import {AquaticPageSuvNav} from "../subNav/subNavigation";


import headerAquatic from '../images/headerAquatic.png';
import coral from '../images/endAquatic/coralReef.png';
//dolphins
import hectorsDolphins from '../images/endAquatic/dolphin/hectorsDolphins.png';
import amazonRiverDolphin from '../images/endAquatic/dolphin/amazonRiverDolphin.png';
import IrrawaddyDolphin from '../images/endAquatic/dolphin/IrrawaddyDolphin.png';
import vaquita from '../images/endAquatic/dolphin/vaquita.png';
import yangtzeFinless from '../images/endAquatic/dolphin/yangtzeFinless.png';

//sharks
import whaleShark from '../images/endAquatic/shark/whaleShark.png';
import greatWhiteShark from '../images/endAquatic/shark/greatWhiteShark.png';
import hammerhead from '../images/endAquatic/shark/hammerhead.png';
import oceanicWhitetip from '../images/endAquatic/shark/oceanicWhitetip.png';
import sandTiger from '../images/endAquatic/shark/sandTiger.png';

//turtles
import loggerheadTurtle from '../images/endAquatic/turtle/loggerheadTurtle.png';
import greenTurtle from '../images/endAquatic/turtle/greenTurtle.png';
import hawkbillTurtles from '../images/endAquatic/turtle/hawkbillTurtles.png';
import leatherBack from '../images/endAquatic/turtle/leatherBack.png';
import oliveRidley from '../images/endAquatic/turtle/oliveRidley.png';

//whales
import blueWhale from '../images/endAquatic/whale/blueWhale.png';
import bowheadWhale from '../images/endAquatic/whale/bowheadWhale.png';
import finWhale from '../images/endAquatic/whale/finWhale.png';
import greyWhale from '../images/endAquatic/whale/greyWhale.png';
import seiWhale from '../images/endAquatic/whale/seiWhale.png';

//Other fishes and not fishes
import galapagosPenguin from '../images/endAquatic/galapagosPenguin.png';
import hoodedSeal from '../images/endAquatic/hoodedSeal.png';
import marineLguana from '../images/endAquatic/marineLguana.png';
import hawaiianMonkSeal from '../images/endAquatic/hawaiianMonkSeal.png';
import dugong from '../images/endAquatic/dugong.png';

import manatees from '../images/endAquatic/manatees.png';
import atlanticSalmon from '../images/endAquatic/atlanticSalmon.png';
import blueFinTuna from '../images/endAquatic/blueFinTuna.png';
import sturgeon from '../images/endAquatic/sturgeon.png';
import europeanEel from '../images/endAquatic/europeanEel.png';


import seaOtter from '../images/endAquatic/seaOtter.png';
import caribbeanElectricRay from '../images/endAquatic/caribbeanElectricRay.png';
import giantDevilRay from '../images/endAquatic/giantDevilRay.png';
import humpheadWarasse from '../images/endAquatic/humpheadWarasse.png';
import stellarSeaLion from '../images/endAquatic/stellarSeaLion.png';


import FontSizeIncreaser from '../readAccessibilityGuideFunctions/fontSizeIncrease';
import DarkModeFunction from '../darkMode/darkMode';
// import config from '../config';


//Text To Voices
import {AquaticPara1Voice} from "../textToVoice/endAquaticVoice";
import {AquaticPara2Voice} from "../textToVoice/endAquaticVoice";
import {AquaticPara3Voice} from "../textToVoice/endAquaticVoice";
import {AquaticPara4Voice} from "../textToVoice/endAquaticVoice";
import {AquaticPara5Voice} from "../textToVoice/endAquaticVoice";


export class Aquatic extends Component {

  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
      fontSize: 18,
      // endangeredAquaticItems: [],
    };
  }

  
  // componentDidMount(){
  //     fetch(config.backendUrl + "api/aquaticSpecies")
  //     .then (rest => rest.json())
  //     .then (endangeredAquaticRecords => {
  //     this.setState({
  //         isLoaded: true,
  //         endangeredAquaticItems: endangeredAquaticRecords,
  //       })
  //     console.log(endangeredAquaticRecords)
  //     });
  // }

  render(){

    return( 
      <div className={this.state.darkMode ? "pageMainFrameDark" : "pageMainFrameLight"}>

{/* //////////////////////////////////////////////////////FontSizeFunction////////////////////////////////////////////////////// */}
<FontSizeIncreaser fontSize={this.state.fontSize} setFontSize={(size) => this.setState({ fontSize: size })} />
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <box className = "landingImageBox2" style={{ backgroundImage: `url(${headerAquatic})`}}></box>

{/* //////////////////////////////////////////////////////DarkModeFunction////////////////////////////////////////////////////// */}
<DarkModeFunction darkMode={this.state.darkMode} setDarkmode={(darkMode) => this.setState({darkMode})} />
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <body className='pageBodyFrame'>
          <AquaticSideBarPageNav/>

          <div className = "mainSubHeadFrame">
            <subhead className = {this.state.darkMode ? "subheadLrgDrk" : "subheadLrg"}>Endangered Aquatic Animals</subhead>
          </div>

            {/* https://www.fao.org/zhc/detail-events/en/c/846698/
            https://simonmustoe.blog/top-5-reasons-to-conserve-ocean-animals-and-ecosystems/ 
            https://www.weforum.org/agenda/2019/08/here-are-5-reasons-why-the-ocean-is-so-important/*/}
          <div className='container'>

            <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
              The IUCN red list states that 37% of sharks and rays, 33% of coral reefs, 28% of Crustaceans and many more marine species are endangered with extinction.
              This is mainly because of human activities like overfishing, plastic pollution, climate change and ocean noise by ships, oil/gas industry and military sonar. 
              Loss of species are dangereous because it is a sign showing that the ocean ecosystem is unbalanced.
              So, saving the ocean species are important because it provides food, medicine, jobs and helps to keeps our planet balanced.
            </paragragraph>
            <AquaticPara1Voice/>

            <box className = "box4">
              <box className = "mediumSpeciesImgFrame">
                <image className='aquaticLongImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${coral})`}}></div>
                </image>
            
                <label className = {this.state.darkMode ? "aquaticName-Dark" : "aquaticName"}>
                  {/* {this.state.endangeredAquaticItems.length > 0 && (<div> {this.state.endangeredAquaticItems[35].name} </div>)} */}
                  Coral Reefs
                </label>
                </box>
            </box>

            <box className = "box4">
              <box className = "mediumSpeciesImgFrame">
                  <box className = "speciesCardContainer">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${amazonRiverDolphin})`}}></div>
                    </image>
                    <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Sylvain Cordier</label></div>

                    <label className = {this.state.darkMode ? "aquaticName-Dark" : "aquaticName"}>
                      {/* {this.state.endangeredAquaticItems.length > 0 && (<div> {this.state.endangeredAquaticItems[8].name} </div>)} */}
                      Amazon River Dolphin
                    </label>
                  </box>

                  <box className = "containerx">
                    <box className = "speciesCardContainer">
                      <image className='aquaticMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${IrrawaddyDolphin})`}}></div>
                      </image>
                      <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Roland Seitre</label></div>

                      <label className = {this.state.darkMode ? "aquaticName-Dark" : "aquaticName"}>
                        {/* {this.state.endangeredAquaticItems.length > 0 && (<div> {this.state.endangeredAquaticItems[9].name} </div>)} */}
                        Irrawaddy Dolphin
                      </label>
                    </box>
                  </box>
              </box>
              
              <box className = "speciesCardContainer">
                  <image className= 'aquaticLargeImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${hectorsDolphins})`}}></div>
                  </image>

                  <label className = {this.state.darkMode ? "aquaticName-Dark" : "aquaticName"}>
                    {/* {this.state.endangeredAquaticItems.length > 0 && (<div> {this.state.endangeredAquaticItems[6].name} </div>)} */}
                    Hectors Dolphins
                  </label>
              </box>

              <box className = "mediumSpeciesImgFrame">
                  <box className = "containerx">
                      <image className='aquaticMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${vaquita})`}}></div>
                      </image>
                      <label className = {this.state.darkMode ? "aquaticName-Dark" : "aquaticName"}>
                        {/* {this.state.endangeredAquaticItems.length > 0 && (<div> {this.state.endangeredAquaticItems[5].name} </div>)} */}
                        Vaquita
                      </label>
                  </box>

                  <box className = "containerx">
                    <box className = "speciesCardContainer">
                      <image className='aquaticMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${yangtzeFinless})`}}></div>
                      </image>
                      <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Kent Truog/WWF</label></div>

                      <label className = {this.state.darkMode ? "aquaticName-Dark" : "aquaticName"}>
                        {/* {this.state.endangeredAquaticItems.length > 0 && (<div> {this.state.endangeredAquaticItems[7].name} </div>)} */}
                        Yangtze Finless
                      </label>
                    </box>
                  </box>
              </box>
            </box>
          </div>


{/* ///////// V I D E O ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
<div className= {this.state.darkMode ? "video-Dark" : "video"}>
  <line className="thinLine"></line>
    <paragragraph className="video-Discription">A video about the Amazon river dolphins.</paragragraph>
    <ReactPlayer className='videoFrame' controls={true} url="https://www.youtube.com/watch?v=Yty9Zf8ie2g" height="450px" width="800px"/>
  <line className="thinLine"></line>
</div> 
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}  


          <div className='container'>
            <box className = "box4">
              <box className = "mediumSpeciesImgFrame">
                  <box className = "MedBox">
                      <image className='aquaticMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${greatWhiteShark})`}}></div>
                      </image>
                      <label className = {this.state.darkMode ? "aquaticName-Dark" : "aquaticName"}>
                        {/* {this.state.endangeredAquaticItems.length > 0 && (<div> {this.state.endangeredAquaticItems[11].name} </div>)} */}
                        Great White Shark
                      </label>
                  </box>

                  <box className = "MedBox">
                    <box className = "speciesCardContainer">
                      <image className='aquaticMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${hammerhead})`}}></div>
                      </image>
                      <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Kent Kris Mikael Krister</label></div>

                      <label className = {this.state.darkMode ? "aquaticName-Dark" : "aquaticName"}>
                        {/* {this.state.endangeredAquaticItems.length > 0 && (<div> {this.state.endangeredAquaticItems[13].name} </div>)} */}
                        Hammerhead
                      </label>
                    </box>
                  </box>
              </box>
              
              <box className = "largeSpeciesImgFrame">
                  <image className= 'aquaticLargeImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${whaleShark})`}}></div>
                  </image>
                  <label className = {this.state.darkMode ? "aquaticName-Dark" : "aquaticName"}>
                    {/* {this.state.endangeredAquaticItems.length > 0 && (<div> {this.state.endangeredAquaticItems[10].name} </div>)} */}
                    Whale Shark
                  </label>
              </box>

              <box className = "mediumSpeciesImgFrame">
                  <box className = "MedBox">
                    <box className = "speciesCardContainer">
                      <image className='aquaticMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${oceanicWhitetip})`}}></div>
                      </image>
                      <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Kent Andy Cornish</label></div>

                      <label className = {this.state.darkMode ? "aquaticName-Dark" : "aquaticName"}>
                        {/* {this.state.endangeredAquaticItems.length > 0 && (<div> {this.state.endangeredAquaticItems[12].name} </div>)} */}
                        Oceanic Whitetip
                      </label>
                    </box>
                  </box>

                  <box className = "MedBox">
                      <image className='aquaticMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${sandTiger})`}}></div>
                      </image>
                      <label className = {this.state.darkMode ? "aquaticName-Dark" : "aquaticName"}>
                        {/* {this.state.endangeredAquaticItems.length > 0 && (<div> {this.state.endangeredAquaticItems[14].name} </div>)} */}
                        Sand Tiger
                      </label>
                  </box>
              </box>
            </box>
          </div>

        


          <div className='container'>
            <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
              <div>
                <b>Helps climate change:</b>
                <br></br>
                <br></br>
                Ocean species are vital for human being because it balances earth temperature and as they obsorve Co2 from the atmosphere and traps/absorve the earth heat under water, reducing earth temperature.
                The Ocean is a house for many tiny plant-like organisms and they provides 50-85% of our planet Oxygen and therefore, we must protect the marine species at all cost.
              </div>
            </paragragraph>
            <AquaticPara2Voice/>

            <box className = "box4">
              <box className = "mediumSpeciesImgFrame">
                  <box className = "MedBox">
                      <image className='aquaticMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${greenTurtle})`}}></div>
                      </image>
                      <label className = {this.state.darkMode ? "aquaticName-Dark" : "aquaticName2"}>
                        {/* {this.state.endangeredAquaticItems.length > 0 && (<div> {this.state.endangeredAquaticItems[3].name} </div>)} */}
                        Green Turtle
                      </label>
                  </box>

                  <box className = "MedBox">
                      <image className='aquaticMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${hawkbillTurtles})`}}></div>
                      </image>
                      <label className = {this.state.darkMode ? "aquaticName-Dark" : "aquaticName2"}>
                        {/* {this.state.endangeredAquaticItems.length > 0 && (<div> {this.state.endangeredAquaticItems[0].name} </div>)} */}
                        Hawkbill Turtles
                      </label>
                  </box>
              </box>
              
              <box className = "largeSpeciesImgFrame">
                  <image className= 'aquaticLargeImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${loggerheadTurtle})`}}></div>
                  </image>
                  <label className = {this.state.darkMode ? "aquaticName-Dark" : "aquaticName2"}>
                    {/* {this.state.endangeredAquaticItems.length > 0 && (<div> {this.state.endangeredAquaticItems[1].name} </div>)} */}
                    loggerhead Turtle
                  </label>
              </box>

              <box className = "mediumSpeciesImgFrame">
                  <box className = "MedBox">
                   <box className = "speciesCardContainer">
                      <image className='aquaticMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${leatherBack})`}}></div>
                      </image>
                      <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Jürgen Freund/WWF</label></div>

                      <label className = {this.state.darkMode ? "aquaticName-Dark" : "aquaticName2"}>
                        {/* {this.state.endangeredAquaticItems.length > 0 && (<div> {this.state.endangeredAquaticItems[2].name} </div>)} */}
                        leatherBack
                      </label>
                    </box>
                  </box>

                  <box className = "MedBox">
                    <box className = "speciesCardContainer">
                      <image className='aquaticMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${oliveRidley})`}}></div>
                      </image>
                      <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Jason Isley</label></div>

                      <label className = {this.state.darkMode ? "aquaticName-Dark" : "aquaticName2"}>
                        {/* {this.state.endangeredAquaticItems.length > 0 && (<div> {this.state.endangeredAquaticItems[4].name} </div>)} */}
                        Olive Ridley
                      </label>
                    </box>
                  </box>
              </box>
            </box>
          </div>


{/* ///////// V I D E O ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
<div className= {this.state.darkMode ? "video-Dark" : "video"}>
  <line className="thinLine"></line>
    <paragragraph className="video-Discription">A video about the Whale Sharks.</paragragraph>
    <ReactPlayer className='videoFrame' controls={true} url="https://www.youtube.com/watch?v=E9tpPWK7sag" height="450px" width="800px"/>
  <line className="thinLine"></line>
</div> 
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

          <div className='container'>
            <box className = "box4">
              <box className = "mediumSpeciesImgFrame">
                  <box className = "MedBox">
                    <box className = "speciesCardContainer">
                      <image className='aquaticMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${bowheadWhale})`}}></div>
                      </image>
                      <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by WWF Canada</label></div>

                      <label className = {this.state.darkMode ? "aquaticName-Dark" : "aquaticName"}>
                        {/* {this.state.endangeredAquaticItems.length > 0 && (<div> {this.state.endangeredAquaticItems[16].name} </div>)} */}
                        Bowhead Whale
                      </label>
                    </box>
                  </box>

                  <box className = "MedBox">
                    <box className = "speciesCardContainer">
                      <image className='aquaticMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${finWhale})`}}></div>
                      </image>
                      <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Christin Khan</label></div>

                      <label className = {this.state.darkMode ? "aquaticName-Dark" : "aquaticName"}>
                        {/* {this.state.endangeredAquaticItems.length > 0 && (<div> {this.state.endangeredAquaticItems[17].name} </div>)} */}
                        Fin Whale
                      </label>
                    </box>
                  </box>
              </box>
              
              <box className = "largeSpeciesImgFrame">
                  <image className= 'aquaticLargeImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${blueWhale})`}}></div>
                  </image>
                  <label className = {this.state.darkMode ? "aquaticName-Dark" : "aquaticName"}>
                    {/* {this.state.endangeredAquaticItems.length > 0 && (<div> {this.state.endangeredAquaticItems[19].name} </div>)} */}
                    Blue Whale
                  </label>
              </box>

              <box className = "mediumSpeciesImgFrame">
                  <box className = "MedBox">
                    <box className = "speciesCardContainer">
                      <image className='aquaticMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${greyWhale})`}}></div>
                      </image>
                      <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Robert Harding</label></div>
                        
                      <label className = {this.state.darkMode ? "aquaticName-Dark" : "aquaticName"}>
                        {/* {this.state.endangeredAquaticItems.length > 0 && (<div> {this.state.endangeredAquaticItems[15].name} </div>)} */}
                        Grey Whale
                      </label>
                    </box>
                  </box>

                  <box className = "MedBox">
                    <box className = "speciesCardContainer">
                      <image className='aquaticMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${seiWhale})`}}></div>
                      </image>
                      <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Doug Perrine/WWF</label></div>

                      <label className = {this.state.darkMode ? "aquaticName-Dark" : "aquaticName"}>
                        {/* {this.state.endangeredAquaticItems.length > 0 && (<div> {this.state.endangeredAquaticItems[18].name} </div>)} */}
                        Sei Whale
                      </label>
                    </box>
                  </box>
              </box>
            </box>
          </div>



          <div className='container'>
            <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
              <div>
                <b>Provides Medicine:</b>
                <br></br>
                <br></br>
                Did you know that the ocean species provides medicine to treat cancer, arthritis, Alzheimer's deisease, and heart disease.
                For example, the antiviral drugs Ara-A and AZT and the anticancer agent Ara-C, were developed from extracts of sponges found on a Caribbean reef.
                Even now the NOAA scientists have been collecting and researching on sponges, corals, and other marine organisms to create new medicines.
                For example, horseshoe crabs, seaweeds and marine bacteria have also been found to have useful medical properties.
              </div>
            </paragragraph>
            <AquaticPara3Voice/>

            <box className = "box4">
              <box className = "mediumSpeciesImgFrame">
                  <box className = "MedBox">
                      <image className='aquaticMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${hoodedSeal})`}}></div>
                      </image>
                      <label className = {this.state.darkMode ? "aquaticName-Dark" : "aquaticName2"}>
                        {/* {this.state.endangeredAquaticItems.length > 0 && (<div> {this.state.endangeredAquaticItems[31].name} </div>)} */}
                        Hooded Seal
                      </label>
                  </box>

                  <box className = "MedBox">
                      <image className='aquaticMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${marineLguana})`}}></div>
                      </image>
                      <label className = {this.state.darkMode ? "aquaticName-Dark" : "aquaticName2"}>
                        {/* {this.state.endangeredAquaticItems.length > 0 && (<div> {this.state.endangeredAquaticItems[33].name} </div>)} */}
                        Marine Iguana
                      </label>
                  </box>
              </box>
              
              <box className = "largeSpeciesImgFrame">
                <box className = "speciesCardContainer">
                  <image className= 'aquaticLargeImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${galapagosPenguin})`}}></div>
                  </image>
                  <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Michael O'Brie</label></div>

                  <label className = {this.state.darkMode ? "aquaticName-Dark" : "aquaticName2"}>
                    {/* {this.state.endangeredAquaticItems.length > 0 && (<div> {this.state.endangeredAquaticItems[32].name} </div>)} */}
                    Galapagos Penguin
                  </label>
                </box>
              </box>

              <box className = "mediumSpeciesImgFrame">
                  <box className = "MedBox">
                      <image className='aquaticMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${hawaiianMonkSeal})`}}></div>
                      </image>
                      <label className = {this.state.darkMode ? "aquaticName-Dark" : "aquaticName2"}>
                        {/* {this.state.endangeredAquaticItems.length > 0 && (<div> {this.state.endangeredAquaticItems[28].name} </div>)} */}
                        Hawaiian MonkSeal
                      </label>
                  </box>

                  <box className = "MedBox">
                      <image className='aquaticMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${dugong})`}}></div>
                      </image>
                      <label className = {this.state.darkMode ? "aquaticName-Dark" : "aquaticName2"}>
                        {/* {this.state.endangeredAquaticItems.length > 0 && (<div> {this.state.endangeredAquaticItems[30].name} </div>)} */}
                        Dugong
                      </label>
                  </box>
              </box>
            </box>
          </div>


{/* ///////// V I D E O ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}   
<div className= {this.state.darkMode ? "video-Dark" : "video"}>
  <line className="thinLine"></line>
    <paragragraph className="video-Discription">A video about Sea Turtles.</paragragraph>
    <ReactPlayer className='videoFrame' controls={true} url="https://www.youtube.com/watch?v=5Rmv3nliwCs" height="450px" width="800px"/>
  <line className="thinLine"></line>
</div> 
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}         

          <div className='container'>
            <box className = "box4">
              <box className = "mediumSpeciesImgFrame">
                  <box className = "MedBox">
                    <box className = "speciesCardContainer">
                      <image className='aquaticMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${atlanticSalmon})`}}></div>
                      </image>
                      <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Noaa</label></div>

                      <label className = {this.state.darkMode ? "aquaticName-Dark" : "aquaticName"}>
                        {/* {this.state.endangeredAquaticItems.length > 0 && (<div> {this.state.endangeredAquaticItems[20].name} </div>)} */}
                        Atlantic Salmon
                      </label>
                    </box>
                  </box>

                  <box className = "MedBox">
                      <image className='aquaticMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${blueFinTuna})`}}></div>
                      </image>
                      <label className = {this.state.darkMode ? "aquaticName-Dark" : "aquaticName"}>
                        {/* {this.state.endangeredAquaticItems.length > 0 && (<div> {this.state.endangeredAquaticItems[21].name} </div>)} */}
                        Blue Fin Tuna
                      </label>
                  </box>
              </box>
              
              <box className = "largeSpeciesImgFrame">
                <box className = "speciesCardContainer">
                  <image className= 'aquaticLargeImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${manatees})`}}></div>
                  </image>
                  <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by 33karen33/Gettyimage</label></div>

                  <label className = {this.state.darkMode ? "aquaticName-Dark" : "aquaticName"}>
                    {/* {this.state.endangeredAquaticItems.length > 0 && (<div> {this.state.endangeredAquaticItems[29].name} </div>)} */}
                    Manatees
                  </label>
                </box>
              </box>

              <box className = "mediumSpeciesImgFrame">
                  <box className = "MedBox">
                      <image className='aquaticMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${sturgeon})`}}></div>
                      </image>
                      <label className = {this.state.darkMode ? "aquaticName-Dark" : "aquaticName"}>
                        {/* {this.state.endangeredAquaticItems.length > 0 && (<div> {this.state.endangeredAquaticItems[23].name} </div>)} */}
                        Sturgeon
                      </label>
                  </box>

                  <box className = "MedBox">
                      <image className='aquaticMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${europeanEel})`}}></div>
                      </image>
                      <label className = {this.state.darkMode ? "aquaticName-Dark" : "aquaticName"}>
                        {/* {this.state.endangeredAquaticItems.length > 0 && (<div> {this.state.endangeredAquaticItems[24].name} </div>)} */}
                        European Eel
                      </label>
                  </box>
              </box>
            </box>
          </div>




          <div className='container'>
            <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
              <div>
                <b>Provides foods and ingredients:</b>
                <br></br>
                <br></br>
                Today, marine animals are the main source of protein for billions of people worldwide, and this demand is expected to increase even more.
                Not only sea food but ocean also provides many different ingredients that are used on our foods like soyamilk and peanutbutter.
              </div>
            </paragragraph>
            <AquaticPara4Voice/>
            
            <box className = "box4">
              <box className = "mediumSpeciesImgFrame">
                  <box className = "MedBox">
                      <image className='aquaticMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${caribbeanElectricRay})`}}></div>
                      </image>
                      <label className = {this.state.darkMode ? "aquaticName-Dark" : "aquaticName2"}>
                        {/* {this.state.endangeredAquaticItems.length > 0 && (<div> {this.state.endangeredAquaticItems[25].name} </div>)} */}
                        Caribbean Electric Ray
                      </label>
                  </box>

                  <box className = "MedBox">
                    <box className = "speciesCardContainer">
                      <image className='aquaticMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${giantDevilRay})`}}></div>
                      </image>
                      <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Patrik Neckman</label></div>

                      <label className = {this.state.darkMode ? "aquaticName-Dark" : "aquaticName2"}>
                        {/* {this.state.endangeredAquaticItems.length > 0 && (<div> {this.state.endangeredAquaticItems[26].name} </div>)} */}
                        Giant Devil Ray
                      </label>
                    </box>
                  </box>
              </box>
              
              <box className = "largeSpeciesImgFrame">
                  <image className= 'aquaticLargeImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${seaOtter})`}}></div>
                  </image>
                  <label className = {this.state.darkMode ? "aquaticName-Dark" : "aquaticName2"}>
                    {/* {this.state.endangeredAquaticItems.length > 0 && (<div> {this.state.endangeredAquaticItems[34].name} </div>)} */}
                    Sea Otter
                  </label>
              </box>

              <box className = "mediumSpeciesImgFrame">
                  <box className = "MedBox">
                    <box className = "speciesCardContainer">
                      <image className='aquaticMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${humpheadWarasse})`}}></div>
                      </image>
                      <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Hakai Magazine</label></div>

                      <label className = {this.state.darkMode ? "aquaticName-Dark" : "aquaticName2"}>
                        {/* {this.state.endangeredAquaticItems.length > 0 && (<div> {this.state.endangeredAquaticItems[22].name} </div>)} */}
                        Humphead Warasse
                      </label>
                    </box>
                  </box>

                  <box className = "MedBox">
                      <image className='aquaticMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${stellarSeaLion})`}}></div>
                      </image>
                      <label className = {this.state.darkMode ? "aquaticName-Dark" : "aquaticName2"}>
                        {/* {this.state.endangeredAquaticItems.length > 0 && (<div> {this.state.endangeredAquaticItems[27].name} </div>)} */}
                        Stellar Sea Lion
                      </label>
                  </box>
              </box>
            </box>
          </div>


{/* ///////// V I D E O ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
<div className= {this.state.darkMode ? "video-Dark" : "video"}>
  <line className="thinLine"></line>
    <paragragraph className="video-Discription">A video of Giant Manta Ray.</paragragraph>
    <ReactPlayer className='videoFrame' controls={true} url="https://www.youtube.com/watch?v=dCfBQfBiovA" height="450px" width="800px"/>
    <line className="thinLine"></line>
</div> 
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


          <div className='container'>
            <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
              <div>
                <b>Provides Jobs & Economy:</b>
                <br></br>
                <br></br>
                It is estimated that Fisheries and aquaculture currently employs aound 56 million people. 
                In addition, more people are employed in following activities, like handling, processing and distribution of sea foods. 
                The ocean provides healthy economy to many countries, especially, to developing countries, 
                which is home to more than 3 billion people who rely on the sea to support their livelihoods and families.
              </div>
            </paragragraph>
            <AquaticPara5Voice/>
          </div>

        </body>
        <AquaticPageSuvNav/>
      </div>
    );
  }
}