import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SidebarTab from './SidebarTab';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import SidebarOverview from '../overview/SidebarOverview';
import SidebarChat from '../chat/SidebarChat';
import SidebarStatistics from '../statistics/SidebarStatistics';
import SidebarSocial from '../social/SidebarSocial';
import SidebarAlerts from '../alerts/SidebarAlerts';
import './SidebarTabs.sass';

function SidebarTabs(props: Object) {
	const tabs = [
		{
			name: 'overview',
			icon: [ 'fas', 'home' ] as IconProp,
			content: SidebarOverview
		},
		{
			name: 'chat',
			icon: [ 'fas', 'comments' ] as IconProp,
			content: SidebarChat
		},
		{
			name: 'statistics',
			icon: [ 'fas', 'chart-pie' ] as IconProp,
			content: SidebarStatistics
		},
		{
			name: 'social',
			icon: [ 'fas', 'list' ] as IconProp,
			content: SidebarSocial
		},
		{
			name: 'alerts',
			icon: [ 'fas', 'bell' ] as IconProp,
			content: SidebarAlerts
		}
	];
	const [ activeTab, setActiveTab ] = useState(tabs[0]);
	const CurrentTab = activeTab.content;

	return (
		<div className="app-sidebar__tabs">
			<ul className="app-sidebar__tabs__wrapper">
				{tabs.map(tab => {
					return (
						<SidebarTab
							key={tab.name}
							name={tab.name}
							icon={tab.icon}
							active={activeTab.name === tab.name}
							onClick={() => setActiveTab(tab)}
						/>
					);
				})}
			</ul>
			<div className="app-sidebar__tabs__content">
				<CurrentTab />
			</div>
		</div>
	);
}

export default SidebarTabs;
