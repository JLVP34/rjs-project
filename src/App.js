import React from 'react';
import translate from 'i18next';

import './App.scss';
import NavbarComponent from './shared/component/nav-bar/NavbarComponent';

function App() {

  return (
      <div className='root'>
        <NavbarComponent/>
      </div>
  );
}

export default App;
