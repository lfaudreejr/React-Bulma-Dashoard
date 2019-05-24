import React, { useState } from 'react';
import ModalColorSelect from './ModalColorSelect'
import USLogo from './../../media/United-States.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useGlobal from './../../store/state'

function AppNavbar() {
  const [showColorModal, toggleColorModal] = useState(false)
  const [globalState, globalActions] = useGlobal()

  return (
    <nav className="navbar app-navbar is-transparent is-dark" role="navigation">
      <ModalColorSelect active={showColorModal} toggleModal={() => toggleColorModal(!showColorModal)}></ModalColorSelect>
      <div className="navbar-menu">
        <div className="navbar-start" />
        <div className="navbar-end">
          <div className="navbar-section-divider"></div>
          <div className="navbar-item navbar-section">
            <div className="navbar-link is-arrowless" onClick={() => toggleColorModal(!showColorModal)}>
              <div className={`theme-icon theme-bg-${globalState.color}`}></div>
            </div>
          </div>
          <div className="navbar-section-divider"></div>
          <div className="navbar-item navbar-section has-dropdown is-hoverable">
            <a className="navbar-link is-arrowless">
              <img src={USLogo} alt="United States Flag" />
            </a>
            <div className="navbar-dropdown is-boxed">
              <a className="navbar-item">
                <img src={USLogo} alt="United States Flag" />
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
  )
}

export default AppNavbar
