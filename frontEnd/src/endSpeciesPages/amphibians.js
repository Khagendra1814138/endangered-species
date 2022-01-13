import React from 'react';
import { useState } from "react";

import '../pages/publicMain.css';
import './amphibians.css';

import {AmphibianPageSuvNav} from "../subNav/subNavigation";


import header6 from '../images/header6.png';

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


import {FaPlusSquare} from 'react-icons/fa';
import {FaMinusSquare} from 'react-icons/fa';

export const Amphibians = () => {
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
                        <subhead className = {darkMode ? "subheadLrgDrk" : "subheadLrg"}>Endangered Amphibians</subhead>
                    </div>
            

                    <paragragraph style={{fontSize: `${fontSize}px`}} className = {darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                        Wass awass
                    </paragragraph>

                    <box className = "box4">
                        <box className = "largeSpeciesImgFrame">
                            <image className= 'amphibianLargeImage'>
                                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${axolotl})`}}></div>
                            </image>
                            <label className= {darkMode ? "amphibianName-Dark" : "amphibianName"}>Species name</label>
                        </box>

                        <box className = "mediumSpeciesImgFrame">
                            <box className = "MedBox">
                                <image className='amphibianMediumImage'>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${chineseGiantSalamander})`}}></div>
                                </image>
                                <label className= {darkMode ? "amphibianName-Dark" : "amphibianName"}>Name</label>
                            </box>

                            <box className = "MedBox">
                                <image className='amphibianMediumImage'>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${flatwoodsSalamander})`}}></div>
                                </image>
                                <label className= {darkMode ? "amphibianName-Dark" : "amphibianName"}>Name</label>
                            </box>
                        </box>

                        <box className = "mediumSpeciesImgFrame">
                            <box className = "MedBox">
                                <image className='amphibianMediumImage'>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${slenderSalamander})`}}></div>
                                </image>
                                <label className= {darkMode ? "amphibianName-Dark" : "amphibianName"}>Name</label>
                            </box>

                            <box className = "MedBox">
                                <image className='amphibianMediumImage'>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${splayfootSalamanders})`}}></div>
                                </image>
                                <label className= {darkMode ? "amphibianName-Dark" : "amphibianName"}>Name</label>
                            </box>
                        </box>
                    </box>



                <div className='container'>
                    <line className = "largeLine"></line>
                    <box className = "box4">
                        <box className = "largeSpeciesImgFrame">
                            <image className= 'amphibianLargeImage'>
                                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${lemurLeafFrog})`}}></div>
                            </image>
                            <label className= {darkMode ? "amphibianName-Dark" : "amphibianName2"}>Species name</label>
                        </box>

                        <box className = "mediumSpeciesImgFrame">
                            <box className = "MedBox">
                                <image className='amphibianMediumImage'>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${AnodonthylaVallaniFrog})`}}></div>
                                </image>
                                <label className= {darkMode ? "amphibianName-Dark" : "amphibianName2"}>Name</label>
                            </box>

                            <box className = "MedBox">
                                <image className='amphibianMediumImage'>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${baleMountainsTreeFrog})`}}></div>
                                </image>
                                <label className= {darkMode ? "amphibianName-Dark" : "amphibianName2"}>Name</label>
                            </box>
                        </box>

                        <box className = "mediumSpeciesImgFrame">
                            <box className = "MedBox">
                                <image className='amphibianMediumImage'>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${corroboreeFrog})`}}></div>
                                </image>
                                <label className= {darkMode ? "amphibianName-Dark" : "amphibianName2"}>Name</label>
                            </box>

                            <box className = "MedBox">
                                <image className='amphibianMediumImage'>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${duskyGopherFrog})`}}></div>
                                </image>
                                <label className= {darkMode ? "amphibianName-Dark" : "amphibianName2"}>Name</label>
                            </box>
                        </box>
                    </box>
                </div>



                <div className='container'>
                    <line className = "largeLine"></line>
                    <box className = "box4">
                        <box className = "largeSpeciesImgFrame">
                            <image className= 'amphibianLargeImage'>
                                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${poisonDartFrog})`}}></div>
                            </image>
                            <label className= {darkMode ? "amphibianName-Dark" : "amphibianName3"}>Species name</label>
                        </box>

                        <box className = "mediumSpeciesImgFrame">
                            <box className = "MedBox">
                                <image className='amphibianMediumImage'>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${flyingFrog})`}}></div>
                                </image>
                                <label className= {darkMode ? "amphibianName-Dark" : "amphibianName3"}>Name</label>
                            </box>
            

                            <box className = "MedBox">
                                <image className='amphibianMediumImage'>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${mantellaFrog})`}}></div>
                                </image>
                                <label className= {darkMode ? "amphibianName-Dark" : "amphibianName3"}>Name</label>
                            </box>
                        </box>

                        <box className = "mediumSpeciesImgFrame">
                            <box className = "MedBox">
                                <image className='amphibianMediumImage'>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${panamanianGoldenFrog})`}}></div>
                                </image>
                                <label className= {darkMode ? "amphibianName-Dark" : "amphibianName3"}>Name</label>
                            </box>

                            <box className = "MedBox">
                                <image className='amphibianMediumImage'>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${variableHarlequinFrog})`}}></div>
                                </image>
                                <label className= {darkMode ? "amphibianName-Dark" : "amphibianName3"}>Name</label>
                            </box>
                        </box>
                    </box>
                </div>

                </div>

        </body>
        <AmphibianPageSuvNav/>
      </div>
    );
}