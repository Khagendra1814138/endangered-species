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
            <name id="reptileName"> Chinese Alligator </name>
          </div>

          <div id="box">
            <box className = "speciesCardContainer">
              <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${OrinocoCrocodile})`}}></image></div>
              <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Nagel</label></div>

              <name id="reptileName"> Orinoco Crocodile </name>
            </box>
          </div>

          <div id="box">
            <box className = "speciesCardContainer">
              <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${SiameseCrocodile})`}}></image></div>
              <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Ton Smiths</label></div>

              <name id="reptileName"> Siamese Crocodile </name>
            </box>
          </div>
        </grid>


        <grid id="two-column">
          <div id="boxLong">
              <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${PhilippineCrocodile})`}}></image></div>
              <name id="reptileName">Philippine Crocodile</name>
          </div>

          <div id="boxLong">
            <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${SlenderSnoutedCrocodile})`}}></image></div>
            <name id="reptileName"> Slender Snouted Crocodile </name>
          </div>
        </grid>
    </container>
  );
}
