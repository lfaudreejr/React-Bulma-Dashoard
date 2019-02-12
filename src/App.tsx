import React, { Component } from 'react';
import Sidebar from './components/sidebar/Sidebar'
import './App.sass';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab)
library.add(fas)

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='columns'>
          <div className='column is-3'>
            <Sidebar/>
          </div>
          <div className='column'>Content</div>
        </div>
      </div>
    );
  }
}

export default App;
