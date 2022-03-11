import React from 'react';
import { Component } from "react";
import ReactPlayer from 'react-player';

import '../pages/publicMain.css';
import './plants.css';

import {PlantPageSuvNav} from "../subNav/subNavigation";
import headerPlants from '../images/headerPlants.png';

//cycades
import middelburgCycad from '../images/endPlant/Cycad/middelburgCycad.png';
import encephalartosLatifrons from '../images/endPlant/Cycad/encephalartosLatifrons.png';
import lillieCycad from '../images/endPlant/Cycad/lillieCycad.png';
import palmaCorcho from '../images/endPlant/Cycad/palmaCorcho.png';
import vendaCycad from '../images/endPlant/Cycad/vendaCycad.png';

//cycades
import baobabTree from '../images/endPlant/Trees/baobabTree.png';
import corkTree from '../images/endPlant/Trees/corkTree.png';
import dragonTree from '../images/endPlant/Trees/dragonTree.png';
import monkeyTree from '../images/endPlant/Trees/monkeyTree.png';
import quiverTree from '../images/endPlant/Trees/quiverTree.png';

//strange plants
import titanArum from '../images/endPlant/strangePlants/titanArum.png';
import euphorbiaObesa from '../images/endPlant/strangePlants/euphorbiaObesa.png';
import flyingVenusTrap from '../images/endPlant/strangePlants/flyingVenusTrap.png';
import Rafflesia from '../images/endPlant/strangePlants/Rafflesia.png';
import taccaChantrieri from '../images/endPlant/strangePlants/taccaChantrieri.png';


import FontSizeIncreaser from '../readAccessibilityGuideFunctions/fontSizeIncrease';
import DarkModeFunction from '../darkMode/darkMode';


