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
            <name id="lizardsName1"> Calumma Tarzan </name>
          </div>

          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${LesserAntilleanIguana})`}}></image></div>
            <name id="lizardsName1"> Lesser Antillean Iguana </name>
          </div>

          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${PhelsumaAntanosy})`}}></image></div>
            <name id="lizardsName1"> Phelsuma Antanosy </name>
          </div>
        </grid>


        <grid id="two-column">
          <div id="boxLong">
            <box className = "speciesCardContainer">
              <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${LaGomeraGiantLizard})`}}></image></div>
              <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Linné's Nightmare</label></div>

              <name id="lizardsName1">LaGomera Giant Lizard </name>
            </box>
          </div>

          <div id="boxLong">
            <box className = "speciesCardContainer">
              <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${MitchellsWaterMonitor})`}}></image></div>
              <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by William Riddell</label></div>
              
              <name id="lizardsName1"> Mitchells Water Monitor </name>
            </box>
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
            <box className = "speciesCardContainer">
              <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${JamaicanRockIguana})`}}></image></div>
              <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Rick Van Veen</label></div>

              <name id="lizardsName2"> Jamaican Rock Iguana </name>
            </box>
          </div>

          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${SeychellesBronzeGecko})`}}></image></div>
            <name id="lizardsName2"> Seychelles Bronze Gecko </name>
          </div>

          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${UtilaSpinyTailedIguana})`}}></image></div>
            <name id="lizardsName2"> Utila Spiny Tailed Iguana </name>
          </div>
        </grid>


        <grid id="two-column">
          <div id="boxLong">
            <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${AnegadaRockIguana})`}}></image></div>  
            <name id="lizardsName2"> Anegada Rock Iguana</name>
          </div>

          <div id="boxLong">
            <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${GalápagosPinkLandIguana})`}}></image></div>
            <name id="lizardsName2"> Galápagos Pink Land Iguana </name>
          </div>
        </grid>
      </container>
    );
}