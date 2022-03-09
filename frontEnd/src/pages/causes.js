import React from "react";
import { Component } from "react";
import ReactPlayer from 'react-player';

import './publicMain.css';
import './causes.css';

import {CausesSuvNav} from "../subNav/subNavigation";
import header5 from '../images/header5.png';

import PlasticPollution from '../images/pagesImages/PlasticPollution.jpg';
import ChemicalPollution from '../images/pagesImages/ChemicalPollution.jpg';
import Infrastructures from '../images/pagesImages/Infrastructures.jpg';
import climateChange from '../images/pagesImages/climateChange.jpg';
import illegalPoach from '../images/pagesImages/illegalPoach.jpg';
import habitatDistruction from '../images/pagesImages/habitatDistruction.jpg';
import InvasiveSpecies from '../images/pagesImages/InvasiveSpecies.jpg';
import overFishing from '../images/pagesImages/overFishing.jpg';
import oilRig from '../images/pagesImages/oilRig.jpg';
import disease from '../images/pagesImages/disease.jpg';


import FontSizeIncreaser from '../readAccessibilityGuideFunctions/fontSizeIncrease';
import DarkModeFunction from '../darkMode/darkMode';


//Text To Voices
import {CausesPageParagraphVoice} from "../textToVoice/paragraphs";
import {CausesPagePlasticPollutionVoice} from "../textToVoice/paragraphs";


