import React from 'react';
import { Component } from "react";
import ReactPlayer from 'react-player';

import '../pages/publicMain.css';
import './birds.css';


import {BirdsSideBarPageNav} from "../sideBarPagesNav/EnBirdsSideBarPageNav";

import {BirdsPageSuvNav} from "../subNav/subNavigation";
import headerBirds from '../images/headerBirds.png';

//BIG BIRDS
import greatCurassow from '../images/endBirds/bigBirds/greatCurassow.png';
import bengalFlorican from '../images/endBirds/bigBirds/bengalFlorican.png';
import californiaCondor from '../images/endBirds/bigBirds/californiaCondor.png';
import giantIbis from '../images/endBirds/bigBirds/giantIbis.png';
import whoopingCrane from '../images/endBirds/bigBirds/whoopingCrane.png';

//BIRDS
import frigatebird from '../images/endBirds/birds/frigatebird.png';
import fruitDove from '../images/endBirds/birds/fruitDove.png';
import greyParrot from '../images/endBirds/birds/greyParrot.png';
import kagu from '../images/endBirds/birds/kagu.png';
import puffin from '../images/endBirds/birds/puffin.png';

//EAGLES
import baldEagle from '../images/endBirds/eagles/baldEagle.png';
import peregrineFalcon from '../images/endBirds/eagles/peregrineFalcon.png';
import philippineEagle from '../images/endBirds/eagles/philippineEagle.png';
import whitetailedEagle from '../images/endBirds/eagles/whitetailedEagle.png';
import whiteBackedVultures from '../images/endBirds/eagles/whiteBackedVultures.png';

//EXOTIC
import hornbill from '../images/endBirds/exotic/hornbill.png';
import hyacinthMacaw from '../images/endBirds/exotic/hyacinthMacaw.png';
import kakapo from '../images/endBirds/exotic/kakapo.png';
import resplendentQuetzal from '../images/endBirds/exotic/resplendentQuetzal.png';
import toucan from '../images/endBirds/exotic/toucan.png';

//OWL
import barnOwl from '../images/endBirds/owl/barnOwl.png';
import caledonianOwletNightjar from '../images/endBirds/owl/caledonianOwletNightjar.png';
import forestOwlet from '../images/endBirds/owl/forestOwlet.png';
import snowyOwl from '../images/endBirds/owl/snowyOwl.png';
import spottedOwl from '../images/endBirds/owl/spottedOwl.png';

import FontSizeIncreaser from '../readAccessibilityGuideFunctions/fontSizeIncrease';
import DarkModeFunction from '../darkMode/darkMode';
// import config from '../config';


//Text To Voices
import {BirdsPara1Voice} from "../textToVoice/endBirdsPageVoice";
import {BirdsPara2Voice} from "../textToVoice/endBirdsPageVoice";
import {BirdsPara3Voice} from "../textToVoice/endBirdsPageVoice";
import {BirdsPara4Voice} from "../textToVoice/endBirdsPageVoice";



