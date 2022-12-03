import React, {useState, useEffect} from 'react';

import './sideBarPageNav.css';


export const FungiSideBarPageNav = () =>{
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
    window.scrollTo({top: 2350, behavior: 'smooth'});
  };
  const three = () =>{
    window.scrollTo({top: 4100, behavior: 'smooth'});
  };
  // const four = () =>{
  //   window.scrollTo({top: 6600, behavior: 'smooth'});
  // };
  // const five = () =>{
  //   window.scrollTo({top: 7600, behavior: 'smooth'});
  // };

  return (
    <div className='SideNav_blockBox' style={{display: showSideNav ? 'grid' : 'none'}}>
        <button className='sideNavBtn' onClick={one} >  </button>
        <button className='sideNavBtn' onClick={two}>  </button>
        <button className='sideNavBtn' onClick={three}>  </button>
        {/* <button className='sideNavBtn' onClick={four}>  </button>
        <button className='sideNavBtn' onClick={five}>  </button> */}
    </div>
  );
}

