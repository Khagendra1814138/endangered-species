import React from 'react';
import {Component} from "react";

import '../../pages/publicMain.css';
import './reptiles.css';


import {HomeSuvNav} from "../../subNav/subNavigation";
import headerReptiles from '../../images/headerReptiles.png';

import FontSizeIncreaser from '../../readAccessibilityGuideFunctions/fontSizeIncrease';
import DarkModeFunction from '../../darkMode/darkMode';

//Text To Voices
import {HomeParagraphOneVoice} from "../../textToVoice/paragraphs";



export class Reptiles extends Component {
  
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

      <div className={this.state.darkMode ? "pageMainFrameDark" : "pageMainFrameLight"}>

        <FontSizeIncreaser fontSize={this.state.fontSize} setFontSize={(size) => this.setState({ fontSize: size })} />

        <box className = "landingImageBox2" style={{ backgroundImage: `url(${headerReptiles})`}}>
        </box>

        <DarkModeFunction darkMode={this.state.darkMode} setDarkmode={(darkMode) => this.setState({darkMode})} />

        <body className='pageBodyFrame'>
          <div className='container'>

            <div className = "mainSubHeadFrame">
              <subhead className = {this.state.darkMode ? "subheadLrgDrk" : "subheadLrg"}>Reptiles Page</subhead>
            </div>

            
          </div>

          <div className='container'>
            <div className = "mainSubHeadFrame">
              <subhead className = {this.state.darkMode ? "subheadLrgDrk" : "subheadLrg"}>Extinct Species!</subhead>
            </div>
            <box className="paragraphContainer">
              <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                Did you know that over 900+ species of plants and animals have gone extinct over the five centuries.
                And more than 70 species are now considered as extinct in the wild! stated by the IUCN. 
                Extinct in the wild means that the species is the only living members kept in captivity or as a naturalized population outside its historic range due to massive habitat loss.
                The UN report states that around 1 million animal and plant species are now threatened with extinction, many within decades.
                {/* https://ourworldindata.org/extinctions#:~:text=Extinctions%20have%20been%20a%20natural,in%20the%20last%20five%20centuries. */}
              </paragragraph>
              <HomeParagraphOneVoice/>
            </box>
          </div>

  {/* this is the (2nd ROW 2 column) large Grid diaplay */}
          <div class="grid-container-3columns-2rows">
            <div class="item">
              <div class="medImagFrame">1</div>
              <div class="endSpecies-name"></div>
            </div>

            <div class="item-secondRowTwoColumnTopRIGHT-long">
              <div class="twoColumn-longImagFrame">1st row and 2 column long TOP RIGHT</div>
              <div class="endSpecies-name"></div>
            </div>

            <div class="item">
              <div class="medImagFrame">3</div>
              <div class="endSpecies-name"></div>
            </div>

            <div class="item">
              <div class="medImagFrame">4</div>
              <div class="endSpecies-name"></div>
            </div>

            <div class="item">
              <div class="medImagFrame">5</div>
              <div class="endSpecies-name"></div>
            </div>
          </div>


  {/* this is the (2nd ROW 2 column) large Grid diaplay */}
          <div class="grid-container-3columns-2rows">
            <div class="item">
              <div class="medImagFrame">1</div>
              <div class="endSpecies-name"></div>
            </div>

            <div class="item-secondRowTwoColumnTopRIGHT-long">
              <div class="twoColumn-longImagFrame">1st row and 2 column long TOP RIGHT</div>
              <div class="endSpecies-name"></div>
            </div>

            <div class="item">
              <div class="medImagFrame">3</div>
              <div class="endSpecies-name"></div>
            </div>

            <div class="item">
              <div class="medImagFrame">4</div>
              <div class="endSpecies-name"></div>
            </div>

            <div class="item">
              <div class="medImagFrame">5</div>
              <div class="endSpecies-name"></div>
            </div>
          </div>


  {/* //this is the (2nd ROW 2 column) large Grid diaplay*/}
          <div class="grid-container-3columns-2rows">
            <div class="item">
              <div class="medImagFrame">1</div>
              <div class="endSpecies-name"></div>
            </div>

            <div class="item">
              <div class="medImagFrame">2</div>
              <div class="endSpecies-name"></div>
            </div>

            <div class="item-secondRowTwoColumnBottomLeft-long">
              <div class="twoColumn-longImagFrame">2nd row and 2 column long BOTTOM LEFT</div>
              <div class="endSpecies-name"></div>
            </div>

            <div class="item">
              <div class="medImagFrame">4</div>
              <div class="endSpecies-name"></div>
            </div>

            <div class="item">
              <div class="medImagFrame">5</div>
              <div class="endSpecies-name"></div>
            </div>
          </div>




  {/* //this is the (2nd ROW 2 column) large Grid diaplay*/}
          <div class="grid-container-3columns-2rows">
            <div class="item">
              <div class="medImagFrame">1</div>
              <div class="endSpecies-name"></div>
            </div>

            <div class="item">
              <div class="medImagFrame">2</div>
              <div class="endSpecies-name"></div>
            </div>

            <div class="item-secondRowTwoColumnBottomLeft-long">
              <div class="twoColumn-longImagFrame">2nd row and 2 column long BOTTOM LEFT</div>
              <div class="endSpecies-name"></div>
            </div>

            <div class="item">
              <div class="medImagFrame">4</div>
              <div class="endSpecies-name"></div>
            </div>

            <div class="item">
              <div class="medImagFrame">5</div>
              <div class="endSpecies-name"></div>
            </div>
          </div>


        </body>
        <HomeSuvNav/>
      </div>    
    );
  }
}