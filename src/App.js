import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

import './App.scss';
import NavbarComponent from './shared/comp/nav-bar/NavbarComponent';

import Home from './app/comp/home/Home';

function App() {

  return (
    <Router>
      <div className='root'>
          <Grid container>
            <NavbarComponent/>

            <Route exact path='/' component={Home} />
            <Route exact path='/home' component={Home} />
            <Route path='/search' component={Search} />
            <Route path='/about' component={About} />
          </Grid>
      </div>
    </Router>
  );
}

function Search() {
  return <h2>Search</h2>;
}

function About() {
  return <h2>About</h2>;
}

export default App;
