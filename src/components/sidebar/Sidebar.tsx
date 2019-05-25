import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useGlobal from "../../store/state";
import SidebarTabs from './tabs/SidebarTabs';
import larry from '../../media/larry.jpg'
import './Sidebar.sass';

function Sidebar(props: object) {
	const [isLocked, updateLock] = useState(false)
	const [globalState, globalActions] = useGlobal()

	return (
		<div className="app-sidebar">
			<div className={"app-sidebar__header theme-bg-" + globalState.color}>
				<figure className="user-avatar image is-48x48">
					<img className="is-rounded" src={larry} />
				</figure>
				<div className="member-status">
					<h3>Larry Faudree Jr</h3>
					<div className="progess-bar">
						<div className="progress-bar__progress" />
					</div>
				</div>
				<div className={`lock theme-hover-${globalState.color}`} onClick={() => updateLock(!isLocked)}>
					{
						isLocked ? <FontAwesomeIcon icon={[ 'fas', 'lock' ]} /> : <FontAwesomeIcon icon={[ 'fas', 'unlock' ]} />
					}
				</div>
			</div>
			<div className="app-sidebar__content">
				<SidebarTabs />
			</div>
		</div>
	);
}

export default Sidebar;
