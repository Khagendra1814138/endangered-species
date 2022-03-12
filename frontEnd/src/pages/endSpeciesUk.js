import React from 'react';
import { Component } from "react";
import ReactPlayer from 'react-player';

import '../pages/publicMain.css';
import './endSpeciesUk.css';

import {UkPageSuvNav} from "../subNav/subNavigation";
import headerUk from '../images/headerUk.png';

//Reptiles
import adderViper from '../images/endSpeciesUk/reptiles/adderViper.png';
import grassSnake from '../images/endSpeciesUk/reptiles/grassSnake.png';
import sandLizard from '../images/endSpeciesUk/reptiles/sandLizard.png';
import smoothSnake from '../images/endSpeciesUk/reptiles/smoothSnake.png';

//Marine
import allisShad from '../images/endSpeciesUk/marine/allisShad.png';
import brownTrout from '../images/endSpeciesUk/marine/brownTrout.png';
import pollan from '../images/endSpeciesUk/marine/pollan.png';
import vendance from '../images/endSpeciesUk/marine/vendance.png';

//Amphibians
import greatCrestedNewt from '../images/endSpeciesUk/amphibians/greatCrestedNewt.png';
import netterJackFrog from '../images/endSpeciesUk/amphibians/netterJackFrog.png';
import northernPoolFrog from '../images/endSpeciesUk/amphibians/northernPoolFrog.png';
import palmateNewet from '../images/endSpeciesUk/amphibians/palmateNewet.png';

//Mammels
import europeanHedgehog from '../images/endSpeciesUk/mammels/europeanHedgehog.png';
import greyLongEaredBat from '../images/endSpeciesUk/mammels/greyLongEaredBat.png';
import redSquirrel from '../images/endSpeciesUk/mammels/redSquirrel.png';
import waterVole from '../images/endSpeciesUk/mammels/waterVole.png';
import wildCats from '../images/endSpeciesUk/mammels/wildCats.png';

//Birds
import cuckoos from '../images/endSpeciesUk/birds/cuckoos.png';
import songThrush from '../images/endSpeciesUk/birds/songThrush.png';
import starling from '../images/endSpeciesUk/birds/starling.png';
import turtleDove from '../images/endSpeciesUk/birds/turtleDove.png';
import westernCapercaillie from '../images/endSpeciesUk/birds/westernCapercaillie.png';

//Plants
import crestedCowWheat from '../images/endSpeciesUk/plants/crestedCowWheat.png';
import ghostOrchid from '../images/endSpeciesUk/plants/ghostOrchid.png';
import ladyOrchid from '../images/endSpeciesUk/plants/ladyOrchid.png';
import redHelleborine from '../images/endSpeciesUk/plants/redHelleborine.png';
import spreadingBellflower from '../images/endSpeciesUk/plants/spreadingBellflower.png';

//Fungus
import amanitaVittadinii from '../images/endSpeciesUk/fungus/amanitaVittadinii.png';
import boletusRegius from '../images/endSpeciesUk/fungus/boletusRegius.png';
import clitocybeAlexandri from '../images/endSpeciesUk/fungus/clitocybeAlexandri.png';
import geoglossumElongatum from '../images/endSpeciesUk/fungus/geoglossumElongatum.png';
import pholiotaAstragalina from '../images/endSpeciesUk/fungus/pholiotaAstragalina.png';


import FontSizeIncreaser from '../readAccessibilityGuideFunctions/fontSizeIncrease';
import DarkModeFunction from '../darkMode/darkMode';


//Text To Voices
import {UkSpeciesParagraph1Voice} from "../textToVoice/endUkSpeciesPageVoice";
import {UkSpeciesParagraph2Voice} from "../textToVoice/endUkSpeciesPageVoice";


export class EndnageredSpeciesUk extends Component {

    constructor(props) {
        super(props);
        this.state = {
        darkMode: false,
        fontSize: 18,
        endangeredSpeciesUkItems: [],
        };
    }
    
    componentDidMount(){
        fetch("http://localhost:5000/api/endAnimalsUk")
        .then (rest => rest.json())
        .then (endangeredSpeciesUkRecords => {
        this.setState({
            isLoaded: true,
            endangeredSpeciesUkItems: endangeredSpeciesUkRecords,
            })
        console.log(endangeredSpeciesUkRecords)
        });
    }
    