export class Birds extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        darkMode: false,
        fontSize: 18,
        // endangeredBirdsItems: [],
      };
    }

    
    // componentDidMount(){
    //     fetch(config.backendUrl + "api/birdSpecies")
    //     .then (rest => rest.json())
    //     .then (endangeredBirdsRecords => {
    //     this.setState({
    //         isLoaded: true,
    //         endangeredBirdsItems: endangeredBirdsRecords,
    //       })
    //     console.log(endangeredBirdsRecords)
    //     });
    // }
  
    render(){

        return( 
            <div className={this.state.darkMode ? "pageMainFrameDark" : "pageMainFrameLight"}>

{/* //////////////////////////////////////////////////////FontSizeFunction////////////////////////////////////////////////////// */}
            <FontSizeIncreaser fontSize={this.state.fontSize} setFontSize={(size) => this.setState({ fontSize: size })} />
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <div className='overflowHidden'>
                    <box className = "landingImageBox2" style={{ backgroundImage: `url(${headerBirds})`}}></box>
                </div>
{/* //////////////////////////////////////////////////////DarkModeFunction////////////////////////////////////////////////////// */}
                <DarkModeFunction darkMode={this.state.darkMode} setDarkmode={(darkMode) => this.setState({darkMode})} />
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                <body className='pageBodyFrame'>
                    <BirdsSideBarPageNav/>

                    <div className = "mainSubHeadFrame">
                        <subhead className = {this.state.darkMode ? "subheadLrgDrk" : "subheadLrg"}>Some of the Endangered Birds Species</subhead>
                    </div>

                    <div className='container'>
                        <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                            The IUCN states that 13% of birds are endangered with extinction.
                            You may not know but the bird species are one of the most important animals to the environment.
                            Birds plays important role in the functioning of the worlds ecosystem, which can directly impact human health, 
                            food production and the economy as well as millions of other species.
                        </paragragraph>
                        <BirdsPara1Voice/>
                        {/* https://www.birdlife.org/news/2019/01/04/why-we-need-birds-far-more-than-they-need-us/# */}

                        <box className = "box4">
                            <box className = "largeSpeciesImgFrame">
                                <box className = "speciesCardContainer">
                                    <image className= 'birdLargeImage'>
                                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${greatCurassow})`}}></div>
                                    </image>
                                    <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Ondrej Prosický</label></div>

                                    <label className={this.state.darkMode ? "birdName-Dark" : "birdName"}>
                                        {/* {this.state.endangeredBirdsItems.length > 0 && (
                                            <div>
                                                {this.state.endangeredBirdsItems[3].name}
                                            </div>
                                        )} */} 
                                        Great Curassow
                                    </label>
                                </box>
                            </box>

                            <box className = "mediumSpeciesImgFrame">
                                <box className = "amphibianSpeciesMainFrame">
                                    <box className = "speciesCardContainer">
                                        <image className='birdMediumImage'>
                                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${bengalFlorican})`}}></div>
                                        </image>
                                        <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Nikita Khamparia</label></div>

                                        <label className={this.state.darkMode ? "birdName-Dark" : "birdName"}>
                                            {/* {this.state.endangeredBirdsItems.length > 0 && (
                                                <div>
                                                    {this.state.endangeredBirdsItems[2].name}
                                                </div>
                                            )} */}
                                            Bengal Florican
                                        </label>
                                    </box>
                                </box>

                                <box className = "amphibianSpeciesMainFrame">
                                    <box className = "speciesCardContainer">
                                        <image className='birdMediumImage'>
                                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${californiaCondor})`}}></div>
                                        </image>
                                        <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Ken Bohn</label></div>

                                        <label className={this.state.darkMode ? "birdName-Dark" : "birdName"}>
                                            {/* {this.state.endangeredBirdsItems.length > 0 && (
                                                <div>
                                                    {this.state.endangeredBirdsItems[1].name}
                                                </div>
                                            )} */}
                                            California Condor
                                        </label>
                                    </box>
                                </box>
                            </box>

                            <box className = "mediumSpeciesImgFrame">
                                <box className = "amphibianSpeciesMainFrame">
                                    <image className='birdMediumImage'>
                                    <   div className='extinctSpeciesImage' style={{ backgroundImage: `url(${giantIbis})`}}></div>
                                    </image>
                                    <label className={this.state.darkMode ? "birdName-Dark" : "birdName"}>
                                        {/* {this.state.endangeredBirdsItems.length > 0 && (
                                            <div>
                                                {this.state.endangeredBirdsItems[0].name}
                                            </div>
                                        )} */}
                                        Giant Ibis
                                    </label>
                                </box>

                                <box className = "amphibianSpeciesMainFrame">
                                    <box className = "speciesCardContainer">
                                        <image className='birdMediumImage'>
                                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${whoopingCrane})`}}></div>
                                        </image>
                                        <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Derek Hameister</label></div>

                                        <label className={this.state.darkMode ? "birdName-Dark" : "birdName"}>
                                            {/* {this.state.endangeredBirdsItems.length > 0 && (
                                                <div>
                                                    {this.state.endangeredBirdsItems[4].name}
                                                </div>
                                            )} */}
                                            Whooping Crane
                                        </label>
                                    </box>
                                </box>
                            </box>
                        </box>
                    </div>


