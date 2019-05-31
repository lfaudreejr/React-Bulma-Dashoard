import React, { Component } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import AppNavbar from './components/navbar/AppNavbar'
import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css';
import './App.sass';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab);
library.add(fas);
class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="app-container max-height m-0 p-0">
					<div className="sidebar-container m-0 p-0">
						<Sidebar />
					</div>
					<div className="content-container m-0 p-0">
						<AppNavbar/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
