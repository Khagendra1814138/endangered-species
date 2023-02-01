import React from "react";
import { Component } from "react";
import {Link} from 'react-router-dom';

import ReactPlayer from 'react-player';

import '../publicMain.css';
import './endangeredSpecies.css';
import '../darkmodeFunction.css';

import {EndangeredSpeciesSuvNav} from "../../subNav/subNavigation";

import header2 from '../../images/header2.png';

import amphibian from '../../images/endSpeciesMenu/amphibian.jpg';
import artic from '../../images/endSpeciesMenu/artic.jpg';
import birds from '../../images/endSpeciesMenu/birds.jpg';
import fungus from '../../images/endSpeciesMenu/fungus.jpg';
import mammels from '../../images/endSpeciesMenu/mammels.jpg';
import marine from '../../images/endSpeciesMenu/marine.jpg';
import plant from '../../images/endSpeciesMenu/plant.jpg';
import insects from '../../images/endSpeciesMenu/insects.png';
import reptiles from '../../images/endSpeciesMenu/reptiles.png';
import Uk from '../../images/endSpeciesMenu/Uk.jpg';

import DarkModeFunction from '../../darkMode/darkMode';



import Carousel from "react-elastic-carousel";
import Item from "./SpeciesMenuCarouselStyle";

const breakPoints = [
  {itemsToShow: 3},
];

