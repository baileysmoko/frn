import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import events from './components/pages/Events';
import Involved from './components/pages/Involved';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Purpose from './components/pages/Purpose';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/events' component={events} />
          <Route path='/involved' component={Involved} />
          <Route path='/contact' component={Contact} />
          <Route path="/About" component={About} />
          <Route path="/Purpose" component={Purpose} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