export class Plants extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
      fontSize: 18,
      endangeredPlantsItems: [],
    };
  }

  componentDidMount(){
      fetch("http://localhost:5000/api/plantSpecies")
      .then (rest => rest.json())
      .then (endangeredPlantsRecords => {
      this.setState({
          isLoaded: true,
          endangeredPlantsItems: endangeredPlantsRecords,
        })
      console.log(endangeredPlantsRecords)
      });
  }

  render(){

    return( 
      <div className={this.state.darkMode ? "pageMainFrameDark" : "pageMainFrameLight"}>

{/* //////////////////////////////////////////////////////FontSizeFunction////////////////////////////////////////////////////// */}
<FontSizeIncreaser fontSize={this.state.fontSize} setFontSize={(size) => this.setState({ fontSize: size })} />
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <box className = "landingImageBox2" style={{ backgroundImage: `url(${headerPlants})`}}></box>

{/* //////////////////////////////////////////////////////DarkModeFunction////////////////////////////////////////////////////// */}
<DarkModeFunction darkMode={this.state.darkMode} setDarkmode={(darkMode) => this.setState({darkMode})} />
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <body className='pageBodyFrame'>

          <div className='container'>
            <div className = "mainSubHeadFrame">
              <subhead className = {this.state.darkMode ? "subheadLrgDrk" : "subheadLrg"}>Endangered Plant Species</subhead>
            </div>

            <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
              Did you know that more than 15 Billions of plants are chopped down each year! And a single tree can absorbe up to
              48 Pounds of carbon dioxide (Co2) every year, making them the best natural carbon scrubber machine.
              Since plants absorbe Co2 they are also responisble for cooling our planet temperature and helping to fight cliate change. 
              From photosynthis, plants releases Oxygen and trees reduces and filters 7-24% particulate matters making the air fresh and clean for us.
              <br></br>
              <br></br>
              Provides foods and Shelter:
              <br></br>
              Plants are the main source of food for us and other species. 
              Without plants there will be not food because all carbon in proteins, fats and carbohydrates is made from photosynthesis in plants.
              Even meat products are from animals are because of plants.
              Furthermore, large trees provides shelter for many endangered animals species like birds and mammels.
              And small plant provides shelter for insects and other small species.
            </paragragraph>


            <box className = "box4">
              <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                  <box className = "speciesCardContainer">
                    <image className='plantsMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${encephalartosLatifrons})`}}></div>
                    </image>
                    <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Ken Hennell</label></div>

                    <label className = {this.state.darkMode ? "plantsName-Dark" : "plantsName"}>
                      {this.state.endangeredPlantsItems.length > 0 && (<div> {this.state.endangeredPlantsItems[2].name} </div>)}
                    </label>
                  </box>
                </box>

                <box className = "MedBox">
                  <image className='plantsMediumImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${lillieCycad})`}}></div>
                  </image>
                  <label className = {this.state.darkMode ? "plantsName-Dark" : "plantsName"}>
                    {this.state.endangeredPlantsItems.length > 0 && (<div> {this.state.endangeredPlantsItems[4].name} </div>)}
                  </label>
                </box>
              </box>

              <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                  <image className='plantsMediumImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${palmaCorcho})`}}></div>
                  </image>
                  <label className = {this.state.darkMode ? "plantsName-Dark" : "plantsName"}>
                    {this.state.endangeredPlantsItems.length > 0 && (<div> {this.state.endangeredPlantsItems[1].name} </div>)}
                  </label>
                </box>

                <box className = "MedBox">
                  <image className='plantsMediumImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${vendaCycad})`}}></div>
                  </image>
                  <label className = {this.state.darkMode ? "plantsName-Dark" : "plantsName"}>
                    {this.state.endangeredPlantsItems.length > 0 && (<div> {this.state.endangeredPlantsItems[0].name} </div>)}
                  </label>
                </box>
              </box>

              <box className = "largeSpeciesImgFrame">
                <box className = "speciesCardContainer">
                  <image className= 'plantsLargeImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${middelburgCycad})`}}></div>
                  </image>
                  <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Maria Langner</label></div>

                  <label className = {this.state.darkMode ? "plantsName-Dark" : "plantsName"}>
                    {this.state.endangeredPlantsItems.length > 0 && (<div> {this.state.endangeredPlantsItems[3].name} </div>)}
                  </label>
                </box>
              </box>
            </box>
          </div>

          <div className= {this.state.darkMode ? "videoFrame-Dark" : "videoFrame"}>
              <line className = "thinLine"></line>
              <div className= {this.state.darkMode ? "video-Dark" : "video"}>
                <paragragraph className="video-Discription">A video about Cycads Plants.</paragragraph>
                <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=VtziMzq-nnk"/>
              </div> 
              <line className = "thinLine"></line> 
          </div>


          <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
            Medicine:
            <br></br>
            As you may already know, plants are the main source of medicines and plays important role in the discovery and reasearch of new drugs.
            Plants like neem tree, sandalwood tree, basil plant are used in most of the medicines.
            It is estimated that between 50,000 - 80,000 flowering plants are used in medicine worldwide.
            Some of the most common medicine and drugs that comes from plants are aspirin, morphine, chemotherapy, and there are many more.
            Not only health but plants also has economic benifit.
            Therefore, loss of plants means loss of medicines and drugs.
            {/* https://www.biologicaldiversity.org/publications/papers/Medicinal_Plants_042008_lores.pdf */}
            <br></br>
            <br></br>
            Materials:
            <br></br>
            Plants provides many material that is essential for us and are used everyday. 
            For example, most used materials include wood, paper, toilet paper, cotton, rubber, cosmetics, soap, shampoo and more...
          </paragragraph>

          
          <div className='container'>
            <box className = "box4">
              <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                  <image className='plantsMediumImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${corkTree})`}}></div>
                  </image>
                  <label className = {this.state.darkMode ? "plantsName-Dark" : "plantsName2"}>
                    {this.state.endangeredPlantsItems.length > 0 && (<div> {this.state.endangeredPlantsItems[9].name} </div>)}
                  </label>
                </box>

                <box className = "MedBox">
                  <image className='plantsMediumImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${dragonTree})`}}></div>
                  </image>
                  <label className = {this.state.darkMode ? "plantsName-Dark" : "plantsName2"}>
                    {this.state.endangeredPlantsItems.length > 0 && (<div> {this.state.endangeredPlantsItems[6].name} </div>)}
                  </label>
                </box>
              </box>

              <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                  <box className = "speciesCardContainer">
                    <image className='plantsMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${monkeyTree})`}}></div>
                    </image>
                    <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Linda Crampton </label></div>

                    <label className = {this.state.darkMode ? "plantsName-Dark" : "plantsName2"}>
                      {this.state.endangeredPlantsItems.length > 0 && (<div> {this.state.endangeredPlantsItems[8].name} </div>)}
                    </label>
                  </box>
                </box>

                <box className = "MedBox">
                  <box className = "speciesCardContainer">
                    <image className='plantsMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${quiverTree})`}}></div>
                    </image>
                    <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Bjørn Christian Tørrissen</label></div>

                    <label className = {this.state.darkMode ? "plantsName-Dark" : "plantsName2"}>
                      {this.state.endangeredPlantsItems.length > 0 && (<div> {this.state.endangeredPlantsItems[5].name} </div>)}
                    </label>
                  </box>
                </box>
              </box>

              <box className = "largeSpeciesImgFrame">
                <image className= 'plantsLargeImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${baobabTree})`}}></div>
                </image>
                <label className = {this.state.darkMode ? "plantsName-Dark" : "plantsName2"}>
                  {this.state.endangeredPlantsItems.length > 0 && (<div> {this.state.endangeredPlantsItems[7].name} </div>)}
                </label>
              </box>
            </box>
          </div>

          <div className= {this.state.darkMode ? "videoFrame-Dark" : "videoFrame"}>
              <line className = "thinLine"></line>
              <div className= {this.state.darkMode ? "video-Dark" : "video"}>
                <paragragraph className="video-Discription">A video about Dragon Trees.</paragragraph>
                <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=tyJU4e5Tyjo"/>
              </div> 
              <line className = "thinLine"></line> 
          </div>


          <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
            Filters water & Regulate Water cycle:
            <br></br>
            Plants plays important role in filtering water. They filter out minerals, carbon dioxide, ammonia, nitrates and nitrites, 
            which helps to keep the water clear and clean. This is benifical for aquatic species like fish as it keeps the pond clean.
            In addition, plants are responisble for keeping the water cycle running by cleaning and distributing the water supply. 
            Through the transpiration process, the water is moved from the soil to the roots, up their bodies, 
            and back into the atmosphere. The water is collected on the cloud and then returns to the earth through rain.
            <br></br>
            <br></br>
            Helps the environment & Soil improves soil quality:
            <br></br>
            Plants protects the land and soil from washing asway because of their roots and the micro organism that lives around them.
            When a plant leaf falls on the ground or when a plant dies, it decomposes, fertilising the soil.
            Meaning plants helps to improve the soil quality and can prevent landslide, flood and soil erosion.
          </paragragraph>


          <div className='container'>
            <box className = "box4">
              <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                  <box className = "speciesCardContainer">
                    <image className='plantsMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${euphorbiaObesa})`}}></div>
                    </image>
                    <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Pterosaur Whisperer</label></div>

                    <label className = {this.state.darkMode ? "plantsName-Dark" : "plantsName3"}>
                      {this.state.endangeredPlantsItems.length > 0 && (<div> {this.state.endangeredPlantsItems[12].name} </div>)}
                    </label>
                  </box>
                </box>

                <box className = "MedBox">
                  <image className='plantsMediumImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${flyingVenusTrap})`}}></div>
                  </image>
                  <label className = {this.state.darkMode ? "plantsName-Dark" : "plantsName3"}>
                    {this.state.endangeredPlantsItems.length > 0 && (<div> {this.state.endangeredPlantsItems[10].name} </div>)}
                  </label>
                </box>
              </box>

              <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                  <image className='plantsMediumImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${Rafflesia})`}}></div>
                  </image>
                  <label className = {this.state.darkMode ? "plantsName-Dark" : "plantsName3"}>
                    {this.state.endangeredPlantsItems.length > 0 && (<div> {this.state.endangeredPlantsItems[13].name} </div>)}
                  </label>
                </box>

                <box className = "MedBox">
                  <box className = "speciesCardContainer">
                    <image className='plantsMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${taccaChantrieri})`}}></div>
                    </image>
                    <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Meneerke bloem</label></div>

                    <label className = {this.state.darkMode ? "plantsName-Dark" : "plantsName3"}>
                      {this.state.endangeredPlantsItems.length > 0 && (<div> {this.state.endangeredPlantsItems[14].name} </div>)}
                    </label>
                  </box>
                </box>
              </box>

              <box className = "largeSpeciesImgFrame">
                <image className= 'plantsLargeImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${titanArum})`}}></div>
                </image>
                <label className = {this.state.darkMode ? "plantsName-Dark" : "plantsName3"}>
                  {this.state.endangeredPlantsItems.length > 0 && (<div> {this.state.endangeredPlantsItems[11].name} </div>)}
                </label>
              </box>
            </box>
          </div>

          <div className= {this.state.darkMode ? "videoFrame-Dark" : "videoFrame"}>
              <line className = "thinLine"></line>
              <div className= {this.state.darkMode ? "video-Dark" : "video"}>
                <paragragraph className="video-Discription">A video about Rafflesia Flower.</paragragraph>
                <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=YxIpl38rsMo"/>
              </div> 
              <line className = "thinLine"></line> 
          </div>


        </body>
        <PlantPageSuvNav/>
      </div>
    );
  }
}