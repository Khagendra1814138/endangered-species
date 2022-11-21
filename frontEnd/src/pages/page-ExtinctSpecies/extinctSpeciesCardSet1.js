import React from 'react';
import {Component} from "react";

import '../../pages/publicMain.css';
import './extinctSpecies.css';

import carolinaParakeet from '../../images/extinctSpecies/carolinaParakeet.png';
import Kamao from '../../images/extinctSpecies/Kamao.png';
import passengerPigeon from '../../images/extinctSpecies/passengerPigeon.png';
import dodo from '../../images/extinctSpecies/dodo.png';
import SplendidPoisonDartFrog from '../../images/extinctSpecies/SplendidPoisonDartFrog.png';
import GoldenToad2 from '../../images/extinctSpecies/GoldenToad2.png';

//Text paragraph
import {ExtinctPara2} from'./extinctSpeciesParagraph.js';



export class ExtinctSpeciesCardSet1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          darkMode: false,
          fontSize: 18,
          ExtinctSpeciesItems: [],
        };
      }
    
    render(){
  
    return (

    <div>
        <div id='twoColumnGridContainer'>
            <div id='flexFrame'>
                <box id="twoHolder">
                    <box id="extImgFrame">
                    <image id='extinctSpeciesImage' style={{ backgroundImage: `url(${carolinaParakeet})`}}></image>
                    <div className="overlay overlayLeft"><label className="photograpgerName">Photograph by Christopher Klassen</label></div>
                    </box>
                </box>
                <box id="twoHolder">
                    <subhead id={this.state.darkMode ? "extinctSpeciesName-Dark" : "extinctSpeciesName"}> This is the title </subhead>
                    <p id={this.state.darkMode ? "extinctSpeciesParagraph-Dark" : "extinctSpeciesParagraph"} style={{fontSize: `${this.state.fontSize}px`}}> 
                      <ExtinctPara2/> 
                    </p>
                </box> 
            </div>
            <div id='flexFrame'>
                <box id="twoHolder">
                  <subhead id={this.state.darkMode ? "extinctSpeciesName-Dark" : "extinctSpeciesName"}> This is the title </subhead>
                  <p id={this.state.darkMode ? "extinctSpeciesParagraph2-Dark" : "extinctSpeciesParagraph2"} style={{fontSize: `${this.state.fontSize}px`}}> 
                    <ExtinctPara2/> 
                  </p>
                </box>
                <box id="twoHolder">
                    <box id="extImgFrame">
                    <image id='extinctSpeciesImage' style={{ backgroundImage: `url(${Kamao})`}}></image>
                    <div className="overlay overlayLeft"><label className="photograpgerName">Photograph by Lars Petersson</label></div>
                    </box>
                </box>
            </div>
          </div>


          <div id='twoColumnGridContainer'>
            <div id='flexFrame'>
                <box id="twoHolder">
                    <box id="extImgFrame">
                    <image id='extinctSpeciesImage' style={{ backgroundImage: `url(${passengerPigeon})`}}></image>
                    <div className="overlay overlayLeft"><label className="photograpgerName">Photograph by Christopher Klassen</label></div>
                    </box>
                </box>
                <box id="twoHolder">
                  <subhead id={this.state.darkMode ? "extinctSpeciesName-Dark" : "extinctSpeciesName"}> This is the title </subhead>
                  <p id={this.state.darkMode ? "extinctSpeciesParagraph-Dark" : "extinctSpeciesParagraph"} style={{fontSize: `${this.state.fontSize}px`}}> 
                    <ExtinctPara2/> 
                  </p>
                </box> 
            </div>

            <div id='flexFrame'>
              <box id="twoHolder">
                  <subhead id={this.state.darkMode ? "extinctSpeciesName-Dark" : "extinctSpeciesName"}> This is the title </subhead>
                  <p id={this.state.darkMode ? "extinctSpeciesParagraph2-Dark" : "extinctSpeciesParagraph2"} style={{fontSize: `${this.state.fontSize}px`}}> 
                    <ExtinctPara2/> 
                  </p>
              </box>
              <box id="twoHolder">
                  <box id="extImgFrame">
                  <image id='extinctSpeciesImage' style={{ backgroundImage: `url(${dodo})`}}></image>
                  <div className="overlay overlayLeft"><label className="photograpgerName">Photograph by Lars Petersson</label></div>
                  </box>
              </box>
            </div>
          </div>


          <div id='twoColumnGridContainer'>
            <div id='flexFrame'>
                <box id="twoHolder">
                    <box id="extImgFrame">
                    <image id='extinctSpeciesImage' style={{ backgroundImage: `url(${SplendidPoisonDartFrog})`}}></image>
                    <div className="overlay overlayLeft"><label className="photograpgerName">Photograph by Christopher Klassen</label></div>
                    </box>
                </box>
                <box id="twoHolder">
                  <subhead id={this.state.darkMode ? "extinctSpeciesName-Dark" : "extinctSpeciesName"}> This is the title </subhead>
                  <p id={this.state.darkMode ? "extinctSpeciesParagraph-Dark" : "extinctSpeciesParagraph"} style={{fontSize: `${this.state.fontSize}px`}}> 
                    <ExtinctPara2/> 
                  </p>
                </box> 
            </div>

            <div id='flexFrame'>
              <box id="twoHolder">
                <subhead id={this.state.darkMode ? "extinctSpeciesName-Dark" : "extinctSpeciesName"}> This is the title </subhead>
                <p id={this.state.darkMode ? "extinctSpeciesParagraph-Dark2" : "extinctSpeciesParagraph2"} style={{fontSize: `${this.state.fontSize}px`}}> 
                  <ExtinctPara2/> 
                </p>
              </box>
              <box id="twoHolder">
                  <box id="extImgFrame">
                  <image id='extinctSpeciesImage' style={{ backgroundImage: `url(${GoldenToad2})`}}></image>
                  <div className="overlay overlayLeft"><label className="photograpgerName">Photograph by Lars Petersson</label></div>
                  </box>
              </box>
            </div>
          </div>
          <line className = "largeLine"></line>
     
    </div>
    );
}
}