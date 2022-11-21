import React from 'react';
import { Component } from "react";
import ReactPlayer from 'react-player';

import '../publicMain.css';
import '../page-SpeciesCauses/causesPage.css'

import {IndividualActonSuvNav} from "../../subNav/subNavigation";

import header6 from '../../images/header6.png';
import share from '../../images/pagesImages/share.jpg';
import shopping from '../../images/pagesImages/shopping.jpg';
import recycle from '../../images/pagesImages/recycle.jpg';
import supportOrganisation from '../../images/pagesImages/supportOrganisation.jpg';
import healthyEating from '../../images/pagesImages/healthyEating.jpg';
import publicTransport from '../../images/pagesImages/publicTransport.png';
import electricity from '../../images/pagesImages/electricity.jpg';
import healthyGarden from '../../images/pagesImages/healthyGarden.jpg';
import voice from '../../images/pagesImages/voice.jpg';
import travel from '../../images/pagesImages/travel.jpg';

import FontSizeIncreaser from '../../readAccessibilityGuideFunctions/fontSizeIncrease';
import DarkModeFunction from '../../darkMode/darkMode';

//Paragraph texts
import {IndividualActionParagaph1} from "./individualActionsPARAGRAPH";

import {ShareInformationPARAGRAPH} from "./individualActionsPARAGRAPH";
import {PurchasingHabitPARAGRAPH} from "./individualActionsPARAGRAPH";
import {RecycleReuseDisposePARAGRAPH} from "./individualActionsPARAGRAPH";
import {SupportOrganisationPARAGRAPH} from "./individualActionsPARAGRAPH";
import {ReduceDairyMeatProductsPARAGRAPH} from "./individualActionsPARAGRAPH";
import {SmartTransportPARAGRAPH} from "./individualActionsPARAGRAPH";
import {ReduceEnergyConsumptionPARAGRAPH} from "./individualActionsPARAGRAPH";
import {KeepGardenHealthyPARAGRAPH} from "./individualActionsPARAGRAPH";
import {UseYourVoicePARAGRAPH} from "./individualActionsPARAGRAPH";
import {TravelCompassionatlyPARAGRAPH} from "./individualActionsPARAGRAPH";

//Text To Voices
import {IndividualActionParagraph} from "../../textToVoice/individualActionPageVoice";
import {ShareInformationParagraphVoice} from "../../textToVoice/individualActionPageVoice";
import {PurchasingHabitParagraphVoice} from "../../textToVoice/individualActionPageVoice";
import {RecycleReuseDisposeParagraphVoice} from "../../textToVoice/individualActionPageVoice";
import {SupportOrganisationParagraphVoice} from "../../textToVoice/individualActionPageVoice";
import {ReduceDairyMeatProductsParagraphVoice} from "../../textToVoice/individualActionPageVoice";
import {SmartTransportParagraphVoice} from "../../textToVoice/individualActionPageVoice";
import {ReduceEnergyConsumptionParagraphVoice} from "../../textToVoice/individualActionPageVoice";
import {KeepGardenHealthyParagraphVoice} from "../../textToVoice/individualActionPageVoice";
import {UseYourVoiceParagraphVoice} from "../../textToVoice/individualActionPageVoice";
import {TravelCompassionatlyParagraphVoice} from "../../textToVoice/individualActionPageVoice";


// sources used:
// https://www.huffpost.com/entry/12-things-we-should-all-do-to-protect-endangered-species_b_58bd9c87e4b0abcb02ce2067
// https://www.binnysfoodandtravel.com/2020/05/15/10-ways-you-can-help-to-save-our-endangered-species/
// https://www.adoptananimalkits.com/advocate/how-to-help-animals/params/post/1282604/10-ways-to-help-endangered-species

