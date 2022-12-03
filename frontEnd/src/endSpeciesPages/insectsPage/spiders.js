import React from 'react';

import './insectsNameSTYLES.css';

import OrnamentalTarantulas from '../../images/endInsects/spiders/OrnamentalTarantulas.png'
import DesertasWolfSpider from '../../images/endInsects/spiders/DesertasWolfSpider.png'
import PeacockTarantula from '../../images/endInsects/spiders/PeacockTarantula.png'
import VesubiaJugorum from '../../images/endInsects/spiders/VesubiaJugorum.png'
import MexicanOrangeBeauty from '../../images/endInsects/spiders/MexicanOrangeBeauty.png'


export const SpidersCardsSet = () => {
    return (
    <container id="two-row">
        <grid id="two-column">
          <div id="boxLong">
            <box className = "speciesCardContainer">
              <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${OrnamentalTarantulas})`}}></image></div>
              <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Viral Prajapati</label></div>
              
              <name id="spiderName"> Ornamental Tarantulas </name>
            </box>
          </div>

          <div id="boxLong">
            <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${DesertasWolfSpider})`}}></image></div>
            <name id="spiderName"> Desertas Wolf Spider </name>
          </div>
        </grid>


        <grid id="three-column">
          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${PeacockTarantula})`}}></image></div>
            <name id="spiderName"> Peacock Tarantula </name>
          </div>

          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${VesubiaJugorum})`}}></image></div>
            <name id="spiderName"> Vesubia Jugorum </name>
          </div>

          <div id="box">
            <box className = "speciesCardContainer">
              <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${MexicanOrangeBeauty})`}}></image></div>
              <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Eddy Hijmensen</label></div>

              <name id="spiderName"> Mexican Orange Beauty </name>
            </box>
          </div>
        </grid>
    </container>
    );
}