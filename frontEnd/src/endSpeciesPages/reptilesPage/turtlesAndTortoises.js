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
            <name id="turtles1Name"> Chinese Three Striped </name>
          </div>

          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${RedCrownedRoofedTurtle})`}}></image></div>
            <name id="turtles1Name"> Red Crowned Roofed </name>
          </div>

          <div id="box">
            <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${TestudoKleinmanni})`}}></image></div>
            <name id="turtles1Name"> Testudo Kleinmanni </name>
          </div>
        </grid>


        <grid id="two-column">
          <div id="boxLong">
            <box className = "speciesCardContainer">
              <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${YangtzeGiantSoftshellTurtle})`}}></image></div>
              <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Rachel Nuwer</label></div>

              <name id="turtles1Name"> Yangtze Giant Softshell </name>
            </box>
          </div>

          <div id="boxLong">
            <box className = "speciesCardContainer">
              <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${BurmeseRoofedTurtle})`}}></image></div>
              <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Zooish</label></div>
              
              <name id="turtles1Name"> Burmese Roofed </name>
            </box>
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
              <box className = "speciesCardContainer">
                <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${Hickatee})`}}></image></div>
                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Milena Mendez</label></div>

                <name id="turtles2Name"> Hickatee </name>
              </box>
            </div>

            <div id="box">
              <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${PloughshareTortoise})`}}></image></div>
              <name id="turtles2Name"> Ploughshare </name>
            </div>

            <div id="box">
              <div id="imageOverflowHider"><image id="mediumReptileImage" style={{ backgroundImage: `url(${NorthernRiverTerrapin})`}}></image></div>
              <name id="turtles2Name"> Northern River Terrapin </name>
            </div>
        </grid>


        <grid id="two-column">
            <div id="boxLong">
              <box className = "speciesCardContainer">
                <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${WesternSwampTurtle})`}}></image></div>
                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Alyssa Jane Tucker</label></div>
                
                <name id="turtles2Name"> Western Swamp Turtle </name>
              </box>
            </div>

            <div id="boxLong">
              <box className = "speciesCardContainer">
                <div id="imageOverflowHider"><image id="largeReptileImage" style={{ backgroundImage: `url(${BogTurtle})`}}></image></div>
                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by By Nathanael Stanek</label></div>
                
                <name id="turtles2Name"> Bog Turtle </name>
              </box>
            </div>
        </grid>
    </container>
    );
}