export class IndividualAction extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      darkMode: false,
      fontSize: 18,
    };
  }

  render(){
    
    return( 
      <div className={this.state.darkMode ? "pageMainFrameDark" : "pageMainFrameLight"}>
        
  {/* //////////////////////////////////////////////////////FontSizeFunction////////////////////////////////////////////////////// */}
  <FontSizeIncreaser fontSize={this.state.fontSize} setFontSize={(size) => this.setState({ fontSize: size })} />
  {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <box className = "landingImageBox2" style={{ backgroundImage: `url(${header6})`}}></box>

  {/* //////////////////////////////////////////////////////DarkModeFunction////////////////////////////////////////////////////// */}
  <DarkModeFunction darkMode={this.state.darkMode} setDarkmode={(darkMode) => this.setState({darkMode})} />
  {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <body className='pageBodyFrame'>
          
          <div className = "mainSubHeadFrame">
            <subhead className={this.state.darkMode ? "subheadLrgDrk" : "subheadLrg"}>Take daily individual actions</subhead>
          </div>
            
          <div className='container'>
            <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
              <IndividualActionParagaph1/>
            </paragragraph>
            <IndividualActionParagraph/>

            <div className = {this.state.darkMode ? "pageDiscriptionTitle-Dark" : "pageDiscriptionTitle"}>
              Below we have listed daily stepe you can take everyday to reduct your carbon footprint.
              And individual action you can take to protect the endangered species.
            
            </div>
          </div>
            
            <div className= {this.state.darkMode ? "video-Dark" : "video"}>
              <line className="thinLine"></line>
                <paragragraph className="video-Discription">A video of how the endangered species can be saved.</paragragraph>
                <ReactPlayer className='videoFrame' 
                  controls={true} 
                  url="https://www.youtube.com/watch?v=0Puv0Pss33M"
                  height="450px" 
                  width="800px" 
                />
              <line className="thinLine"></line>
            </div> 
            

          <div className='container'>

            <box className = "box">
              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>S h a r e - I n f o r m a t i o n</label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                  <ShareInformationPARAGRAPH/>
                </paragragraph>
              </box>

              <image className={this.state.darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${share})`}}></div>
              </image>
            </box>
            <ShareInformationParagraphVoice/>


            <line className = "largeLine"></line>


            <box className = "box">
              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>P u r c h a s i n g - H a b i t</label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                  <PurchasingHabitPARAGRAPH/>
                </paragragraph>
              </box>

              <image className={this.state.darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${shopping})`}}></div>
              </image>
            </box>
            <PurchasingHabitParagraphVoice/>
            

            <line className = "largeLine"></line>


            <box className = "box">
              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>R e c y c l e - R e u s e - D i s p o s e</label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                  <RecycleReuseDisposePARAGRAPH/>
                </paragragraph>
              </box>

              <image className={this.state.darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${recycle})`}}></div>
              </image>
            </box>
            <RecycleReuseDisposeParagraphVoice/>

           
                <div className= {this.state.darkMode ? "video-Dark" : "video"}>
                  <line className="thinLine"></line>
                    <paragragraph className="video-Discription">A video guide on how to recycle properly at you home.</paragragraph>
                    <ReactPlayer className='videoFrame' 
                      controls={true} 
                      url="https://www.youtube.com/watch?v=BnwdpR_2idA"
                      height="450px" 
                      width="800px" 
                    />
                  <line className="thinLine"></line>
                </div> 
       

            {/* <line className = "largeLine"></line> */}


            <box className = "box">
              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>S u p p o r t - O r g a n i s a t i o n 's</label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                  <SupportOrganisationPARAGRAPH/>
                </paragragraph>
              </box>

              <image className={this.state.darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${supportOrganisation})`}}></div>
              </image>
            </box>
            <SupportOrganisationParagraphVoice/>

            
            <line className = "largeLine"></line>


            <box className = "box">
              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>R e d u c e - M e a t & D a i r y</label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                  <ReduceDairyMeatProductsPARAGRAPH/>
                </paragragraph>
              </box>

              <image className={this.state.darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${healthyEating})`}}></div>
              </image>
            </box>
            <ReduceDairyMeatProductsParagraphVoice/>

            
     
            <div className= {this.state.darkMode ? "video-Dark" : "video"}>
              <line className="thinLine"></line>
                <paragragraph className="video-Discription">A video of meat product effects our planet.</paragragraph>
                <ReactPlayer className='videoFrame' 
                  controls={true}
                  url="https://www.youtube.com/watch?v=3lrJYTsKdUM"
                  height="450px" 
                  width="800px" 
                />
              <line className="thinLine"></line>
            </div> 
        

            
            {/* <line className = "largeLine"></line> */}


            <box className = "box">
              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>S m a r t - T r a n s p o r t</label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                  <SmartTransportPARAGRAPH/>
                </paragragraph>
              </box>

              <image className={this.state.darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${publicTransport})`}}></div>
              </image>
            </box>
            <SmartTransportParagraphVoice/>

            
            <line className = "largeLine"></line>


            <box className = "box">
              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>R e d u c e E n e r g y - C o n s u m p t i o n</label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                  <ReduceEnergyConsumptionPARAGRAPH/>
                </paragragraph>
              </box>

              <image className={this.state.darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${electricity})`}}></div>
              </image>
            </box>
            <ReduceEnergyConsumptionParagraphVoice/>

            
            <line className = "largeLine"></line>


            <box className = "box">
              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>K e e p Y o u r G a r d e n - H e a l t h y</label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                  <KeepGardenHealthyPARAGRAPH/>
                </paragragraph>
              </box>

              <image className={this.state.darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${healthyGarden})`}}></div>
              </image>
            </box>
            <KeepGardenHealthyParagraphVoice/>

    
            <div className= {this.state.darkMode ? "video-Dark" : "video"}>
              <line className="thinLine"></line>
                <paragragraph className="video-Discription">A video guide on how to help species in your garden.</paragragraph>
                <ReactPlayer className='videoFrame' 
                  controls={true} 
                  url="https://www.youtube.com/watch?v=Y8_--YV4inE"
                  height="450px" 
                  width="800px" 
                />
              <line className="thinLine"></line>
            </div> 
       
            
            
            {/* <line className = "largeLine"></line> */}


            <box className = "box">
              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>U s e Y o u r - V o i c e</label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                  <UseYourVoicePARAGRAPH/>
                </paragragraph>
              </box>

              <image className={this.state.darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${voice})`}}></div>
              </image>
            </box>
            <UseYourVoiceParagraphVoice/>

            
            <line className = "largeLine"></line>


            <box className = "box">
              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>T r a v e l - C o m p a s s i o n a t e l y</label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                  <TravelCompassionatlyPARAGRAPH/>
                </paragragraph>
              </box>

              <image className={this.state.darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${travel})`}}></div>
              </image>
            </box>
            <TravelCompassionatlyParagraphVoice/>
            
          </div>
        </body>
        <IndividualActonSuvNav/>
      </div>
    );
  }
}