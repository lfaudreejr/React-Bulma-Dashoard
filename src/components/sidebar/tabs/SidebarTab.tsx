import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface Props {
	className?: string;
	name: string;
	icon: IconProp;
	active: boolean;
	onClick: Function;
}

function SidebarTab(props: Props) {
	return (
		<li className={`app-sidebar__tabs__tab ${props.active ? 'active' : ''}`} onClick={e => props.onClick(e)}>
			<a>
				<span className="tab-icon">
					<FontAwesomeIcon icon={props.icon} />
				</span>
			</a>
		</li>
	);
}

export default SidebarTab;
