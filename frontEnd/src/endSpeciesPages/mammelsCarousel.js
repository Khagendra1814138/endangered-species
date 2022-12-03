import React from "react";
import Carousel from "react-elastic-carousel";
import { Component } from "react";
import Item from "./carouselStyle";
import "./mammelsCarousel.css";

import '../pages/publicMain.css';
import './mammels.css';


//Small mammels Images
import pangolin from '../images/endMammels/smallMammels/pangolin.png';
import sloth from '../images/endMammels/smallMammels/sloth.png';
import slowLoris from '../images/endMammels/smallMammels/slowLoris.png';
import Koala from '../images/endMammels/smallMammels/Koala.png';
import MalayanTapir from '../images/endMammels/smallMammels/MalayanTapir.png';
import DarwinsFox from '../images/endMammels/smallMammels/DarwinsFox.png';
import BlackfootedFerret from '../images/endMammels/smallMammels/BlackfootedFerret.png';
import IliPika from '../images/endMammels/smallMammels/IliPika.png';
import ChacoanPeccary from '../images/endMammels/smallMammels/ChacoanPeccary.png';
import AyeAye from '../images/endMammels/smallMammels/AyeAye.png';
import GiantOtter from '../images/endMammels/smallMammels/GiantOtter.png';
import AmamiRabbit from '../images/endMammels/smallMammels/AmamiRabbit.png';

//Large mammels Images
import africanElephant from '../images/endMammels/largeMammels/africanElephant.png';
import asianElephant from '../images/endMammels/largeMammels/asianElephant.png';
import grevysZebra from '../images/endMammels/largeMammels/grevysZebra.png';
import muskDeer from '../images/endMammels/largeMammels/muskDeer.png';
import RedWolf from '../images/endMammels/largeMammels/RedWolf.png';
import Okapi from '../images/endMammels/largeMammels/Okapi.png';
import Addax from '../images/endMammels/largeMammels/Addax.png';
import Tamaraw from '../images/endMammels/largeMammels/Tamaraw.png';
import Saola from '../images/endMammels/largeMammels/Saola.png';
import HogDeer from '../images/endMammels/largeMammels/HogDeer.png';
import PygmyHippopotamus from '../images/endMammels/largeMammels/PygmyHippopotamus.png';
import Saiga from '../images/endMammels/largeMammels/Saiga.png';

//Rhinos Images
import blackRhino from '../images/endMammels/Rhino/blackRhino.png';
import greatOneHorned from '../images/endMammels/Rhino/greatOneHorned.png';
import whiteRhino from '../images/endMammels/Rhino/whiteRhino.png';

//Big Cats Images
import amurLeopard from '../images/endMammels/bigCats/amurLeopard.png';
import cloudedLeopard from '../images/endMammels/bigCats/cloudedLeopard.png';
import jaguar from '../images/endMammels/bigCats/jaguar.png';
import Balkanlynx from '../images/endMammels/bigCats/Balkanlynx.png';
import AsiaticCheetah from '../images/endMammels/bigCats/AsiaticCheetah.png';

//Primates Images
import bonobo from '../images/endMammels/primates/bonobo.png';
import chimpanzee from '../images/endMammels/primates/chimpanzee.png';
import gorrila from '../images/endMammels/primates/gorrila.png';
import orangutan from '../images/endMammels/primates/orangutan.png';
import Lemurs from '../images/endMammels/primates/Lemurs.png';
import ProboscisMonkeys from '../images/endMammels/primates/ProboscisMonkeys.png';


// import config from '../config';




const breakPoints = [
  {itemsToShow: 1},
];

export class SmallMammelsCarousel extends Component {

  // constructor(props) {
  //     super(props);
  //     this.state = {
  //     endangeredMammelsItems: [],
  //     };
  // }
  
  // componentDidMount(){
  //     fetch(config.backendUrl + "api/mammelsSpecies")
  //     .then (rest => rest.json())
  //     .then (endangeredMammelsRecords => {
  //     this.setState({
  //         isLoaded: true,
  //         endangeredMammelsItems: endangeredMammelsRecords,
  //         })
  //     console.log(endangeredMammelsRecords)
  //     });
  // }
  
