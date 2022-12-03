import React from "react";
import { useState, useEffect, useRef } from "react";

import "./readingGuideFeature.css";
import {FaHandPointUp} from 'react-icons/fa';

export const ReadingGuideFeature = () => {

  function Bla(){
    const mainCursor = useRef();

    const transformCursor = (event) => {
      const { clientX, clientY } = event;
      
      const mouseX = clientX;
      const mouseY = clientY;

      if(mainCursor?.current){
        mainCursor.current.style.transform = `translate3d(${mouseX -
        mainCursor.current.clientWidth / 1.95}px, ${mouseY -
        mainCursor.current.clientHeight / 0.195}px, 0)`;
      }
    }

    useEffect(() => {
      document.addEventListener("mousemove", transformCursor);
  
      return () => {
        document.removeEventListener("mousemove", transformCursor);
      };
    });

    return(
      <div className="readingGuideFrame" ref={mainCursor}>
        <div className='triangle'>
          <div className='triangle2'></div>
        </div>
        <div className='straightLine'></div>
      </div>
    );
  };
  const [show,setShow]=useState(false)
  return (
      <div>{show?<div><Bla/></div>:null}
        <button className = "readingBtn2" onClick={()=>setShow(!show)}>
          <div className="buttonIcon">
            <FaHandPointUp size="3em" color="orange"/>
          </div>
          <div className="buttonLabel"> Read Guide</div>
        </button> 
      </div>
  );
};
