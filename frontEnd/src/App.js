// import logo from './logo.svg';
import './App.css';
// import DarkMode from './darkMode/darkMode';
import Navbar from './NavBar/Navbar';
import LoginNavbar from './NavBar/loginNavBar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import { Home } from './pages/page-Home/Home';
import { Causes } from './pages/page-SpeciesCauses/causes';
import { EndangeredSpecies } from './pages/page-SpeciesMenu/endangeredSpecies';
import { ExtinctSpecies } from './pages/page-ExtinctSpecies/extinctSpecies';
import { IndividualAction } from './pages/page-IndividualActions/individualAction';
import { TakeAction } from './pages/page-TakeAction/takeAction';
import { LogInPage } from './pages/page-LoginSignUp/logIn';
import { SignUp } from './pages/page-LoginSignUp/signUp';
import { EndnageredSpeciesUk } from './pages/page-UkSpecies/endSpeciesUk';
import { QuizPage } from './pages/page-Quiz/quiz';
import { WorldMap } from './endSpeciesWorldMap/worldMap';
import { PracticePage } from './pages/practiceStuff/practice';


import { Amphibians } from './endSpeciesPages/amphibians';
import { Aquatic } from './endSpeciesPages/aquatic';
import { Arctic } from './endSpeciesPages/arctic';
import { Birds } from './endSpeciesPages/birds';
import { Fungus } from './endSpeciesPages/fungus';
import { Mammels } from './endSpeciesPages/mammels';
import { Plants } from './endSpeciesPages/plants';
import { Reptiles } from './endSpeciesPages/reptilesPage/reptilesMAIN';
import { Insects } from './endSpeciesPages/insectsPage/insectsMAIN';


import {ScrollToTopArrow} from "./backToTopFunction/backToTop";
import {Footer} from "./header&footer/footer";

import {ReadingGuideFeature} from "./readAccessibilityGuideFunctions/readingGuideFeature";

import {ReadingMaskFeature} from "./readAccessibilityGuideFunctions/readingMaskFeature";

import {LargeCursorFeature} from "./readAccessibilityGuideFunctions/largeCursorFeature";

import {SocialShareFunction} from "./socialMediaShareFunction/socialShare";



function App() {
  return (
    <BrowserRouter>
      <SocialShareFunction/>
      <ScrollToTopArrow/>
      <div className='navbarFrame'>
        <LoginNavbar/>
        <Navbar/>
      </div>
      <ReadingMaskFeature/>
      <LargeCursorFeature/>
      <ReadingGuideFeature/>
        <Switch>
          <Route exact path="/" render={() => <Home/>}/>
          <Route path="/endangeredSpecies" render={() => <EndangeredSpecies/>}/>
          <Route path="/causes" render={() => <Causes/>}/>
          <Route path="/individualAction" render={() => <IndividualAction/>}/>
          <Route path="/takeAction" render={() => <TakeAction/>}/>
          <Route path="/logIn" render={() => <LogInPage/>}/>
          <Route path="/signUp" render={() => <SignUp/>}/>
          <Route path="/endSpeciesUk" render={() => <EndnageredSpeciesUk/>}/>
          <Route path="/extinctSpecies" render={() => <ExtinctSpecies/>}/>
          <Route path="/quiz" render={() => <QuizPage/>}/>
          <Route path="/worldMap" render={() => <WorldMap/>}/>
          <Route path="/practice" render={() => <PracticePage/>}/>

          <Route path="/amphibians" render={() => <Amphibians/>}/>
          <Route path="/aquatic" render={() => <Aquatic/>}/>
          <Route path="/artic" render={() => <Arctic/>}/>
          <Route path="/birds" render={() => <Birds/>}/>
          <Route path="/fungus" render={() => <Fungus/>}/>
          <Route path="/mammels" render={() => <Mammels/>}/>
          <Route path="/plants" render={() => <Plants/>}/>
          <Route path="/reptiles" render={() => <Reptiles/>}/>
          <Route path="/insectsMain" render={() => <Insects/>}/>
        </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
