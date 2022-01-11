import React from 'react';

import '../pages/publicMain.css';
import './fungus.css';

import {FungiPageSuvNav} from "../subNav/subNavigation";


//fungus
import barbiePagoda from '../images/endFungus/barbiePagoda.png';
import armillariaEctypa from '../images/endFungus/armillariaEctypa.png';
import boletopsisNothofagi from '../images/endFungus/boletopsisNothofagi.png';
import boletusLoyo from '../images/endFungus/boletusLoyo.png';
import caterpillarFungus from '../images/endFungus/caterpillarFungus.png';

import bovistaPaludosa from '../images/endFungus/bovistaPaludosa.png';
import cystodermaCarpaticum from '../images/endFungus/cystodermaCarpaticum.png';
import destuntziaRubra from '../images/endFungus/destuntziaRubra.png';
import entolomaBloxamii from '../images/endFungus/entolomaBloxamii.png';
import entolomaRavinense from '../images/endFungus/entolomaRavinense.png';

import hygrocybeBoothii from '../images/endFungus/hygrocybeBoothii.png';
import greenCageFungus from '../images/endFungus/greenCageFungus.png';
import phylloporusPelletieri from '../images/endFungus/phylloporusPelletieri.png';
import tulostomaNiveum from '../images/endFungus/tulostomaNiveum.png';
import whiteFerula from '../images/endFungus/whiteFerula.png';


export const Fungus = () => {
    return( 
      <div className="pageMainFrame">
        <body className='pageBodyFrame'>

          <div className='container'>
            <div className = "mainSubHeadFrame">
              <line className = "thinLine"></line>
              <subhead className = "subheadLrg">Endangered Fungus Species</subhead>
            </div>
        
            <paragragraph className="paragpaphLrg">
              Wass awass
            </paragragraph>


            <box className = "box4">
              <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                  <image className='fungusMediumImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${armillariaEctypa})`}}></div>
                  </image>
                  <label className='fungusName'>Name</label>
                </box>

                <box className = "MedBox">
                  <image className='fungusMediumImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${boletopsisNothofagi})`}}></div>
                  </image>
                  <label className='fungusName'>Name</label>
                </box>
              </box>

              <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                  <image className='fungusMediumImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${boletusLoyo})`}}></div>
                  </image>
                  <label className='fungusName'>Name</label>
                </box>

                <box className = "MedBox">
                  <image className='fungusMediumImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${caterpillarFungus})`}}></div>
                  </image>
                  <label className='fungusName'>Name</label>
                </box>
              </box>

              <box className = "largeSpeciesImgFrame">
                <image className= 'fungusLargeImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${barbiePagoda})`}}></div>
                </image>
                <label className= "fungusName">Species name</label>
              </box>
            </box>
          </div>




        
          <div className='container'>
            <box className = "box4">
              <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                  <image className='fungusMediumImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${cystodermaCarpaticum})`}}></div>
                  </image>
                  <label className='fungusName2'>Name</label>
                </box>

                <box className = "MedBox">
                  <image className='fungusMediumImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${destuntziaRubra})`}}></div>
                  </image>
                  <label className='fungusName2'>Name</label>
                </box>
              </box>

              <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                  <image className='fungusMediumImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${entolomaBloxamii})`}}></div>
                  </image>
                  <label className='fungusName2'>Name</label>
                </box>

                <box className = "MedBox">
                  <image className='fungusMediumImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${entolomaRavinense})`}}></div>
                  </image>
                  <label className='fungusName2'>Name</label>
                </box>
              </box>

              <box className = "largeSpeciesImgFrame">
                <image className= 'fungusLargeImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${bovistaPaludosa})`}}></div>
                </image>
                <label className= "fungusName2">Species name</label>
              </box>
            </box>
          </div>





          <div className='container'>
            <box className = "box4">
              <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                  <image className='fungusMediumImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${greenCageFungus})`}}></div>
                  </image>
                  <label className='fungusName3'>Name</label>
                </box>

                <box className = "MedBox">
                  <image className='fungusMediumImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${phylloporusPelletieri})`}}></div>
                  </image>
                  <label className='fungusName3'>Name</label>
                </box>
              </box>

              <box className = "mediumSpeciesImgFrame">
                <box className = "MedBox">
                  <image className='fungusMediumImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${tulostomaNiveum})`}}></div>
                  </image>
                  <label className='fungusName3'>Name</label>
                </box>

                <box className = "MedBox">
                  <image className='fungusMediumImage'>
                    <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${whiteFerula})`}}></div>
                  </image>
                  <label className='fungusName3'>Name</label>
                </box>
              </box>

              <box className = "largeSpeciesImgFrame">
                <image className= 'fungusLargeImage'>
                  <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${hygrocybeBoothii})`}}></div>
                </image>
                <label className= "fungusName3">Species name</label>
              </box>
            </box>
          </div>



        </body>
        <FungiPageSuvNav/>
      </div>
    );
}