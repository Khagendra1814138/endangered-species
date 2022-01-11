import React from 'react';

import '../pages/publicMain.css';
import './aquatic.css';

import {AquaticPageSuvNav} from "../subNav/subNavigation";


//dolphins
import hectorsDolphins from '../images/endAquatic/dolphin/hectorsDolphins.png';
import amazonRiverDolphin from '../images/endAquatic/dolphin/amazonRiverDolphin.png';
import IrrawaddyDolphin from '../images/endAquatic/dolphin/IrrawaddyDolphin.png';
import vaquita from '../images/endAquatic/dolphin/vaquita.png';
import yangtzeFinless from '../images/endAquatic/dolphin/yangtzeFinless.png';

//sharks
import whaleShark from '../images/endAquatic/shark/whaleShark.png';
import greatWhiteShark from '../images/endAquatic/shark/greatWhiteShark.png';
import hammerhead from '../images/endAquatic/shark/hammerhead.png';
import oceanicWhitetip from '../images/endAquatic/shark/oceanicWhitetip.png';
import sandTiger from '../images/endAquatic/shark/sandTiger.png';

//turtles
import loggerheadTurtle from '../images/endAquatic/turtle/loggerheadTurtle.png';
import greenTurtle from '../images/endAquatic/turtle/greenTurtle.png';
import hawkbillTurtles from '../images/endAquatic/turtle/hawkbillTurtles.png';
import leatherBack from '../images/endAquatic/turtle/leatherBack.png';
import oliveRidley from '../images/endAquatic/turtle/oliveRidley.png';

//whales
import blueWhale from '../images/endAquatic/whale/blueWhale.png';
import bowheadWhale from '../images/endAquatic/whale/bowheadWhale.png';
import finWhale from '../images/endAquatic/whale/finWhale.png';
import greyWhale from '../images/endAquatic/whale/greyWhale.png';
import seiWhale from '../images/endAquatic/whale/seiWhale.png';

//Other fishes and not fishes
import galapagosPenguin from '../images/endAquatic/galapagosPenguin.png';
import hoodedSeal from '../images/endAquatic/hoodedSeal.png';
import marineLguana from '../images/endAquatic/marineLguana.png';
import hawaiianMonkSeal from '../images/endAquatic/hawaiianMonkSeal.png';
import dugong from '../images/endAquatic/dugong.png';

import manatees from '../images/endAquatic/manatees.png';
import atlanticSalmon from '../images/endAquatic/atlanticSalmon.png';
import blueFinTuna from '../images/endAquatic/blueFinTuna.png';
import sturgeon from '../images/endAquatic/sturgeon.png';
import europeanEel from '../images/endAquatic/europeanEel.png';


import seaOtter from '../images/endAquatic/seaOtter.png';
import caribbeanElectricRay from '../images/endAquatic/caribbeanElectricRay.png';
import giantDevilRay from '../images/endAquatic/giantDevilRay.png';
import humpheadWarasse from '../images/endAquatic/humpheadWarasse.png';
import stellarSeaLion from '../images/endAquatic/stellarSeaLion.png';




