import React from 'react';

import '../pages/publicMain.css';
import './endSpeciesUk.css';

import {UkPageSuvNav} from "../subNav/subNavigation";

//Reptiles
import adderViper from '../images/endSpeciesUk/reptiles/adderViper.png';
import grassSnake from '../images/endSpeciesUk/reptiles/grassSnake.png';
import sandLizard from '../images/endSpeciesUk/reptiles/sandLizard.png';
import smoothSnake from '../images/endSpeciesUk/reptiles/smoothSnake.png';

//Marine
import allisShad from '../images/endSpeciesUk/marine/allisShad.png';
import brownTrout from '../images/endSpeciesUk/marine/brownTrout.png';
import pollan from '../images/endSpeciesUk/marine/pollan.png';
import vendance from '../images/endSpeciesUk/marine/vendance.png';

//Amphibians
import greatCrestedNewt from '../images/endSpeciesUk/amphibians/greatCrestedNewt.png';
import netterJackFrog from '../images/endSpeciesUk/amphibians/netterJackFrog.png';
import northernPoolFrog from '../images/endSpeciesUk/amphibians/northernPoolFrog.png';
import palmateNewet from '../images/endSpeciesUk/amphibians/palmateNewet.png';

//Mammels
import europeanHedgehog from '../images/endSpeciesUk/mammels/europeanHedgehog.png';
import greyLongEaredBat from '../images/endSpeciesUk/mammels/greyLongEaredBat.png';
import redSquirrel from '../images/endSpeciesUk/mammels/redSquirrel.png';
import waterVole from '../images/endSpeciesUk/mammels/waterVole.png';
import wildCats from '../images/endSpeciesUk/mammels/wildCats.png';

//Birds
import cuckoos from '../images/endSpeciesUk/birds/cuckoos.png';
import songThrush from '../images/endSpeciesUk/birds/songThrush.png';
import starling from '../images/endSpeciesUk/birds/starling.png';
import turtleDove from '../images/endSpeciesUk/birds/turtleDove.png';
import westernCapercaillie from '../images/endSpeciesUk/birds/westernCapercaillie.png';

//Plants
import crestedCowWheat from '../images/endSpeciesUk/plants/crestedCowWheat.png';
import ghostOrchid from '../images/endSpeciesUk/plants/ghostOrchid.png';
import ladyOrchid from '../images/endSpeciesUk/plants/ladyOrchid.png';
import redHelleborine from '../images/endSpeciesUk/plants/redHelleborine.png';
import spreadingBellflower from '../images/endSpeciesUk/plants/spreadingBellflower.png';

//Fungus
import amanitaVittadinii from '../images/endSpeciesUk/fungus/amanitaVittadinii.png';
import boletusRegius from '../images/endSpeciesUk/fungus/boletusRegius.png';
import clitocybeAlexandri from '../images/endSpeciesUk/fungus/clitocybeAlexandri.png';
import geoglossumElongatum from '../images/endSpeciesUk/fungus/geoglossumElongatum.png';
import pholiotaAstragalina from '../images/endSpeciesUk/fungus/pholiotaAstragalina.png';




