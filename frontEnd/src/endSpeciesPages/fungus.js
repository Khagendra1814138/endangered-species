import React from 'react';
import { Component } from "react";
import ReactPlayer from 'react-player';

import '../pages/publicMain.css';
import './fungus.css';

import {FungiSideBarPageNav} from "../sideBarPagesNav/EnFungiSideBarPageNav";

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
// import config from '../config';

//Text To Voices
import {FungusPara1Voice} from "../textToVoice/endFungusPageVoice";
import {FungusPara2Voice} from "../textToVoice/endFungusPageVoice";
import {FungusPara3Voice} from "../textToVoice/endFungusPageVoice";
import {FungusPara4Voice} from "../textToVoice/endFungusPageVoice";
import {FungusPara5Voice} from "../textToVoice/endFungusPageVoice";
import {FungusPara6Voice} from "../textToVoice/endFungusPageVoice";


export class Fungus extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
      fontSize: 18,
      //endangeredFungusItems: [],
    };
  }

  
  // componentDidMount(){
  //     fetch(config.backendUrl + "api/fungiSpecies")
  //     .then (rest => rest.json())
  //     .then (endangeredFungusRecords => {
  //     this.setState({
  //         isLoaded: true,
  //         endangeredFungusItems: endangeredFungusRecords,
  //       })
  //     console.log(endangeredFungusRecords)
  //     });
  // }

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
          <FungiSideBarPageNav/>

          <div className = "mainSubHeadFrame">
            <subhead className = {this.state.darkMode ? "subheadLrgDrk" : "subheadLrg"}>Endangered Fungus Species</subhead>
          </div>

          <div className='container'>
            <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
              Fungi are one of the most important species in our planet. They may not look that useful but fungi have a crucial role to keep our planet ecosystem balanced and are essential for circle of life.
              Also, they provide food, medicine, textiles/materials, recycles waste, cleans deadly chemicals and can even control pests and be used as a bio fuel. 
              Furthermore, scientists are still researching and finding countless potential solutions, which can be benifical to humans.
            </paragragraph>
            <FungusPara1Voice/>
            {/* http://www.countrysideinfo.co.uk/fungi/importce.htm */}

            {/* https://courses.lumenlearning.com/boundless-biology/chapter/importance-of-fungi-in-human-life/ */}

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
                        {/* {this.state.endangeredFungusItems.length > 0 && (<div> {this.state.endangeredFungusItems[6].name} </div>)} */}
                        Armillaria Ectypa
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
                      {/* {this.state.endangeredFungusItems.length > 0 && (<div> {this.state.endangeredFungusItems[5].name} </div>)} */}
                      Boletopsis Nothofagi
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
                      {/* {this.state.endangeredFungusItems.length > 0 && (<div> {this.state.endangeredFungusItems[3].name} </div>)} */}
                      Boletus Loyo
                    </label>
                  </box>
                </box>

                <box className = "MedBox">
                  <image className='fungusMediumImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${caterpillarFungus})`}}></div>
                  </image>
                  <label className = {this.state.darkMode ? "fungusName-Dark" : "fungusName"}>
                    {/* {this.state.endangeredFungusItems.length > 0 && (<div> {this.state.endangeredFungusItems[7].name} </div>)} */}
                    Caterpillar Fungus
                  </label>
                </box>
              </box>

              <box className = "largeSpeciesImgFrame">
                <image className= 'fungusLargeImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${barbiePagoda})`}}></div>
                </image>
                <label className = {this.state.darkMode ? "fungusName-Dark" : "fungusName"}>
                  {/* {this.state.endangeredFungusItems.length > 0 && (<div> {this.state.endangeredFungusItems[1].name} </div>)} */}
                  Barbie Pagoda
                </label>
              </box>
            </box>
          </div>


