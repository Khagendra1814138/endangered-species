import React from 'react';
import {useState} from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
  ZoomableGroup,
} from "react-simple-maps";

import ReactTooltip from "react-tooltip";

import '../pages/publicMain.css';
import './worldMap.css';


export const WorldMap = () => {
  
  //https://www.npmjs.com/package/react-tooltip
  //https://www.react-simple-maps.io/examples/world-choropleth-mapchart/

  // https://www.youtube.com/watch?v=z6PzPTxfgZM - Tutorial for this 

    const [content, setContent] = useState("");
    const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

    const markers = [
      {
        markerOffset: -15,
        name: "South Ameria",
        coordinates: [-55, -10.6037]
      },
      {
        markerOffset: -15,
        name: "Austrlia",
        coordinates: [136, -25]
      },
      {
        markerOffset: 25,
        name: "Asia",
        coordinates: [90, 30]
      },
      {
        markerOffset: 25,
        name: "North America",
        coordinates: [-100, 37]
      },
      {
        markerOffset: 25,
        name: "Africa",
        coordinates: [20, 10]
      },
      {
        markerOffset: -15,
        name: "Antarctia",
        coordinates: [0, -70]
      },
      {
        markerOffset: -15,
        name: "Europ",
        coordinates: [10, 50]
      },



      {
        markerOffset: 25,
        name: "Atlantic Ocean",
        coordinates: [-45, 25]
      },
      {
        markerOffset: 25,
        name: "Atlantic Ocean",
        coordinates: [-20, -25]
      },
      {
        markerOffset: -15,
        name: "Artic Ocean",
        coordinates: [36, 80]
      },
      {
        markerOffset: 25,
        name: "Pacific Ocean",
        coordinates: [-122, -10]
      },
      {
        markerOffset: 25,
        name: "Indian Ocean",
        coordinates: [82, -5]
      },
    ];
 

    return (
      <div className="pageMainFrameLight">
        <body className='pageBodyFrame'>
          <div className = "mainSubHeadFrame">
            <subhead className = "subheadLrg"> View Endangered Species around the World</subhead>
          </div>

          <ReactTooltip>
            {content}
          </ReactTooltip>
          <div className='WorldMapContainer'>
          
            
            <ComposableMap data-tip = "" className ="geog">
              <ZoomableGroup zoom={1}>

                <Geographies className ="countries" geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map(geo => <Geography key={geo.rsmKey} geography={geo}
                      
                      onMouseEnter={()=>{
                      const {NAME} = geo.properties;
                      setContent(`${NAME}`);
                      
                    }}

                    onMouseLeave={()=> { 
                      setContent ("");
                    }}

                    style={{
                      hover:{
                        fill: "orange",
                        outline: "none",
                        fontFamily: "cambria",
                        fontSize: "20",
                      },
                    }}
             
                    />
                    
                    )
                  }
                </Geographies>

                {
                  markers.map(({name, coordinates, markerOffset}) => (
                    <Marker key={name} coordinates={coordinates}>
                      <circle r={10} fill="aF100" stroke="#fff" strokeWidth={2}/>
                      <text textAnchor='middle' y={markerOffset} style={{fontFamily: "system-ui", fill:"red"}}>
                        {name}
                      </text>
                    </Marker>
                  ))
                }
                <Annotation subject={[2.3522, 48.8566]}
                  dx={-90}
                  dy={-30}
                  connectorProps={{
                    stroke: "red",
                    strokeWidth: 3,
                    strokeLinecap: "round",
                  }}
                >
                  <text textAnchor='middle' style={{fontFamily: "system-ui", fill:"#5D5A6D"}}>
                        {"paris"}
                      </text>
                </Annotation>

              </ZoomableGroup>
             
            </ComposableMap>

          </div>
        </body>
      </div>    
    );
  
}