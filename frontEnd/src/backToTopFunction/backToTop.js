import React, {useState, useEffect} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import './backToTop.css';


export const ScrollToTopArrow = () =>{
  const [showScroll, setShowScroll] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', checkScrollTop)
    return function cleanup() {
      window.removeEventListener('scroll', checkScrollTop)
    }
  })

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
        <FaArrowCircleUp id="scrollTop" onClick={scrollTop} style={{color: "#1888ff", display: showScroll ? 'flex' : 'none'}}/>
  );
}

export default ScrollToTopArrow;

// This is the source of the original code (https://github.com/macro6461/react-scroll-arrow)