export const EndnageredSpeciesUk = () => {
    return( 
        <div className="pageMainFrame">
            <body className='pageBodyFrame'>
                <div className='container'>
                    <div className = "mainSubHeadFrame">
                        <line className = "thinLine"></line>
                            <subhead className = "subheadLrg">Endangered Species in the UK</subhead>
                        <line className = "thinLine"></line>
                    </div>

                 
                    <div className = "mainSubHeadFrame">
                        <line className = "thinLine"></line>
                            <subhead className = "subheadSml">R e p t i l e s</subhead>
                        <line className = "thinLine"></line>
                    </div>

                    <box className = "box">
                        <box className = "speciesMainFrame">
                            <image className='smallReptilesImageUk'>
                                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${grassSnake})`}}></div>
                            </image>
                            <label className='reptilesNameUk'>Name</label>
                        </box>

                        <box className = "speciesMainFrame"> 
                            <image className='smallReptilesImageUk'>
                                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${sandLizard})`}}></div>
                            </image>
                            <label className='reptilesNameUk'>Name</label>
                        </box>

                        <box className = "speciesMainFrame"> 
                            <image className='smallReptilesImageUk'>
                                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${smoothSnake})`}}></div>
                            </image>
                            <label className='reptilesNameUk'>Name</label>
                        </box>
                    </box>

                    <box className = "box">
                        <box className = "speciesMainFrame">
                            <image className='largeReptilesImageUk'>
                                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${adderViper})`}}></div>
                            </image>
                            <label className='reptilesNameUk'>Name</label>
                        </box>

                        <paragragraph className="endParagpaph">
                        Wass awass
                        </paragragraph>
                    </box>
                </div>



            <div className='container'>
                <div className = "mainSubHeadFrame">
                    <line className = "thinLine"></line>
                        <subhead className = "subheadSml">M a r i n e s</subhead>
                    <line className = "thinLine"></line>
                </div>
                <box className = "box">
                    <box className = "speciesMainFrame">
                        <image className='smallMarinesImageUk'>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${allisShad})`}}></div>
                        </image>
                        <label className='marinesNameUk'>Name</label>
                    </box>

                    <box className = "speciesMainFrame"> 
                        <image className='smallMarinesImageUk'>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${brownTrout})`}}></div>
                        </image>
                        <label className='marinesNameUk'>Name</label>
                    </box>

                    <box className = "speciesMainFrame"> 
                        <image className='smallMarinesImageUk'>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${vendance})`}}></div>
                        </image>
                        <label className='marinesNameUk'>Name</label>
                    </box>
                </box>

                <box className = "box">
                    <box className = "speciesMainFrame">
                        <image className='largeMarinesImageUk'>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${pollan})`}}></div>
                        </image>
                        <label className='marinesNameUk'>Name</label>
                    </box>
                    
                    <paragragraph className="endParagpaph">
                        Wass awass
                    </paragragraph>
                </box>
            </div>



            <div className='container'>
                <div className = "mainSubHeadFrame">
                    <line className = "thinLine"></line>
                        <subhead className = "subheadSml">A m p h i b i a n s</subhead>
                    <line className = "thinLine"></line>
                </div>

                <box className = "box">
                    <box className = "speciesMainFrame">
                        <image className='smallAmphibiansImageUk'>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${greatCrestedNewt})`}}></div>
                        </image>
                        <label className='amphibiansNameUk'>Name</label>
                    </box>

                    <box className = "speciesMainFrame"> 
                        <image className='smallAmphibiansImageUk'>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${netterJackFrog})`}}></div>
                        </image>
                        <label className='amphibiansNameUk'>Name</label>
                    </box>

                    <box className = "speciesMainFrame"> 
                        <image className='smallAmphibiansImageUk'>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${palmateNewet})`}}></div>
                        </image>
                        <label className='amphibiansNameUk'>Name</label>
                    </box>
                </box>

                <box className = "box">
                    <box className = "speciesMainFrame">
                        <image className='largeAmphibiansImageUk'>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${northernPoolFrog})`}}></div>
                        </image>
                        <label className='amphibiansNameUk'>Name</label>
                    </box>

                    <paragragraph className="endParagpaph">
                        Wass awass
                    </paragragraph>
                </box>
            </div>



            <div className='container'>
                <div className = "mainSubHeadFrame">
                    <line className = "thinLine"></line>
                        <subhead className = "subheadSml">M a m m e l s</subhead>
                    <line className = "thinLine"></line>
                </div>

                <box className = "box">
                    <box className = "speciesMainFrame">
                        <image className='smallMammelsImageUk'>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${europeanHedgehog})`}}></div>
                        </image>
                        <label className='mammelsNameUk'>Name</label>
                    </box>

                    <box className = "speciesMainFrame"> 
                        <image className='smallMammelsImageUk'>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${greyLongEaredBat})`}}></div>
                        </image>
                        <label className='mammelsNameUk'>Name</label>
                    </box>

                    <box className = "speciesMainFrame"> 
                        <image className='smallMammelsImageUk'>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${waterVole})`}}></div>
                        </image>
                        <label className='mammelsNameUk'>Name</label>
                    </box>
                </box>

                <box className = "box">
                    <box className = "speciesMainFrame">
                        <image className='largeMammelsImageUk'>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${redSquirrel})`}}></div>
                        </image>
                        <label className='mammelsNameUk'>Name</label>
                    </box>

                    <box className = "speciesMainFrame">
                        <image className='largeMammelsImageUk'>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${wildCats})`}}></div>
                        </image>
                        <label className='mammelsNameUk'>Name</label>
                    </box>
                </box>

                <paragragraph className="paragpaphLrg">
                    Wass awass
                </paragragraph>
            </div>
  


                
            <div className='container'>
                <div className = "mainSubHeadFrame">
                    <line className = "thinLine"></line>
                        <subhead className = "subheadSml">B i r d s</subhead>
                    <line className = "thinLine"></line>
                </div>

                <box className = "box">
                    <box className = "speciesMainFrame">
                        <image className='smallBirdsImageUk'>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${songThrush})`}}></div>
                        </image>
                        <label className='birdsNameUk'>Name</label>
                    </box>

                    <box className = "speciesMainFrame"> 
                        <image className='smallBirdsImageUk'>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${starling})`}}></div>
                        </image>
                        <label className='birdsNameUk'>Name</label>
                    </box>

                    <box className = "speciesMainFrame"> 
                        <image className='smallBirdsImageUk'>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${westernCapercaillie})`}}></div>
                        </image>
                        <label className='birdsNameUk'>Name</label>
                    </box>
                </box>

                <box className = "box">
                    <box className = "speciesMainFrame">
                        <image className='largeBirdsImageUk'>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${cuckoos})`}}></div>
                        </image>
                        <label className='birdsNameUk'>Name</label>
                    </box>

                    <box className = "speciesMainFrame">
                        <image className='largeBirdsImageUk'>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${turtleDove})`}}></div>
                        </image>
                        <label className='birdsNameUk'>Name</label>
                    </box>
                </box>

                <paragragraph className="paragpaphLrg">
                Wass awass
                </paragragraph>
            </div>
       



            <div className='container'>
                <div className = "mainSubHeadFrame">
                    <line className = "thinLine"></line>
                        <subhead className = "subheadSml">P l a n t s</subhead>
                    <line className = "thinLine"></line>
                </div>

                <box className = "box">
                    <box className = "speciesMainFrame">
                        <image className='smallPlantsImageUk'>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${ghostOrchid})`}}></div>
                        </image>
                        <label className='plantsNameUk'>Name</label>
                    </box>

                    <box className = "speciesMainFrame"> 
                        <image className='smallPlantsImageUk'>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${ladyOrchid})`}}></div>
                        </image>
                        <label className='plantsNameUk'>Name</label>
                    </box>

                    <box className = "speciesMainFrame"> 
                        <image className='smallPlantsImageUk'>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${redHelleborine})`}}></div>
                        </image>
                        <label className='plantsNameUk'>Name</label>
                    </box>
                </box>

                <box className = "box">
                    <box className = "speciesMainFrame">
                        <image className='largePlantsImageUk'>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${crestedCowWheat})`}}></div>
                        </image>
                        <label className='plantsNameUk'>Name</label>
                    </box>

                    <box className = "speciesMainFrame">
                        <image className='largePlantsImageUk'>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${spreadingBellflower})`}}></div>
                        </image>
                        <label className='plantsNameUk'>Name</label>
                    </box>
                </box>

                <paragragraph className="paragpaphLrg">
                Wass awass
                </paragragraph>
            </div>



            <div className='container'>
                <div className = "mainSubHeadFrame">
                    <line className = "thinLine"></line>
                        <subhead className = "subheadSml">F u n g u s</subhead>
                    <line className = "thinLine"></line>
                </div>
                
                <box className = "box">
                    <box className = "speciesMainFrame">
                        <image className='smallFungusImageUk'>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${clitocybeAlexandri})`}}></div>
                        </image>
                        <label className='fungusNameUk'>Name</label>
                    </box>

                    <box className = "speciesMainFrame"> 
                        <image className='smallFungusImageUk'>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${geoglossumElongatum})`}}></div>
                        </image>
                        <label className='fungusNameUk'>Name</label>
                    </box>

                    <box className = "speciesMainFrame"> 
                        <image className='smallFungusImageUk'>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${pholiotaAstragalina})`}}></div>
                        </image>
                        <label className='fungusNameUk'>Name</label>
                    </box>
                </box>

                <box className = "box">
                    <box className = "speciesMainFrame">
                        <image className='largeFungusImageUk'>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${amanitaVittadinii})`}}></div>
                        </image>
                        <label className='fungusNameUk'>Name</label>
                    </box>

                    <box className = "speciesMainFrame">
                        <image className='largeFungusImageUk'>
                            <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${boletusRegius})`}}></div>
                        </image>
                        <label className='fungusNameUk'>Name</label>
                    </box>
                </box>

                <paragragraph className="paragpaphLrg">
                Wass awass
                </paragragraph>
            </div>
                
            </body>
            <UkPageSuvNav/>
        </div>
    );
}