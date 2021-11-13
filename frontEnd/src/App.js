// import logo from './logo.svg';
import './App.css';
import Navbar from './NavBar/Navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home/Home';
import esHome from './esPages/esHome';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route path="/" component={Home}/>
          <Route path="./esPages/esHome" exact component={esHome}/>
      
      
        </Switch>
    </BrowserRouter>
  );
}

export default App;
