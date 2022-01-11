// import logo from './logo.svg';
import './App.css';
// import DarkMode from './darkMode/darkMode';
import Navbar from './NavBar/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import { Home } from './pages/Home';
import { Causes } from './pages/causes';
import { EndangeredSpecies } from './pages/endangeredSpecies';
import { IndividualAction } from './pages/individualAction';
import { TakeAction } from './pages/takeAction';
import { LogInPage } from './pages/logIn';
import { SignUp } from './pages/signUp';
import { EndnageredSpeciesUk } from './pages/endSpeciesUk';

import { Amphibians } from './endSpeciesPages/amphibians';
import { Aquatic } from './endSpeciesPages/aquatic';
import { Artic } from './endSpeciesPages/artic';
import { Birds } from './endSpeciesPages/birds';
import { Fungus } from './endSpeciesPages/fungus';
import { Mammels } from './endSpeciesPages/mammels';
import { Plants } from './endSpeciesPages/plants';

import {ScrollToTopArrow} from "./backToTopFunction/backToTop";
import {Footer} from "./header&footer/footer";

function App() {
  return (
    <BrowserRouter>
      {/* <DarkMode/> */}
      <Navbar/>
      <ScrollToTopArrow/>
        <Switch>
          <Route exact path="/" render={() => <Home/>}/>
          <Route path="/endangeredSpecies" render={() => <EndangeredSpecies/>}/>
          <Route path="/causes" render={() => <Causes/>}/>
          <Route path="/individualAction" render={() => <IndividualAction/>}/>
          <Route path="/takeAction" render={() => <TakeAction/>}/>
          <Route path="/logIn" render={() => <LogInPage/>}/>
          <Route path="/signUp" render={() => <SignUp/>}/>
          <Route path="/endSpeciesUk" render={() => <EndnageredSpeciesUk/>}/>

          <Route path="/amphibians" render={() => <Amphibians/>}/>
          <Route path="/aquatic" render={() => <Aquatic/>}/>
          <Route path="/artic" render={() => <Artic/>}/>
          <Route path="/birds" render={() => <Birds/>}/>
          <Route path="/fungus" render={() => <Fungus/>}/>
          <Route path="/mammels" render={() => <Mammels/>}/>
          <Route path="/plants" render={() => <Plants/>}/>
        </Switch>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