export const Aquatic = () => {
  return( 
    <div className="pageMainFrame">
      <body className='pageBodyFrame'>

        <div className='container'>
          <div className = "mainSubHeadFrame">
            <line className = "thinLine"></line>
            <subhead className = "subheadLrg">Endangered Aquatic Animals</subhead>
          </div>

          <paragragraph className="paragpaphLrg">
            Wass awass
          </paragragraph>


          <box className = "box4">
            <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${amazonRiverDolphin})`}}></div>
                    </image>
                    <label className='aquaticName'>Name</label>
                </box>

                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${IrrawaddyDolphin})`}}></div>
                    </image>
                    <label className='aquaticName'>Name</label>
                </box>
            </box>
            
            <box className = "largeSpeciesImgFrame">
                <image className= 'aquaticLargeImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${hectorsDolphins})`}}></div>
                </image>
                <label className= "aquaticName">Species name</label>
            </box>

            <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${vaquita})`}}></div>
                    </image>
                    <label className='aquaticName'>Name</label>
                </box>

                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${yangtzeFinless})`}}></div>
                    </image>
                    <label className='aquaticName'>Name</label>
                </box>
            </box>
          </box>
        </div>




        <div className='container'>
          <box className = "box4">
            <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${greatWhiteShark})`}}></div>
                    </image>
                    <label className='aquaticName'>Name</label>
                </box>

                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${hammerhead})`}}></div>
                    </image>
                    <label className='aquaticName'>Name</label>
                </box>
            </box>
            
            <box className = "largeSpeciesImgFrame">
                <image className= 'aquaticLargeImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${whaleShark})`}}></div>
                </image>
                <label className= "aquaticName">Species name</label>
            </box>

            <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${oceanicWhitetip})`}}></div>
                    </image>
                    <label className='aquaticName'>Name</label>
                </box>

                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${sandTiger})`}}></div>
                    </image>
                    <label className='aquaticName'>Name</label>
                </box>
            </box>
          </box>
        </div>





        <div className='container'>
          <box className = "box4">
            <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${greenTurtle})`}}></div>
                    </image>
                    <label className='aquaticName'>Name</label>
                </box>

                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${hawkbillTurtles})`}}></div>
                    </image>
                    <label className='aquaticName'>Name</label>
                </box>
            </box>
            
            <box className = "largeSpeciesImgFrame">
                <image className= 'aquaticLargeImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${loggerheadTurtle})`}}></div>
                </image>
                <label className= "aquaticName">Species name</label>
            </box>

            <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${leatherBack})`}}></div>
                    </image>
                    <label className='aquaticName'>Name</label>
                </box>

                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${oliveRidley})`}}></div>
                    </image>
                    <label className='aquaticName'>Name</label>
                </box>
            </box>
          </box>
        </div>




        <div className='container'>
          <box className = "box4">
            <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${bowheadWhale})`}}></div>
                    </image>
                    <label className='aquaticName'>Name</label>
                </box>

                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${finWhale})`}}></div>
                    </image>
                    <label className='aquaticName'>Name</label>
                </box>
            </box>
            
            <box className = "largeSpeciesImgFrame">
                <image className= 'aquaticLargeImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${blueWhale})`}}></div>
                </image>
                <label className= "aquaticName">Species name</label>
            </box>

            <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${greyWhale})`}}></div>
                    </image>
                    <label className='aquaticName'>Name</label>
                </box>

                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${seiWhale})`}}></div>
                    </image>
                    <label className='aquaticName'>Name</label>
                </box>
            </box>
          </box>
        </div>





        <div className='container'>
          <box className = "box4">
            <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${hoodedSeal})`}}></div>
                    </image>
                    <label className='aquaticName'>Name</label>
                </box>

                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${marineLguana})`}}></div>
                    </image>
                    <label className='aquaticName'>Name</label>
                </box>
            </box>
            
            <box className = "largeSpeciesImgFrame">
                <image className= 'aquaticLargeImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${galapagosPenguin})`}}></div>
                </image>
                <label className= "aquaticName">Species name</label>
            </box>

            <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${hawaiianMonkSeal})`}}></div>
                    </image>
                    <label className='aquaticName'>Name</label>
                </box>

                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${dugong})`}}></div>
                    </image>
                    <label className='aquaticName'>Name</label>
                </box>
            </box>
          </box>
        </div>





        <div className='container'>
          <box className = "box4">
            <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${atlanticSalmon})`}}></div>
                    </image>
                    <label className='aquaticName'>Name</label>
                </box>

                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${blueFinTuna})`}}></div>
                    </image>
                    <label className='aquaticName'>Name</label>
                </box>
            </box>
            
            <box className = "largeSpeciesImgFrame">
                <image className= 'aquaticLargeImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${manatees})`}}></div>
                </image>
                <label className= "aquaticName">Species name</label>
            </box>

            <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${sturgeon})`}}></div>
                    </image>
                    <label className='aquaticName'>Name</label>
                </box>

                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${europeanEel})`}}></div>
                    </image>
                    <label className='aquaticName'>Name</label>
                </box>
            </box>
          </box>
        </div>




        <div className='container'>
          <box className = "box4">
            <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${caribbeanElectricRay})`}}></div>
                    </image>
                    <label className='aquaticName'>Name</label>
                </box>

                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${giantDevilRay})`}}></div>
                    </image>
                    <label className='aquaticName'>Name</label>
                </box>
            </box>
            
            <box className = "largeSpeciesImgFrame">
                <image className= 'aquaticLargeImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${seaOtter})`}}></div>
                </image>
                <label className= "aquaticName">Species name</label>
            </box>

            <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${humpheadWarasse})`}}></div>
                    </image>
                    <label className='aquaticName'>Name</label>
                </box>

                <box className = "MedBox">
                    <image className='aquaticMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${stellarSeaLion})`}}></div>
                    </image>
                    <label className='aquaticName'>Name</label>
                </box>
            </box>
          </box>
        </div>




      </body>
      <AquaticPageSuvNav/>
    </div>
  );
}