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
            <box className = "speciesCardContainer">
              <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${EnigmaMoth})`}}></image></div>
              <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Wye & Usk Foundation</label></div>
              <name id="butterflyAndMothsName"> Name sss</name>
            </box>
          </div>

          <div id="boxLong">
            <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${LudlowsBhutanGlory})`}}></image></div>
            <name id="butterflyAndMothsName"> Name </name>
          </div>
        </grid>


        <grid id="three-column">
          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${SinaiBatonBlue})`}}></image></div>
            <name id="butterflyAndMothsName"> Name </name>
          </div>

          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${DicksonsHillsideBrown})`}}></image></div>
            <name id="butterflyAndMothsName"> Name </name>
          </div>

          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${MarionsPlumeMoth})`}}></image></div>
            <name id="butterflyAndMothsName"> Name </name>
          </div>
        </grid>
    </container>
    );
}