  render(){

    return (
      <div className="carouselFrame">
        <Carousel breakPoints={breakPoints}>
          <Item>
            <box className="mainImageFrame">
              <image className="largeCarouselMammelImage">
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${pangolin})`}}></div>
              </image>
              <label className='mammelsCarouselName'>
                {/* {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[3].name} Species</div>)} */}
                Pangolin (Most pangolin species)
              </label>
            </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
                <image className="largeCarouselMammelImage">
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${sloth})`}}></div>
                </image>
                <label className='mammelsCarouselName'>
                  {/* {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[1].name} </div>)} */}
                  Sloth
                </label>
              </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
              <image className="largeCarouselMammelImage">
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${slowLoris})`}}></div>
              </image>
              <label className='mammelsCarouselName'>
                {/* {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[4].name} </div>)} */}
                Slow Loris
              </label>
            </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
              <box className = "speciesCardContainer">
                <image className="largeCarouselMammelImage">
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${Koala})`}}></div>
                </image>
                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Jordan Whitt</label></div>
                <label className='mammelsCarouselName'>
                  Koala 
                </label>
              </box>
            </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
              
                <image className="largeCarouselMammelImage">
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${MalayanTapir})`}}></div>
                </image>
         
                <label className='mammelsCarouselName'>
                  Malayan Tapir 
                </label>
             
            </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
              <box className = "speciesCardContainer">
                <image className="largeCarouselMammelImage">
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${DarwinsFox})`}}></div>
                </image>
                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Jono Dashper</label></div>
                <label className='mammelsCarouselName'>
                  Darwin's fox 
                </label>
              </box>
            </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
              <box className = "speciesCardContainer">
                <image className="largeCarouselMammelImage">
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${BlackfootedFerret})`}}></div>
                </image>
                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Bob Rozinski</label></div>
                <label className='mammelsCarouselName'>
                  Black-footed Ferret
                </label>
              </box>
            </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
              <box className = "speciesCardContainer">
                <image className="largeCarouselMammelImage">
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${IliPika})`}}></div>
                </image>
                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Li Weidong</label></div>
                <label className='mammelsCarouselName'>
                  Ili Pika
                </label>
              </box>
            </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
             
                <image className="largeCarouselMammelImage">
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${ChacoanPeccary})`}}></div>
                </image>
              
                <label className='mammelsCarouselName'>
                 Chacoan Peccary 
                </label>
            
            </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
              <box className = "speciesCardContainer">
                <image className="largeCarouselMammelImage">
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${AyeAye})`}}></div>
                </image>
                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Nomis Simon </label></div>
                <label className='mammelsCarouselName'>
                  Aye Aye
                </label>
              </box>
            </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
              
                <image className="largeCarouselMammelImage">
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${GiantOtter})`}}></div>
                </image>
                
                <label className='mammelsCarouselName'>
                  Giant Otter
                </label>
            
            </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
              <box className = "speciesCardContainer">
                <image className="largeCarouselMammelImage">
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${AmamiRabbit})`}}></div>
                </image>
                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Shawn Miller </label></div>
                <label className='mammelsCarouselName'>
                 Amami Rabbit
                </label>
              </box>
            </box>
          </Item>
        </Carousel>
      </div>
    );
  }
}