    render(){

        return( 
            <div className={this.state.darkMode ? "pageMainFrameDark" : "pageMainFrameLight"}>

{/* //////////////////////////////////////////////////////FontSizeFunction////////////////////////////////////////////////////// */}
<FontSizeIncreaser fontSize={this.state.fontSize} setFontSize={(size) => this.setState({ fontSize: size })} />
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                <box className = "landingImageBox2" style={{ backgroundImage: `url(${headerUk})`}}></box>

{/* //////////////////////////////////////////////////////DarkModeFunction////////////////////////////////////////////////////// */}
<DarkModeFunction darkMode={this.state.darkMode} setDarkmode={(darkMode) => this.setState({darkMode})} />
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                <body className='pageBodyFrame'>
                    <div className='container'>
                        <div className = "mainSubHeadFrame">
                            <subhead className = {this.state.darkMode ? "subheadLrgDrk" : "subheadLrg"}>Endangered Species in the UK</subhead>
                        </div>

                        <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                            {/* https://www.mammal.org.uk/2020/07/one-quarter-of-native-mammals-now-at-risk-of-extinction-in-britain/ */}
                            It is estimated that one quarter of native mammals are now at risk of extinction in Britain. 
                            The first official Red List for British Mammals, shows that 11 of 47 mammels native to Britian are classified as being risk of extinction.
                            And 5 futher species are classified as "near threatened", which mean they will become endangered if action are not taken.
                            The Red List of Britain most endangered birds has increased to 70 species out of 245 bird species.
                            <br></br>
                            <br></br>
                            Not all the species listed below are endangered and its a mix of both endangered and nearly threatened species.
                        </paragragraph>
                        <UkSpeciesParagraph1Voice/>
                    
                        <div className = "mainSubHeadFrame">
                            <subhead className = {this.state.darkMode ? "subheadSmlDrk" : "subheadSml"}>R e p t i l e s</subhead>
                        </div>

                        <box className = "box">
                            <box className = "speciesMainFrame">
                                <box className = "speciesCardContainer">
                                    <image className = {this.state.darkMode ? "smallImageUk-Dark" : "smallReptilesImageUk"}>
                                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${grassSnake})`}}></div>
                                    </image>
                                    <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Andreas Eichler</label></div>

                                    <label className = {this.state.darkMode ? "nameUk-Dark" : "reptilesNameUk"}>
                                        {this.state.endangeredSpeciesUkItems.length > 0 && (<div> {this.state.endangeredSpeciesUkItems[25].name} </div>)}
                                    </label>
                                </box>
                            </box>
                            <box className = "speciesMainFrame"> 
                                <box className = "speciesCardContainer">
                                    <image className = {this.state.darkMode ? "smallImageUk-Dark" : "smallReptilesImageUk"}>
                                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${sandLizard})`}}></div>
                                    </image>
                                    <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Andreas Eichler</label></div>

                                    <label className = {this.state.darkMode ? "nameUk-Dark" : "reptilesNameUk"}>
                                        {this.state.endangeredSpeciesUkItems.length > 0 && (<div> {this.state.endangeredSpeciesUkItems[26].name} </div>)}
                                    </label>
                                </box>
                            </box>
                            <box className = "speciesMainFrame"> 
                                <image className = {this.state.darkMode ? "smallImageUk-Dark" : "smallReptilesImageUk"}>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${smoothSnake})`}}></div>
                                </image>
                                <label className = {this.state.darkMode ? "nameUk-Dark" : "reptilesNameUk"}>
                                    {this.state.endangeredSpeciesUkItems.length > 0 && (<div> {this.state.endangeredSpeciesUkItems[23].name} </div>)}
                                </label>
                            </box>
                        </box>

                        <box className = "box">
                            <box className = "speciesMainFrame">
                               <box className = "speciesCardContainer">
                                    <image className = {this.state.darkMode ? "largeImageUk-Dark" : "largeReptilesImageUk"}>
                                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${adderViper})`}}></div>
                                    </image>
                                    <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Robin Ward</label></div>

                                    <label className = {this.state.darkMode ? "nameUk-Dark" : "reptilesNameUk"}>
                                        {this.state.endangeredSpeciesUkItems.length > 0 && (<div> {this.state.endangeredSpeciesUkItems[24].name} </div>)}
                                    </label>
                                </box>
                            </box>
                        </box>

                        <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                            These are the list of reptiles species in the Uk that are listed as nearly threatened, vulnerable or are endangered. 
                        </paragragraph>
                    </div>

    {/* ///////// V I D E O ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                    <div className= {this.state.darkMode ? "videoFrame-Dark" : "videoFrame"}>
                        <line className = "thinLine"></line>
                        <div className= {this.state.darkMode ? "video-Dark" : "video"}>
                            <paragragraph className="video-Discription">A video about the Critically endangered Scottish wildcats.</paragragraph>
                            <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=g3W3yr8NopU&t=93s"/>
                        </div> 
                        <line className = "thinLine"></line> 
                    </div> 
    {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}



                <div className='container'>
                    <div className = "mainSubHeadFrame">
                        <subhead className = {this.state.darkMode ? "subheadSmlDrk" : "subheadSml"}>M a r i n e s</subhead>
                    </div>
                    <box className = "box">
                        <box className = "speciesMainFrame">
                            <box className = "speciesCardContainer">
                                <image className = {this.state.darkMode ? "smallImageUk-Dark" : "smallMarinesImageUk"}>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${allisShad})`}}></div>
                                </image>
                                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Wye & Usk Foundation</label></div>

                                <label className = {this.state.darkMode ? "nameUk-Dark" : "marinesNameUk"}>
                                    {this.state.endangeredSpeciesUkItems.length > 0 && (<div> {this.state.endangeredSpeciesUkItems[22].name} </div>)}
                                </label>
                            </box>
                        </box>
                        <box className = "speciesMainFrame"> 
                            <image className = {this.state.darkMode ? "smallImageUk-Dark" : "smallMarinesImageUk"}>
                                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${brownTrout})`}}></div>
                            </image>
                            <label className = {this.state.darkMode ? "nameUk-Dark" : "marinesNameUk"}>
                                {this.state.endangeredSpeciesUkItems.length > 0 && (<div> {this.state.endangeredSpeciesUkItems[21].name} </div>)}
                            </label>
                        </box>
                        <box className = "speciesMainFrame"> 
                            <box className = "speciesCardContainer">
                                <image className = {this.state.darkMode ? "smallImageUk-Dark" : "smallMarinesImageUk"}>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${vendance})`}}></div>
                                </image>
                                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Jussi Murtosaari</label></div>

                                <label className = {this.state.darkMode ? "nameUk-Dark" : "marinesNameUk"}>
                                    {this.state.endangeredSpeciesUkItems.length > 0 && (<div> {this.state.endangeredSpeciesUkItems[19].name} </div>)}
                                </label>
                            </box>
                        </box>
                    </box>

                    <box className = "box">
                        <box className = "speciesMainFrame">
                            <box className = "speciesCardContainer">
                                <image className = {this.state.darkMode ? "largeImageUk-Dark" : "largeMarinesImageUk"}>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${pollan})`}}></div>
                                </image>
                                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Robert Rossel</label></div>
                                
                                <label className = {this.state.darkMode ? "nameUk-Dark" : "marinesNameUk"}>
                                    {this.state.endangeredSpeciesUkItems.length > 0 && (<div> {this.state.endangeredSpeciesUkItems[20].name} </div>)}
                                </label>
                            </box>
                        </box>
                    </box>

                    <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                        These are the list of marine species in the Uk that are listed as nearly threatened, vulnerable or are endangered. 
                    </paragragraph>
                </div>



                <div className='container'>
                    <div className = "mainSubHeadFrame">
                        <subhead className = {this.state.darkMode ? "subheadSmlDrk" : "subheadSml"}>A m p h i b i a n s</subhead>
                    </div>

                    <box className = "box">
                        <box className = "speciesMainFrame">
                            <image className = {this.state.darkMode ? "smallImageUk-Dark" : "smallAmphibiansImageUk"}>
                                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${greatCrestedNewt})`}}></div>
                            </image>
                            <label className = {this.state.darkMode ? "nameUk-Dark" : "amphibiansNameUk"}>
                                {this.state.endangeredSpeciesUkItems.length > 0 && (<div> {this.state.endangeredSpeciesUkItems[17].name} </div>)}
                            </label>
                        </box>
                        <box className = "speciesMainFrame"> 
                            <image className = {this.state.darkMode ? "smallImageUk-Dark" : "smallAmphibiansImageUk"}>
                                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${netterJackFrog})`}}></div>
                            </image>
                            <label className = {this.state.darkMode ? "nameUk-Dark" : "amphibiansNameUk"}>
                                {this.state.endangeredSpeciesUkItems.length > 0 && (<div> {this.state.endangeredSpeciesUkItems[15].name} </div>)}
                            </label>
                        </box>
                        <box className = "speciesMainFrame">
                            <box className = "speciesCardContainer">
                                <image className = {this.state.darkMode ? "smallImageUk-Dark" : "smallAmphibiansImageUk"}>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${palmateNewet})`}}></div>
                                </image>
                                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Chinhector</label></div>

                                <label className = {this.state.darkMode ? "nameUk-Dark" : "amphibiansNameUk"}>
                                    {this.state.endangeredSpeciesUkItems.length > 0 && (<div> {this.state.endangeredSpeciesUkItems[18].name} </div>)}
                                </label>
                            </box>
                        </box>
                    </box>

                    <box className = "box">
                        <box className = "speciesMainFrame">
                            <box className = "speciesCardContainer">
                                <image className = {this.state.darkMode ? "largeImageUk-Dark" : "largeAmphibiansImageUk"}>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${northernPoolFrog})`}}></div>
                                </image>
                                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Jacob King</label></div>

                                <label className = {this.state.darkMode ? "nameUk-Dark" : "amphibiansNameUk"}>
                                    {this.state.endangeredSpeciesUkItems.length > 0 && (<div> {this.state.endangeredSpeciesUkItems[16].name} </div>)}
                                </label>
                            </box>
                        </box>
                    </box>

                    <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                        These are the list of amphibians species in the Uk that are listed as nearly threatened, vulnerable or are endangered. 
                    </paragragraph>
                </div>

    {/* ///////// V I D E O ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <div className= {this.state.darkMode ? "videoFrame-Dark" : "videoFrame"}>
                    <line className = "thinLine"></line>
                    <div className= {this.state.darkMode ? "video-Dark" : "video"}>
                        <paragragraph className="video-Discription">A video about the Endangered Red Squirrel.</paragragraph>
                        <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=vRmPQGq88Kk"/>
                    </div> 
                    <line className = "thinLine"></line> 
                </div> 
    {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


                <div className='container'>
                    <div className = "mainSubHeadFrame">
                        <subhead className = {this.state.darkMode ? "subheadSmlDrk" : "subheadSml"}>M a m m e l s</subhead>
                    </div>

                    <box className = "box">
                        <box className = "speciesMainFrame">
                            <image className = {this.state.darkMode ? "smallImageUk-Dark" : "smallMammelsImageUk"}>
                                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${europeanHedgehog})`}}></div>
                            </image>
                            <label className = {this.state.darkMode ? "nameUk-Dark" : "mammelsNameUk"}>
                                {this.state.endangeredSpeciesUkItems.length > 0 && (<div> {this.state.endangeredSpeciesUkItems[5].name} </div>)}
                            </label>
                        </box>
                        <box className = "speciesMainFrame"> 
                            <box className = "speciesCardContainer">
                                <image className = {this.state.darkMode ? "smallImageUk-Dark" : "smallMammelsImageUk"}>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${greyLongEaredBat})`}}></div>
                                </image>
                                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Hugh Clark</label></div>

                                <label className = {this.state.darkMode ? "nameUk-Dark" : "mammelsNameUk"}>
                                    {this.state.endangeredSpeciesUkItems.length > 0 && (<div> {this.state.endangeredSpeciesUkItems[8].name} </div>)}
                                </label>
                            </box>
                        </box>
                        <box className = "speciesMainFrame"> 
                            <box className = "speciesCardContainer">
                                <image className = {this.state.darkMode ? "smallImageUk-Dark" : "smallMammelsImageUk"}>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${waterVole})`}}></div>
                                </image>
                                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by David Sewell/Alamy</label></div>

                                <label className = {this.state.darkMode ? "nameUk-Dark" : "mammelsNameUk"}>
                                    {this.state.endangeredSpeciesUkItems.length > 0 && (<div> {this.state.endangeredSpeciesUkItems[6].name} </div>)}
                                </label>
                            </box>
                        </box>
                    </box>

                    <box className = "box">
                        <box className = "speciesMainFrame">
                            <box className = "speciesCardContainer">
                                <image className = {this.state.darkMode ? "mediumImageUk-Dark" : "largeMammelsImageUk"}>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${redSquirrel})`}}></div>
                                </image>
                                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Tony Cox</label></div>

                                <label className = {this.state.darkMode ? "nameUk-Dark" : "mammelsNameUk"}>
                                    {this.state.endangeredSpeciesUkItems.length > 0 && (<div> {this.state.endangeredSpeciesUkItems[7].name} </div>)}
                                </label>
                            </box>
                        </box>
                        <box className = "speciesMainFrame">
                            <box className = "speciesCardContainer">
                                <image className = {this.state.darkMode ? "mediumImageUk-Dark" : "largeMammelsImageUk"}>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${wildCats})`}}></div>
                                </image>
                                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Janette Hill</label></div>
                                
                                <label className = {this.state.darkMode ? "nameUk-Dark" : "mammelsNameUk"}>
                                    {this.state.endangeredSpeciesUkItems.length > 0 && (<div> {this.state.endangeredSpeciesUkItems[9].name} </div>)}
                                </label>
                            </box>
                        </box>
                    </box>
                
                    <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                        These are the list of mammels species in the Uk that are listed as vulnerable, endangered or critically endangered.
                        For example, the wildcat and the greater mouse-eared bat is listed as critically endangered. And the beaver, red squirrel and the water vole is listed as endangered.
                    </paragragraph>
                    <UkSpeciesParagraph2Voice/>
                </div>
    


                    
                <div className='container'>
                    <div className = "mainSubHeadFrame">
                        <subhead className = {this.state.darkMode ? "subheadSmlDrk" : "subheadSml"}>B i r d s</subhead>
                    </div>

                    <box className = "box">
                        <box className = "speciesMainFrame">
                            <box className = "speciesCardContainer">
                                <image className = {this.state.darkMode ? "smallImageUk-Dark" : "smallBirdsImageUk"}>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${songThrush})`}}></div>
                                </image>
                                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Rafael Pardo</label></div>

                                <label className = {this.state.darkMode ? "nameUk-Dark" : "birdsNameUk"}>
                                    {this.state.endangeredSpeciesUkItems.length > 0 && (<div> {this.state.endangeredSpeciesUkItems[12].name} </div>)}
                                </label>
                            </box>
                        </box>
                        <box className = "speciesMainFrame"> 
                            <box className = "speciesCardContainer">
                                <image className = {this.state.darkMode ? "smallImageUk-Dark" : "smallBirdsImageUk"}>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${starling})`}}></div>
                                </image>
                                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Matt Davis</label></div>

                                <label className = {this.state.darkMode ? "nameUk-Dark" : "birdsNameUk"}>
                                    {this.state.endangeredSpeciesUkItems.length > 0 && (<div> {this.state.endangeredSpeciesUkItems[14].name} </div>)}
                                </label>
                            </box>
                        </box>
                        <box className = "speciesMainFrame"> 
                            <box className = "speciesCardContainer">
                                <image className = {this.state.darkMode ? "smallImageUk-Dark" : "smallBirdsImageUk"}>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${westernCapercaillie})`}}></div>
                                </image>
                                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Physilia Chua</label></div>

                                <label className = {this.state.darkMode ? "nameUk-Dark" : "birdsNameUk"}>
                                    {this.state.endangeredSpeciesUkItems.length > 0 && (<div> {this.state.endangeredSpeciesUkItems[11].name} </div>)}
                                </label>
                            </box>   
                        </box>
                    </box>

                    <box className = "box">
                        <box className = "speciesMainFrame">
                            <box className = "speciesCardContainer">
                                <image className = {this.state.darkMode ? "mediumImageUk-Dark" : "largeBirdsImageUk"}>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${cuckoos})`}}></div>
                                </image>
                                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Edmund Fellowes</label></div>

                                <label className = {this.state.darkMode ? "nameUk-Dark" : "birdsNameUk"}>
                                    {this.state.endangeredSpeciesUkItems.length > 0 && (<div> {this.state.endangeredSpeciesUkItems[13].name} </div>)}
                                </label>
                            </box>
                        </box>
                        <box className = "speciesMainFrame">
                            <box className = "speciesCardContainer">
                                <image className = {this.state.darkMode ? "mediumImageUk-Dark" : "largeBirdsImageUk"}>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${turtleDove})`}}></div>
                                </image>
                                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Dave Alamy</label></div>

                                <label className = {this.state.darkMode ? "nameUk-Dark" : "birdsNameUk"}>
                                    {this.state.endangeredSpeciesUkItems.length > 0 && (<div> {this.state.endangeredSpeciesUkItems[10].name} </div>)}
                                </label>
                            </box>
                        </box>
                    </box>

                    <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                        These are the list of birds species in the Uk that are listed as nearly threatened, vulnerable, endangered or critically endangered. 
                    </paragragraph>
                </div>

    {/* ///////// V I D E O ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <div className= {this.state.darkMode ? "videoFrame-Dark" : "videoFrame"}>
                    <line className = "thinLine"></line>
                    <div className= {this.state.darkMode ? "video-Dark" : "video"}>
                        <paragragraph className="video-Discription">A video about the Western Capercaillie.</paragragraph>
                        <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=XtU7zmXRe_A"/>
                    </div> 
                    <line className = "thinLine"></line> 
                </div> 
    {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}       



                <div className='container'>
                    <div className = "mainSubHeadFrame">
                        <subhead className = {this.state.darkMode ? "subheadSmlDrk" : "subheadSml"}>P l a n t s</subhead>
                    </div>

                    <box className = "box">
                        <box className = "speciesMainFrame">
                            <image className = {this.state.darkMode ? "smallImageUk-Dark" : "smallPlantsImageUk"}>
                                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${ghostOrchid})`}}></div>
                            </image>
                            <label className = {this.state.darkMode ? "nameUk-Dark" : "plantsNameUk"}>
                                {this.state.endangeredSpeciesUkItems.length > 0 && (<div> {this.state.endangeredSpeciesUkItems[27].name} </div>)}
                            </label>
                        </box>
                        <box className = "speciesMainFrame"> 
                            <box className = "speciesCardContainer">
                                <image className = {this.state.darkMode ? "smallImageUk-Dark" : "smallPlantsImageUk"}>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${ladyOrchid})`}}></div>
                                </image>
                                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Jean Tosti</label></div>

                                <label className = {this.state.darkMode ? "nameUk-Dark" : "plantsNameUk"}>
                                    {this.state.endangeredSpeciesUkItems.length > 0 && (<div> {this.state.endangeredSpeciesUkItems[28].name} </div>)}
                                </label>
                            </box>
                        </box>
                        <box className = "speciesMainFrame"> 
                            <image className = {this.state.darkMode ? "smallImageUk-Dark" : "smallPlantsImageUk"}>
                                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${redHelleborine})`}}></div>
                            </image>
                            <label className = {this.state.darkMode ? "nameUk-Dark" : "plantsNameUk"}>
                                {this.state.endangeredSpeciesUkItems.length > 0 && (<div> {this.state.endangeredSpeciesUkItems[29].name} </div>)}
                            </label>
                        </box>
                    </box>

                    <box className = "box">
                        <box className = "speciesMainFrame">
                            <box className = "speciesCardContainer">
                                <image className = {this.state.darkMode ? "mediumImageUk-Dark" : "largePlantsImageUk"}>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${crestedCowWheat})`}}></div>
                                </image>
                                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Alex Hyde</label></div>

                                <label className = {this.state.darkMode ? "nameUk-Dark" : "plantsNameUk"}>
                                    {this.state.endangeredSpeciesUkItems.length > 0 && (<div> {this.state.endangeredSpeciesUkItems[31].name} </div>)}
                                </label>
                            </box>
                        </box>
                        <box className = "speciesMainFrame">
                            <image className = {this.state.darkMode ? "mediumImageUk-Dark" : "largePlantsImageUk"}>
                                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${spreadingBellflower})`}}></div>
                            </image>
                            <label className = {this.state.darkMode ? "nameUk-Dark" : "plantsNameUk"}>
                                {this.state.endangeredSpeciesUkItems.length > 0 && (<div> {this.state.endangeredSpeciesUkItems[30].name} </div>)}
                            </label>
                        </box>
                    </box>

                    <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                        These are the list of plants species in the Uk that are listed as vulnerable, endangered or critically endangered.
                    </paragragraph>
                </div>



                <div className='container'>
                    <div className = "mainSubHeadFrame">
                        <subhead className = {this.state.darkMode ? "subheadSmlDrk" : "subheadSml"}>F u n g u s</subhead>
                    </div>
                    
                    <box className = "box">
                        <box className = "speciesMainFrame">
                            <box className = "speciesCardContainer">
                                <image className = {this.state.darkMode ? "smallImageUk-Dark" : "smallFungusImageUk"}>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${clitocybeAlexandri})`}}></div>
                                </image>
                                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Paul Cabot</label></div>

                                <label className = {this.state.darkMode ? "nameUk-Dark" : "fungusNameUk"}>
                                    {this.state.endangeredSpeciesUkItems.length > 0 && (<div> {this.state.endangeredSpeciesUkItems[3].name} </div>)}
                                </label>
                            </box>
                        </box>
                        <box className = "speciesMainFrame"> 
                            <image className = {this.state.darkMode ? "smallImageUk-Dark" : "smallFungusImageUk"}>
                                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${geoglossumElongatum})`}}></div>
                            </image>
                            <label className = {this.state.darkMode ? "nameUk-Dark" : "fungusNameUk"}>
                                {this.state.endangeredSpeciesUkItems.length > 0 && (<div> {this.state.endangeredSpeciesUkItems[0].name} </div>)}
                            </label>
                        </box>
                        <box className = "speciesMainFrame">
                            <box className = "speciesCardContainer"> 
                                <image className = {this.state.darkMode ? "smallImageUk-Dark" : "smallFungusImageUk"}>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${pholiotaAstragalina})`}}></div>
                                </image>
                                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Paul Cannon</label></div>

                                <label className = {this.state.darkMode ? "nameUk-Dark" : "fungusNameUk"}>
                                    {this.state.endangeredSpeciesUkItems.length > 0 && (<div> {this.state.endangeredSpeciesUkItems[4].name} </div>)}
                                </label>
                            </box>
                        </box>
                    </box>

                    <box className = "box">
                        <box className = "speciesMainFrame">
                            <image className = {this.state.darkMode ? "mediumImageUk-Dark" : "largeFungusImageUk"}>
                                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${amanitaVittadinii})`}}></div>
                            </image>
                            <label className = {this.state.darkMode ? "nameUk-Dark" : "fungusNameUk"}>
                                {this.state.endangeredSpeciesUkItems.length > 0 && (<div> {this.state.endangeredSpeciesUkItems[1].name} </div>)}
                            </label>
                        </box>
                        <box className = "speciesMainFrame">
                            <image className = {this.state.darkMode ? "mediumImageUk-Dark" : "largeFungusImageUk"}>
                                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${boletusRegius})`}}></div>
                            </image>
                            <label className = {this.state.darkMode ? "nameUk-Dark" : "fungusNameUk"}>
                                {this.state.endangeredSpeciesUkItems.length > 0 && (<div> {this.state.endangeredSpeciesUkItems[2].name} </div>)}
                            </label>
                        </box>
                    </box>

                    <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                        These are the list of fungus species in the Uk that are listed as nearly threatened, vulnerable or endangered.
                    </paragragraph>
                </div>

                
    {/* ///////// V I D E O ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <div className= {this.state.darkMode ? "videoFrame-Dark" : "videoFrame"}>
                    <line className = "thinLine"></line>
                    <div className= {this.state.darkMode ? "video-Dark" : "video"}>
                        <paragragraph className="video-Discription">A video about saving the Endnagered UK Water Vole.</paragragraph>
                        <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=qCzUrWw_Nk8"/>
                    </div> 
                    <line className = "thinLine"></line> 
                </div> 
    {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */} 
                    
                </body>
                <UkPageSuvNav/>
            </div>
        );
    }
}