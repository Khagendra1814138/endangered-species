import React from 'react';
import { Component } from "react";
import ReactPlayer from 'react-player';

import '../pages/publicMain.css';
import './mammels.css';

//SideBarPageNav
import {MammelsSideBarPageNav} from "../sideBarPagesNav/EnMammelsSideBarPageNav";

import {MammelsPageSuvNav} from "../subNav/subNavigation";


import {SmallMammelsCarousel} from "./mammelsCarousel";
import {LargeMammelsCarousel} from "./mammelsCarousel";
import {RhinosCarousel} from "./mammelsCarousel";
import {BigCatsCarousel} from "./mammelsCarousel";
import {PrimatesCarousel} from "./mammelsCarousel";

import headerMammels from '../images/headerMammels.png';

//Small Mammels
import fruitBat from '../images/endMammels/smallMammels/fruitBat.png';
import tasmanianDevil from '../images/endMammels/smallMammels/tasmanianDevil.png';

//large Mammels
import panda from '../images/endMammels/largeMammels/panda.png';
import redPanda from '../images/endMammels/largeMammels/redPanda.png';

//Rhinoceros
import javanRhino from '../images/endMammels/Rhino/javanRhino.png';
import sumatranRhino from '../images/endMammels/Rhino/sumatranRhino.png';

//Big Cats
import snowLeopard from '../images/endMammels/bigCats/snowLeopard.png';
import tiger from '../images/endMammels/bigCats/tiger.png';

//Primates
import gibbons from '../images/endMammels/primates/gibbons.png';
import spiderMonkey from '../images/endMammels/primates/spiderMonkey.png';

import FontSizeIncreaser from '../readAccessibilityGuideFunctions/fontSizeIncrease';
import DarkModeFunction from '../darkMode/darkMode';
// import config from '../config';


//Text To Voices
import {MammelsParagraph1Voice} from "../textToVoice/endMammelsPageVoice";
import {MammelsParagraph2Voice} from "../textToVoice/endMammelsPageVoice";
import {MammelsParagraph3Voice} from "../textToVoice/endMammelsPageVoice";
import {MammelsParagraph4Voice} from "../textToVoice/endMammelsPageVoice";
import {MammelsParagraph5Voice} from "../textToVoice/endMammelsPageVoice";
import {MammelsPrimateParagraphVoice} from "../textToVoice/endMammelsPageVoice";

export class Mammels extends Component {

  constructor(props) {
      super(props);
      this.state = {
      darkMode: false,
      fontSize: 18,
      // endangeredMammelsItems: [],
      };
  }
  
  // componentDidMount(){
  //     fetch(config.backendUrl + "api/mammelsSpecies")
  //     .then (rest => rest.json())
  //     .then (endangeredMammelsRecords => {
  //     this.setState({
  //         isLoaded: true,
  //         endangeredMammelsItems: endangeredMammelsRecords,
  //         })
  //     console.log(endangeredMammelsRecords)
  //     });
  // }
  
  render(){

    return( 
      <div className={this.state.darkMode ? "pageMainFrameDark" : "pageMainFrameLight"}>

{/* //////////////////////////////////////////////////////FontSizeFunction////////////////////////////////////////////////////// */}
<FontSizeIncreaser fontSize={this.state.fontSize} setFontSize={(size) => this.setState({ fontSize: size })} />
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
        <div className='overflowHidden'>
          <box className = "landingImageBox2" style={{ backgroundImage: `url(${headerMammels})`}}></box>
        </div>
{/* //////////////////////////////////////////////////////DarkModeFunction////////////////////////////////////////////////////// */}
<DarkModeFunction darkMode={this.state.darkMode} setDarkmode={(darkMode) => this.setState({darkMode})} />
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <body className='pageBodyFrame'>
          <MammelsSideBarPageNav/>

          <div className = "mainSubHeadFrame">
            <subhead className = {this.state.darkMode ? "subheadLrgDrk" : "subheadLrg"}>Endangered Mammels</subhead>
          </div>
          
          <div className='container'>
            <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
              The IUCN states that 26% of mammels are endangered and faces extinction soon if action are not taken.
              Animals like land mammels are important because they play crucial rule in the foodchain and losing one animal species can have disastrous impacts on the rest of the ecosystem.
              For example, tiger species population are decreasing recently and most times, tigers are an apex preditor and is at the top of the foodchain.
              When the top preditor dies off, the prey like deers will start to over populate. More herbivores mean fewer plants, fewer plants mean less food and oxygen for other species, and so on.
              {/* https://www.greenmatters.com/p/why-endangered-species-matter */}
            </paragragraph>
            <MammelsParagraph1Voice/>
          </div>

          <div className = "mainSubHeadFrame">
            <subhead className = {this.state.darkMode ? "subheadSmlDrk" : "subheadSml"}>S m a l l - M a m m e l s</subhead>
          </div>
            
          <div className='container'>
            <box className = "box">
              <box className = "mammelsImageFrame"> 
                <image className = {this.state.darkMode ? "mammelsSmallImage-Dark" : "smallMammelsImage"}>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${fruitBat})`}}></div>
                </image>
                <label className = {this.state.darkMode ? "mammelsName-Dark" : "smallMammelsName"}>
                  {/* {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[2].name} </div>)} */}
                  Fruit Bat
                </label>
              </box>

              <box className = "mammelsImageFrame"> 
                <image className = {this.state.darkMode ? "mammelsSmallImage-Dark" : "smallMammelsImage"}>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${tasmanianDevil})`}}></div>
                </image>
                <label className = {this.state.darkMode ? "mammelsName-Dark" : "smallMammelsName"}>
                  {/* {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[0].name} </div>)} */}
                  Tasmanian Devil
                </label>
              </box>
            </box>
          
            <SmallMammelsCarousel/>
            <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
              Small mammels like the endangered species above are also important for the ecosystem as they play their part on the foodchain as well.
              Sadly, even these small mammels are endangered and faces extinction... For example, there are 8 species of pangolin and all 8 species are listed as "critically endangered" by the IUCN.
              Pangolins are the most trafficked mammels around the world, and over the past decade, 
              more than million pangolins have been illegally taken from the wild to feed demand in China and Vietnam.
            </paragragraph>
            <MammelsParagraph2Voice/>
          </div> 


