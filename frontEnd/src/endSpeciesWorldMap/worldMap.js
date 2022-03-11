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
        name: "Sau Paulo",
        coordinates: [-58.3816, -34.6037]
      },
      {
        markerOffset: -15,
        name: "Melbourn",
        coordinates: [144.963058, -37.813629]
      },
      {
        markerOffset: 25,
        name: "Dhaka",
        coordinates: [90.3816, 23.6037]
      },
      {
        markerOffset: 25,
        name: "San Fransisco",
        coordinates: [-122.419418, 37.774929]
      },
    ];
 

    return (
      <div className="pageMainFrameLight">
        <body className='pageBodyFrame'>

          <h2>View Endangered Species around the World</h2>
          <ReactTooltip>
            {content}
          </ReactTooltip>
          <div className='WorldMapContainer'>
          
            
            <ComposableMap data-tip = "">

              <ZoomableGroup zoom={1}>

                <Geographies className = "geog"geography={geoUrl}>
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
                        fontFamily: "system-ui",
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
                      <text textAnchor='middle' y={markerOffset} style={{fontFamily: "system-ui", fill:"#5D5A6D"}}>
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