import React from 'react';
import { Component } from "react";
import ReactPlayer from 'react-player';

import '../pages/publicMain.css';
import './fungus.css';

import {FungiPageSuvNav} from "../subNav/subNavigation";
import headerFungus from '../images/headerFungus.png';

//fungus
import barbiePagoda from '../images/endFungus/barbiePagoda.png';
import armillariaEctypa from '../images/endFungus/armillariaEctypa.png';
import boletopsisNothofagi from '../images/endFungus/boletopsisNothofagi.png';
import boletusLoyo from '../images/endFungus/boletusLoyo.png';
import caterpillarFungus from '../images/endFungus/caterpillarFungus.png';

import bovistaPaludosa from '../images/endFungus/bovistaPaludosa.png';
import cystodermaCarpaticum from '../images/endFungus/cystodermaCarpaticum.png';
import destuntziaRubra from '../images/endFungus/destuntziaRubra.png';
import entolomaBloxamii from '../images/endFungus/entolomaBloxamii.png';
import entolomaRavinense from '../images/endFungus/entolomaRavinense.png';

import hygrocybeBoothii from '../images/endFungus/hygrocybeBoothii.png';
import greenCageFungus from '../images/endFungus/greenCageFungus.png';
import phylloporusPelletieri from '../images/endFungus/phylloporusPelletieri.png';
import tulostomaNiveum from '../images/endFungus/tulostomaNiveum.png';
import whiteFerula from '../images/endFungus/whiteFerula.png';

import FontSizeIncreaser from '../readAccessibilityGuideFunctions/fontSizeIncrease';
import DarkModeFunction from '../darkMode/darkMode';