{/* ///////// V I D E O ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
<div className= {this.state.darkMode ? "video-Dark" : "video"}>
  <line className="thinLine"></line>
    <paragragraph className="video-Discription">A video about Pangolins.</paragragraph>
    <ReactPlayer className='videoFrame' controls={true} url="https://www.youtube.com/watch?v=DqC3ieJJlFM" height="450px" width="800px"/>
  <line className="thinLine"></line>
</div> 
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


          <div className = "mainSubHeadFrame">
            <subhead className = {this.state.darkMode ? "subheadSmlDrk" : "subheadSml"}>L a r g e - M a m m e l s</subhead>
          </div>


          <div className='container'>
            <box className = "box">
              <box className = "mammelsImageFrame">
                <image className = {this.state.darkMode ? "mammelsSmallImage-Dark" : "largeMammelsImage"}>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${panda})`}}></div>
                </image>
                <label className = {this.state.darkMode ? "mammelsName-Dark" : "largeMammelsName"}>
                  {/* {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[12].name} </div>)} */}
                  Panda
                </label>
              </box>

              <box className = "mammelsImageFrame"> 
                <image className = {this.state.darkMode ? "mammelsSmallImage-Dark" : "largeMammelsImage"}>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${redPanda})`}}></div>
                </image>
                <label className = {this.state.darkMode ? "mammelsName-Dark" : "largeMammelsName"}>
                  {/* {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[13].name} </div>)} */}
                  Red Panda
                </label>
              </box>
            </box>

            <LargeMammelsCarousel/>
            <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
              Even the largest mammels on our planet faces extinction if we dont help them. 
              There are two species of elephants and they are the African and the Asian elephants.
              The African elephant are normally larger and has bigger ears comparing to the Asian elephants.
              It is estimated that around 90% of African elephant have been wiped out in the past centuary.
              This is because they are hunted by poachers for their ivory.
              <br></br>
              <br></br>
              Similary, the Asian elephant have also lost huge population. It is estimated that past three generation, their population has declined by 50%.
              This is mainly due to their habitat distruction and human expansion, leading to change in their habitat and dangerous contact with human. 

              {/* https://www.wwf.org.uk/learn/fascinating-facts/elephants */}
            </paragragraph>
            <MammelsParagraph3Voice/>
          </div>



          <div className = "mainSubHeadFrame">
            <subhead className = {this.state.darkMode ? "subheadSmlDrk" : "subheadSml"}>R h i n o c e r o s</subhead>
          </div>


          <div className='container'>
            <box className = "box">
              <box className = "mammelsImageFrame">
                <image className = {this.state.darkMode ? "mammelsSmallImage-Dark" : "smallRhinoImage"}>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${javanRhino})`}}></div>
                </image>
                <label className = {this.state.darkMode ? "mammelsName-Dark" : "rhinoName"}>
                  {/* {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[10].name} </div>)} */}
                  Javan Rhino
                </label>
              </box>

             
              <box className = "speciesCardContainer">
                <image className = {this.state.darkMode ? "mammelsSmallImage-Dark" : "smallRhinoImage"}>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${sumatranRhino})`}}></div>
                </image>
                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Bill Konstant</label></div>

                <label className = {this.state.darkMode ? "mammelsName-Dark" : "rhinoName"}>
                  {/* {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[9].name} </div>)} */}
                  Sumatran Rhino
                </label>
              </box>
            </box>

            <RhinosCarousel/>
            <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
              There are 5 different species of Rhinoceros. Two African species, the white and the black Rhinoceros. And three Asian species, greater one-horned, Sumatran and Javan Rhinoceros.
              It is estimated that there are fewer than 70 Javan and 100 Sumatran rhinos left in the wild, meaning their populations are truly under threat of extinction.
              Similarly, to the Elephants the Rhinoceros threats are mainly illegal poachers hunting for their horn and their habitat distruction.
              Although the white and the great one-horned rhnio population increase, they are still vulnerable.
            </paragragraph>
            <MammelsParagraph4Voice/>
          </div>


{/* ///////// V I D E O ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
<div className= {this.state.darkMode ? "video-Dark" : "video"}>
  <line className="thinLine"></line>
    <paragragraph className="video-Discription">A video about two Northern White Rhino.</paragragraph>
    <ReactPlayer className='videoFrame' controls={true} url="https://www.youtube.com/watch?v=Q8eh58Z249o" height="450px" width="800px"/>
  <line className="thinLine"></line>
</div>
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


        <div className = "mainSubHeadFrame">
          <subhead className = {this.state.darkMode ? "subheadSmlDrk" : "subheadSml"}>B i g - C a t s</subhead>
        </div>

        <div className='container'>
          <box className = "box">
            <box className = "mammelsImageFrame">
              <image className = {this.state.darkMode ? "mammelsSmallImage-Dark" : "bigCatsImage"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${snowLeopard})`}}></div>
              </image>
              <label className = {this.state.darkMode ? "mammelsName-Dark" : "bigCatsName"}>
                {/* {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[19].name} </div>)} */}
                Snow Leopard
              </label>
            </box>

            <box className = "mammelsImageFrame"> 
              <image className = {this.state.darkMode ? "mammelsSmallImage-Dark" : "bigCatsImage"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${tiger})`}}></div>
              </image>
              <label className = {this.state.darkMode ? "mammelsName-Dark" : "bigCatsName"}>
                {/* {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[17].name} </div>)} */}
                Tiger (Most tiger species)
              </label>
            </box>
          </box>
          <BigCatsCarousel/>
      
          <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
            Most of the mammels species are in endangered because of their habitat losses due to deforestation, climate change and human growth.
            For large cat species, hunting for this skin and pelts and illegal wildlife trades are the main threats.
            Nearly every large cats species such as tigers, leopards, snow leopards, clouded leopards, jaguars, lynxs, and cheetahs are endangered.
            Amur leopards are listed as critically endangered and it is estimated that only about 100 individuals of them left in the wild and 180-200 live in captivity.
            There are less than 50 Balkan Lynx left and around 100 southern china tigers only in captivity.
            {/* https://www.wildcatfamily.com/wild-cat-lists/endangered-cat-species-list/ */}
          </paragragraph>
          <MammelsParagraph5Voice/>
        </div>
          

        <div className = "mainSubHeadFrame">
          <subhead className = {this.state.darkMode ? "subheadSmlDrk" : "subheadSml"}>P r i m a t e s</subhead>
        </div>


        <div className='container'>  
          <box className = "box">
            <box className = "mammelsImageFrame">
              <image className = {this.state.darkMode ? "mammelsSmallImage-Dark" : "primatesImage"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${spiderMonkey})`}}></div>
              </image>
              <label className = {this.state.darkMode ? "mammelsName-Dark" : "primatesName"}>
                {/* {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[25].name} </div>)} */}
                Spider Monkey
              </label>
            </box>

            <box className = "mammelsImageFrame"> 
              <image className = {this.state.darkMode ? "mammelsSmallImage-Dark" : "primatesImage"}> 
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${gibbons})`}}></div>
              </image>
              <label className = {this.state.darkMode ? "mammelsName-Dark" : "primatesName"}>
                {/* {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[27].name} </div>)} */}
                Gibbons
              </label>
            </box>
          </box>

          <PrimatesCarousel/>
          <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
            Primates, which are the third most diverse order of mammals, are under the highest level of threat of any larger group of mammals.
            Around 63% of the worlds primate species are currently threatened with extinction and 43% of all primates (298 species) are 
            listed Critically Endangered and Endangered based on the IUCN study.
            The main reasons for this it is due to the loss of their natural ecosystems. 
            Mostly, for commercial purposes, like oil palm, commercial logging,  soy plantations, livestock ranching, wood harvesting and fuelwood production.
            {/* https://www.lemurconservationnetwork.org/63-of-primates-species-are-endangered/ */}
          </paragragraph>
          <MammelsPrimateParagraphVoice/>
        </div>


{/* ///////// V I D E O ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
<div className= {this.state.darkMode ? "video-Dark" : "video"}>
  <line className="thinLine"></line>
    <paragragraph className="video-Discription">A video about Amur Leopard.</paragragraph>
    <ReactPlayer className='videoFrame' controls={true} url="https://www.youtube.com/watch?v=dXAmEDFFero" height="450px" width="800px"/>
  <line className="thinLine"></line>
</div> 
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


        </body>
        <MammelsPageSuvNav/>
      </div>
    );
  }
}