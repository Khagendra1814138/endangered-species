import React from 'react';

import '../pages/publicMain.css';
import './plants.css';

import {PlantPageSuvNav} from "../subNav/subNavigation";

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





export const Plants = () => {
  return( 
    <div className="pageMainFrame">
      <body className='pageBodyFrame'>

        <div className='container'>
          <div className = "mainSubHeadFrame">
            <line className = "thinLine"></line>
            <subhead className = "subheadLrg">Endangered Plant Species</subhead>
          </div>

          <paragragraph className="paragpaphLrg">
            Wass awass
          </paragragraph>


          <box className = "box4">
            <box className = "mediumSpeciesImgFrame">
              <box className = "MedBox">
                <image className='plantsMediumImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${encephalartosLatifrons})`}}></div>
                </image>
                <label className='plantsName'>Name</label>
              </box>

              <box className = "MedBox">
                <image className='plantsMediumImage'>
                 <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${lillieCycad})`}}></div>
                </image>
                <label className='plantsName'>Name</label>
              </box>
            </box>

            <box className = "mediumSpeciesImgFrame">
              <box className = "MedBox">
                <image className='plantsMediumImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${palmaCorcho})`}}></div>
                </image>
                <label className='plantsName'>Name</label>
              </box>

              <box className = "MedBox">
                <image className='plantsMediumImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${vendaCycad})`}}></div>
                </image>
                <label className='plantsName'>Name</label>
              </box>
            </box>

            <box className = "largeSpeciesImgFrame">
              <image className= 'plantsLargeImage'>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${middelburgCycad})`}}></div>
              </image>
              <label className= "plantsName">Species name</label>
            </box>
          </box>
        </div>




        
        <div className='container'>
          <box className = "box4">
            <box className = "mediumSpeciesImgFrame">
              <box className = "MedBox">
                <image className='plantsMediumImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${corkTree})`}}></div>
                </image>
                <label className='plantsName2'>Name</label>
              </box>

              <box className = "MedBox">
                <image className='plantsMediumImage'>
                 <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${dragonTree})`}}></div>
                </image>
                <label className='plantsName2'>Name</label>
              </box>
            </box>

            <box className = "mediumSpeciesImgFrame">
              <box className = "MedBox">
                <image className='plantsMediumImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${monkeyTree})`}}></div>
                </image>
                <label className='plantsName2'>Name</label>
              </box>

              <box className = "MedBox">
                <image className='plantsMediumImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${quiverTree})`}}></div>
                </image>
                <label className='plantsName2'>Name</label>
              </box>
            </box>

            <box className = "largeSpeciesImgFrame">
              <image className= 'plantsLargeImage'>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${baobabTree})`}}></div>
              </image>
              <label className= "plantsName2">Species name</label>
            </box>
          </box>
        </div>




        <div className='container'>
          <box className = "box4">
            <box className = "mediumSpeciesImgFrame">
              <box className = "MedBox">
                <image className='plantsMediumImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${euphorbiaObesa})`}}></div>
                </image>
                <label className='plantsName3'>Name</label>
              </box>

              <box className = "MedBox">
                <image className='plantsMediumImage'>
                 <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${flyingVenusTrap})`}}></div>
                </image>
                <label className='plantsName3'>Name</label>
              </box>
            </box>

            <box className = "mediumSpeciesImgFrame">
              <box className = "MedBox">
                <image className='plantsMediumImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${Rafflesia})`}}></div>
                </image>
                <label className='plantsName3'>Name</label>
              </box>

              <box className = "MedBox">
                <image className='plantsMediumImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${taccaChantrieri})`}}></div>
                </image>
                <label className='plantsName3'>Name</label>
              </box>
            </box>

            <box className = "largeSpeciesImgFrame">
              <image className= 'plantsLargeImage'>
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${titanArum})`}}></div>
              </image>
              <label className= "plantsName3">Species name</label>
            </box>
          </box>
        </div>


      </body>
      <PlantPageSuvNav/>
    </div>
  );
}