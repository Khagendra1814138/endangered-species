import React from 'react';

import '../pages/publicMain.css';

import {BirdsPageSuvNav} from "../subNav/subNavigation";

export const Birds = () => {
    return( 
        <div className="pageMainFrame">
          <body className='pageBodyFrame'>

            <div className='container'>
            
                <div className = "mainSubHeadFrame">
                    <line className = "thinLine"></line>
                        <subhead className = "subheadLrg">Endangered Birds Species</subhead>
                    <line className = "thinLine"></line>
                </div>

                <paragragraph className="paragpaphLrg">
                Wass awass
                </paragragraph>

                <box className = "box4">
                <box className = "largeSpeciesImgFrame">
                    <image className= 'largeImage'>largeSpeciesImgFrame</image>
                    <label className= "speciesNameLabel">Species name</label>
                </box>

                <box className = "mediumSpeciesImgFrame">
                    <box className = "amphibianSpeciesMainFrame">
                    <image className='amphibianSpeciesImage'>speciesImage</image>
                    <label className='amphibianspeciesName'>Name</label>
                    </box>

                    <box className = "amphibianSpeciesMainFrame">
                    <image className='amphibianSpeciesImage'>speciesImage</image>
                    <label className='amphibianspeciesName'>Name</label>
                    </box>
                </box>

                <box className = "mediumSpeciesImgFrame">
                    <box className = "amphibianSpeciesMainFrame">
                    <image className='amphibianSpeciesImage'>speciesImage</image>
                    <label className='amphibianspeciesName'>Name</label>
                    </box>

                    <box className = "amphibianSpeciesMainFrame">
                    <image className='amphibianSpeciesImage'>speciesImage</image>
                    <label className='amphibianspeciesName'>Name</label>
                    </box>
                </box>
                </box>


                <box className = "box4">
                <box className = "largeSpeciesImgFrame">
                    <image className= 'largeImage'>largeSpeciesImgFrame</image>
                    <label className= "speciesNameLabel">Species name</label>
                </box>

                <box className = "mediumSpeciesImgFrame">
                    <box className = "amphibianSpeciesMainFrame">
                    <image className='amphibianSpeciesImage'>speciesImage</image>
                    <label className='amphibianspeciesName'>Name</label>
                    </box>

                    <box className = "amphibianSpeciesMainFrame">
                    <image className='amphibianSpeciesImage'>speciesImage</image>
                    <label className='amphibianspeciesName'>Name</label>
                    </box>
                </box>

                <box className = "mediumSpeciesImgFrame">
                    <box className = "amphibianSpeciesMainFrame">
                        <image className='amphibianSpeciesImage'>speciesImage</image>
                        <label className='amphibianspeciesName'>Name</label>
                        </box>

                        <box className = "amphibianSpeciesMainFrame">
                        <image className='amphibianSpeciesImage'>speciesImage</image>
                        <label className='amphibianspeciesName'>Name</label>
                        </box>
                    </box>
                </box>

            </div>

        </body>
        <BirdsPageSuvNav/>
      </div>
    );
}