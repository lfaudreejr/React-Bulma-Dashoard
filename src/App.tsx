import React, { Component } from 'react';
import Sidebar from './components/sidebar/Sidebar';
import './App.sass';
import USLogo from './media/United-States.png'

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fab);
library.add(fas);
class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="columns is-gapless max-height m-0 p-0">
					<div className="column is-2 m-0 p-0">
						<Sidebar />
					</div>
					<div className="column m-0 p-0">
						<nav className="navbar app-navbar is-transparent is-dark" role="navigation">
							<div className="navbar-menu">
								<div className="navbar-start" />
								<div className="navbar-end">
									<div className="navbar-section-divider"></div>
									<div className="navbar-item navbar-section">
										<div className="navbar-link is-arrowless">
											<div className="theme-icon theme-blue"></div>
										</div>
									</div>
									<div className="navbar-section-divider"></div>
									<div className="navbar-item navbar-section has-dropdown is-hoverable">
										<a className="navbar-link is-arrowless">
											<img src={USLogo} alt="United States Flag"/>
										</a>
										<div className="navbar-dropdown is-boxed">
											<a className="navbar-item">
												<img src={USLogo} alt="United States Flag"/>
												<span className="ml-1"> English - U.S.</span>
											</a>
										</div>
									</div>
									<div className="navbar-section-divider"></div>
									<div className="navbar-section">
										<div className="navbar-item">
											<span className="has-text-grey-light">
												<FontAwesomeIcon icon="user"></FontAwesomeIcon>
											</span>
										</div>
										<div className="navbar-item">
											<span className="has-text-grey-light">
												<FontAwesomeIcon icon="cog"></FontAwesomeIcon>
											</span>
										</div>
									</div>
									<div className="navbar-section-divider"></div>
									<div className="navbar-section">
										<div className="navbar-item">
											<span className="has-text-grey-light">
												<FontAwesomeIcon icon="envelope"></FontAwesomeIcon>
											</span>
										</div>
										<div className="navbar-item">
											<span className="has-text-grey-light">
												<FontAwesomeIcon icon="bullhorn"></FontAwesomeIcon>
											</span>
										</div>
										<div className="navbar-item">
											<span className="has-text-grey-light">
												<FontAwesomeIcon icon="rss"></FontAwesomeIcon>
											</span>
										</div>
									</div>
									<div className="navbar-section-divider"></div>
									<a className="navbar-section has-background-danger">
										<div className="navbar-item">
											<span className="has-text-light">
												<FontAwesomeIcon icon="power-off"></FontAwesomeIcon>
											</span>
										</div>
									</a>
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