{/* ///////// V I D E O ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}            
<div className= {this.state.darkMode ? "video-Dark" : "video"}>
    <line className = "thinLine"></line>
        <paragragraph className="video-Discription">A video of Hornbill Hunting.</paragragraph>
        <ReactPlayer className='videoFrame' controls={true} url="https://www.youtube.com/watch?v=GAe_04vmNRQ" height="450px" width="800px"/>
    <line className="thinLine"></line>
</div> 
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}           

                
                    <div className='container'>
                        <box className = "box4">
                            <box className = "largeSpeciesImgFrame">
                                <box className = "speciesCardContainer">
                                    <image className= 'birdLargeImage'>
                                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${kagu})`}}></div>
                                    </image>
                                    <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Dave Irving</label></div>

                                    <label className={this.state.darkMode ? "birdName-Dark" : "birdName2"}>
                                        {/* {this.state.endangeredBirdsItems.length > 0 && (
                                            <div>
                                                {this.state.endangeredBirdsItems[10].name}
                                            </div>
                                        )} */}
                                        Kagu
                                    </label>
                                </box>
                            </box>

                            <box className = "mediumSpeciesImgFrame">
                                <box className = "amphibianSpeciesMainFrame">
                                    <box className = "speciesCardContainer">
                                        <image className='birdMediumImage'>
                                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${frigatebird})`}}></div>
                                        </image>
                                        <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Peter Cavanagh</label></div>

                                        <label className={this.state.darkMode ? "birdName-Dark" : "birdName2"}>
                                            {/* {this.state.endangeredBirdsItems.length > 0 && (
                                                <div>
                                                    {this.state.endangeredBirdsItems[11].name}
                                                </div>
                                            )} */}
                                            Frigate Bird
                                        </label>
                                    </box>
                                </box>

                                <box className = "amphibianSpeciesMainFrame">
                                    <box className = "speciesCardContainer">
                                        <image className='birdMediumImage'>
                                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${fruitDove})`}}></div>
                                        </image>
                                        <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Mat Gilfedder</label></div>

                                        <label className={this.state.darkMode ? "birdName-Dark" : "birdName2"}>
                                            {/* {this.state.endangeredBirdsItems.length > 0 && (
                                                <div>
                                                    {this.state.endangeredBirdsItems[13].name}
                                                </div>
                                            )} */}
                                            Fruit Dove
                                        </label>
                                    </box>
                                </box>
                            </box>

                            <box className = "mediumSpeciesImgFrame">
                                <box className = "amphibianSpeciesMainFrame">
                                    <box className = "speciesCardContainer">
                                        <image className='birdMediumImage'>
                                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${greyParrot})`}}></div>
                                        </image>
                                        <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by World Animal Protection</label></div>

                                        <label className={this.state.darkMode ? "birdName-Dark" : "birdName2"}>
                                            {/* {this.state.endangeredBirdsItems.length > 0 && (
                                                <div>
                                                    {this.state.endangeredBirdsItems[14].name}
                                                </div>
                                            )} */}
                                            Grey Parrot
                                        </label>
                                    </box>
                                </box>

                                <box className = "amphibianSpeciesMainFrame">
                                    <image className='birdMediumImage'>
                                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${puffin})`}}></div>
                                    </image>
                                    <label className={this.state.darkMode ? "birdName-Dark" : "birdName2"}>
                                        {/* {this.state.endangeredBirdsItems.length > 0 && (
                                            <div>
                                                {this.state.endangeredBirdsItems[12].name}
                                            </div>
                                        )} */}
                                        Puffin
                                    </label>
                                </box>
                            </box>
                        </box>
                    </div>

               

                    <div className='container'>     
                        <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                            <div>
                                <b>Pests Control:</b>
                                <br></br>
                                <br></br>
                                One of the best natural pest controllers are birds as their diet mainly consists of bugs and insects.
                                This can be very benifical to agriculture around the world. Recent study shown that birds eats 400-500 million tons of insects per year.
                                In china, 2/3 of House Swift birds diet consists of agricultural pests.
                                In forests accross America, Evening Grosbeak are the main birds that controls Spruce Budworm outbrakes.
                            </div>
                        </paragragraph>
                        <BirdsPara2Voice/>

                        <box className = "box4">
                            <box className = "largeSpeciesImgFrame">
                                <image className= 'birdLargeImage'>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${baldEagle})`}}></div>
                                </image>
                                <label className={this.state.darkMode ? "birdName-Dark" : "birdName3"}>
                                    {/* {this.state.endangeredBirdsItems.length > 0 && (
                                        <div>
                                            {this.state.endangeredBirdsItems[17].name}
                                        </div>
                                    )} */}
                                    Bald Eagle (Not)
                                </label>
                            </box>

                            <box className = "mediumSpeciesImgFrame">
                                <box className = "amphibianSpeciesMainFrame">
                                    <image className='birdMediumImage'>
                                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${peregrineFalcon})`}}></div>
                                    </image>
                                    <label className={this.state.darkMode ? "birdName-Dark" : "birdName3"}>
                                        {/* {this.state.endangeredBirdsItems.length > 0 && (
                                            <div>
                                                {this.state.endangeredBirdsItems[16].name}
                                            </div>
                                        )} */}
                                        Peregrine Falcon
                                    </label>
                                </box>

                                <box className = "amphibianSpeciesMainFrame">
                                    <box className = "speciesCardContainer">
                                        <image className='birdMediumImage'>
                                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${philippineEagle})`}}></div>
                                        </image>
                                        <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Alain Pascua</label></div>

                                        <label className={this.state.darkMode ? "birdName-Dark" : "birdName3"}>
                                            {/* {this.state.endangeredBirdsItems.length > 0 && (
                                                <div>
                                                    {this.state.endangeredBirdsItems[15].name}
                                                </div>
                                            )} */}
                                            Philippine Eagle
                                        </label>
                                    </box>
                                </box>
                            </box>

                            <box className = "mediumSpeciesImgFrame">
                                <box className = "amphibianSpeciesMainFrame">
                                    <image className='birdMediumImage'>
                                    <   div className='extinctSpeciesImage' style={{ backgroundImage: `url(${whiteBackedVultures})`}}></div>
                                    </image>
                                    <label className={this.state.darkMode ? "birdName-Dark" : "birdName3"}>
                                        {/* {this.state.endangeredBirdsItems.length > 0 && (
                                            <div>
                                                {this.state.endangeredBirdsItems[19].name}
                                            </div>
                                        )} */}                                        
                                        White Backed Vultures
                                    </label>
                                </box>

                                <box className = "amphibianSpeciesMainFrame">
                                    <image className='birdMediumImage'>
                                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${whitetailedEagle})`}}></div>
                                    </image>
                                    <label className={this.state.darkMode ? "birdName-Dark" : "birdName3"}>
                                        {/* {this.state.endangeredBirdsItems.length > 0 && (
                                            <div>
                                                {this.state.endangeredBirdsItems[18].name}
                                            </div>
                                        )} */}
                                        White Tailed Eagle (Not)
                                    </label>
                                </box>
                            </box>
                        </box>
                    </div>


