import React from 'react';

import '../pages/publicMain.css';
import './mammels.css';

import {MammelsPageSuvNav} from "../subNav/subNavigation";


import {SmallMammelsCarousel} from "./mammelsCarousel";
import {LargeMammelsCarousel} from "./mammelsCarousel";
import {RhinosCarousel} from "./mammelsCarousel";
import {BigCatsCarousel} from "./mammelsCarousel";
import {PrimatesCarousel} from "./mammelsCarousel";



//Small Mammels
import fruitBat from '../images/endMammels/smallMammels/fruitBat.png';
import tasmanianDevil from '../images/endMammels/smallMammels/tasmanianDevil.png';

//large Mammels
import panda from '../images/endMammels/largeMammels/panda.png';
import redPanda from '../images/endMammels/largeMammels/redPanda.png';

//Rhinoceros
import javanRhino from '../images/endMammels/Rhino/javanRhino.png';
import sumatranRhino from '../images/endMammels/Rhino/sumatranRhino.png';

//Big Cats
import snowLeopard from '../images/endMammels/bigCats/snowLeopard.png';
import tiger from '../images/endMammels/bigCats/tiger.png';

//Primates
import gibbons from '../images/endMammels/primates/gibbons.png';
import spiderMonkey from '../images/endMammels/primates/spiderMonkey.png';


export const Mammels = () => {
  return( 
    <div className="pageMainFrame">
      <body className='pageBodyFrame'>

        <div className='container'>
          <div className = "mainSubHeadFrame">
            <line className = "thinLine"></line>
            <subhead className = "subheadLrg">Endangered Mammels</subhead>
          </div>

          <paragragraph className="paragpaphLrg">
            Wass awass
          </paragragraph>

          <div className = "mainSubHeadFrame">
            <line className = "thinLine"></line>
            <subhead className = "subheadSml">S m a l l - M a m m e l s</subhead>
          </div>

          <box className = "box">
            <box className = "speciesMainFrame"> 
              <image className='smallMammelsImage'>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${fruitBat})`}}></div>
              </image>
              <label className='smallMammelsName'>Name</label>
            </box>

            <box className = "speciesMainFrame"> 
              <image className='smallMammelsImage'>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${tasmanianDevil})`}}></div>
              </image>
              <label className='smallMammelsName'>Name</label>
            </box>
          </box>
        
          <SmallMammelsCarousel/>
          <paragragraph className="paragpaphLrg">
            Wass awass
          </paragragraph>
        </div>  

       


        <div className='container'>
          <div className = "mainSubHeadFrame">
            <line className = "thinLine"></line>
            <subhead className = "subheadSml">L a r g e - M a m m e l s</subhead>
          </div>

          <box className = "box">
            <box className = "speciesMainFrame">
              <image className='largeMammelsImage'>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${panda})`}}></div>
              </image>
              <label className='largeMammelsName'>Name</label>
            </box>

            <box className = "speciesMainFrame"> 
              <image className='largeMammelsImage'>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${redPanda})`}}></div>
              </image>
              <label className='largeMammelsName'>Name</label>
            </box>
          </box>

          <LargeMammelsCarousel/>
          <paragragraph className="paragpaphLrg">
            Wass awass
          </paragragraph>
        </div>





        <div className='container'>
          <div className = "mainSubHeadFrame">
            <line className = "thinLine"></line>
            <subhead className = "subheadSml">R h i n o c e r o s</subhead>
          </div>

          <box className = "box">
            <box className = "speciesMainFrame">
              <image className='smallRhinoImage'>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${javanRhino})`}}></div>
              </image>
              <label className='rhinoName'>Name</label>
            </box>

            <box className = "speciesMainFrame"> 
              <image className='smallRhinoImage'>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${sumatranRhino})`}}></div>
              </image>
              <label className='rhinoName'>Name</label>
            </box>
          </box>

          <RhinosCarousel/>
          <paragragraph className="paragpaphLrg">
            Wass awass
          </paragragraph>
        </div>





      <div className='container'>

        <div className = "mainSubHeadFrame">
          <line className = "thinLine"></line>
          <subhead className = "subheadSml">B i g - C a t s</subhead>
        </div>

        <box className = "box">
          <box className = "speciesMainFrame">
            <image className='bigCatsImage'>
              <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${snowLeopard})`}}></div>
            </image>
            <label className='bigCatsName'>Name</label>
          </box>

          <box className = "speciesMainFrame"> 
            <image className='bigCatsImage'>
              <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${tiger})`}}></div>
            </image>
            <label className='bigCatsName'>Name</label>
          </box>
        </box>
        
        <BigCatsCarousel/>
        <paragragraph className="paragpaphLrg">
            Wass awass
        </paragragraph>
      </div>
        


      <div className='container'>  

          <div className = "mainSubHeadFrame">
            <line className = "thinLine"></line>
            <subhead className = "subheadSml">P r i m a t e s</subhead>
          </div>

          <box className = "box">
            <box className = "speciesMainFrame">
              <image className='primatesImage'>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${spiderMonkey})`}}></div>
              </image>
              <label className='primatesName'>Name</label>
            </box>

            <box className = "speciesMainFrame"> 
              <image className='primatesImage'> 
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${gibbons})`}}></div>
              </image>
              <label className='primatesName'>Name</label>
            </box>
          </box>

          <PrimatesCarousel/>
          <paragragraph className="paragpaphLrg">
            Wass awass
          </paragragraph>
        </div>

      </body>
      <MammelsPageSuvNav/>
    </div>
  );
}