export class Fungus extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
      fontSize: 18,
      endangeredFungusItems: [],
    };
  }

  
  componentDidMount(){
      fetch("http://localhost:5000/api/fungiSpecies")
      .then (rest => rest.json())
      .then (endangeredFungusRecords => {
      this.setState({
          isLoaded: true,
          endangeredFungusItems: endangeredFungusRecords,
        })
      console.log(endangeredFungusRecords)
      });
  }

  render(){
    
    return( 
      <div className={this.state.darkMode ? "pageMainFrameDark" : "pageMainFrameLight"}>

{/* //////////////////////////////////////////////////////FontSizeFunction////////////////////////////////////////////////////// */}
<FontSizeIncreaser fontSize={this.state.fontSize} setFontSize={(size) => this.setState({ fontSize: size })} />
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <box className = "landingImageBox2" style={{ backgroundImage: `url(${headerFungus})`}}></box>

{/* //////////////////////////////////////////////////////DarkModeFunction////////////////////////////////////////////////////// */}
<DarkModeFunction darkMode={this.state.darkMode} setDarkmode={(darkMode) => this.setState({darkMode})} />
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <body className='pageBodyFrame'>

          <div className='container'>
            <div className = "mainSubHeadFrame">
              <subhead className = {this.state.darkMode ? "subheadLrgDrk" : "subheadLrg"}>Endangered Fungus Species</subhead>
            </div>
        
            <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
              Wass awass
            </paragragraph>


            <box className = "box4">
              <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                  <box className = "speciesCardContainer">
                    <box className = "speciesCardContainer">
                      <image className='fungusMediumImage'>
                        <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${armillariaEctypa})`}}></div>
                      </image>
                      <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Pärismaalane</label></div>
                      
                      <label className = {this.state.darkMode ? "fungusName-Dark" : "fungusName"}>
                        {this.state.endangeredFungusItems.length > 0 && (<div> {this.state.endangeredFungusItems[6].name} </div>)}
                      </label>
                    </box>
                  </box>
                </box>

                <box className = "MedBox">
                  <box className = "speciesCardContainer">
                    <image className='fungusMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${boletopsisNothofagi})`}}></div>
                    </image>
                    <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Jerry A. Cooper</label></div>
                    
                    <label className = {this.state.darkMode ? "fungusName-Dark" : "fungusName"}>
                      {this.state.endangeredFungusItems.length > 0 && (<div> {this.state.endangeredFungusItems[5].name} </div>)}
                    </label>
                  </box>
                </box>
              </box>

              <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                  <box className = "speciesCardContainer">
                    <image className='fungusMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${boletusLoyo})`}}></div>
                    </image>
                    <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Felix Duran</label></div>

                    <label className = {this.state.darkMode ? "fungusName-Dark" : "fungusName"}>
                      {this.state.endangeredFungusItems.length > 0 && (<div> {this.state.endangeredFungusItems[3].name} </div>)}
                    </label>
                  </box>
                </box>

                <box className = "MedBox">
                  <image className='fungusMediumImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${caterpillarFungus})`}}></div>
                  </image>
                  <label className = {this.state.darkMode ? "fungusName-Dark" : "fungusName"}>
                    {this.state.endangeredFungusItems.length > 0 && (<div> {this.state.endangeredFungusItems[7].name} </div>)}
                  </label>
                </box>
              </box>

              <box className = "largeSpeciesImgFrame">
                <image className= 'fungusLargeImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${barbiePagoda})`}}></div>
                </image>
                <label className = {this.state.darkMode ? "fungusName-Dark" : "fungusName"}>
                  {this.state.endangeredFungusItems.length > 0 && (<div> {this.state.endangeredFungusItems[1].name} </div>)}
                </label>
              </box>
            </box>
          </div>

          <div className= {this.state.darkMode ? "videoFrame-Dark" : "videoFrame"}>
              <line className = "thinLine"></line>
              <div className= {this.state.darkMode ? "video-Dark" : "video"}>
                <paragragraph className="video-Discription">A video about why Fungus are Important.</paragragraph>
                <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=BlcKBKJ8uro"/>
              </div> 
              <line className = "thinLine"></line> 
          </div>




        
          <div className='container'>
            <box className = "box4">
              <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                  <image className='fungusMediumImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${cystodermaCarpaticum})`}}></div>
                  </image>
                  <label className = {this.state.darkMode ? "fungusName-Dark" : "fungusName2"}>
                    {this.state.endangeredFungusItems.length > 0 && (<div> {this.state.endangeredFungusItems[14].name} </div>)}
                  </label>
                </box>

                <box className = "MedBox">
                  <box className = "speciesCardContainer">
                    <image className='fungusMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${destuntziaRubra})`}}></div>
                    </image>
                    <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Noah Siegel</label></div>

                    <label className = {this.state.darkMode ? "fungusName-Dark" : "fungusName2"}>
                      {this.state.endangeredFungusItems.length > 0 && (<div> {this.state.endangeredFungusItems[2].name} </div>)}
                    </label>
                  </box>
                </box>
              </box>

              <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                  <image className='fungusMediumImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${entolomaBloxamii})`}}></div>
                  </image>
                  <label className = {this.state.darkMode ? "fungusName-Dark" : "fungusName2"}>
                    {this.state.endangeredFungusItems.length > 0 && (<div> {this.state.endangeredFungusItems[10].name} </div>)}
                  </label>
                </box>

                <box className = "MedBox">
                  <box className = "speciesCardContainer">
                    <image className='fungusMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${entolomaRavinense})`}}></div>
                    </image>                 
                    <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by David Catcheside</label></div>

                    <label className = {this.state.darkMode ? "fungusName-Dark" : "fungusName2"}>
                      {this.state.endangeredFungusItems.length > 0 && (<div> {this.state.endangeredFungusItems[4].name} </div>)}
                    </label>
                  </box>
                </box>
              </box>

              <box className = "largeSpeciesImgFrame">
                <box className = "speciesCardContainer">
                  <image className= 'fungusLargeImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${bovistaPaludosa})`}}></div>
                  </image>
                  <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Grażyna Domian</label></div>

                  <label className = {this.state.darkMode ? "fungusName-Dark" : "fungusName2"}>
                    {this.state.endangeredFungusItems.length > 0 && (<div> {this.state.endangeredFungusItems[11].name} </div>)}
                  </label>
                </box>
              </box>
            </box>
          </div>

          <div className= {this.state.darkMode ? "videoFrame-Dark" : "videoFrame"}>
              <line className = "thinLine"></line>
              <div className= {this.state.darkMode ? "video-Dark" : "video"}>
                <paragragraph className="video-Discription">A video about Mycelium Fungus</paragragraph>
                <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=cApVVuuqLFY"/>
              </div>
              <line className = "thinLine"></line>  
          </div>





          <div className='container'>
            <box className = "box4">
              <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                  <image className='fungusMediumImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${greenCageFungus})`}}></div>
                  </image>
                  <label className = {this.state.darkMode ? "fungusName-Dark" : "fungusName3"}>
                    {this.state.endangeredFungusItems.length > 0 && (<div> {this.state.endangeredFungusItems[12].name} </div>)}
                  </label>
                </box>

                <box className = "MedBox">
                  <box className = "speciesCardContainer">
                    <image className='fungusMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${phylloporusPelletieri})`}}></div>
                    </image>
                    <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Malcolm Storey</label></div>

                    <label className = {this.state.darkMode ? "fungusName-Dark" : "fungusName3"}>
                      {this.state.endangeredFungusItems.length > 0 && (<div> {this.state.endangeredFungusItems[9].name} </div>)}
                    </label>
                  </box>
                </box>
              </box>

              <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                  <image className='fungusMediumImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${tulostomaNiveum})`}}></div>
                  </image>
                  <label className = {this.state.darkMode ? "fungusName-Dark" : "fungusName3"}>
                    {this.state.endangeredFungusItems.length > 0 && (<div> {this.state.endangeredFungusItems[8].name} </div>)}
                  </label>
                </box>

                <box className = "MedBox">
                  <box className = "speciesCardContainer">
                    <image className='fungusMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${whiteFerula})`}}></div>
                    </image>
                    <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Giuseppe Venturella</label></div>

                    <label className = {this.state.darkMode ? "fungusName-Dark" : "fungusName3"}>
                      {this.state.endangeredFungusItems.length > 0 && (<div> {this.state.endangeredFungusItems[0].name} </div>)}
                    </label>
                  </box>
                </box>
              </box>

              <box className = "largeSpeciesImgFrame">
                <box className = "speciesCardContainer">
                  <image className= 'fungusLargeImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${hygrocybeBoothii})`}}></div>
                  </image>              
                  <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Ken Beath</label></div>
                  
                  <label className = {this.state.darkMode ? "fungusName-Dark" : "fungusName3"}>
                    {this.state.endangeredFungusItems.length > 0 && (<div> {this.state.endangeredFungusItems[13].name} </div>)}
                  </label>
                </box>
              </box>
            </box>
          </div>


          <div className= {this.state.darkMode ? "videoFrame-Dark" : "videoFrame"}>
              <line className = "thinLine"></line>
              <div className= {this.state.darkMode ? "video-Dark" : "video"}>
                <paragragraph className="video-Discription">A video about Killer Fungus.</paragragraph>
                <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=ROQrbWkV4HI"/>
              </div> 
              <line className = "thinLine"></line> 
          </div>



        </body>
        <FungiPageSuvNav/>
      </div>
    );
  }
}