import React from 'react';

import '../pages/publicMain.css';
import './artic.css';

import {ArticPageSuvNav} from "../subNav/subNavigation";





//ARTIC SPECIES IMAGES
import eskimoCurlew from '../images/endArtic/eskimoCurlew.png';
import articWolf from '../images/endArtic/articWolf.png';
import belugaWhale from '../images/endArtic/belugaWhale.png';
import caribouRaindeer from '../images/endArtic/caribouRaindeer.png';
import lemming from '../images/endArtic/lemming.png';

import narwhal from '../images/endArtic/narwhal.png';
import muskOx from '../images/endArtic/muskOx.png';
import articFox from '../images/endArtic/articFox.png';
import orca from '../images/endArtic/orca.png';
import polarBear from '../images/endArtic/polarBear.png';

import woodBison from '../images/endArtic/woodBison.png';
import raindeers from '../images/endArtic/raindeers.png';
import redKnot from '../images/endArtic/redKnot.png';
import saimaaRingedSeal from '../images/endArtic/saimaaRingedSeal.png';
import walrus from '../images/endArtic/walrus.png';




export const Artic = () => {
  return( 
    <div className="pageMainFrame">
      <body className='pageBodyFrame'>

        <div className='container'>
          <div className = "mainSubHeadFrame">
            <line className = "thinLine"></line>
            <subhead className = "subheadLrg">Endangered Artic Animals</subhead>
          </div>

          <paragragraph className="paragpaphLrg">
            Wass awass
          </paragragraph>


          <box className = "box4">
            <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                    <image className='articMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${articWolf})`}}></div>
                    </image>
                    <label className='articName'>Name</label>
                </box>

                <box className = "MedBox">
                    <image className='articMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${belugaWhale})`}}></div>
                    </image>
                    <label className='articName'>Name</label>
                </box>
            </box>

            <box className = "largeSpeciesImgFrame">
                <image className= 'articLargeImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${eskimoCurlew})`}}></div>
                </image>
                <label className= "articName">Species name</label>
            </box>

            <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                    <image className='articMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${caribouRaindeer})`}}></div>
                    </image>
                    <label className='articName'>Name</label>
                </box>

                <box className = "MedBox">
                    <image className='articMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${lemming})`}}></div>
                    </image>
                    <label className='articName'>Name</label>
                </box>
            </box>
          </box>
        </div>



      <div className='container'>
        <box className = "box4">
            <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                    <image className='articMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${muskOx})`}}></div>
                    </image>
                    <label className='articName2'>Name</label>
                </box>

                <box className = "MedBox">
                    <image className='articMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${orca})`}}></div>
                    </image>
                    <label className='articName2'>Name</label>
                </box>
            </box>

            <box className = "largeSpeciesImgFrame">
                <image className= 'articLargeImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${narwhal})`}}></div>
                </image>
                <label className= "articName2">Species name</label>
            </box>

            <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                    <image className='articMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${polarBear})`}}></div>
                    </image>
                    <label className='articName2'>Name</label>
                </box>

                <box className = "MedBox">
                    <image className='articMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${raindeers})`}}></div>
                    </image>
                    <label className='articName2'>Name</label>
                </box>
            </box>
          </box>
        </div>





        <div className='container'>
        <box className = "box4">
            <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                    <image className='articMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${articFox})`}}></div>
                    </image>
                    <label className='articName3'>Name</label>
                </box>

                <box className = "MedBox">
                    <image className='articMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${redKnot})`}}></div>
                    </image>
                    <label className='articName3'>Name</label>
                </box>
            </box>

            <box className = "largeSpeciesImgFrame">
                <image className= 'articLargeImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${woodBison})`}}></div>
                </image>
                <label className= "articName3">Species name</label>
            </box>

            <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                    <image className='articMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${saimaaRingedSeal})`}}></div>
                    </image>
                    <label className='articName3'>Name</label>
                </box>

                <box className = "MedBox">
                    <image className='articMediumImage'>
                      <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${walrus})`}}></div>
                    </image>
                    <label className='articName3'>Name</label>
                </box>
            </box>
          </box>
        </div>

      </body>
      <ArticPageSuvNav/>
    </div>
  );
}