import React from 'react';

import './reptiles.css';

import PhilippineCrocodile from '../../images/endReptiles/crocodileAndAlligator/PhilippineCrocodile.png'
import SlenderSnoutedCrocodile from '../../images/endReptiles/crocodileAndAlligator/Slender-snoutedCrocodile.png'
import ChineseAlligator from '../../images/endReptiles/crocodileAndAlligator/ChineseAlligator.png'
import OrinocoCrocodile from '../../images/endReptiles/crocodileAndAlligator/OrinocoCrocodile.png'
import SiameseCrocodile from '../../images/endReptiles/crocodileAndAlligator/SiameseCrocodile.png'



export const CrocodilesAndAlligatorsCardSet = () => {
  return (
    <container id="two-row">
        <grid id="three-column">
          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${ChineseAlligator})`}}></image></div>
            <name id="reptileName"> Name </name>
          </div>

          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${OrinocoCrocodile})`}}></image></div>
            <name id="reptileName"> Name </name>
          </div>

          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${SiameseCrocodile})`}}></image></div>
            <name id="reptileName"> Name </name>
          </div>
        </grid>


        <grid id="two-column">
          <div id="boxLong">
            <box className = "speciesCardContainer">
              <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${PhilippineCrocodile})`}}></image></div>
              <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Wye & Usk Foundation</label></div>
              <name id="reptileName"> Name sss</name>
            </box>
          </div>

          <div id="boxLong">
            <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${SlenderSnoutedCrocodile})`}}></image></div>
            <name id="reptileName"> Name </name>
          </div>
        </grid>
    </container>
  );
}
