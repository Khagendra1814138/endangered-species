import React from 'react';

import './reptiles.css';

import MarchsPalmPitViper from '../../images/endReptiles/snakes/MarchsPalmPitViper.png'
import TruongSonPitViper from '../../images/endReptiles/snakes/TruongSonPitViper.png'
import AndamanCatSnake from '../../images/endReptiles/snakes/AndamanCatSnake.png'
import BooLiatsKukriSnake from '../../images/endReptiles/snakes/Boo-LiatsKukriSnake.png'
import SchmidtsBoldeyedTreeSnake from '../../images/endReptiles/snakes/SchmidtsBold-eyedTreeSnake.png'

import AshesBushViper from '../../images/endReptiles/snakes/AshesBushViper.png'
import BlombersTreeBoa from '../../images/endReptiles/snakes/BlombersTreeBoa.png'
import MangshanPitViper from '../../images/endReptiles/snakes/MangshanPitViper.png'
import HogIslandBoa from '../../images/endReptiles/snakes/Hog-Island-Boa.png'
import SavuPython from '../../images/endReptiles/snakes/SavuPython.png'



export const SnakesCardSet1 = () => {
    return (
    <container id="two-row">
        <grid id="three-column">
          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${AndamanCatSnake})`}}></image></div>
            <name id="snakeName1"> Name </name>
          </div>

          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${BooLiatsKukriSnake})`}}></image></div>
            <name id="snakeName1"> Name </name>
          </div>

          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${SchmidtsBoldeyedTreeSnake})`}}></image></div>
            <name id="snakeName1"> Name </name>
          </div>
        </grid>


        <grid id="two-column">
          <div id="boxLong">
            <box className = "speciesCardContainer">
              <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${MarchsPalmPitViper})`}}></image></div>
              <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Wye & Usk Foundation</label></div>
              <name id="snakeName1"> Name sss</name>
            </box>
          </div>

          <div id="boxLong">
            <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${TruongSonPitViper})`}}></image></div>
            <name id="snakeName1"> Name </name>
          </div>
        </grid>
    </container>
    );
}





export const SnakesCardSet2 = () => {
    return (
    <container id="two-row">
        <grid id="three-column">
          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${MangshanPitViper})`}}></image></div>
            <name id="snakeName2"> Name </name>
          </div>

          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${HogIslandBoa})`}}></image></div>
            <name id="snakeName2"> Name </name>
          </div>

          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${SavuPython})`}}></image></div>
            <name id="snakeName2"> Name </name>
          </div>
        </grid>


        <grid id="two-column">
          <div id="boxLong">
            <box className = "speciesCardContainer">
              <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${AshesBushViper})`}}></image></div>
              <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Wye & Usk Foundation</label></div>
              <name id="snakeName2"> Name sss</name>
            </box>
          </div>

          <div id="boxLong">
            <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${BlombersTreeBoa})`}}></image></div>
            <name id="snakeName2"> Name </name>
          </div>
        </grid>
    </container>
    );
}