import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Sidebar.sass';

function Sidebar (props: object) {
  return (
    <div className='app-sidebar'>
      <div className='app-sidebar__header'>
        <figure className="user-avatar image is-48x48">
          <img className="is-rounded" src="https://larryfaudree.surge.sh/static/img/ME%20(3).e9132be.jpg"/>
        </figure>
        <div className="member-status">
          <h3>Larry Faudree Jr</h3>
          <div className="progess-bar">
            <div className="progress-bar__progress"></div>
          </div>
        </div>
        <div className="lock">
          <FontAwesomeIcon icon={['fas', 'unlock']}/>
        </div>
      </div>
      <div className='app-sidebar__content'>
        <div className='app-sidebar__tabs'>
          <ul className='app-sidebar__tabs__wrapper'>
            <li className='app-sidebar__tabs__tab active'>
              <a>
                <span className='tab-icon'><FontAwesomeIcon icon={['fas', 'home']}/></span>
              </a>
            </li>
            <li className='app-sidebar__tabs__tab'>
              <a>
                <span className='tab-icon'><FontAwesomeIcon icon={['fas', 'comments']}/></span>
              </a>
            </li>
            <li className='app-sidebar__tabs__tab'>
              <a>
                <span className='tab-icon'><FontAwesomeIcon icon={['fas', 'chart-pie']}/></span>
              </a>
            </li>
            <li className='app-sidebar__tabs__tab'>
              <a>
                <span className='tab-icon'><FontAwesomeIcon icon={['fas', 'list']}/></span>
              </a>
            </li>
            <li className='app-sidebar__tabs__tab'>
              <a>
                <span className='tab-icon'><FontAwesomeIcon icon={['fas', 'bell']}/></span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar