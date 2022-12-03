import React from 'react';

import './insectsNameSTYLES.css';

import SinaiBatonBlue from '../../images/endInsects/ButterflyAndMoth/SinaiBatonBlue.png'
import EnigmaMoth from '../../images/endInsects/ButterflyAndMoth/EnigmaMoth.png'
import DicksonsHillsideBrown from '../../images/endInsects/ButterflyAndMoth/DicksonsHillsideBrown.png'
import LudlowsBhutanGlory from '../../images/endInsects/ButterflyAndMoth/LudlowsBhutanGlory.png'
import MarionsPlumeMoth from '../../images/endInsects/ButterflyAndMoth/MarionsPlumeMoth.png'


export const ButterflysAndMothsCardsSet = () => {
    return (
    <container id="two-row">
        <grid id="two-column">
          <div id="boxLong">
 
              <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${EnigmaMoth})`}}></image></div>
             
              <name id="butterflyAndMothsName"> Enigma Moth </name>
           
          </div>

          <div id="boxLong">
            <box className = "speciesCardContainer">
              <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${LudlowsBhutanGlory})`}}></image></div>
              <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Sreedharan Gopalsamy</label></div>

              <name id="butterflyAndMothsName"> Ludlows Bhutan Glory </name>
            </box>
          </div>
        </grid>


        <grid id="three-column">
          <div id="box">
            <box className = "speciesCardContainer">
              <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${SinaiBatonBlue})`}}></image></div>
              <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Mike James</label></div>
              
              <name id="butterflyAndMothsName"> Sinai Baton Blue </name>
            </box>
          </div>

          <div id="box">
            <box className = "speciesCardContainer">
              <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${DicksonsHillsideBrown})`}}></image></div>
              <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Tony Rebelo</label></div>
              
              <name id="butterflyAndMothsName"> Dicksons Hillside Brown </name>
            </box>
          </div>

          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${MarionsPlumeMoth})`}}></image></div>
            <name id="butterflyAndMothsName"> Marions Plume Moth </name>
          </div>
        </grid>
    </container>
    );
}