export class EndangeredSpecies extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
    };
  }

  render(){

    return( 
      <div className={this.state.darkMode ? "pageMainFrameDark" : "pageMainFrameLight"}>
        <div className='overflowHidden'>
          <box className = "landingImageBox2" style={{ backgroundImage: `url(${header2})`}}></box>
        </div>
{/* //////////////////////////////////////////////////////DarkModeFunction////////////////////////////////////////////////////// */}
        <DarkModeFunction darkMode={this.state.darkMode} setDarkmode={(darkMode) => this.setState({darkMode})} />
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <body className='pageBodyFrame'>

          <div className='container'>
            <div className = "mainSubHeadFrame">
              <subhead className = {this.state.darkMode ? "subheadLrgDrk" : "subheadLrg"}>What are Endangered Species?</subhead>
            </div>


            <div id="endMenuCarouselFrame">
              <div className = {this.state.darkMode ? "pageDiscriptionTitle-Dark" : "pageDiscriptionTitle"}>
                The IUCN have catogorised species into different catagories to show their level of risks.
                From least concern, being low risk to extinct, and critically endangered, being extremely high risk of extinction.
              </div>
              <Carousel breakPoints={breakPoints}>
                <Item>
                  <box id = {this.state.darkMode ? "criteriaFrame-Dark" : "criteriaFrame"}>
                    <box id = {this.state.darkMode ? "criteriaTitle-Dark" : "criteriaTitle"}>Least Concern</box>
                    <paragragraph id = {this.state.darkMode ? "criteriaParagraph-Dark" : "criteriaParagraph"}>
                      Species which are unlikely to become endangered or extinct in the near future.
                      Species may have no current threats to put them at risk.
                    </paragragraph>
                  </box>
                </Item>

                <Item>
                  <box id = {this.state.darkMode ? "criteriaFrame-Dark" : "criteriaFrame"}>
                    <box  id = {this.state.darkMode ? "criteriaTitle-Dark" : "criteriaTitle"}>Near Threatened</box>
                    <paragragraph id = {this.state.darkMode ? "criteriaParagraph-Dark" : "criteriaParagraph"}>
                      Species which are close to being endangered in the near future.
                    </paragragraph>
                  </box>
                </Item>

                <Item>
                < box id = {this.state.darkMode ? "criteriaFrame-Dark" : "criteriaFrame"}>
                    <box  id = {this.state.darkMode ? "criteriaTitle-Dark" : "criteriaTitle"}>Vulnerable</box>
                    <paragragraph id = {this.state.darkMode ? "criteriaParagraph-Dark" : "criteriaParagraph"}>
                      Species which are considered to be at risk of unnatural (human-caused) extinction without further human intervention.
                    </paragragraph>
                  </box>
                </Item>

                <Item>
                  <box id = {this.state.darkMode ? "criteriaFrame-Dark" : "criteriaFrame"}>
                    <box  id = {this.state.darkMode ? "criteriaTitle-Dark" : "criteriaTitle"}>Endangered</box>
                    <paragragraph id = {this.state.darkMode ? "criteriaParagraph-Dark" : "criteriaParagraph"}>
                      Species which are at very high risk of extinction in the wild.
                      As of 2021, the IUCN states that there are 16,306 species that are considered to be Endangered.
                    </paragragraph>
                  </box>
                </Item>

                <Item>
                  <box id = {this.state.darkMode ? "criteriaFrame-Dark" : "criteriaFrame"}>
                    <box  id = {this.state.darkMode ? "criteriaTitle-Dark" : "criteriaTitle"}>Critically Endangered</box>
                    <paragragraph id = {this.state.darkMode ? "criteriaParagraph-Dark" : "criteriaParagraph"}> 
                      Species which are facing an extremely high risk of extinction in the wild.
                      As of 2021, the IUCN states that there are 8,404 species that are considered to be Critically Endangered.
                    </paragragraph>
                  </box>
                </Item>

                <Item>
                  <box id = {this.state.darkMode ? "criteriaFrame-Dark" : "criteriaFrame"}>
                    <box  id = {this.state.darkMode ? "criteriaTitle-Dark" : "criteriaTitle"}>Extinct in the Wild</box>
                    <paragragraph id = {this.state.darkMode ? "criteriaParagraph-Dark" : "criteriaParagraph"}>
                      Specieds which survives only in captivity, cultivation and/or outside native range, as presumed after exhaustive surveys.
                    </paragragraph>
                  </box>
                </Item>

                <Item>
                  <box id = {this.state.darkMode ? "criteriaFrame-Dark" : "criteriaFrame"}>
                    <box id = {this.state.darkMode ? "criteriaTitle-Dark" : "criteriaTitle"}>Extinct</box>
                    <paragragraph id = {this.state.darkMode ? "criteriaParagraph-Dark" : "criteriaParagraph"}>
                      Species that are no longer in existence.
                      There are no single species alive, it is the death of the last individual of the species.
                      More than 900 species have gone extinct over the five centuries.
                    </paragragraph>
                  </box>
                </Item>
              </Carousel>
            </div>
          </div>


{/* ///////// V I D E O ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
<div className= {this.state.darkMode ? "video-Dark" : "video"}>
  <line className = "thinLine"></line>
    <paragragraph className="video-Discription">A video guide on what are Endangered Species.</paragragraph>
      <ReactPlayer className='videoFrame' light={true} controls={true} url="https://www.youtube.com/watch?v=6tjDCZrGnxc" height='574px' width='1020px'/>
  <line className = "thinLine"></line>
</div>
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


          <div className='container'>
            <div className = "mainSubHeadFrame">
              <subhead className = {this.state.darkMode ? "subheadLrgDrk" : "subheadLrg"}>Endangered Species</subhead>
            </div>

            <div className = {this.state.darkMode ? "pageDiscriptionTitle-Dark" : "pageDiscriptionTitle"}>
              View some of the most endangered and critically endangered animal, plants and fungi species.
              And learn why these species are important to our planet and our life.
            </div>

            <box id = "long_Box">
              <Link exact to="./amphibians" className='speciesMainFrame'>
                <image className={this.state.darkMode ? "speciesImageMid-Dark" : "speciesImageMid-Light"}>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${amphibian})`}}></div>
                </image>
                <label className = {this.state.darkMode ? "speciesType-Dark" : "speciesType-Light"}>A M P H I B I A N S</label>
              </Link>

              <Link exact to="./birds" className='speciesMainFrame'>
                <box className = "speciesCardContainer">
                  <image className={this.state.darkMode ? "speciesImageMid-Dark" : "speciesImageMid-Light"}>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${birds})`}}></div>
                  </image>
                  <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Simon Boivin</label></div>
                  <label className = {this.state.darkMode ? "speciesType-Dark" : "speciesType-Light"}>B I R D S</label>
                </box>
              </Link>
          
              <Link exact to="./mammels" className='speciesMainFrame'>
                <image className={this.state.darkMode ? "speciesImageMid-Dark" : "speciesImageMid-Light"}>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${mammels})`}}></div>
                </image> 
                <label className = {this.state.darkMode ? "speciesType-Dark" : "speciesType-Light"}>M A M M E L S</label>
              </Link>
            </box>

            <line className = "largeLine"></line>

            <box id = "long_Box">
              <Link exact to="./aquatic" className='speciesMainFrame'>
                <image className={this.state.darkMode ? "speciesImageMid-Dark" : "speciesImageMid-Light"}>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${marine})`}}></div>
                </image>
                <label className = {this.state.darkMode ? "speciesType-Dark" : "speciesType-Light"}>A Q U A T I C</label>
              </Link>

              <Link exact to="./artic" className='speciesMainFrame'>
                <box className = "speciesCardContainer">
                  <image className={this.state.darkMode ? "speciesImageMid-Dark" : "speciesImageMid-Light"}>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${artic})`}}></div>
                  </image> 
                  <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Dave Sandford</label></div>

                  <label className = {this.state.darkMode ? "speciesType-Dark" : "speciesType-Light"}>A R T I C</label>
                </box>
              </Link>

              <Link exact to="./plants" className='speciesMainFrame'>
                <image className={this.state.darkMode ? "speciesImageMid-Dark" : "speciesImageMid-Light"}>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${plant})`}}></div>
                </image> 
                <label className = {this.state.darkMode ? "speciesType-Dark" : "speciesType-Light"}>P L A N T S</label>
              </Link>
            </box>

            <line className = "largeLine"></line>

            <box id = "long_Box">
              <Link exact to="./fungus" className='speciesMainFrame'>
                <image className={this.state.darkMode ? "speciesImageMid-Dark" : "speciesImageMid-Light"}>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${fungus})`}}></div>
                </image>
                <label className = {this.state.darkMode ? "speciesType-Dark" : "speciesType-Light"}>F U N G U S</label>
              </Link>
              
              <Link exact to="./fungus" className='speciesMainFrame'>
                <image className={this.state.darkMode ? "speciesImageMid-Dark" : "speciesImageMid-Light"}>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${reptiles})`}}></div>
                </image>
                <label className = {this.state.darkMode ? "speciesType-Dark" : "speciesType-Light"}>R E P T I L E S</label>
              </Link>

              <Link exact to="./fungus" className='speciesMainFrame'>
                <image className={this.state.darkMode ? "speciesImageMid-Dark" : "speciesImageMid-Light"}>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${insects})`}}></div>
                </image>
                <label className = {this.state.darkMode ? "speciesType-Dark" : "speciesType-Light"}>I N S E C T S</label>
              </Link>
            </box>

            <line className = "largeLine"></line>

            <box id = "long_Box">
              <Link exact to="./endSpeciesUk" className='speciesCardContainer'>
                <box className = "speciesCardContainer">
                  <image className={this.state.darkMode ? "speciesImageMid-Dark" : "speciesImageMid-Light"}>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${Uk})`}}></div>
                  </image>
                  <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Tony Cox</label></div>
                  <label className = {this.state.darkMode ? "speciesType-Dark" : "speciesType-Light"}>Endangered Species in UK</label>
                </box>
              </Link>
            </box>
          </div>

        </body>

        <EndangeredSpeciesSuvNav/>
      </div>
    );
  }
}