import React from 'react';
import { useState } from "react";

import Carousel from "react-elastic-carousel";

import Item from "./SpeciesMenuCarouselStyle";


const breakPoints = [
    {itemsToShow: 1},
  ];

//C A U S E S P A G E
export const CriteriaCarousel = () => {

    return (
        <div>
            <Carousel breakPoints={breakPoints}>
                <Item>
                    wassa
                   
                </Item>

                <Item>
                 wassa
                </Item>

                <Item>
                  wassa
                </Item>
            </Carousel>

        </div>
    );
}