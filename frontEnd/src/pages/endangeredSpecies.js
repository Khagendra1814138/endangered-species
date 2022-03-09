import React from "react";
import { Component } from "react";
import {Link} from 'react-router-dom';

import './publicMain.css';
import './endangeredSpecies.css';
import './darkmodeFunction.css';

import {EndangeredSpeciesSuvNav} from "../subNav/subNavigation";

import header2 from '../images/header2.png';

import amphibian from '../images/amphibian.jpg';
import artic from '../images/artic.jpg';
import birds from '../images/birds.jpg';
import fungus from '../images/fungus.jpg';
import mammels from '../images/mammels.jpg';
import marine from '../images/marine.jpg';
import plant from '../images/plant.jpg';
import Uk from '../images/Uk.jpg';

import DarkModeFunction from '../darkMode/darkMode';

export class EndangeredSpecies extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
    };
  }

  render(){

    return( 
      <div className={this.state.darkMode ? "pageMainFrameDark" : "pageMainFrameLight"}>
        <box className = "landingImageBox2" style={{ backgroundImage: `url(${header2})`}}></box>

{/* //////////////////////////////////////////////////////DarkModeFunction////////////////////////////////////////////////////// */}
        <DarkModeFunction darkMode={this.state.darkMode} setDarkmode={(darkMode) => this.setState({darkMode})} />
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <body className='pageBodyFrame'>
          <div className='container'>
            <div className = "mainSubHeadFrame">
              <subhead className = {this.state.darkMode ? "subheadLrgDrk" : "subheadLrg"}>Endangered Species</subhead>
            </div>

            <box className = "box">
              <Link exact to="./amphibians" className='speciesMainFrame'>
                <image className={this.state.darkMode ? "speciesImageMid-Dark" : "speciesImageMid-Light"}>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${amphibian})`}}></div>
                </image>
                <label className = {this.state.darkMode ? "speciesType-Dark" : "speciesType-Light"}>A M P H I B I A N S</label>
              </Link>

              <Link exact to="./birds" className='speciesMainFrame'>
                <box className = "speciesCardContainer">
                  <image className={this.state.darkMode ? "speciesImageMid-Dark" : "speciesImageMid-Light"}>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${birds})`}}></div>
                  </image>
                  <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Simon Boivin</label></div>
                  <label className = {this.state.darkMode ? "speciesType-Dark" : "speciesType-Light"}>B I R D S</label>
                </box>
              </Link>
          
              <Link exact to="./mammels" className='speciesMainFrame'>
                <image className={this.state.darkMode ? "speciesImageMid-Dark" : "speciesImageMid-Light"}>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${mammels})`}}></div>
                </image> 
                <label className = {this.state.darkMode ? "speciesType-Dark" : "speciesType-Light"}>M A M M E L S</label>
              </Link>
            </box>

            <line className = "largeLine"></line>

            <box className = "box">
              <Link exact to="./aquatic" className='speciesMainFrame'>
                <image className={this.state.darkMode ? "speciesImageMid-Dark" : "speciesImageMid-Light"}>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${marine})`}}></div>
                </image>
                <label className = {this.state.darkMode ? "speciesType-Dark" : "speciesType-Light"}>A Q U A T I C</label>
              </Link>

              <Link exact to="./artic" className='speciesMainFrame'>
                <box className = "speciesCardContainer">
                  <image className={this.state.darkMode ? "speciesImageMid-Dark" : "speciesImageMid-Light"}>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${artic})`}}></div>
                  </image> 
                  <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Dave Sandford</label></div>

                  <label className = {this.state.darkMode ? "speciesType-Dark" : "speciesType-Light"}>A R T I C</label>
                </box>
              </Link>

              <Link exact to="./plants" className='speciesMainFrame'>
                <image className={this.state.darkMode ? "speciesImageMid-Dark" : "speciesImageMid-Light"}>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${plant})`}}></div>
                </image> 
                <label className = {this.state.darkMode ? "speciesType-Dark" : "speciesType-Light"}>P L A N T S</label>
              </Link>
            </box>

            <line className = "largeLine"></line>

            <box className = "box">
              <Link exact to="./fungus" className='speciesMainFrame'>
                <image className={this.state.darkMode ? "speciesImageMid-Dark" : "speciesImageMid-Light"}>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${fungus})`}}></div>
                </image>
                <label className = {this.state.darkMode ? "speciesType-Dark" : "speciesType-Light"}>F U N G U S</label>
              </Link>
              
              <line className = "linedown"></line>

              <Link exact to="./endSpeciesUk" className='speciesMainFrame'>
                <box className = "speciesCardContainer">
                  <image className={this.state.darkMode ? "speciesImageMid-Dark" : "speciesImageMid-Light"}>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${Uk})`}}></div>
                  </image>
                  <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Tony Cox</label></div>
                  <label className = {this.state.darkMode ? "speciesType-Dark" : "speciesType-Light"}>Endangered Species in UK</label>
                </box>
              </Link>
            </box>
          </div>

        </body>

        <EndangeredSpeciesSuvNav/>
      </div>
    );
  }
}