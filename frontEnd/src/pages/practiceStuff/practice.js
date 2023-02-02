
import React from "react";
import { Component } from "react";

import './practice.css';
import './buttons.css';
import './gridsDesigns.css';

// {/* <script>
//   var root = document.documentElement;
//   document.addEventListener('mouse', ev=> {
//     var el = ev.target;
//     var x = (ev.offsetLeft) / el.offsetWidth;
//     var y = (ev.offsetLeft) / el.offsetHeight;
//     root.stye.setProperty('--ripple-x', x);
//     root.stye.setProperty('--ripple-y', y);
//   });
// </script> */}

export class PracticePage extends Component {
  
    render(){
  
      return (
        <div className="yo">

  
          <body className='wass'>

{/* //this is the START large Grid diaplay*/}
          <div class="grid-container-3columns-2rows">
            <div class="item-column1-long">
              <div class="lrgImageFrame">1 long here</div>
              <div class="endSpecies-name"></div>
            </div>
            
            <div class="item">
              <div class="medImagFrame">2</div>
              <div class="endSpecies-name"></div>
            </div>

            <div class="item">
              <div class="medImagFrame">3</div>
              <div class="endSpecies-name"></div>
            </div>  

            <div class="item">
              <div class="medImagFrame">4</div>
              <div class="endSpecies-name"></div>
            </div>

            <div class="item">
              <div class="medImagFrame">5</div>
              <div class="endSpecies-name"></div>
            </div>
          </div>
           



{/* //this is the MIDDLE large Grid diaplay*/}
        <div class="grid-container-3columns-2rows">
          <div class="item">
            <div class="medImagFrame">1</div>
            <div class="endSpecies-name"></div>
          </div>
          
          <div class="item-column2-long">
            <div class="lrgImageFrame">2 long</div>
            <div class="endSpecies-name"></div>
          </div>

          <div class="item">
            <div class="medImagFrame">3</div>
            <div class="endSpecies-name"></div>
          </div>  

          <div class="item">
            <div class="medImagFrame">4</div>
            <div class="endSpecies-name"></div>
          </div>

          <div class="item">
            <div class="medImagFrame">5</div>
            <div class="endSpecies-name"></div>
          </div>
        </div>




{/* //this is the END large Grid diaplay*/}
        <div class="grid-container-3columns-2rows">
          <div class="item">
            <div class="medImagFrame">1</div>
            <div class="endSpecies-name"></div>
          </div>
          
          <div class="item">
            <div class="medImagFrame">2</div>
            <div class="endSpecies-name"></div>
          </div>

          <div class="item-column3-long">
            <div class="lrgImageFrame">3 Last long</div>
            <div class="endSpecies-name"></div>
          </div>  

          <div class="item">
            <div class="medImagFrame">4</div>
            <div class="endSpecies-name"></div>
          </div>

          <div class="item">
            <div class="medImagFrame">5</div>
            <div class="endSpecies-name"></div>
          </div>
        </div>




{/* //this is the (1st ROW 2 column) large Grid diaplay*/}
        <div class="grid-container-3columns-2rows">
          <div class="item-firtRowTwoColumnTopLeft-long">
            <div class="twoColumn-longImagFrame">1nd row and 2 column long TOP LEFT</div>
            <div class="endSpecies-name"></div>
          </div>
          
          <div class="item">
            <div class="medImagFrame">2</div>
            <div class="endSpecies-name"></div>
          </div>

          <div class="item">
            <div class="medImagFrame">3</div>
            <div class="endSpecies-name"></div>
          </div>

          <div class="item">
            <div class="medImagFrame">4</div>
            <div class="endSpecies-name"></div>
          </div>

          <div class="item">
            <div class="medImagFrame">5</div>
            <div class="endSpecies-name"></div>
          </div>  
        </div>

{/* //this is the (2nd ROW 2 column) large Grid diaplay*/}
        <div class="grid-container-3columns-2rows">
      
          <div class="item">
            <div class="medImagFrame">1</div>
            <div class="endSpecies-name"></div>
          </div>

          <div class="item">
            <div class="medImagFrame">2</div>
            <div class="endSpecies-name"></div>
          </div>

          <div class="item-secondRowTwoColumnBottomLeft-long">
            <div class="twoColumn-longImagFrame">2nd row and 2 column long BOTTOM LEFT</div>
            <div class="endSpecies-name"></div>
          </div>

          <div class="item">
            <div class="medImagFrame">4</div>
            <div class="endSpecies-name"></div>
          </div>

          <div class="item">
            <div class="medImagFrame">5</div>
            <div class="endSpecies-name"></div>
          </div>
        </div>

{/* //this is the (2nd ROW 2 column) large Grid diaplay*/}
        <div class="grid-container-3columns-2rows">
        
          <div class="item">
            <div class="medImagFrame">1</div>
            <div class="endSpecies-name"></div>
          </div>

          <div class="item-secondRowTwoColumnTopRIGHT-long">
            <div class="twoColumn-longImagFrame">1st row and 2 column long TOP RIGHT</div>
            <div class="endSpecies-name"></div>
          </div>

          <div class="item">
            <div class="medImagFrame">3</div>
            <div class="endSpecies-name"></div>
          </div>

          <div class="item">
            <div class="medImagFrame">4</div>
            <div class="endSpecies-name"></div>
          </div>

          <div class="item">
            <div class="medImagFrame">5</div>
            <div class="endSpecies-name"></div>
          </div>

        </div>

{/* //this is the (1nd ROW 2 column BOTTOM LEFT) large Grid diaplay*/}
        <div class="grid-container-3columns-2rows">
          <div class="item">
            <div class="medImagFrame">1</div>
            <div class="endSpecies-name"></div>
          </div>

          <div class="item">
            <div class="medImagFrame">2</div>
            <div class="endSpecies-name"></div>
          </div>

          <div class="item">
            <div class="medImagFrame">3</div>
            <div class="endSpecies-name"></div>
          </div>

          <div class="item">
            <div class="medImagFrame">4</div>
            <div class="endSpecies-name"></div>
          </div>

          <div class="item-secondRowTwoColumnBottomRIGHT-long">
            <div class="twoColumn-longImagFrame">2st row and 2 column long BOTTOM RIGHT</div>
            <div class="endSpecies-name"></div>
          </div>
          
        </div>

{/* //this is the H-SHAPE Grid diaplay*/}
        <div class="grid-container-3columns-2rows">
          <div class="item-column1-long">
            <div class="lrgImageFrame">1 long here</div>
            <div class="endSpecies-name"></div>
          </div>

          <div class="item">
            <div class="medImagFrame">2</div>
            <div class="endSpecies-name"></div>
          </div>

          <div class="item">
            <div class="medImagFrame">3</div>
            <div class="endSpecies-name"></div>
          </div>

          <div class="item-column3-long">
            <div class="lrgImageFrame">3 Last long</div>
            <div class="endSpecies-name"></div>
          </div>
        </div>



{/* //this is the SECOND ROW large Grid diaplay*/}
            <div class="grid-container-3columns-3rows">
              <div class="item">
                <div class="medImagFrame">Meidum image 1</div>
                <div class="endSpecies-name"></div>
              </div>

              <div class="item">
                <div class="medImagFrame">Meidum image 2</div>
                <div class="endSpecies-name"></div>
              </div>

              <div class="item">
                <div class="medImagFrame">Meidum image 3</div>
                <div class="endSpecies-name"></div>
              </div>

              <div class="item-row2-long">
                <div class="longImagFrame">Long image 4</div>
                <div class="endSpecies-name"></div>
              </div>

              <div class="item">
                <div class="medImagFrame">Meidum image 5</div>
                <div class="endSpecies-name"></div>
              </div> 

              <div class="item">
                <div class="medImagFrame">Meidum image 6</div>
                <div class="endSpecies-name"></div>
              </div>

              <div class="item">
                <div class="medImagFrame">Meidum image 1</div>
                <div class="endSpecies-name"></div>
              </div>
            </div>



          <div id="flex_boxx">
            <div class="card-grid-container">
              <div class="card-image"> Image </div>
              <div class="card-name"> Name </div>
              <div class="card-paragraph">Paragraph</div>
              <button class="card-button">Button</button>
            </div>

            <div class="card-grid-container2">
              <div class="card-image"> Image </div>
              <div class="card-name"> Name </div>
              <div class="card-paragraph">Paragraph</div>
              <button class="card-button">Button</button>
            </div>

            <div class="card-grid-container">
              <div class="card-image"> Image </div>
              <div class="card-name"> Name </div>
              <div class="card-paragraph">Paragraph</div>
              <button class="card-button">Button</button>
            </div>
          </div>
   

            <button class="button-underline">Underline</button>
            <button class="button-slide">slide</button>
            <button class="button-border">slide</button>
            <button class="buttonCoolBorder">cool border</button>
            <button class="buttonAnimation">animation</button>

            <button className="buttonAnimation2"> Ripple effect
            </button>

           <div className="stickyTest">
            <div className="sricky">this is the test</div>

           </div>

          </body>
     
        </div>
      );
    }
  }