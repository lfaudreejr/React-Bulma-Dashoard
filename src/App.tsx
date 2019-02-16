import React, { Component } from 'react';
import Sidebar from './components/sidebar/Sidebar';
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
				<div className="columns max-height m-0 p-0">
					<div className="column is-2 m-0 p-0">
						<Sidebar />
					</div>
					<div className="column m-0 p-0">
						<nav className="navbar app-navbar is-dark" role="navigation">
							<div className="navbar-menu">
								<div className="navbar-start" />
								<div className="navbar-end">
									<a className="navbar-item">Home</a>
									<a className="navbar-item">Documentation</a>
									<a className="navbar-item">More</a>
								</div>
							</div>
						</nav>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
