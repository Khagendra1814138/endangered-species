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
              <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Wye & Usk Foundation</label></div>
              <name id="spiderName"> Name sss</name>
            </box>
          </div>

          <div id="boxLong">
            <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${DesertasWolfSpider})`}}></image></div>
            <name id="spiderName"> Name </name>
          </div>
        </grid>


        <grid id="three-column">
          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${PeacockTarantula})`}}></image></div>
            <name id="spiderName"> Name </name>
          </div>

          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${VesubiaJugorum})`}}></image></div>
            <name id="spiderName"> Name </name>
          </div>

          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${MexicanOrangeBeauty})`}}></image></div>
            <name id="spiderName"> Name </name>
          </div>
        </grid>
    </container>
    );
}