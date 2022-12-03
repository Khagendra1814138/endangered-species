import React, {useState, useEffect} from 'react';

import './sideBarPageNav.css';


export const MammelsSideBarPageNav = () =>{
  const [showSideNav, setShowSideNav] = useState(false)

  useEffect(()=>{
    window.addEventListener('scroll', checkScreenPosition)
    return function cleanup() {
      window.removeEventListener('scroll', checkScreenPosition)
    }
  })

  const checkScreenPosition = () => {
    if (!showSideNav && window.pageYOffset > 700){
      setShowSideNav(true)
    } else if (showSideNav && window.pageYOffset <= 700){
      setShowSideNav(false)
    }
  };


  const one = () =>{
    window.scrollTo({top: 800, behavior: 'smooth'});
  };
  const two = () =>{
    window.scrollTo({top: 3300, behavior: 'smooth'});
  };
  const three = () =>{
    window.scrollTo({top: 4730, behavior: 'smooth'});
  };
  const four = () =>{
    window.scrollTo({top: 6730, behavior: 'smooth'});
  };
  const five = () =>{
    window.scrollTo({top: 8130, behavior: 'smooth'});
  };

  return (
    <div className='SideNav_blockBox' style={{display: showSideNav ? 'grid' : 'none'}}>
        <button className='sideNavBtn' title="Turtles" onClick={one} >  </button>
        <button className='sideNavBtn' title="Turtles" onClick={two}>  </button>
        <button className='sideNavBtn' title="Crocodiles" onClick={three}>  </button>
        <button className='sideNavBtn' title="Igunas" onClick={four}>  </button>
        <button className='sideNavBtn' title="Snakes" onClick={five}>  </button>
    </div>
  );
}

