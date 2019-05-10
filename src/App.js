import React from 'react';
import Grid from '@material-ui/core/Grid';

import './App.scss';
import AppConstants from './App.const';
import NavbarComponent from './shared/component/nav-bar/NavbarComponent';

function App() {

  return (
      <div className='root'>
          <Grid container spacing={AppConstants.maxGridSize}>
            <NavbarComponent/>
          </Grid>
      </div>
  );
}

export default App;
