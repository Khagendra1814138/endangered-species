import React from 'react';

import './reptiles.css';

import YangtzeGiantSoftshellTurtle from '../../images/endReptiles/turtleAndTutroise/YangtzeGiantSoftshellTurtle.png'
import ChineseThreeStripedBoxTurtle from '../../images/endReptiles/turtleAndTutroise/ChineseThree-stripedBoxTurtle.png'
import RedCrownedRoofedTurtle from '../../images/endReptiles/turtleAndTutroise/Red-crownedRoofedTurtle.png'
import TestudoKleinmanni from '../../images/endReptiles/turtleAndTutroise/TestudoKleinmanni.png'
import Hickatee from '../../images/endReptiles/turtleAndTutroise/Hickatee.png'

import BurmeseRoofedTurtle from '../../images/endReptiles/turtleAndTutroise/BurmeseRoofedTurtle.png'
import WesternSwampTurtle from '../../images/endReptiles/turtleAndTutroise/WesternSwampTurtle.png'
import BogTurtle from '../../images/endReptiles/turtleAndTutroise/BogTurtle.png'
import PloughshareTortoise from '../../images/endReptiles/turtleAndTutroise/PloughshareTortoise.png'
import NorthernRiverTerrapin from '../../images/endReptiles/turtleAndTutroise/NorthernRiverTerrapin.png'




export const TurtlesAndTortoisesCardSet1  = () => {
    return (
    <container id="two-row">
        <grid id="three-column">
          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${ChineseThreeStripedBoxTurtle})`}}></image></div>
            <name id="turtles1Name"> Name </name>
          </div>

          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${RedCrownedRoofedTurtle})`}}></image></div>
            <name id="turtles1Name"> Name </name>
          </div>

          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${TestudoKleinmanni})`}}></image></div>
            <name id="turtles1Name"> Name </name>
          </div>
        </grid>


        <grid id="two-column">
          <div id="boxLong">
            <box className = "speciesCardContainer">
              <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${YangtzeGiantSoftshellTurtle})`}}></image></div>
              <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Wye & Usk Foundation</label></div>
              <name id="turtles1Name"> Name sss</name>
            </box>
          </div>

          <div id="boxLong">
            <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${BurmeseRoofedTurtle})`}}></image></div>
            <name id="turtles1Name"> Name </name>
          </div>
        </grid>
    </container>
    );
}





export const TurtlesAndTortoisesCardSet2 = () => {
    return (
    <container id="two-row">
        <grid id="three-column">
            <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${Hickatee})`}}></image></div>
            <name id="turtles2Name"> Name </name>
            </div>

            <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${PloughshareTortoise})`}}></image></div>
            <name id="turtles2Name"> Name </name>
            </div>

            <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${NorthernRiverTerrapin})`}}></image></div>
            <name id="turtles2Name"> Name </name>
            </div>
        </grid>


        <grid id="two-column">
            <div id="boxLong">
            <box className = "speciesCardContainer">
                <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${WesternSwampTurtle})`}}></image></div>
                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Wye & Usk Foundation</label></div>
                <name id="turtles2Name"> Name sss</name>
            </box>
            </div>

            <div id="boxLong">
            <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${BogTurtle})`}}></image></div>
            <name id="turtles2Name"> Name </name>
            </div>
        </grid>
    </container>
    );
}