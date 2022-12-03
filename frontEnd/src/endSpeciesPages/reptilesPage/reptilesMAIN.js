import React from 'react';
import {Component} from "react";
import ReactPlayer from 'react-player';

import '../../pages/publicMain.css';
import './reptiles.css';
import './reptilesNameSTYLES.css';

//SideBarPageNav
import {ReptilesSideBarPageNav} from "../../sideBarPagesNav/EnReptilesSideBarPageNav";

import {ReptilesPageSuvNav} from "../../subNav/subNavigation";
import headerReptiles from '../../images/headerReptiles.png';

import FontSizeIncreaser from '../../readAccessibilityGuideFunctions/fontSizeIncrease';
import DarkModeFunction from '../../darkMode/darkMode';

//Text To Voices
import {ReptilesTopParagraphVOICE} from "./reptilesVOICE";
import {YangtzeGiantSoftsellVOICE} from "./reptilesVOICE";
import {TurtleImportanceVOICE} from "./reptilesVOICE";
import {CrocodileImportanceVOICE} from "./reptilesVOICE";
import {LizardsImportanceVOICE} from "./reptilesVOICE";
import {SnakeImportanceVOICE} from "./reptilesVOICE";


//Text and paragraphs
import {ReptilesMainParagraph} from "./reptilesParagragraph";
import {YangtzeGiantSoftsellParagraph} from "./reptilesParagragraph";
import {TurtleImportanceParagraph} from "./reptilesParagragraph";
import {CrocodileImportanceParagraph} from "./reptilesParagragraph";
import {LizardsImportanceParagraph} from "./reptilesParagragraph";
import {SnakesImportanceParagraph} from "./reptilesParagragraph";


//Turtles and Tortoises Cards & Paragraph
import {TurtlesAndTortoisesCardSet1} from "./turtlesAndTortoises";
import {TurtlesAndTortoisesCardSet2} from "./turtlesAndTortoises";


//Crocodiles and Allligators
import {CrocodilesAndAlligatorsCardSet} from "./crocodilesAndAlligators";

//Lizards, Iguans and Chameleon
import {LizardsSet1} from "./lizard,IgunaAndChameleon";
import {LizardsSet2} from "./lizard,IgunaAndChameleon";

//Snakes
import {SnakesCardSet1} from "./snakes";
import {SnakesCardSet2} from "./snakes";

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
        <ReptilesSideBarPageNav/>
        <FontSizeIncreaser fontSize={this.state.fontSize} setFontSize={(size) => this.setState({ fontSize: size })} />

        <box className = "landingImageBox2" style={{ backgroundImage: `url(${headerReptiles})`}}> </box>

        <DarkModeFunction darkMode={this.state.darkMode} setDarkmode={(darkMode) => this.setState({darkMode})} />
        <body className='pageBodyFrame'>

          <div className = "mainSubHeadFrame">
            <subhead className = {this.state.darkMode ? "subheadLrgDrk" : "subheadLrg"}>Endangered Reptiles Species</subhead>
          </div>

          <div className='container'>
            <box className="paragraphContainer">
              <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                <ReptilesMainParagraph/>
              </paragragraph>
              <ReptilesTopParagraphVOICE/>
            </box>
          
            <TurtlesAndTortoisesCardSet1/>
          </div>


          <div className='container'>
            <box className="paragraphContainer">
              <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                <YangtzeGiantSoftsellParagraph/>
              </paragragraph>
              <YangtzeGiantSoftsellVOICE/>
            </box>
          </div>


{/* ///////// V I D E O ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}          
<div className= {this.state.darkMode ? "video-Dark" : "video"}>
  <line className="thinLine"></line> 
    <paragragraph className="video-Discription">A video about the Critically endangered Scottish wildcats.</paragragraph>
    <ReactPlayer className='videoFrame' controls={true} url="https://www.youtube.com/watch?v=g3W3yr8NopU&t=93s" height="450px" width="800px"/>
  <line className="thinLine"></line> 
</div> 
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


          <div className='container'>
            <TurtlesAndTortoisesCardSet2/>

            <box className="paragraphContainer">
              <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                <TurtleImportanceParagraph/>
              </paragragraph>
            <TurtleImportanceVOICE/>
            </box>

            <CrocodilesAndAlligatorsCardSet/>
          </div>


          <div className='container'>
            <box className="paragraphContainer">
              <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                <CrocodileImportanceParagraph/>
              </paragragraph>
            <CrocodileImportanceVOICE/>
            </box>

            <LizardsSet1/>
          </div>


{/* ///////// V I D E O ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}          
<div className= {this.state.darkMode ? "video-Dark" : "video"}>
  <line className="thinLine"></line> 
    <paragragraph className="video-Discription">A video about the Critically endangered Scottish wildcats.</paragragraph>
    <ReactPlayer className='videoFrame' controls={true} url="https://www.youtube.com/watch?v=g3W3yr8NopU&t=93s" height="450px" width="800px"/>
  <line className="thinLine"></line> 
</div> 
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


          <div className='container'>
            <LizardsSet2/>
            <box className="paragraphContainer">
              <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                <LizardsImportanceParagraph/>
              </paragragraph>
              <LizardsImportanceVOICE/>
            </box>

            <SnakesCardSet1/>
          </div>


{/* ///////// V I D E O ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}          
<div className= {this.state.darkMode ? "video-Dark" : "video"}>
  <line className="thinLine"></line> 
    <paragragraph className="video-Discription">A video about the Critically endangered Scottish wildcats.</paragragraph>
    <ReactPlayer className='videoFrame' controls={true} url="https://www.youtube.com/watch?v=g3W3yr8NopU&t=93s" height="450px" width="800px"/>
  <line className="thinLine"></line> 
</div> 
{/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}


          <div className='container'>
            <SnakesCardSet2/>

            <box className="paragraphContainer">
              <paragragraph style={{fontSize: `${this.state.fontSize}px`}} className = {this.state.darkMode ? "paragpaphLrg-Dark" : "paragpaphLrg-Light"}>
                <SnakesImportanceParagraph/>
              </paragragraph>
              <SnakeImportanceVOICE/>
            </box>
          </div>

        </body>
        <ReptilesPageSuvNav/>
      </div>    
    );
  }
}