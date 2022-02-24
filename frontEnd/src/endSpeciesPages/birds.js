import React from 'react';
import { useState } from "react";
import ReactPlayer from 'react-player';

import '../pages/publicMain.css';
import './birds.css';

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

import {FaPlusSquare} from 'react-icons/fa';
import {FaMinusSquare} from 'react-icons/fa';

export const Birds = () => {
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
            <box className = "landingImageBox2" style={{ backgroundImage: `url(${headerBirds})`}}></box>

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
                        <subhead className = {darkMode ? "subheadLrgDrk" : "subheadLrg"}>Endangered Birds Species</subhead>
                    </div>

                    <paragragraph style={{fontSize: `${fontSize}px`}} className = {darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                        Wass awass
                    </paragragraph>

                    <box className = "box4">
                        <box className = "largeSpeciesImgFrame">
                            <image className= 'birdLargeImage'>
                                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${greatCurassow})`}}></div>
                            </image>
                            <label className={darkMode ? "birdName-Dark" : "birdName"}>Species name</label>
                        </box>

                        <box className = "mediumSpeciesImgFrame">
                            <box className = "amphibianSpeciesMainFrame">
                                <image className='birdMediumImage'>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${bengalFlorican})`}}></div>
                                </image>
                                <label className={darkMode ? "birdName-Dark" : "birdName"}>Name</label>
                            </box>

                            <box className = "amphibianSpeciesMainFrame">
                                <image className='birdMediumImage'>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${californiaCondor})`}}></div>
                                </image>
                                <label className={darkMode ? "birdName-Dark" : "birdName"}>Name</label>
                            </box>
                        </box>

                        <box className = "mediumSpeciesImgFrame">
                            <box className = "amphibianSpeciesMainFrame">
                                <image className='birdMediumImage'>
                                <   div className='extinctSpeciesImage' style={{ backgroundImage: `url(${giantIbis})`}}></div>
                                </image>
                                <label className={darkMode ? "birdName-Dark" : "birdName"}>Name</label>
                            </box>

                            <box className = "amphibianSpeciesMainFrame">
                                <image className='birdMediumImage'>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${whoopingCrane})`}}></div>
                                </image>
                                <label className={darkMode ? "birdName-Dark" : "birdName"}>Name</label>
                            </box>
                        </box>
                    </box>
                </div>

                <div className= {darkMode ? "videoFrame-Dark" : "videoFrame"}>
                    <line className = "thinLine"></line>
                    <div className= {darkMode ? "video-Dark" : "video"}>
                        <paragragraph className="video-Discription">A video of Hornbill Hunting.</paragragraph>
                        <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=GAe_04vmNRQ"/>
                    </div> 
                    <line className = "thinLine"></line> 
                </div>

                <div className='container'>
                    <box className = "box4">
                        <box className = "largeSpeciesImgFrame">
                            <image className= 'birdLargeImage'>
                                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${kagu})`}}></div>
                            </image>
                            <label className={darkMode ? "birdName-Dark" : "birdName2"}>Species name</label>
                        </box>

                        <box className = "mediumSpeciesImgFrame">
                            <box className = "amphibianSpeciesMainFrame">
                                <image className='birdMediumImage'>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${frigatebird})`}}></div>
                                </image>
                                <label className={darkMode ? "birdName-Dark" : "birdName2"}>Name</label>
                            </box>

                            <box className = "amphibianSpeciesMainFrame">
                                <image className='birdMediumImage'>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${fruitDove})`}}></div>
                                </image>
                                <label className={darkMode ? "birdName-Dark" : "birdName2"}>Name</label>
                            </box>
                        </box>

                        <box className = "mediumSpeciesImgFrame">
                            <box className = "amphibianSpeciesMainFrame">
                                <image className='birdMediumImage'>
                                <   div className='extinctSpeciesImage' style={{ backgroundImage: `url(${greyParrot})`}}></div>
                                </image>
                                <label className={darkMode ? "birdName-Dark" : "birdName2"}>Name</label>
                            </box>

                            <box className = "amphibianSpeciesMainFrame">
                                <image className='birdMediumImage'>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${puffin})`}}></div>
                                </image>
                                <label className={darkMode ? "birdName-Dark" : "birdName2"}>Name</label>
                            </box>
                        </box>
                    </box>
                </div>




                <div className='container'>
                    <box className = "box4">
                        <box className = "largeSpeciesImgFrame">
                            <image className= 'birdLargeImage'>
                                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${baldEagle})`}}></div>
                            </image>
                            <label className={darkMode ? "birdName-Dark" : "birdName3"}>Species name</label>
                        </box>

                        <box className = "mediumSpeciesImgFrame">
                            <box className = "amphibianSpeciesMainFrame">
                                <image className='birdMediumImage'>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${peregrineFalcon})`}}></div>
                                </image>
                                <label className={darkMode ? "birdName-Dark" : "birdName3"}>Name</label>
                            </box>

                            <box className = "amphibianSpeciesMainFrame">
                                <image className='birdMediumImage'>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${philippineEagle})`}}></div>
                                </image>
                                <label className={darkMode ? "birdName-Dark" : "birdName3"}>Name</label>
                            </box>
                        </box>

                        <box className = "mediumSpeciesImgFrame">
                            <box className = "amphibianSpeciesMainFrame">
                                <image className='birdMediumImage'>
                                <   div className='extinctSpeciesImage' style={{ backgroundImage: `url(${whiteBackedVultures})`}}></div>
                                </image>
                                <label className={darkMode ? "birdName-Dark" : "birdName3"}>Name</label>
                            </box>

                            <box className = "amphibianSpeciesMainFrame">
                                <image className='birdMediumImage'>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${whitetailedEagle})`}}></div>
                                </image>
                                <label className={darkMode ? "birdName-Dark" : "birdName3"}>Name</label>
                            </box>
                        </box>
                    </box>
                </div>

                <div className= {darkMode ? "videoFrame-Dark" : "videoFrame"}>
                    <line className = "thinLine"></line>
                    <div className= {darkMode ? "video-Dark" : "video"}>
                        <paragragraph className="video-Discription">A video of Philippine Eagle.</paragragraph>
                        <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=-JP-zoBLyWE"/>
                    </div> 
                    <line className = "thinLine"></line> 
                </div>




                <div className='container'>
                    <box className = "box4">
                        <box className = "largeSpeciesImgFrame">
                            <image className= 'birdLargeImage'>
                                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${resplendentQuetzal})`}}></div>
                            </image>
                            <label className={darkMode ? "birdName-Dark" : "birdName4"}>Species name</label>
                        </box>

                        <box className = "mediumSpeciesImgFrame">
                            <box className = "amphibianSpeciesMainFrame">
                                <image className='birdMediumImage'>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${hornbill})`}}></div>
                                </image>
                                <label className={darkMode ? "birdName-Dark" : "birdName4"}>Name</label>
                            </box>

                            <box className = "amphibianSpeciesMainFrame">
                                <image className='birdMediumImage'>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${hyacinthMacaw})`}}></div>
                                </image>
                                <label className={darkMode ? "birdName-Dark" : "birdName4"}>Name</label>
                            </box>
                        </box>

                        <box className = "mediumSpeciesImgFrame">
                            <box className = "amphibianSpeciesMainFrame">
                                <image className='birdMediumImage'>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${kakapo})`}}></div>
                                </image>
                                <label className={darkMode ? "birdName-Dark" : "birdName4"}>Name</label>
                            </box>

                            <box className = "amphibianSpeciesMainFrame">
                                <image className='birdMediumImage'>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${toucan})`}}></div>
                                </image>
                                <label className={darkMode ? "birdName-Dark" : "birdName4"}>Name</label>
                            </box>
                        </box>
                    </box>
                </div>




                <div className='container'>
                    <box className = "box4">
                        <box className = "largeSpeciesImgFrame">
                            <image className= 'birdLargeImage'>
                                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${snowyOwl})`}}></div>
                            </image>
                            <label className={darkMode ? "birdName-Dark" : "birdName5"}>Species name</label>
                        </box>

                        <box className = "mediumSpeciesImgFrame">
                            <box className = "amphibianSpeciesMainFrame">
                                <image className='birdMediumImage'>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${barnOwl})`}}></div>
                                </image>
                                <label className={darkMode ? "birdName-Dark" : "birdName5"}>Name</label>
                            </box>

                            <box className = "amphibianSpeciesMainFrame">
                                <image className='birdMediumImage'>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${caledonianOwletNightjar})`}}></div>
                                </image>
                                <label className={darkMode ? "birdName-Dark" : "birdName5"}>Name</label>
                            </box>
                        </box>

                        <box className = "mediumSpeciesImgFrame">
                            <box className = "amphibianSpeciesMainFrame">
                                <image className='birdMediumImage'>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${forestOwlet})`}}></div>
                                </image>
                                <label className={darkMode ? "birdName-Dark" : "birdName5"}>Name</label>
                            </box>

                            <box className = "amphibianSpeciesMainFrame">
                                <image className='birdMediumImage'>
                                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${spottedOwl})`}}></div>
                                </image>
                                <label className={darkMode ? "birdName-Dark" : "birdName5"}>Name</label>
                            </box>
                        </box>
                    </box>
                </div>

                <div className= {darkMode ? "videoFrame-Dark" : "videoFrame"}>
                    <line className = "thinLine"></line>
                    <div className= {darkMode ? "video-Dark" : "video"}>
                        <paragragraph className="video-Discription">A video of Snow Owl Hunting.</paragragraph>
                        <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=Uf5IQiLOQK0"/>
                    </div> 
                    <line className = "thinLine"></line> 
                </div>


        </body>
        <BirdsPageSuvNav/>
      </div>
    );
}