import React from 'react';

import './insectsNameSTYLES.css';

import LordHoweIslandStickInsect from '../../images/endInsects/stickInsectsAndCrickets/LordHoweIslandStick-insect.png'
import GoldenEyedStickInsect from '../../images/endInsects/stickInsectsAndCrickets/Golden-EyedStick-insect.png'
import ScottsStickInsect from '../../images/endInsects/stickInsectsAndCrickets/ScottsStick-insect.png'
import SardinianGreenBushCricket from '../../images/endInsects/stickInsectsAndCrickets/SardinianGreenBush-cricket.png'
import SeychellesPredatoryBushCricket from '../../images/endInsects/stickInsectsAndCrickets/SeychellesPredatoryBush-cricket.png'


export const StickInsectsAndCricketsCardsSet = () => {
    return (
    <container id="two-row">
        <grid id="two-column">
          <div id="boxLong">
              <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${LordHoweIslandStickInsect})`}}></image></div>     
              
              <name id="stickInsectsAndCricketsName"> Lord HoweIsland StickInsect </name>
          </div>

          <div id="boxLong">
            <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${ScottsStickInsect})`}}></image></div>
            <name id="stickInsectsAndCricketsName"> Scotts StickInsect </name>
          </div>
        </grid>


        <grid id="three-column">
          <div id="box">
            <box className = "speciesCardContainer">
              <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${GoldenEyedStickInsect})`}}></image></div>
              <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Elīna Gulbe</label></div>

              <name id="stickInsectsAndCricketsName"> Golden Eyed StickInsect </name>
            </box>
          </div>

          <div id="box">
            <box className = "speciesCardContainer">
              <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${SardinianGreenBushCricket})`}}></image></div>
              <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Paolo Fontana</label></div>

              <name id="stickInsectsAndCricketsName"> Sardinian Green Cricket </name>
            </box>
          </div>

          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${SeychellesPredatoryBushCricket})`}}></image></div>
            <name id="stickInsectsAndCricketsName"> Seychelles Predatory Cricket </name>
          </div>
        </grid>
    </container>
    );
}