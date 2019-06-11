import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Grid from '@material-ui/core/Grid';

import './App.scss';
import NavbarComponent from './shared/components/nav-bar/NavbarComponent';

import Home from './app/components/home/Home';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className='root'>
            <Grid container>
              <NavbarComponent/>

              <Route exact path='/home' component={Home} />
              <Route path='/search' component={Search} />
              <Route path='/about' component={About} />
            </Grid>
        </div>
      </Router>
    );
  };

}

class Search extends React.Component {
  render = () => <h2>Search</h2>;
}

class About extends React.Component {
  render = () => <h2>About</h2>;
}

export default App;
