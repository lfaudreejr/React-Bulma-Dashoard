import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import './SidebarTab.sass';
import useGlobal from './../../../store/state'

interface SidebarTabProps {
	className?: string;
	name: string;
	icon: IconProp;
	active: boolean;
	onClick: Function;
}

function SidebarTab(props: SidebarTabProps) {
	const [globalState, globalActions] = useGlobal()
	return (
		<li className={`app-sidebar__tabs__tab ${props.active ? `active theme-bg-darker-${globalState.color}` : ''} theme-bg-darker-${globalState.color} theme-hover-${globalState.color}`} onClick={e => props.onClick(e)}>
			<a>
				<span className="tab-icon">
					<FontAwesomeIcon className={`theme-color-${globalState.color}`} icon={props.icon} />
				</span>
			</a>
		</li>
	);
}

export default SidebarTab;
