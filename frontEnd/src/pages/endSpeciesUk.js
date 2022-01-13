import React from 'react';
import { useState } from "react";

import '../pages/publicMain.css';
import './endSpeciesUk.css';

import {UkPageSuvNav} from "../subNav/subNavigation";
import header6 from '../images/header6.png';

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


import {FaPlusSquare} from 'react-icons/fa';
import {FaMinusSquare} from 'react-icons/fa';

export const EndnageredSpeciesUk = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [fontSize, setFontSize] = useState(20);

    function FontSizeIncreaser(){
        return(
          <div className='buttonsContainer'>
            <button className="paraButton" onClick={() => setFontSize(fontSize + 2)}><FaPlusSquare size="3em" color="orange"/></button>
            <div className='fontSizeDisplay'>{fontSize}</div>
            <button className="paraButton" onClick={() => setFontSize(fontSize - 2)}><FaMinusSquare size="3em" color="orange"/></button>
          </div>
        )
      };

    return( 
        <div className={darkMode ? "pageMainFrameDark" : "pageMainFrameLight"}>
            <FontSizeIncreaser/>
            <box className = "landingImageBox2" style={{ backgroundImage: `url(${header6})`}}></box>

{/* //////////////////////////////////////////////////////DarkModeFunction////////////////////////////////////////////////////// */}
            <div className="darkModeSwitchContainer">
                <span style={{ color: darkMode ? "grey" : "orange" }}>☀︎</span>  
                    <div className="switch-checkbox">
                        <label className="switch">
                        <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
                        <span className="slider round"> </span>
                        </label>
                    </div>
                <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
            </div>
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <body className='pageBodyFrame'>
                <div className='container'>
                    <div className = "mainSubHeadFrame">
                        <line className = "thinLine"></line>
                        <subhead className = {darkMode ? "subheadLrgDrk" : "subheadLrg"}>Endangered Species in the UK</subhead>
                    </div>

                    <paragragraph style={{fontSize: `${fontSize}px`}} className = {darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                        Wass awass
                    </paragragraph>
                 
                    <div className = "mainSubHeadFrame">
                        <line className = "thinLine"></line>
                        <subhead className = {darkMode ? "subheadSmlDrk" : "subheadSml"}>R e p t i l e s</subhead>
                    </div>

                    <box className = "box">
                        <box className = "speciesMainFrame">
                            <image className = {darkMode ? "smallImageUk-Dark" : "smallReptilesImageUk"}>
                                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${grassSnake})`}}></div>
                            </image>
                            <label className = {darkMode ? "nameUk-Dark" : "reptilesNameUk"}>Name</label>
                        </box>
                        <box className = "speciesMainFrame"> 
                            <image className = {darkMode ? "smallImageUk-Dark" : "smallReptilesImageUk"}>
                                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${sandLizard})`}}></div>
                            </image>
                            <label className = {darkMode ? "nameUk-Dark" : "reptilesNameUk"}>Name</label>
                        </box>
                        <box className = "speciesMainFrame"> 
                            <image className = {darkMode ? "smallImageUk-Dark" : "smallReptilesImageUk"}>
                                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${smoothSnake})`}}></div>
                            </image>
                            <label className = {darkMode ? "nameUk-Dark" : "reptilesNameUk"}>Name</label>
                        </box>
                    </box>

                    <box className = "box">
                        <box className = "speciesMainFrame">
                            <image className = {darkMode ? "largeImageUk-Dark" : "largeReptilesImageUk"}>
                                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${adderViper})`}}></div>
                            </image>
                            <label className = {darkMode ? "nameUk-Dark" : "reptilesNameUk"}>Name</label>
                        </box>
                    </box>

                    <paragragraph style={{fontSize: `${fontSize}px`}} className = {darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                        Wass awass
                    </paragragraph>
                </div>



            <div className='container'>
                <div className = "mainSubHeadFrame">
                    <line className = "thinLine"></line>
                    <subhead className = {darkMode ? "subheadSmlDrk" : "subheadSml"}>M a r i n e s</subhead>
                </div>
                <box className = "box">
                    <box className = "speciesMainFrame">
                        <image className = {darkMode ? "smallImageUk-Dark" : "smallMarinesImageUk"}>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${allisShad})`}}></div>
                        </image>
                        <label className = {darkMode ? "nameUk-Dark" : "marinesNameUk"}>Name</label>
                    </box>
                    <box className = "speciesMainFrame"> 
                        <image className = {darkMode ? "smallImageUk-Dark" : "smallMarinesImageUk"}>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${brownTrout})`}}></div>
                        </image>
                        <label className = {darkMode ? "nameUk-Dark" : "marinesNameUk"}>Name</label>
                    </box>
                    <box className = "speciesMainFrame"> 
                        <image className = {darkMode ? "smallImageUk-Dark" : "smallMarinesImageUk"}>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${vendance})`}}></div>
                        </image>
                        <label className = {darkMode ? "nameUk-Dark" : "marinesNameUk"}>Name</label>
                    </box>
                </box>

                <box className = "box">
                    <box className = "speciesMainFrame">
                        <image className = {darkMode ? "largeImageUk-Dark" : "largeMarinesImageUk"}>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${pollan})`}}></div>
                        </image>
                        <label className = {darkMode ? "nameUk-Dark" : "marinesNameUk"}>Name</label>
                    </box>
                </box>

                <paragragraph style={{fontSize: `${fontSize}px`}} className = {darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                    Wass awass
                </paragragraph>
            </div>



            <div className='container'>
                <div className = "mainSubHeadFrame">
                    <line className = "thinLine"></line>
                    <subhead className = {darkMode ? "subheadSmlDrk" : "subheadSml"}>A m p h i b i a n s</subhead>
                </div>

                <box className = "box">
                    <box className = "speciesMainFrame">
                        <image className = {darkMode ? "smallImageUk-Dark" : "smallAmphibiansImageUk"}>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${greatCrestedNewt})`}}></div>
                        </image>
                        <label className = {darkMode ? "nameUk-Dark" : "amphibiansNameUk"}>Name</label>
                    </box>
                    <box className = "speciesMainFrame"> 
                        <image className = {darkMode ? "smallImageUk-Dark" : "smallAmphibiansImageUk"}>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${netterJackFrog})`}}></div>
                        </image>
                        <label className = {darkMode ? "nameUk-Dark" : "amphibiansNameUk"}>Name</label>
                    </box>
                    <box className = "speciesMainFrame"> 
                        <image className = {darkMode ? "smallImageUk-Dark" : "smallAmphibiansImageUk"}>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${palmateNewet})`}}></div>
                        </image>
                        <label className = {darkMode ? "nameUk-Dark" : "amphibiansNameUk"}>Name</label>
                    </box>
                </box>

                <box className = "box">
                    <box className = "speciesMainFrame">
                        <image className = {darkMode ? "largeImageUk-Dark" : "largeAmphibiansImageUk"}>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${northernPoolFrog})`}}></div>
                        </image>
                        <label className = {darkMode ? "nameUk-Dark" : "amphibiansNameUk"}>Name</label>
                    </box>
                </box>

                <paragragraph style={{fontSize: `${fontSize}px`}} className = {darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                    Wass awass
                </paragragraph>
            </div>



            <div className='container'>
                <div className = "mainSubHeadFrame">
                    <line className = "thinLine"></line>
                    <subhead className = {darkMode ? "subheadSmlDrk" : "subheadSml"}>M a m m e l s</subhead>
                </div>

                <box className = "box">
                    <box className = "speciesMainFrame">
                        <image className = {darkMode ? "smallImageUk-Dark" : "smallMammelsImageUk"}>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${europeanHedgehog})`}}></div>
                        </image>
                        <label className = {darkMode ? "nameUk-Dark" : "mammelsNameUk"}>Name</label>
                    </box>
                    <box className = "speciesMainFrame"> 
                        <image className = {darkMode ? "smallImageUk-Dark" : "smallMammelsImageUk"}>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${greyLongEaredBat})`}}></div>
                        </image>
                        <label className = {darkMode ? "nameUk-Dark" : "mammelsNameUk"}>Name</label>
                    </box>
                    <box className = "speciesMainFrame"> 
                        <image className = {darkMode ? "smallImageUk-Dark" : "smallMammelsImageUk"}>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${waterVole})`}}></div>
                        </image>
                        <label className = {darkMode ? "nameUk-Dark" : "mammelsNameUk"}>Name</label>
                    </box>
                </box>

                <box className = "box">
                    <box className = "speciesMainFrame">
                        <image className = {darkMode ? "mediumImageUk-Dark" : "largeMammelsImageUk"}>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${redSquirrel})`}}></div>
                        </image>
                        <label className = {darkMode ? "nameUk-Dark" : "mammelsNameUk"}>Name</label>
                    </box>
                    <box className = "speciesMainFrame">
                        <image className = {darkMode ? "mediumImageUk-Dark" : "largeMammelsImageUk"}>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${wildCats})`}}></div>
                        </image>
                        <label className = {darkMode ? "nameUk-Dark" : "mammelsNameUk"}>Name</label>
                    </box>
                </box>
              
                <paragragraph style={{fontSize: `${fontSize}px`}} className = {darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                    Wass awass
                </paragragraph>
            </div>
  


                
            <div className='container'>
                <div className = "mainSubHeadFrame">
                    <line className = "thinLine"></line>
                        <subhead className = {darkMode ? "subheadSmlDrk" : "subheadSml"}>B i r d s</subhead>
                    <line className = "thinLine"></line>
                </div>

                <box className = "box">
                    <box className = "speciesMainFrame">
                        <image className = {darkMode ? "smallImageUk-Dark" : "smallBirdsImageUk"}>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${songThrush})`}}></div>
                        </image>
                        <label className = {darkMode ? "nameUk-Dark" : "birdsNameUk"}>Name</label>
                    </box>
                    <box className = "speciesMainFrame"> 
                        <image className = {darkMode ? "smallImageUk-Dark" : "smallBirdsImageUk"}>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${starling})`}}></div>
                        </image>
                        <label className = {darkMode ? "nameUk-Dark" : "birdsNameUk"}>Name</label>
                    </box>
                    <box className = "speciesMainFrame"> 
                        <image className = {darkMode ? "smallImageUk-Dark" : "smallBirdsImageUk"}>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${westernCapercaillie})`}}></div>
                        </image>
                        <label className = {darkMode ? "nameUk-Dark" : "birdsNameUk"}>Name</label>
                    </box>
                </box>

                <box className = "box">
                    <box className = "speciesMainFrame">
                        <image className = {darkMode ? "mediumImageUk-Dark" : "largeBirdsImageUk"}>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${cuckoos})`}}></div>
                        </image>
                        <label className = {darkMode ? "nameUk-Dark" : "birdsNameUk"}>Name</label>
                    </box>
                    <box className = "speciesMainFrame">
                        <image className = {darkMode ? "mediumImageUk-Dark" : "largeBirdsImageUk"}>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${turtleDove})`}}></div>
                        </image>
                        <label className = {darkMode ? "nameUk-Dark" : "birdsNameUk"}>Name</label>
                    </box>
                </box>

                <paragragraph style={{fontSize: `${fontSize}px`}} className = {darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                    Wass awass
                </paragragraph>
            </div>
       



            <div className='container'>
                <div className = "mainSubHeadFrame">
                    <line className = "thinLine"></line>
                        <subhead className = {darkMode ? "subheadSmlDrk" : "subheadSml"}>P l a n t s</subhead>
                    <line className = "thinLine"></line>
                </div>

                <box className = "box">
                    <box className = "speciesMainFrame">
                        <image className = {darkMode ? "smallImageUk-Dark" : "smallPlantsImageUk"}>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${ghostOrchid})`}}></div>
                        </image>
                        <label className = {darkMode ? "nameUk-Dark" : "plantsNameUk"}>Name</label>
                    </box>
                    <box className = "speciesMainFrame"> 
                        <image className = {darkMode ? "smallImageUk-Dark" : "smallPlantsImageUk"}>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${ladyOrchid})`}}></div>
                        </image>
                        <label className = {darkMode ? "nameUk-Dark" : "plantsNameUk"}>Name</label>
                    </box>
                    <box className = "speciesMainFrame"> 
                        <image className = {darkMode ? "smallImageUk-Dark" : "smallPlantsImageUk"}>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${redHelleborine})`}}></div>
                        </image>
                        <label className = {darkMode ? "nameUk-Dark" : "plantsNameUk"}>Name</label>
                    </box>
                </box>

                <box className = "box">
                    <box className = "speciesMainFrame">
                        <image className = {darkMode ? "mediumImageUk-Dark" : "largePlantsImageUk"}>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${crestedCowWheat})`}}></div>
                        </image>
                        <label className = {darkMode ? "nameUk-Dark" : "plantsNameUk"}>Name</label>
                    </box>
                    <box className = "speciesMainFrame">
                        <image className = {darkMode ? "mediumImageUk-Dark" : "largePlantsImageUk"}>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${spreadingBellflower})`}}></div>
                        </image>
                        <label className = {darkMode ? "nameUk-Dark" : "plantsNameUk"}>Name</label>
                    </box>
                </box>

                <paragragraph style={{fontSize: `${fontSize}px`}} className = {darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                    Wass awass
                </paragragraph>
            </div>



            <div className='container'>
                <div className = "mainSubHeadFrame">
                    <line className = "thinLine"></line>
                        <subhead className = {darkMode ? "subheadSmlDrk" : "subheadSml"}>F u n g u s</subhead>
                    <line className = "thinLine"></line>
                </div>
                
                <box className = "box">
                    <box className = "speciesMainFrame">
                        <image className = {darkMode ? "smallImageUk-Dark" : "smallFungusImageUk"}>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${clitocybeAlexandri})`}}></div>
                        </image>
                        <label className = {darkMode ? "nameUk-Dark" : "fungusNameUk"}>Name</label>
                    </box>
                    <box className = "speciesMainFrame"> 
                        <image className = {darkMode ? "smallImageUk-Dark" : "smallFungusImageUk"}>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${geoglossumElongatum})`}}></div>
                        </image>
                        <label className = {darkMode ? "nameUk-Dark" : "fungusNameUk"}>Name</label>
                    </box>
                    <box className = "speciesMainFrame"> 
                        <image className = {darkMode ? "smallImageUk-Dark" : "smallFungusImageUk"}>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${pholiotaAstragalina})`}}></div>
                        </image>
                        <label className = {darkMode ? "nameUk-Dark" : "fungusNameUk"}>Name</label>
                    </box>
                </box>

                <box className = "box">
                    <box className = "speciesMainFrame">
                        <image className = {darkMode ? "mediumImageUk-Dark" : "largeFungusImageUk"}>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${amanitaVittadinii})`}}></div>
                        </image>
                        <label className = {darkMode ? "nameUk-Dark" : "fungusNameUk"}>Name</label>
                    </box>
                    <box className = "speciesMainFrame">
                        <image className = {darkMode ? "mediumImageUk-Dark" : "largeFungusImageUk"}>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${boletusRegius})`}}></div>
                        </image>
                        <label className = {darkMode ? "nameUk-Dark" : "fungusNameUk"}>Name</label>
                    </box>
                </box>

                <paragragraph style={{fontSize: `${fontSize}px`}} className = {darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                    Wass awass
                </paragragraph>
            </div>
                
            </body>
            <UkPageSuvNav/>
        </div>
    );
}