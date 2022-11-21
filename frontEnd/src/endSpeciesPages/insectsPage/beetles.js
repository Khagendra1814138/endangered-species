import React from 'react';

import './insectsNameSTYLES.css';

import PhoturisPyralomima from '../../images/endInsects/beetles/PhoturisPyralomima.png'
import GiantFijianLonghornBeetle from '../../images/endInsects/beetles/GiantFijianLonghornBeetle.png'
import AmericanBuryingBeetle from '../../images/endInsects/beetles/AmericanBuryingBeetle.png'
import DeltaGreenGrounBeetle from '../../images/endInsects/beetles/DeltaGreenGrounBeetle.png'
import CoralPinkSandDunesTigerBeetle from '../../images/endInsects/beetles/CoralPinkSandDunesTigerBeetle.png'


export const BeetlesCardsSet = () => {
    return (
    <container id="two-row">
        <grid id="two-column">
          <div id="boxLong">
            <box className = "speciesCardContainer">
              <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${GiantFijianLonghornBeetle})`}}></image></div>
              <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Wye & Usk Foundation</label></div>
              <name id="beetlesName"> Name sss</name>
            </box>
          </div>

          <div id="boxLong">
            <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${PhoturisPyralomima})`}}></image></div>
            <name id="beetlesName"> Name </name>
          </div>
        </grid>


        <grid id="three-column">
          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${AmericanBuryingBeetle})`}}></image></div>
            <name id="beetlesName"> Name </name>
          </div>

          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${DeltaGreenGrounBeetle})`}}></image></div>
            <name id="beetlesName"> Name </name>
          </div>

          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${CoralPinkSandDunesTigerBeetle})`}}></image></div>
            <name id="beetlesName"> Name </name>
          </div>
        </grid>
    </container>
    );
}
