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
              <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Oleg Doroshenko</label></div>

              <name id="beetlesName"> Giant Fijian Longhorn Beetle</name>
            </box>
          </div>

          <div id="boxLong">
            <box className = "speciesCardContainer">
              <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${PhoturisPyralomima})`}}></image></div>
              <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Katja Schulz</label></div>

              <name id="beetlesName"> Photuris Pyralomima </name>
            </box>
          </div>
        </grid>


        <grid id="three-column">
          <div id="box">
            <box className = "speciesCardContainer">
              <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${AmericanBuryingBeetle})`}}></image></div>
              <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Ray Meibaum</label></div>

              <name id="beetlesName"> American Burying Beetle </name>
            </box>
          </div>

          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${DeltaGreenGrounBeetle})`}}></image></div>
            <name id="beetlesName"> Delta Green Ground Beetle </name>
          </div>

          <div id="box">
            <box className = "speciesCardContainer">
              <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${CoralPinkSandDunesTigerBeetle})`}}></image></div>
              <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Ben Yandell</label></div>

              <name id="beetlesName"> Coral Pink Sand Dunes Tiger</name>
            </box>
          </div>
        </grid>
    </container>
    );
}