export class Causes extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
      fontSize: 18,
    };
  }

  render(){

    return (
      <div className={this.state.darkMode ? "pageMainFrameDark" : "pageMainFrameLight"}>

{/* //////////////////////////////////////////////////////FontSizeFunction////////////////////////////////////////////////////// */}
        <FontSizeIncreaser fontSize={this.state.fontSize} setFontSize={(size) => this.setState({ fontSize: size })} />
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <box className = "landingImageBox2" style={{ backgroundImage: `url(${header5})`}}></box>
        
{/* //////////////////////////////////////////////////////DarkModeFunction////////////////////////////////////////////////////// */}
        <DarkModeFunction darkMode={this.state.darkMode} setDarkmode={(darkMode) => this.setState({darkMode})} />
{/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <body className='pageBodyFrame'>
          <div className='container'>

            <div className = "mainSubHeadFrame">
              <subhead className={this.state.darkMode ? "subheadLrgDrk" : "subheadLrg"}>Causes threatning the species</subhead>
            </div>

            <box className="paragraphContainer">
              <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                Wildlife in our planet is under threat from all sides, from facing down habitat loss and the impact of climate change. 
                Some of the biggest threats that the endangered species faces includes illegal wildlife trade, habitat destruction, invasive species, pollution, and climate change.
              </paragragraph>
              <CausesPageParagraphVoice/>
            </box>
      

            <box className = "box">
              <image className={this.state.darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${PlasticPollution})`}}></div>
              </image>

              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>P l a s t i c - P o l l u t i o n</label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                  There are 500 times more pieces of microplastic in our ocean than there are stars in our galaxy! 
                  More than eight hundred million tonnes of plastic waste are thrown into our ocean every year, 
                  washing up on previously pristine parts of the planet. 
                  This is causing threat to the survival of more than 600 species of marine species.
                  For example, species like fishes gets caught stuck on plastic nets or consumes them, leading to their death.
                </paragragraph>
              </box>
            </box>
            <CausesPagePlasticPollutionVoice/>

            <div className= {this.state.darkMode ? "videoFrame-Dark" : "videoFrame"}>
              <line className = "thinLine"></line>
              <div className= {this.state.darkMode ? "video-Dark" : "video"}>
                <paragragraph className="video-Discription">A video of plastic pollution effects.</paragragraph>
                <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=IA9O9YUbQew"/>
              </div>
              <line className = "thinLine"></line>
            </div>

            {/* <line className = "largeLine"></line> */}

            <box className = "box">
              <box className = "speciesCardContainer">
                <image className={this.state.darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${ChemicalPollution})`}}></div>
                </image>
                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Shutterstock</label></div>
              </box>

              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>C h e m i c a l - P o l l u t i o n</label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                  Chemical pollutents enters our water from Pestiside chemicals used by the farmers, industrial activities and our home. 
                  Chemical pollution in river waters can lower fertility, damage to the immune systems or cause deformities, 
                  tumours and even death in any aquatic species that is exposed to it. 
                  Not just animals but humans can also suffer some of these effects when our drinking water becomes polluted.
                  {/* https://blog.cwf-fcf.org/index.php/en/threats-chemical-pollution/ */}
                </paragragraph>
              </box>
            </box>

            <line className = "largeLine"></line>

            <box className = "box">
              <box className = "speciesCardContainer">
                <image className={this.state.darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${Infrastructures})`}}></div>
                </image>
                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Gettyimages</label></div>
              </box>
              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>I n f r a s t r u c t u r e 's</label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                  Bulding of infrastructures, such as road can alter ecological conditions, cut through natural habitats, which can lead to reduce populations of many wildlife species.
                  For example, building a roads through the Amazon forest can destroy habitat or cut off the migration route for endangered species.
                  Building of dams on the rivers can cut off fresh water from species that are already struggling through drouts and can stop native fishes species from migrating and breeding.
                </paragragraph>
              </box>
            </box>
            
            <line className = "largeLine"></line>

            <box className = "box">
              <image className={this.state.darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${climateChange})`}}></div>
              </image>

              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>C l i m a t e - C h a n g e</label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                  Climate change is one of the biggest threat to the endangered spcies. Because of climate change Sea levels are rising and oceans are becoming warmer, threatning the marine species. 
                  Intense droughts threaten crops, wildlife and freshwater supplies. From polar bears in the Arctic becasue of melting ice to marine turtles off the coast of Africa, our planets life is at risk of extinction.
                  Humans activities like the burning of coal, oil and gas are the reason for this.
                </paragragraph>
              </box>
            </box>

            <div className= {this.state.darkMode ? "videoFrame-Dark" : "videoFrame"}>
              <line className = "thinLine"></line>
              <div className= {this.state.darkMode ? "video-Dark" : "video"}>
                <paragragraph className="video-Discription">A video of how climate change is effecting our planet.</paragragraph>
                <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=dIsjcG7hTmo"/>
              </div> 
              <line className = "thinLine"></line>
            </div>

            {/* <line className = "largeLine"></line> */}

            <box className = "box">
              <box className = "speciesCardContainer">
                <image className={this.state.darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${illegalPoach})`}}></div>
                </image>
                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Jerome Starkey</label></div>
              </box>
        
              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>i l l e g a l - T r a d i n g</label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                Did you know that the illegal wildlife trade is the fourth largest criminal industry in the world, 
                after drugs, arms, and human trafficking. It is estimated that it runs into billions of dollars.
                Poaching of Elephant for ivory and Tigers for their skins and bones are the most common examples.
                Also, hunting for pangoling scales and meat is also another example common in Asia.
                There are countless other species that are similarly overexploited, from marine turtles to timber trees.
                </paragragraph>
              </box>
            </box>

            
            <line className = "largeLine"></line>

            <box className = "box">
              <box className = "speciesCardContainer">
                <image className={this.state.darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${habitatDistruction})`}}></div>
                </image>
                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Reuters</label></div>
              </box>

              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>H a b i t a t - D i s t r u c t i o n</label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                  Habit distruction are another major threats to the endangered species.
                  The main cause for this is becuase of Agriculture such as palm oil farm, land conversion for development, water development, pollution and climate change.
                  Also, natural disaster like wildfire can devistate the species homeland.
                  Habitat distruction/loss can lead to loss of prey/food, water, cover, and places to raise young wildlife. 
                  Everyday there are fewer places left that wildlife can call home.
                </paragragraph>
              </box>
            </box>

            <div className= {this.state.darkMode ? "videoFrame-Dark" : "videoFrame"}>
              <line className = "thinLine"></line>
              <div className= {this.state.darkMode ? "video-Dark" : "video"}>
                <paragragraph className="video-Discription">A video of how deforestation effects out planet.</paragragraph>
                <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=Ic-J6hcSKa8"/>
              </div> 
              <line className = "thinLine"></line>
            </div>
  {/* 
            <line className = "largeLine"></line> */}

            <box className = "box">
              <image className={this.state.darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${InvasiveSpecies})`}}></div>
              </image>
      
              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>I n v a s i v e - S p e c i e s</label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                  This is when a non-native species is accidently or intentionally introduced, and the species grow and reproduce rapidly, then spread across ecosystems aggressively.
                  It been estimated that around 42% of threatened or endangered species are at risk due to invasive species.
                  Not only animals but humans are also at risk from invasive species. For example, invasive species are destroying agriculture farms all around the world.
                </paragragraph>
              </box>
            </box>

            <line className = "largeLine"></line>

            <box className = "box">
              <image className={this.state.darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${overFishing})`}}></div>
              </image>
      
              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>O v e r - F i s h i n g</label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                  Fishing is one of the most significant reason for declines in ocean species population. 
                  Global sea food demand has increased rapidly and people are taking more fishes from the oceans, rivers and lakes than it can reproduce and sustain.
                  E.g., fishes like salmon, sturgeons, tunas and cods have undergone dramatic decline.
                  Overfishing can also lead to bycatch, which is the capture of unwanted species while fishing like sea turtles.
                  This is a serious threat to the endangered marine species that causes loss of billions of fishes.
                </paragragraph>
              </box>
            </box>

            <div className= {this.state.darkMode ? "videoFrame-Dark" : "videoFrame"}>
              <line className = "thinLine"></line>
              <div className= {this.state.darkMode ? "video-Dark" : "video"}>
                <paragragraph className="video-Discription">A video of over fishing.</paragragraph>
                <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=Q1EcQQsJrmg"/>
              </div> 
              <line className = "thinLine"></line>
            </div>

            {/* <line className = "largeLine"></line> */}

            <box className = "box">
              <box className = "speciesCardContainer">
                <image className={this.state.darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${disease})`}}></div>
                </image>
                <div class="overlay overlayLeft"><label class="photograpgerName">Photograph by Brian GratWicke</label></div>
              </box>
              
              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>D i s e a s e</label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                  When the ecosystem becomes unhealthy because of loss in biodiversity and threats such as climate change, pollution, habitat loss or invasive species,
                  wildlife species and the ecosystem become more vulnerable to emerging diseases.
                  Diseases carried by or caused by invasive species are threatning to the native species, as they might not have natural immunity. 
                  E.g., Sea turtle around the world are becoming infected with "Fibropapillomatosis" disease, which causes tumors to appear on the skin or internally.
                </paragragraph>
              </box>
            </box>

            <line className = "largeLine"></line>

            <box className = "box">
              <image className={this.state.darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${oilRig})`}}></div>
              </image>
      
              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>O i l & G a s - D e v e l o p m e n t</label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                  Many of our planet most diverse and ecologically important areas like the Arctic and Congo Basin hold large deposits of oil and gas.
                  Oil and gas exploration or extracting causes disruption of migratory pathways, degradation of important animal habitats, and oil spills can be harmful to these species.
                  For example, whales and other marine species uses sounds to navigate, find mates, and find food. However, noise from oil and gas exploration and drilling could cause injury, confusion, and even death to these species.
                  {/* https://www.worldwildlife.org/threats */}
                </paragragraph>
              </box>
            </box>

          </div>
        
        </body>
        <CausesSuvNav/>
      </div>
    );
  }
}