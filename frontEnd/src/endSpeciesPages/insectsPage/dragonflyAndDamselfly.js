import React from 'react';

import './insectsNameSTYLES.css';

import TogoRedJewel from '../../images/endInsects/DragonflyAndDamselfly/TogoRedJewel.png'
import LibellulaAngelina from '../../images/endInsects/DragonflyAndDamselfly/LibellulaAngelina.png'
import TeinobasisPonapensis from '../../images/endInsects/DragonflyAndDamselfly/TeinobasisPonapensis.png'
import MinagrionFranciscoi from '../../images/endInsects/DragonflyAndDamselfly/MinagrionFranciscoi.png'
import BwindiJunglewatcher from '../../images/endInsects/DragonflyAndDamselfly/BwindiJunglewatcher.png'


export const DragonflyAndDamselflyCardsSet = () => {
    return (
    <container id="two-row">
        <grid id="two-column">
          <div id="boxLong">
            <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${LibellulaAngelina})`}}></image></div>
            <name id="dragonflyAndDamselflyName">Libellula Angelina </name>
          </div>

          <div id="boxLong">
            <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${BwindiJunglewatcher})`}}></image></div>
            <name id="dragonflyAndDamselflyName"> Bwindi Junglewatcher </name>
          </div>
        </grid>


        <grid id="three-column">
          <div id="box">
            <box className = "speciesCardContainer">
              <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${TogoRedJewel})`}}></image></div>
              <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Ronan A</label></div>

              <name id="dragonflyAndDamselflyName"> Togo Red Jewel </name>
            </box>
          </div>

          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${TeinobasisPonapensis})`}}></image></div>
            <name id="dragonflyAndDamselflyName"> Teinobasis Ponapensis </name>
          </div>

          <div id="box">
            <box className = "speciesCardContainer">
              <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${MinagrionFranciscoi})`}}></image></div>
              <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Rhainer Guillermo</label></div>

              <name id="dragonflyAndDamselflyName"> Minagrion Franciscoi </name>
            </box>
          </div>
        </grid>
    </container>
    );
}