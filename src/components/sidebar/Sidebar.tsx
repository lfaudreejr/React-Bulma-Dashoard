import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SidebarTabs from './tabs/SidebarTabs'
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
        <SidebarTabs/>
      </div>
    </div>
  )
}

export default Sidebar