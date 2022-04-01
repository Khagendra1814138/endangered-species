import React from 'react';
import { Component } from "react";
import ReactPlayer from 'react-player';

import './publicMain.css';
import './causes.css';

import {IndividualActonSuvNav} from "../subNav/subNavigation";

import header6 from '../images/header6.png';
import share from '../images/pagesImages/share.jpg';
import shopping from '../images/pagesImages/shopping.jpg';
import recycle from '../images/pagesImages/recycle.jpg';
import supportOrganisation from '../images/pagesImages/supportOrganisation.jpg';
import healthyEating from '../images/pagesImages/healthyEating.jpg';
import publicTransport from '../images/pagesImages/publicTransport.png';
import electricity from '../images/pagesImages/electricity.jpg';
import healthyGarden from '../images/pagesImages/healthyGarden.jpg';
import voice from '../images/pagesImages/voice.jpg';
import travel from '../images/pagesImages/travel.jpg';

import FontSizeIncreaser from '../readAccessibilityGuideFunctions/fontSizeIncrease';
import DarkModeFunction from '../darkMode/darkMode';

//Text To Voices
import {IndividualActionParagraph} from "../textToVoice/individualActionPageVoice";
import {ShareInformationParagraphVoice} from "../textToVoice/individualActionPageVoice";
import {PurchasingHabitParagraphVoice} from "../textToVoice/individualActionPageVoice";
import {RecycleReuseDisposeParagraphVoice} from "../textToVoice/individualActionPageVoice";
import {SupportOrganisationParagraphVoice} from "../textToVoice/individualActionPageVoice";
import {ReduceDairyMeatProductsParagraphVoice} from "../textToVoice/individualActionPageVoice";
import {SmartTransportParagraphVoice} from "../textToVoice/individualActionPageVoice";
import {ReduceEnergyConsumptionParagraphVoice} from "../textToVoice/individualActionPageVoice";
import {KeepGardenHealthyParagraphVoice} from "../textToVoice/individualActionPageVoice";
import {UseYourVoiceParagraphVoice} from "../textToVoice/individualActionPageVoice";
import {TravelCompassionatlyParagraphVoice} from "../textToVoice/individualActionPageVoice";


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

          <div className='container'>
      
            <div className = "mainSubHeadFrame">
              <subhead className={this.state.darkMode ? "subheadLrgDrk" : "subheadLrg"}>Take daily individual actions</subhead>
            </div>

            <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
              There are already existing organizations like WWF, NRDC, Endangered, IUCN and many more... that are doing their part to protect endangered species. 
              Their mission is to find solutions that save the endangered species by applying the best science available and working closely with local communities.
              But we should do our part as well to keep them from going extinct in order to protect the ecosystem. 
              There are many individual actions that you can take in order to make a positive impact on these endangered species.
            </paragragraph>
            <IndividualActionParagraph/>

            <div className= {this.state.darkMode ? "videoFrame-Dark" : "videoFrame"}>
              <line className = "thinLine"></line>
              <div className= {this.state.darkMode ? "video-Dark" : "video"}>
                <paragragraph className="video-Discription">A video of how the endangered species can be saved.</paragragraph>
                <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=0Puv0Pss33M"/>
              </div> 
              <line className = "thinLine"></line>
            </div>

            <box className = "box">
              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>S h a r e - I n f o r m a t i o n</label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                  One of the biggest steps you can take is by becoming a messenger for those without a voice. 
                  Be a supporter for endangered species. Spread your message to your family and friends, and show them how they can contribute. 
                  Use social media to share existing guids and educate your friends and family. Try to reach as many people as you can.
                  The power to help the endangered species is in your hands. Just by doing few small things can make a huge difference.
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
                  Avoid products that are made from endangered species like fur from tigers, 
                  sea otters and crocodile skin. And medicinal products made from rhinos, tiger or pangolin.
                  Dont buy endangered species like parrots, macaws, cockatoos, turtles, lizards and plants like orchids, cacti and cycads. 
                  If you are not sure about the product or the company, always do your research and learn about the companies before buying the products.
                  Also, dont buy items made of wood from rainforest trees or endangered trees.
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
                  Buy less plastic products. Always take your bags to the store, reuse containers and plastic bags and carefully dispose of any lightweight plastics. 
                  Animals gets tangled in these products, end up in the ocean consumed by small fish and it can kill off beneficial microorganisms.
                  Always recycle plastics, paper, metal cans and glass. When taking your trash out, make sure that the bag is sealed safely so the
                  dangerous compounds like bleach, batteries, pesticides, and other chemical are disposed properly at a specialized facility. 
                </paragragraph>
              </box>

              <image className={this.state.darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${recycle})`}}></div>
              </image>
            </box>
            <RecycleReuseDisposeParagraphVoice/>

            <div className= {this.state.darkMode ? "videoFrame-Dark" : "videoFrame"}>
              <line className = "thinLine"></line>
              <div className= {this.state.darkMode ? "video-Dark" : "video"}>
                <paragragraph className="video-Discription">A video guide on how to recycle properly at you home.</paragragraph>
                <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=BnwdpR_2idA"/>
              </div> 
              <line className = "thinLine"></line>
            </div>


            {/* <line className = "largeLine"></line> */}


            <box className = "box">
              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>S u p p o r t - O r g a n i s a t i o n 's</label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                  As mentioned already, there are many different organizations focused on protecting the endangered species and protecting their native habitats. 
                  For example, organizations like the WWF, The Nature Conservancy, One Tree Planted, IUCN and countless others that are dedicated to the conservation of our endangered species and protecting vulnerable wild spaces. 
                  Do your own research and find an organization that you feel is doing good work, and donate what you can to further the cause of that organisation.
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
                  Animal farming is the main cause of over water consumption, pollution, global warming and deforestation. 
                  Livestock produces higher greenhouse gases on our atmosphere than consumption of fossil fuels. 
                  For example, farming industry is the cause of deforestation, soil erosion, habitat loss, species extinction and more... 
                  To raise animals for food, large amounts of food, water, energy, and land are required. 
                  Therefore, by changing your diet to more plant-based food, you aid the endangered species and rescue of our planet.
                </paragragraph>
              </box>

              <image className={this.state.darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${healthyEating})`}}></div>
              </image>
            </box>
            <ReduceDairyMeatProductsParagraphVoice/>

            
            <div className= {this.state.darkMode ? "videoFrame-Dark" : "videoFrame"}>
              <line className = "thinLine"></line>
              <div className= {this.state.darkMode ? "video-Dark" : "video"}>
                <paragragraph className="video-Discription">A video of meat product effects our planet.</paragragraph>
                <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=3lrJYTsKdUM"/>
              </div> 
              <line className = "thinLine"></line>
            </div>

            
            {/* <line className = "largeLine"></line> */}


            <box className = "box">
              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>S m a r t - T r a n s p o r t</label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                  Try using your vehicle less often and when you are traveling try to Carpool or shareride when you can.
                  Always consider using public transportation instead of driving; that way, you are lowering your carbon footprint.
                  Even better if you travel by walking or riding bicycle as it can benifit your health as well.
                  If you are driving then make sure that you are driving smart instead of wasting gas. Like go for a regular check-up of your car to make sure it does not consume extra fuel.
                  If you can, switch your fossil fuel car to electric powered car.
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
                  It is estimated that Approximately 40% of global CO2 emissions are emitted from electricity as it involves burning of fossil fuels.
                  So, by limiting your household energy consumption, you are limiting the amount of C02 being put into the environment by power plants.
                  You can contribute to tackle this issue by lowering your heater temperature, turn off or use less electronic devices when not nessary like your TV etc.
                  If necessary switch your energy supplier to green energy supplier. Also, you can install solar power to your household.
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
                  In your garden, avoid using pesticides and herbicides as toxic chemicals can be consumed and can migrate up the foodchain, resulting in the harming and killing of species.
                  Planting native plants can helps attract pollinators like bees and other insects, which is a important foundations for a healthy ecosystem.
                  Planting the native species can also help balance the damage done by invasive or non-native species.
                  By helping the native plants in your area, you are providing a valuable service to the endangered species.
                </paragragraph>
              </box>

              <image className={this.state.darkMode ? "imageMedium-Dark" : "imageMedium-Light"}>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${healthyGarden})`}}></div>
              </image>
            </box>
            <KeepGardenHealthyParagraphVoice/>

            <div className= {this.state.darkMode ? "videoFrame-Dark" : "videoFrame"}>
              <line className = "thinLine"></line>
              <div className= {this.state.darkMode ? "video-Dark" : "video"}>
                <paragragraph className="video-Discription">A video guide on how to help species in your garden.</paragragraph>
                <ReactPlayer height="450px" width="800px" controls url="https://www.youtube.com/watch?v=Y8_--YV4inE"/>
              </div> 
              <line className = "thinLine"></line>
            </div>
            
            
            {/* <line className = "largeLine"></line> */}


            <box className = "box">
              <box className={this.state.darkMode ? "threatParagraphFrame-Dark" : "threatParagraphFrame-Light"}>
                <label className={this.state.darkMode ? "threatTitle-Dark" : "threatTitle-Light"}>U s e Y o u r - V o i c e</label>
                <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className={this.state.darkMode ? "paragraphMed-Dark" : "paragraphMed-Light"}>
                  Use you voice to pressure your civil servants. 
                  We cannot just rest or rely on the scientific community alone to defend the endangered species. Voters and consumers must take a stand to support them as well. 
                  This means you should writing letters and emails or singing petitions to your local goverment to take action against the threats to the endangered species.
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
                  Sometimes when we travel, we dont realize that the souvenirs or oranament we are buying are under threat. 
                  So, always avoid supporting the illegal markets. For example, dont buy tortoise-shell, ivory, and corals or other illegal related souvenirs.
                  Also, dont participate in activities that exploits endangered/threatned species.
                  For example, animal selfie, trophy hunting or animal rides.
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