{/* ///////// V I D E O ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
<div className= {this.state.darkMode ? "video-Dark" : "video"}>
  <line className="thinLine"></line>
    <paragragraph className="video-Discription">A video about why Fungus are Important.</paragragraph>
    <ReactPlayer className='videoFrame' controls={true} url="https://www.youtube.com/watch?v=BlcKBKJ8uro" height="450px" width="800px"/>
  <line className="thinLine"></line>
</div> 
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}  
      
          <div className='container'>
            <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
              <div>
                <b>Provides food:</b>
                <br></br>
                <br></br>
                Fungi provides sources of food for us human everyday and event to other animals species in the form of mushrooms.
                Not only mushrooms, but fungi are found and used in many food and drink products.
                For example, they are found in foods like cheese, beer, wine, cakes, bread, soyabean product and many more.
              </div>
            </paragragraph>
            <FungusPara2Voice/>

            <box className = "box4">
              <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                  <image className='fungusMediumImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${cystodermaCarpaticum})`}}></div>
                  </image>
                  <label className = {this.state.darkMode ? "fungusName-Dark" : "fungusName2"}>
                    {/* {this.state.endangeredFungusItems.length > 0 && (<div> {this.state.endangeredFungusItems[14].name} </div>)} */}
                    Cystoderma Carpaticum
                  </label>
                </box>

                <box className = "MedBox">
                  <box className = "speciesCardContainer">
                    <image className='fungusMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${destuntziaRubra})`}}></div>
                    </image>
                    <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Noah Siegel</label></div>

                    <label className = {this.state.darkMode ? "fungusName-Dark" : "fungusName2"}>
                      {/* {this.state.endangeredFungusItems.length > 0 && (<div> {this.state.endangeredFungusItems[2].name} </div>)} */}
                      Destuntzia Rubra
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
                    {/* {this.state.endangeredFungusItems.length > 0 && (<div> {this.state.endangeredFungusItems[10].name} </div>)} */}
                    Entoloma Bloxamii
                  </label>
                </box>

                <box className = "MedBox">
                  <box className = "speciesCardContainer">
                    <image className='fungusMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${entolomaRavinense})`}}></div>
                    </image>                 
                    <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by David Catcheside</label></div>

                    <label className = {this.state.darkMode ? "fungusName-Dark" : "fungusName2"}>
                      {/* {this.state.endangeredFungusItems.length > 0 && (<div> {this.state.endangeredFungusItems[4].name} </div>)} */}
                      Entoloma Ravinense
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
                    {/* {this.state.endangeredFungusItems.length > 0 && (<div> {this.state.endangeredFungusItems[11].name} </div>)} */}
                    Bovista Paludosa
                  </label>
                </box>
              </box>
            </box>
          </div>


          <div className='container'>
            <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
              <div>
                <b>Medicine & Pest control:</b>
                <br></br> 
                <br></br>
                Fungi are found in many medicine that treats human and animal diseases because they naturally produce antibiotics to kill or inhibit the growth of bacteria.
                Some medicines and drugs that are made of fungi are Penicillian, Paclitaxel (treat cancer), and other medicine that treats Malaria, diabetes... the lists goes on.
                Some gungi like the Chinese caterpillar fungus, which parasitise insects, can be benifical to farmers for controlling insect pests.
              </div>
            </paragragraph>
            <FungusPara3Voice/>
          </div>


