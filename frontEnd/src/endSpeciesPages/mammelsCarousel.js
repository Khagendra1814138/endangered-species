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

//Large mammels Images
import africanElephant from '../images/endMammels/largeMammels/africanElephant.png';
import asianElephant from '../images/endMammels/largeMammels/asianElephant.png';
import grevysZebra from '../images/endMammels/largeMammels/grevysZebra.png';
import muskDeer from '../images/endMammels/largeMammels/muskDeer.png';
import redFox from '../images/endMammels/largeMammels/redFox.png';

//Rhinos Images
import blackRhino from '../images/endMammels/Rhino/blackRhino.png';
import greatOneHorned from '../images/endMammels/Rhino/greatOneHorned.png';
import whiteRhino from '../images/endMammels/Rhino/whiteRhino.png';

//Big Cats Images
import amurLeopard from '../images/endMammels/bigCats/amurLeopard.png';
import cloudedLeopard from '../images/endMammels/bigCats/cloudedLeopard.png';
import jaguar from '../images/endMammels/bigCats/jaguar.png';

//Primates Images
import bonobo from '../images/endMammels/primates/bonobo.png';
import chimpanzee from '../images/endMammels/primates/chimpanzee.png';
import gorrila from '../images/endMammels/primates/gorrila.png';
import orangutan from '../images/endMammels/primates/orangutan.png';
import config from '../config';




const breakPoints = [
  {itemsToShow: 1},
];

export class SmallMammelsCarousel extends Component {

  constructor(props) {
      super(props);
      this.state = {
      endangeredMammelsItems: [],
      };
  }
  
  componentDidMount(){
      fetch(config.backendUrl + "api/mammelsSpecies")
      .then (rest => rest.json())
      .then (endangeredMammelsRecords => {
      this.setState({
          isLoaded: true,
          endangeredMammelsItems: endangeredMammelsRecords,
          })
      console.log(endangeredMammelsRecords)
      });
  }
  
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
                {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[3].name} </div>)}
              </label>
            </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
                <image className="largeCarouselMammelImage">
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${sloth})`}}></div>
                </image>
                <label className='mammelsCarouselName'>
                  {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[1].name} </div>)}
                </label>
              </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
              <image className="largeCarouselMammelImage">
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${slowLoris})`}}></div>
              </image>
              <label className='mammelsCarouselName'>
                {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[4].name} </div>)}
              </label>
            </box>
          </Item>
        </Carousel>
      </div>
    );
  }
}



//Large Mammels Cards//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export class LargeMammelsCarousel extends Component {

  constructor(props) {
      super(props);
      this.state = {
      endangeredMammelsItems: [],
      };
  }
  
  componentDidMount(){
      fetch(config.backendUrl + "api/mammelsSpecies")
      .then (rest => rest.json())
      .then (endangeredMammelsRecords => {
      this.setState({
          isLoaded: true,
          endangeredMammelsItems: endangeredMammelsRecords,
          })
      console.log(endangeredMammelsRecords)
      });
  }
  
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
                {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[5].name} </div>)}
              </label>
            </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
                <image className="largeCarouselMammelImage">
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${africanElephant})`}}></div>
                </image>
                <label className='mammelsCarouselName'>
                  {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[6].name} </div>)}
                </label>
              </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
              <image className="largeCarouselMammelImage">
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${grevysZebra})`}}></div>
              </image>
              <label className='mammelsCarouselName'>
                {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[14].name} </div>)}
              </label>
            </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
              <box className = "speciesCardContainer">
                <image className="largeCarouselMammelImage">
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${muskDeer})`}}></div>
                </image>
                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Natalia Bubochkina</label></div>

                <label className='mammelsCarouselName'>
                  {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[15].name} </div>)}
                </label>
              </box>
            </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
              <image className="largeCarouselMammelImage">
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${redFox})`}}></div>
              </image>
              <label className='mammelsCarouselName'>
                {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[16].name} </div>)}
              </label>
            </box>
          </Item>
        </Carousel>
      </div>
    );
  }
}



  //Rhino Cards/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export class RhinosCarousel extends Component {

  constructor(props) {
      super(props);
      this.state = {
      endangeredMammelsItems: [],
      };
  }
  
  componentDidMount(){
      fetch(config.backendUrl + "api/mammelsSpecies")
      .then (rest => rest.json())
      .then (endangeredMammelsRecords => {
      this.setState({
          isLoaded: true,
          endangeredMammelsItems: endangeredMammelsRecords,
          })
      console.log(endangeredMammelsRecords)
      });
  }
  
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
                {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[8].name} </div>)}
              </label>
            </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
                <image className="largeCarouselMammelImage">
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${greatOneHorned})`}}></div>
                </image>
                <label className='mammelsCarouselName'>
                  {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[11].name} </div>)}
                </label>
              </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
              <image className="largeCarouselMammelImage">
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${whiteRhino})`}}></div>
              </image>
              <label className='mammelsCarouselName'>
                {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[7].name} </div>)}
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

  constructor(props) {
      super(props);
      this.state = {
      endangeredMammelsItems: [],
      };
  }
  
  componentDidMount(){
      fetch(config.backendUrl + "api/mammelsSpecies")
      .then (rest => rest.json())
      .then (endangeredMammelsRecords => {
      this.setState({
          isLoaded: true,
          endangeredMammelsItems: endangeredMammelsRecords,
          })
      console.log(endangeredMammelsRecords)
      });
  }
  
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
                {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[20].name} </div>)}
              </label>
            </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
                <image className="largeCarouselMammelImage">
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${cloudedLeopard})`}}></div>
                </image>
                <label className='mammelsCarouselName'>
                  {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[21].name} </div>)}
                </label>
              </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
              <image className="largeCarouselMammelImage">
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${jaguar})`}}></div>
              </image>
              <label className='mammelsCarouselName'>
                {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[18].name} </div>)}
              </label>
            </box>
          </Item>
        </Carousel>
      </div>
    );
  }
}



//Primates Cards//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export class PrimatesCarousel extends Component {

  constructor(props) {
      super(props);
      this.state = {
      endangeredMammelsItems: [],
      };
  }
  
  componentDidMount(){
      fetch(config.backendUrl + "api/mammelsSpecies")
      .then (rest => rest.json())
      .then (endangeredMammelsRecords => {
      this.setState({
          isLoaded: true,
          endangeredMammelsItems: endangeredMammelsRecords,
          })
      console.log(endangeredMammelsRecords)
      });
  }
  
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
                {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[26].name} </div>)}
              </label>
            </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
                <image className="largeCarouselMammelImage">
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${chimpanzee})`}}></div>
                </image>
                <label className='mammelsCarouselName'>
                  {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[24].name} </div>)}
                </label>
              </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
              <image className="largeCarouselMammelImage">
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${gorrila})`}}></div>
              </image>
              <label className='mammelsCarouselName'>
                {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[23].name} </div>)}
              </label>
            </box>
          </Item>

          <Item>
            <box className="mainImageFrame">
              <image className="largeCarouselMammelImage">
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${orangutan})`}}></div>
              </image>
              <label className='mammelsCarouselName'>
                {this.state.endangeredMammelsItems.length > 0 && (<div> {this.state.endangeredMammelsItems[22].name} </div>)}
              </label>
            </box>
          </Item>
        </Carousel>
      </div>
    );
  }
}