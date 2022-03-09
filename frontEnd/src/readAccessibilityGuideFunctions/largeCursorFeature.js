import React from "react";
import { useState, useEffect, useRef } from "react";


import {BiPointer} from 'react-icons/bi';





import "./readingGuideFeature.css";

export const LargeCursorFeature = () => {
  function Bla(){
      const mainCursor = useRef();
  
      const transformCursor = (event) => {
        const { clientX, clientY } = event;
        
        const mouseX = clientX;
        const mouseY = clientY;
  
        if(mainCursor?.current){
          mainCursor.current.style.transform = `translate3d(
            ${mouseX - mainCursor.current.clientWidth / 6}px, 
            ${mouseY - mainCursor.current.clientHeight / 0.8}px, 
          0)`;
        }
      }
  
      useEffect(() => {
        document.addEventListener("mousemove", transformCursor);
    
        return () => {
          document.removeEventListener("mousemove", transformCursor);
        };
      }, [])
      
      return (
        <div className="customPointerFrame" ref={mainCursor}> <BiPointer size="4em" color="orange"/> </div>
      );
    };
  
    const [show,setShow]=useState(false)
    
    return (
      <div>{show?<div><Bla/></div>:null}
        <button className = "readingBtn3" onClick={()=>setShow(!show)}>
          <div className="buttonIcon"><BiPointer size="3.2em" color="orange"/></div>
          <div className="buttonLabel"> Big Cursor</div>
        </button> 
      </div>
    );
};
  