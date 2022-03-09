import React from "react";
import { useState, useEffect, useRef } from "react";


import "./readingGuideFeature.css";
import {RiQrScanFill} from 'react-icons/ri';

export const ReadingMaskFeature = () => {

  function Bla(){
    const mainCursor = useRef();

    const transformCursor = (event) => {
      const { clientX, clientY } = event;
      
      const mouseX = clientX;
      const mouseY = clientY;

      if(mainCursor?.current){
        mainCursor.current.style.transform = `translate3d(${mouseX -
        mainCursor.current.clientWidth / 2}px, ${mouseY -
        mainCursor.current.clientHeight / 1.950}px, 0)`;
      }
    }

    useEffect(() => {
      document.addEventListener("mousemove", transformCursor);
  
      return () => {
        document.removeEventListener("mousemove", transformCursor);
      };
    }, [])

    return (
        <div className="readingMaskFrame" ref={mainCursor} >
            <div className="upper"></div>
            <div className="borderUpper"></div>
            <div className="borderBottom"></div>
            <div className="lower"></div>
        </div>
    );
  };

  const [show,setShow]=useState(false)
  return (
      <div>{show?<div><Bla/></div>:null}
       <button className = "readingBtn" onClick={()=>setShow(!show)} >
        <div className="buttonIcon"><RiQrScanFill size="3em" color="orange"/></div>
        <div className="buttonLabel"> Read Mask</div>
       </button> 
       
      </div>

  );
};