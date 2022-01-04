import React from 'react';

import '../pages/publicMain.css';

import {MammelsPageSuvNav} from "../subNav/subNavigation";

export const Mammels = () => {
  return( 
    <div className="pageMainFrame">
      <body className='pageBodyFrame'>

        <div className='container'>

          <div className = "mainSubHeadFrame">
            <line className = "thinLine"></line>
              <subhead className = "subheadLrg">Endangered Mammels</subhead>
            <line className = "thinLine"></line>
          </div>


          <paragragraph className="paragpaphLrg">
            Wass awass
          </paragragraph>


          <div className = "mainSubHeadFrame">
            <line className = "thinLine"></line>
              <subhead className = "subheadSml">S m a l l - M a m m e l s</subhead>
            <line className = "thinLine"></line>
          </div>


          <box className = "box">
            <box className = "speciesMainFrame">
              <image className='speciesImage'>speciesImage</image>
              <label className='speciesName'>Name</label>
            </box>

            <box className = "speciesMainFrame"> 
              <image className='speciesImage'>speciesImage</image>
              <label className='speciesName'>Name</label>
            </box>

            <box className = "speciesMainFrame"> 
              <image className='speciesImage'>speciesImage</image>
              <label className='speciesName'>Name</label>
            </box>
          </box>

          <box className = "box4">Supp</box>

          <paragragraph className="paragpaphLrg">
            Wass awass
          </paragragraph>

        </div>  




        <div className='container'>

          <div className = "mainSubHeadFrame">
            <line className = "thinLine"></line>
              <subhead className = "subheadSml">L a r g e - M a m m e l s</subhead>
            <line className = "thinLine"></line>
          </div>

          <box className = "box">
            <box className = "speciesMainFrame">
              <image className='speciesImage'>speciesImage</image>
              <label className='speciesName'>Name</label>
            </box>

            <box className = "speciesMainFrame"> 
              <image className='speciesImage'>speciesImage</image>
              <label className='speciesName'>Name</label>
            </box>

            <box className = "speciesMainFrame"> 
              <image className='speciesImage'>speciesImage</image>
              <label className='speciesName'>Name</label>
            </box>
          </box>
          <box className = "box4">Supp</box>
          <paragragraph className="paragpaphLrg">
            Wass awass
          </paragragraph>

        </div>



      <div className='container'>

        <div className = "mainSubHeadFrame">
          <line className = "thinLine"></line>
            <subhead className = "subheadSml">B i g - C a t s</subhead>
          <line className = "thinLine"></line>
        </div>

        <box className = "box">
          <box className = "speciesMainFrame">
            <image className='speciesImage'>speciesImage</image>
            <label className='speciesName'>Name</label>
          </box>

          <box className = "speciesMainFrame"> 
            <image className='speciesImage'>speciesImage</image>
            <label className='speciesName'>Name</label>
          </box>

          <box className = "speciesMainFrame"> 
            <image className='speciesImage'>speciesImage</image>
            <label className='speciesName'>Name</label>
          </box>
        </box>
        <box className = "box4">Supp</box>

      </div>
        


      <div className='container'>  

          <div className = "mainSubHeadFrame">
            <line className = "thinLine"></line>
              <subhead className = "subheadSml">P r i m a t e s</subhead>
            <line className = "thinLine"></line>
          </div>

          <box className = "box">
            <box className = "speciesMainFrame">
              <image className='speciesImage'>speciesImage</image>
              <label className='speciesName'>Name</label>
            </box>

            <box className = "speciesMainFrame"> 
              <image className='speciesImage'>speciesImage</image>
              <label className='speciesName'>Name</label>
            </box>

            <box className = "speciesMainFrame"> 
              <image className='speciesImage'>speciesImage</image>
              <label className='speciesName'>Name</label>
            </box>
          </box>

          <box className = "box4">Supp</box>

        </div>

      </body>
      <MammelsPageSuvNav/>
    </div>
  );
}