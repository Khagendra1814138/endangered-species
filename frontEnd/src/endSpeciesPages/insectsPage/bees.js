import React from 'react';

import './insectsNameSTYLES.css';

import FranklinsBumbleBee from '../../images/endInsects/bees/FranklinsBumbleBee.png'
import RustyPatchedBumbleBee from '../../images/endInsects/bees/RustyPatchedBumbleBee.png'
import CrotchBumbleBee from '../../images/endInsects/bees/CrotchBumbleBee.png'
import BombusFraternus from '../../images/endInsects/bees/BombusFraternus.png'
import Moscardón from '../../images/endInsects/bees/Moscardón.png'


export const BeesCardsSet = () => {
    return (
    <container id="two-row">
        <grid id="two-column">
          <div id="boxLong">
              <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${CrotchBumbleBee})`}}></image></div>
            
              <name id="beesName"> Crotch BumbleBee</name>
          </div>

          <div id="boxLong">
            <box className = "speciesCardContainer">
              <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${Moscardón})`}}></image></div>
              <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Michael Usher</label></div>

              <name id="beesName"> Moscardón BumbleBee </name>
            </box>
          </div>
        </grid>


        <grid id="three-column">
          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${FranklinsBumbleBee})`}}></image></div>
            <name id="beesName"> Franklins BumbleBee </name>
          </div>

          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${RustyPatchedBumbleBee})`}}></image></div>
            <name id="beesName"> Rusty Patched BumbleBee </name>
          </div>

          <div id="box">
              <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${BombusFraternus})`}}></image></div>
              <name id="beesName"> Bombus Fraternus </name>
          </div>
        </grid>
    </container>
    );
}