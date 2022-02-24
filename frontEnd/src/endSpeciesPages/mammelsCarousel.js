import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./carouselStyle";
import "./mammelsCarousel.css";

import '../pages/publicMain.css';
import './mammels.css';


//Small mammels Images
import pangolin from '../images/endMammels/smallMammels/pangolin.png';
import sloth from '../images/endMammels/smallMammels/sloth.png';
import slowLoris from '../images/endMammels/smallMammels/slowLoris.png';

//Large mammels Images
import africanElephant from '../images/endMammels/largeMammels/africanElephant.png';
import asianElephant from '../images/endMammels/largeMammels/asianElephant.png';
import grevysZebra from '../images/endMammels/largeMammels/grevysZebra.png';
import muskDeer from '../images/endMammels/largeMammels/muskDeer.png';
import redFox from '../images/endMammels/largeMammels/redFox.png';

//Rhinos Images
import blackRhino from '../images/endMammels/Rhino/blackRhino.png';
import greatOneHorned from '../images/endMammels/Rhino/greatOneHorned.png';
import whiteRhino from '../images/endMammels/Rhino/whiteRhino.png';

//Big Cats Images
import amurLeopard from '../images/endMammels/bigCats/amurLeopard.png';
import cloudedLeopard from '../images/endMammels/bigCats/cloudedLeopard.png';
import jaguar from '../images/endMammels/bigCats/jaguar.png';

//Primates Images
import bonobo from '../images/endMammels/primates/bonobo.png';
import chimpanzee from '../images/endMammels/primates/chimpanzee.png';
import gorrila from '../images/endMammels/primates/gorrila.png';
import orangutan from '../images/endMammels/primates/orangutan.png';




const breakPoints = [
  {itemsToShow: 1},
];

export const SmallMammelsCarousel = () => {
  return (
    <div className="carouselFrame">
      <Carousel breakPoints={breakPoints}>
        <Item>
          <box className="mainImageFrame">
            <image className="largeCarouselMammelImage">
              <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${pangolin})`}}></div>
            </image>
            <label className='smallMammelsName'>Name</label>
          </box>
        </Item>

        <Item>
          <box className="mainImageFrame">
              <image className="largeCarouselMammelImage">
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${sloth})`}}></div>
              </image>
              <label className='smallMammelsName'>Name</label>
            </box>
        </Item>

        <Item>
          <box className="mainImageFrame">
            <image className="largeCarouselMammelImage">
              <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${slowLoris})`}}></div>
            </image>
            <label className='smallMammelsName'>Name</label>
          </box>
        </Item>
      </Carousel>
    </div>
  );
}


//Large Mammels Cards//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const LargeMammelsCarousel = () => {
  return (
    <div className="carouselFrame">
      <Carousel breakPoints={breakPoints}>
        <Item>
          <box className="mainImageFrame">
            <image className="largeCarouselMammelImage">
              <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${asianElephant})`}}></div>
            </image>
            <label className='largeMammelsName'>Name</label>
          </box>
        </Item>

        <Item>
          <box className="mainImageFrame">
              <image className="largeCarouselMammelImage">
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${africanElephant})`}}></div>
              </image>
              <label className='largeMammelsName'>Name</label>
            </box>
        </Item>

        <Item>
          <box className="mainImageFrame">
            <image className="largeCarouselMammelImage">
              <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${grevysZebra})`}}></div>
            </image>
            <label className='largeMammelsName'>Name</label>
          </box>
        </Item>

        <Item>
          <box className="mainImageFrame">
            <image className="largeCarouselMammelImage">
              <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${muskDeer})`}}></div>
            </image>
            <label className='largeMammelsName'>Name</label>
          </box>
        </Item>

        <Item>
          <box className="mainImageFrame">
            <image className="largeCarouselMammelImage">
              <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${redFox})`}}></div>
            </image>
            <label className='largeMammelsName'>Name</label>
          </box>
        </Item>
      </Carousel>
    </div>
  );
}



//Rhino Cards/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const RhinosCarousel = () => {
  return (
    <div className="carouselFrame">
      <Carousel breakPoints={breakPoints}>
        <Item>
          <box className="mainImageFrame">
            <image className="largeCarouselMammelImage">
              <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${blackRhino})`}}></div>
            </image>
            <label className='rhinoName'>Name</label>
          </box>
        </Item>

        <Item>
          <box className="mainImageFrame">
              <image className="largeCarouselMammelImage">
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${greatOneHorned})`}}></div>
              </image>
              <label className='rhinoName'>Name</label>
            </box>
        </Item>

        <Item>
          <box className="mainImageFrame">
            <image className="largeCarouselMammelImage">
              <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${whiteRhino})`}}></div>
            </image>
            <label className='rhinoName'>Name</label>
          </box>
        </Item>
      </Carousel>
    </div>
  );
}


//Big Cats Cards//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const BigCatsCarousel = () => {
  return (
    <div className="carouselFrame">
      <Carousel breakPoints={breakPoints}>
        <Item>
          <box className="mainImageFrame">
            <image className="largeCarouselMammelImage">
              <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${amurLeopard})`}}></div>
            </image>
            <label className='bigCatsName'>Name</label>
          </box>
        </Item>

        <Item>
          <box className="mainImageFrame">
              <image className="largeCarouselMammelImage">
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${cloudedLeopard})`}}></div>
              </image>
              <label className='bigCatsName'>Name</label>
            </box>
        </Item>

        <Item>
          <box className="mainImageFrame">
            <image className="largeCarouselMammelImage">
              <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${jaguar})`}}></div>
            </image>
            <label className='bigCatsName'>Name</label>
          </box>
        </Item>
      </Carousel>
    </div>
  );
}



//Primates Cards//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export const PrimatesCarousel = () => {
  return (
    <div className="carouselFrame">
      <Carousel breakPoints={breakPoints}>
        <Item>
          <box className="mainImageFrame">
            <image className="largeCarouselMammelImage">
              <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${bonobo})`}}></div>
            </image>
            <label className='primatesName'>Name</label>
          </box>
        </Item>

        <Item>
          <box className="mainImageFrame">
              <image className="largeCarouselMammelImage">
                <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${chimpanzee})`}}></div>
              </image>
              <label className='primatesName'>Name</label>
            </box>
        </Item>

        <Item>
          <box className="mainImageFrame">
            <image className="largeCarouselMammelImage">
              <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${gorrila})`}}></div>
            </image>
            <label className='primatesName'>Name</label>
          </box>
        </Item>

        <Item>
          <box className="mainImageFrame">
            <image className="largeCarouselMammelImage">
              <div className='extinctSpeciesImage' style={{ backgroundImage: `url(${orangutan})`}}></div>
            </image>
            <label className='primatesName'>Name</label>
          </box>
        </Item>
      </Carousel>
    </div>
  );
}