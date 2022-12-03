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
            <box className = "speciesCardContainer">
              <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${AndamanCatSnake})`}}></image></div>
              <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Karin Saner</label></div>

              <name id="snakeName1"> Andaman Cat Snake </name>
            </box>
          </div>

          <div id="box">
            <box className = "speciesCardContainer">
              <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${BooLiatsKukriSnake})`}}></image></div>
              <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Chris Hay</label></div>

              <name id="snakeName1"> BooLiats Kukri Snake </name>
            </box>
          </div>

          <div id="box">
            <box className = "speciesCardContainer">
              <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${SchmidtsBoldeyedTreeSnake})`}}></image></div>
              <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Matthieu Berroneau</label></div>

              <name id="snakeName1"> Schmidts Boldeyed</name>
            </box>
          </div>
        </grid>


        <grid id="two-column">
          <div id="boxLong">
            <box className = "speciesCardContainer">
              <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${MarchsPalmPitViper})`}}></image></div>
              <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Edward Evans</label></div>

              <name id="snakeName1"> Marchs Palm Pit Viper </name>
            </box>
          </div>

          <div id="boxLong">
            <box className = "speciesCardContainer">
              <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${TruongSonPitViper})`}}></image></div>
              <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Lĩnh Nguyễn</label></div>
              
              <name id="snakeName1"> Truong Son Pit Viper </name> 
            </box>
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
            <name id="snakeName2"> Mangshan Pit Viper </name>
          </div>

          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${HogIslandBoa})`}}></image></div>
            <name id="snakeName2"> HogIsland Boa </name>
          </div>

          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${SavuPython})`}}></image></div>
            <name id="snakeName2"> Savu Python </name>
          </div>
        </grid>


        <grid id="two-column">
          <div id="boxLong">
            <box className = "speciesCardContainer">
              <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${AshesBushViper})`}}></image></div>
              <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Matthieu Berroneau</label></div>
              
              <name id="snakeName2"> Ashes Bush Viper</name>
            </box>
          </div>

          <div id="boxLong">
            <box className = "speciesCardContainer">
              <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${BlombersTreeBoa})`}}></image></div>
              <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Jorge H. VALENCIA</label></div>

              <name id="snakeName2"> Blombers Tree Boa </name>
            </box>
          </div>
        </grid>
    </container>
    );
}