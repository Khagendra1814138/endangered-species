import React from 'react';

import './reptiles.css';

import LaGomeraGiantLizard from '../../images/endReptiles/lizardIgunaAndChameleon/LaGomeraGiantLizard.png'
import CalummaTarzan from '../../images/endReptiles/lizardIgunaAndChameleon/CalummaTarzan.png'
import LesserAntilleanIguana from '../../images/endReptiles/lizardIgunaAndChameleon/LesserAntilleanIguana.png'
import PhelsumaAntanosy from '../../images/endReptiles/lizardIgunaAndChameleon/PhelsumaAntanosy.png'
import MitchellsWaterMonitor from '../../images/endReptiles/lizardIgunaAndChameleon/MitchellsWaterMonitor.png'

import AnegadaRockIguana from '../../images/endReptiles/lizardIgunaAndChameleon/AnegadaRockIguana.png'
import JamaicanRockIguana from '../../images/endReptiles/lizardIgunaAndChameleon/JamaicanRockIguana.png'
import SeychellesBronzeGecko from '../../images/endReptiles/lizardIgunaAndChameleon/SeychellesBronzeGecko.png'
import GalápagosPinkLandIguana from '../../images/endReptiles/lizardIgunaAndChameleon/GalápagosPinkLandIguana.png'
import UtilaSpinyTailedIguana from '../../images/endReptiles/lizardIgunaAndChameleon/UtilaSpinyTailedIguana.png'


export const LizardsSet1 = () => {
    return (
      <container id="two-row">
        <grid id="three-column">
          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${CalummaTarzan})`}}></image></div>
            <name id="lizardsName1"> Name </name>
          </div>

          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${LesserAntilleanIguana})`}}></image></div>
            <name id="lizardsName1"> Name </name>
          </div>

          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${PhelsumaAntanosy})`}}></image></div>
            <name id="lizardsName1"> Name </name>
          </div>
        </grid>


        <grid id="two-column">
          <div id="boxLong">
            <box className = "speciesCardContainer">
              <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${LaGomeraGiantLizard})`}}></image></div>
              <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Wye & Usk Foundation</label></div>
              <name id="lizardsName1"> Name sss</name>
            </box>
          </div>

          <div id="boxLong">
            <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${MitchellsWaterMonitor})`}}></image></div>
            <name id="lizardsName1"> Name </name>
          </div>
        </grid>
      </container>
    );
}





export const LizardsSet2 = () => {
    return (
        <container id="two-row">
        <grid id="three-column">
          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${JamaicanRockIguana})`}}></image></div>
            <name id="lizardsName2"> Name </name>
          </div>

          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${SeychellesBronzeGecko})`}}></image></div>
            <name id="lizardsName2"> Name </name>
          </div>

          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${UtilaSpinyTailedIguana})`}}></image></div>
            <name id="lizardsName2"> Name </name>
          </div>
        </grid>


        <grid id="two-column">
          <div id="boxLong">
            <box className = "speciesCardContainer">
              <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${AnegadaRockIguana})`}}></image></div>
              <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Wye & Usk Foundation</label></div>
              <name id="lizardsName2"> Name sss</name>
            </box>
          </div>

          <div id="boxLong">
            <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${GalápagosPinkLandIguana})`}}></image></div>
            <name id="lizardsName2"> Name </name>
          </div>
        </grid>
      </container>
    );
}