{/* ///////// V I D E O ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}               
<div className= {this.state.darkMode ? "video-Dark" : "video"}>
    <line className="thinLine"></line>
        <paragragraph className="video-Discription">A video of Philippine Eagle.</paragragraph>
        <ReactPlayer className='videoFrame' controls={true} url="https://www.youtube.com/watch?v=-JP-zoBLyWE" height="450px" width="800px"/>
    <line className="thinLine"></line>
</div> 
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}              

 
                    <div className='container'>
                        <box className = "box4">
                            <box className = "largeSpeciesImgFrame">
                                <box className = "speciesCardContainer">
                                    <image className= 'birdLargeImage'>
                                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${resplendentQuetzal})`}}></div>
                                    </image>
                                    <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Shutterstock</label></div>

                                    <label className={this.state.darkMode ? "birdName-Dark" : "birdName4"}>
                                        {/* {this.state.endangeredBirdsItems.length > 0 && (
                                            <div>
                                                {this.state.endangeredBirdsItems[24].name}
                                            </div>
                                        )} */}
                                        Resplendent Quetzal
                                    </label>
                                </box>
                            </box>

                            <box className = "mediumSpeciesImgFrame">
                                <box className = "amphibianSpeciesMainFrame">
                                    <image className='birdMediumImage'>
                                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${hornbill})`}}></div>
                                    </image>
                                    <label className={this.state.darkMode ? "birdName-Dark" : "birdName4"}>
                                        {/* {this.state.endangeredBirdsItems.length > 0 && (
                                            <div>
                                                {this.state.endangeredBirdsItems[21].name}
                                            </div>
                                        )} */}
                                        Horn Bill
                                    </label>
                                </box>

                                <box className = "amphibianSpeciesMainFrame">
                                    <image className='birdMediumImage'>
                                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${hyacinthMacaw})`}}></div>
                                    </image>
                                    <label className={this.state.darkMode ? "birdName-Dark" : "birdName4"}>
                                        {/* {this.state.endangeredBirdsItems.length > 0 && (
                                            <div>
                                                {this.state.endangeredBirdsItems[22].name}
                                            </div>
                                        )} */}
                                        Hyacinth Macaw
                                    </label>
                                </box>
                            </box>

                            <box className = "mediumSpeciesImgFrame">
                                <box className = "amphibianSpeciesMainFrame">
                                    <box className = "speciesCardContainer">
                                        <image className='birdMediumImage'>
                                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${kakapo})`}}></div>
                                        </image>
                                        <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Megan Leslie</label></div>

                                        <label className={this.state.darkMode ? "birdName-Dark" : "birdName4"}>
                                            {/* {this.state.endangeredBirdsItems.length > 0 && (
                                                <div>
                                                    {this.state.endangeredBirdsItems[20].name}
                                                </div>
                                            )} */}
                                            Kakapo
                                        </label>
                                    </box>
                                </box>

                                <box className = "amphibianSpeciesMainFrame">
                                    <box className = "speciesCardContainer">
                                        <image className='birdMediumImage'>
                                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${toucan})`}}></div>
                                        </image>
                                        <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Gettyimage</label></div>

                                        <label className={this.state.darkMode ? "birdName-Dark" : "birdName4"}>
                                            {/* {this.state.endangeredBirdsItems.length > 0 && (
                                                <div>
                                                    {this.state.endangeredBirdsItems[23].name}
                                                </div>
                                            )} */}
                                            Toucans
                                        </label>
                                    </box>
                                </box>
                            </box>
                        </box>
                    </div>

           

                    <div className='container'>         
                        <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                            <div>
                                <b>Pollinators:</b>
                                <br></br>
                                <br></br>
                                Not only bees and butterflies, but birds are also great pollinators. For example, hummingbirds and honeyeaters birds makes big contribution, espically in high altitudes or hot climates area.
                                Quarter of Salivia species in South Africa are pollinated by birds. Not only plants but bird pollinators also benifit us directly.
                                Around 5% of plants that are used for medicines or foods are pollinated by birds.
                            </div>
                        </paragragraph>
                        <BirdsPara3Voice/>

                        <box className = "box4">
                            <box className = "largeSpeciesImgFrame">
                                <image className= 'birdLargeImage'>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${snowyOwl})`}}></div>
                                </image>
                                <label className={this.state.darkMode ? "birdName-Dark" : "birdName5"}>
                                    {/* {this.state.endangeredBirdsItems.length > 0 && (
                                        <div>
                                            {this.state.endangeredBirdsItems[8].name}
                                        </div>
                                    )} */}
                                    Snowy Owl
                                </label>
                            </box>

                            <box className = "mediumSpeciesImgFrame">
                                <box className = "amphibianSpeciesMainFrame">
                                    <box className = "speciesCardContainer">
                                        <image className='birdMediumImage'>
                                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${barnOwl})`}}></div>
                                        </image>
                                        <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Zahoor Salmi</label></div>

                                        <label className={this.state.darkMode ? "birdName-Dark" : "birdName5"}>
                                            {/* {this.state.endangeredBirdsItems.length > 0 && (
                                                <div>
                                                    {this.state.endangeredBirdsItems[9].name}
                                                </div>
                                            )} */}
                                            Barn Owl (Not)
                                        </label>
                                    </box>
                                </box>

                                <box className = "amphibianSpeciesMainFrame">
                                    <image className='birdMediumImage'>
                                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${caledonianOwletNightjar})`}}></div>
                                    </image>
                                    <label className={this.state.darkMode ? "birdName-Dark" : "birdName5"}>
                                        {/* {this.state.endangeredBirdsItems.length > 0 && (
                                            <div>
                                                {this.state.endangeredBirdsItems[5].name}
                                            </div>
                                        )} */}
                                        Caledonian Owlet-Nightjar
                                    </label>
                                </box>
                            </box>

                            <box className = "mediumSpeciesImgFrame">
                                <box className = "amphibianSpeciesMainFrame">
                                    <box className = "speciesCardContainer">
                                        <image className='birdMediumImage'>
                                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${forestOwlet})`}}></div>
                                        </image>
                                        <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Rahul Kumar</label></div>

                                        <label className={this.state.darkMode ? "birdName-Dark" : "birdName5"}>
                                            {/* {this.state.endangeredBirdsItems.length > 0 && (
                                                <div>
                                                    {this.state.endangeredBirdsItems[6].name}
                                                </div>
                                            )} */}
                                            Forest Owlet
                                        </label>
                                    </box>
                                </box>

                                <box className = "amphibianSpeciesMainFrame">
                                    <box className = "speciesCardContainer">
                                        <image className='birdMediumImage'>
                                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${spottedOwl})`}}></div>
                                        </image>
                                        <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Sylvia Hunt</label></div>

                                        <label className={this.state.darkMode ? "birdName-Dark" : "birdName5"}>
                                            {/* {this.state.endangeredBirdsItems.length > 0 && (
                                                <div>
                                                    {this.state.endangeredBirdsItems[7].name}
                                                </div>
                                            )} */}
                                            Spotted Owl
                                        </label>
                                    </box>
                                </box>
                            </box>
                        </box>
                    </div>


{/* ///////// V I D E O ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}  
<div className= {this.state.darkMode ? "video-Dark" : "video"}>
    <line className="thinLine"></line>
        <paragragraph className="video-Discription">A video of Snow Owl Hunting.</paragragraph>
        <ReactPlayer className='videoFrame' controls={true} url="https://www.youtube.com/watch?v=Uf5IQiLOQK0" height="450px" width="800px"/>
    <line className="thinLine"></line>
</div> 
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


                    <div className='container'> 
                        <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                            <div>
                                <b>Spread seeds, helps coral reef and cleans nature:</b>
                                <br></br>
                                <br></br>
                                Plants seed are one of the main food source for birds. When birds travel, they take the eaten seed with them and spreads them through their droppings.
                                Bringing plants back to perhaps destroyed ecosystem, and even carry plants acrross the ocean to new land.
                                Vultures are the best and most efficent scavengers that takes care of the dead animals, preventing the spread of diseases like rabies and tuberculosis.
                                Seabirds plays an important role in cycling nutrients and helping to fertilise marine ecosystems such as coral reefs.
                            </div> 
                        </paragragraph>
                        <BirdsPara4Voice/>
                    </div> 
                </body>
                <BirdsPageSuvNav/>
            </div>
        );
    }
}