//Large Mammels Cards//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export class LargeMammelsCarousel extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   endangeredMammelsItems: [],
  //   };
  // }
  
  // componentDidMount(){
  //     fetch(config.backendUrl + "api/mammelsSpecies")
  //     .then (rest => rest.json())
  //     .then (endangeredMammelsRecords => {
  //     this.setState({
  //         isLoaded: true,
  //         endangeredMammelsItems: endangeredMammelsRecords,
  //         })
  //     console.log(endangeredMammelsRecords)
  //     });
  // }
  
  render(){
    return (
      <div className="carouselFrame">
        <Carousel breakPoints={breakPoints}>
          <Item>
            <box className="mainImageFrame">
              <image className="largeCarouselMammelImage">
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${asianElephant})`}}></div>
              </image>
              <label className='mammelsCarouselName'>
                {/* {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[5].name} </div>)} */}
                Asian Elephants
              </label>
            </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
                <image className="largeCarouselMammelImage">
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${africanElephant})`}}></div>
                </image>
                <label className='mammelsCarouselName'>
                  {/* {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[6].name} </div>)} */}
                  African Elephants
                </label>
              </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
              <image className="largeCarouselMammelImage">
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${grevysZebra})`}}></div>
              </image>
              <label className='mammelsCarouselName'>
                {/* {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[14].name} </div>)} */}
                Grevys Zebra
              </label>
            </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
              <box className = "speciesCardContainer">
                <image className="largeCarouselMammelImage">
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${muskDeer})`}}></div>
                </image>
                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Suvorov Alex</label></div>

                <label className='mammelsCarouselName'>
                  {/* {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[15].name} </div>)} */}
                  Musk Deer
                </label>
              </box>
            </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
              <box className = "speciesCardContainer">
                <image className="largeCarouselMammelImage">
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${RedWolf})`}}></div>
                </image>
                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Rebecca Bose</label></div>

                <label className='mammelsCarouselName'>
                  {/* {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[16].name} Red Wolf </div>)} */}
                  Red Wolf
                </label>
              </box>
            </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
              <box className = "speciesCardContainer">
                <image className="largeCarouselMammelImage">
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${Okapi})`}}></div>
                </image>
                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Daniel Jolivet</label></div>

                <label className='mammelsCarouselName'>
                  Okapi
                </label>
              </box>
            </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
              <box className = "speciesCardContainer">
                <image className="largeCarouselMammelImage">
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${Addax})`}}></div>
                </image>
                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Haytem93</label></div>

                <label className='mammelsCarouselName'>
                  Addax
                </label>
              </box>
            </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
            
                <image className="largeCarouselMammelImage">
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${Tamaraw})`}}></div>
                </image>
                
                <label className='mammelsCarouselName'>
                  Tamaraw
                </label>
             
            </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
              <box className = "speciesCardContainer">
                <image className="largeCarouselMammelImage">
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${Saola})`}}></div>
                </image>
                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by David Hulse</label></div>

                <label className='mammelsCarouselName'>
                 Saola
                </label>
              </box>
            </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
            
                <image className="largeCarouselMammelImage">
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${HogDeer})`}}></div>
                </image>
                
                <label className='mammelsCarouselName'>
                  Hog Deer
                </label>
             
            </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
            
                <image className="largeCarouselMammelImage">
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${PygmyHippopotamus})`}}></div>
                </image>
                
                <label className='mammelsCarouselName'>
                  Pygmy Hippopotamus
                </label>
             
            </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
              <box className = "speciesCardContainer">
                <image className="largeCarouselMammelImage">
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${Saiga})`}}></div>
                </image>
                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Andrey Giljov and Karina Karenina</label></div>

                <label className='mammelsCarouselName'>
                  Saiga
                </label>
              </box>
            </box>
          </Item>

        </Carousel>
      </div>
    );
  }
}



  //Rhino Cards/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export class RhinosCarousel extends Component {

  // constructor(props) {
  //     super(props);
  //     this.state = {
  //     endangeredMammelsItems: [],
  //     };
  // }
  
  // componentDidMount(){
  //     fetch(config.backendUrl + "api/mammelsSpecies")
  //     .then (rest => rest.json())
  //     .then (endangeredMammelsRecords => {
  //     this.setState({
  //         isLoaded: true,
  //         endangeredMammelsItems: endangeredMammelsRecords,
  //         })
  //     console.log(endangeredMammelsRecords)
  //     });
  // }
  
  render(){

    return (
      <div className="carouselFrame">
        <Carousel breakPoints={breakPoints}>
          <Item>
            <box className="mainImageFrame">
              <image className="largeCarouselMammelImage">
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${blackRhino})`}}></div>
              </image>
              <label className='mammelsCarouselName'>
                {/* {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[8].name} </div>)} */}
                Black Rhinos
              </label>
            </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
                <image className="largeCarouselMammelImage">
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${greatOneHorned})`}}></div>
                </image>
                <label className='mammelsCarouselName'>
                  {/* {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[11].name} </div>)} */}
                  Great One Horned
                </label>
              </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
              <image className="largeCarouselMammelImage">
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${whiteRhino})`}}></div>
              </image>
              <label className='mammelsCarouselName'>
                {/* {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[7].name} </div>)} */}
                White Rhino
              </label>
            </box>
          </Item>
        </Carousel>
      </div>
    );
  }
}


//Big Cats Cards//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export class BigCatsCarousel extends Component {

  // constructor(props) {
  //     super(props);
  //     this.state = {
  //     endangeredMammelsItems: [],
  //     };
  // }
  
  // componentDidMount(){
  //     fetch(config.backendUrl + "api/mammelsSpecies")
  //     .then (rest => rest.json())
  //     .then (endangeredMammelsRecords => {
  //     this.setState({
  //         isLoaded: true,
  //         endangeredMammelsItems: endangeredMammelsRecords,
  //         })
  //     console.log(endangeredMammelsRecords)
  //     });
  // }
  
  render(){

    return (
      <div className="carouselFrame">
        <Carousel breakPoints={breakPoints}>
          <Item>
            <box className="mainImageFrame">
              <image className="largeCarouselMammelImage">
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${amurLeopard})`}}></div>
              </image>
              <label className='mammelsCarouselName'>
                {/* {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[20].name} </div>)} */}
                Amur Leopard
              </label>
            </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
                <image className="largeCarouselMammelImage">
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${cloudedLeopard})`}}></div>
                </image>
                <label className='mammelsCarouselName'>
                  {/* {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[21].name} </div>)} */}
                  Clouded Leopard
                </label>
              </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
              <image className="largeCarouselMammelImage">
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${jaguar})`}}></div>
              </image>
              <label className='mammelsCarouselName'>
                {/* {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[18].name} </div>)} */}
                Jaguar (Some jaguar speces)
              </label>
            </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
              <box className = "speciesCardContainer">
                <image className="largeCarouselMammelImage">
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${Balkanlynx})`}}></div>
                </image>

                <label className='mammelsCarouselName'> 
                  Balkan Lynx
                </label>
              </box> 
            </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
              <box className = "speciesCardContainer">
                <image className="largeCarouselMammelImage">
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${AsiaticCheetah})`}}></div>
                </image>
                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Atta Kenare</label></div>
                
                <label className='mammelsCarouselName'> 
                  Asiatic cheetahs
                </label>
              </box>
            </box>
          </Item>
        </Carousel>
      </div>
    );
  }
}



