import React from 'react';

import './insectsNameSTYLES.css';

import CrauPlainGrasshopper from '../../images/endInsects/grasshoppers/CrauPlainGrasshopper.png'
import EpirusDancingGrasshopper from '../../images/endInsects/grasshoppers/EpirusDancingGrasshopper.png'
import CikaMountainGrasshopper from '../../images/endInsects/grasshoppers/CikaMountainGrasshopper.png'
import BanatGrasshopper from '../../images/endInsects/grasshoppers/BanatGrasshopper.png'
import ZanzibarGiantForestGrasshopper from '../../images/endInsects/grasshoppers/ZanzibarGiantForestGrasshopper.png'


export const GrasshoppersCardsSet = () => {
    return (
    <container id="two-row">
        <grid id="two-column">
          <div id="boxLong">
            <box className = "speciesCardContainer">
              <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${BanatGrasshopper})`}}></image></div>
              <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Wye & Usk Foundation</label></div>
              <name id="grasshoppersName"> Name sss</name>
            </box>
          </div>

          <div id="boxLong">
            <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${ZanzibarGiantForestGrasshopper})`}}></image></div>
            <name id="grasshoppersName"> Name </name>
          </div>
        </grid>


        <grid id="three-column">
          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${CrauPlainGrasshopper})`}}></image></div>
            <name id="grasshoppersName"> Name </name>
          </div>

          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${EpirusDancingGrasshopper})`}}></image></div>
            <name id="grasshoppersName"> Name </name>
          </div>

          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${CikaMountainGrasshopper})`}}></image></div>
            <name id="grasshoppersName"> Name </name>
          </div>
        </grid>
    </container>
    );
}