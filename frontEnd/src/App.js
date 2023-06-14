// import logo from './logo.svg';
import './App.css';
// import DarkMode from './darkMode/darkMode';
import Navbar from './NavBar/Navbar';
import LoginNavbar from './NavBar/loginNavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

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
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/endangeredSpecies" element={<EndangeredSpecies/>}/>
          <Route path="/causes" element={<Causes/>}/>
          <Route path="/individualAction" element={<IndividualAction/>}/>
          <Route path="/takeAction" element={<TakeAction/>}/>
          <Route path="/logIn" element={<LogInPage/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/endSpeciesUk" element={<EndnageredSpeciesUk/>}/>
          <Route path="/extinctSpecies" element={<ExtinctSpecies/>}/>
          <Route path="/quiz" element={<QuizPage/>}/>
          <Route path="/worldMap" element={<WorldMap/>}/>
          <Route path="/practice" element={<PracticePage/>}/>

          <Route path="/amphibians" element={<Amphibians/>}/>
          <Route path="/aquatic" element={<Aquatic/>}/>
          <Route path="/artic" element={<Arctic/>}/>
          <Route path="/birds" element={<Birds/>}/>
          <Route path="/fungus" element={<Fungus/>}/>
          <Route path="/mammels" element={<Mammels/>}/>
          <Route path="/plants" element={<Plants/>}/>
          <Route path="/reptiles" element={<Reptiles/>}/>
          <Route path="/insectsMain" element={<Insects/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
