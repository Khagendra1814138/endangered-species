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
            <box className = "speciesCardContainer">
              <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${LordHoweIslandStickInsect})`}}></image></div>
              <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Wye & Usk Foundation</label></div>
              <name id="stickInsectsAndCricketsName"> Name sss</name>
            </box>
          </div>

          <div id="boxLong">
            <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${ScottsStickInsect})`}}></image></div>
            <name id="stickInsectsAndCricketsName"> Name </name>
          </div>
        </grid>


        <grid id="three-column">
          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${GoldenEyedStickInsect})`}}></image></div>
            <name id="stickInsectsAndCricketsName"> Name </name>
          </div>

          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${SardinianGreenBushCricket})`}}></image></div>
            <name id="stickInsectsAndCricketsName"> Name </name>
          </div>

          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${SeychellesPredatoryBushCricket})`}}></image></div>
            <name id="stickInsectsAndCricketsName"> Name </name>
          </div>
        </grid>
    </container>
    );
}