{/* ///////// V I D E O ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
<div className= {this.state.darkMode ? "video-Dark" : "video"}>
  <line className="thinLine"></line>
    <paragragraph className="video-Discription">A video about how Mycelium Fungus can replace plastic in the future.</paragragraph>
    <ReactPlayer className='videoFrame' controls={true} url="https://www.youtube.com/watch?v=cApVVuuqLFY" height="450px" width="800px"/>
  <line className="thinLine"></line>
</div>
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


          <div className='container'>
            <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
              <div>
                <b>Recycle & Plant growth:</b>
                <br></br>
                <br></br>
                Fungi are the best natural recyclers. When you see a food starting to mold, it is the fungi that is slowely recycling those waste foods.
                They are resposible for breaking down organic matters and releasing carbon, oxygen, nitrogen, and phosphorus into the soil and the atmosphere.
                Fungi are vitally important for the groth of plants and farm land because of the mycorrhizal relationship between fungi and plant roots.
                Around 80–90% of trees and grasses would not survive without fungi.
              </div>
            </paragragraph>
            <FungusPara4Voice/>

            <box className = "box4">
              <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                  <image className='fungusMediumImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${greenCageFungus})`}}></div>
                  </image>
                  <label className = {this.state.darkMode ? "fungusName-Dark" : "fungusName3"}>
                    {/* {this.state.endangeredFungusItems.length > 0 && (<div> {this.state.endangeredFungusItems[12].name} </div>)} */}
                    Green Cage Fungus
                  </label>
                </box>

                <box className = "MedBox">
                  <box className = "speciesCardContainer">
                    <image className='fungusMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${phylloporusPelletieri})`}}></div>
                    </image>
                    <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Malcolm Storey</label></div>

                    <label className = {this.state.darkMode ? "fungusName-Dark" : "fungusName3"}>
                      {/* {this.state.endangeredFungusItems.length > 0 && (<div> {this.state.endangeredFungusItems[9].name} </div>)} */}
                      Phylloporus Pelletieri
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
                    {/* {this.state.endangeredFungusItems.length > 0 && (<div> {this.state.endangeredFungusItems[8].name} </div>)} */}
                    Tulostoma Niveum
                  </label>
                </box>

                <box className = "MedBox">
                  <box className = "speciesCardContainer">
                    <image className='fungusMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${whiteFerula})`}}></div>
                    </image>
                    <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Giuseppe Venturella</label></div>

                    <label className = {this.state.darkMode ? "fungusName-Dark" : "fungusName3"}>
                      {/* {this.state.endangeredFungusItems.length > 0 && (<div> {this.state.endangeredFungusItems[0].name} </div>)} */}
                      White Ferula
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
                    {/* {this.state.endangeredFungusItems.length > 0 && (<div> {this.state.endangeredFungusItems[13].name} </div>)} */}
                    Hygrocybe Boothii
                  </label>
                </box>
              </box>
            </box>
          </div>



          <div className='container'>
            <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
              <div>
                <b>The future of Fungi:</b>
                <br></br>
                <br></br>
                Researchers and company are already creating materials using fungi to make products.
                For example, building materials like fungus bricks to build houses, which are more portable, durable and have better compression properties than fibre board.
                Also, fungus building materials are flame retardant, which means it slows the groth of fire.
                Furthermore, mycelium products are biodegradable, thus reducing pollution on our planet.
              </div>
            </paragragraph>
            <FungusPara5Voice/>
          </div>


{/* ///////// V I D E O ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
<div className= {this.state.darkMode ? "video-Dark" : "video"}>
  <line className="thinLine"></line>
    <paragragraph className="video-Discription">A video about how Killer Fungus can control pests.</paragragraph>
    <ReactPlayer className='videoFrame' controls={true} url="https://www.youtube.com/watch?v=ROQrbWkV4HI" height="450px" width="800px"/>
  <line className="thinLine"></line>
</div> 
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
  
          <div className='container'>
            <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
              <div>
                <b>Water Filter:</b>
                <br></br>
                <br></br>
                Mushrooms are being tested and researched by scientists for their ability to filter water chemical and pathogens. 
                Meaning, clean water can benifit millions of people around the world who do not have access to fresh water, which can then can prevent waterborne illnesses like typhoid, cholera, dysentery, gastroenteritis, and hepatitis.
              </div>
            </paragragraph>
            <FungusPara6Voice/>
          </div>

        </body>
        <FungiPageSuvNav/>
      </div>
    );
  }
}