//Primates Cards//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export class PrimatesCarousel extends Component {

  // constructor(props) {
  //     super(props);
  //     this.state = {
  //     endangeredMammelsItems: [],
  //     };
  // }
  
  // componentDidMount(){
  //     fetch(config.backendUrl + "api/mammelsSpecies")
  //     .then (rest => rest.json())
  //     .then (endangeredMammelsRecords => {
  //     this.setState({
  //         isLoaded: true,
  //         endangeredMammelsItems: endangeredMammelsRecords,
  //         })
  //     console.log(endangeredMammelsRecords)
  //     });
  // }
  
  render(){
    return (
      <div className="carouselFrame">
        <Carousel breakPoints={breakPoints}>
          <Item>
            <box className="mainImageFrame">
              <image className="largeCarouselMammelImage">
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${bonobo})`}}></div>
              </image>
              <label className='mammelsCarouselName'>
                {/* {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[26].name} </div>)} */}
                Bonobo
              </label>
            </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
                <image className="largeCarouselMammelImage">
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${chimpanzee})`}}></div>
                </image>
                <label className='mammelsCarouselName'>
                  {/* {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[24].name} </div>)} */}
                  Chimpanzee
                </label>
              </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
              <image className="largeCarouselMammelImage">
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${gorrila})`}}></div>
              </image>
              <label className='mammelsCarouselName'>
                {/* {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[23].name} </div>)} */}
                Gorrila
              </label>
            </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
              <image className="largeCarouselMammelImage">
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${orangutan})`}}></div>
              </image>
              <label className='mammelsCarouselName'>
                {/* {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[22].name} </div>)} */}
                Orangutan
              </label>
            </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
              <box className = "speciesCardContainer">
                <image className="largeCarouselMammelImage">
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${Lemurs})`}}></div>
                </image>
                <div class="overlay overlayLeft"><label class="photograpgerName"> Photograph by Juan Camilo</label></div>
                
                <label className='mammelsCarouselName'> 
                  Lemurs
                </label>
              </box>
            </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
              <box className = "speciesCardContainer">
                <image className="largeCarouselMammelImage">
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${[ProboscisMonkeys]})`}}></div>
                </image>
                <div class="overlay overlayLeft"><label class="photograpgerName"> Photograph by Sylvain Cordier</label></div>
                
                <label className='mammelsCarouselName'> 
                  Proboscis Monkeys
                </label>
              </box>
            </box>
          </Item>
     
        </Carousel>
    
      </div>
    );
  }
}