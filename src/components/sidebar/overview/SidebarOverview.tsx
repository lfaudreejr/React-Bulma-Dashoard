import React from 'react';
import './SidebarOverview.sass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SidebarOverview(props: Object) {
	return (
		<div className="sidebar-overview">
			<div className="sidebar-overview__search">
				<input className="input sidebar-search" type="text" placeholder="Search..." />
			</div>
			<div className="sidebar-overview__content">
				<h3 className="sidebar-overview__content__header">PAGES</h3>
				<ul className="sidebar-overview__content__list">
					<li className="sidebar-overview__content__list__item">
						<FontAwesomeIcon icon={[ 'fas', 'tachometer-alt' ]} />
						<span className="ml-1">Dashboard</span>
					</li>
					<li className="sidebar-overview__content__list__item">
						<FontAwesomeIcon icon={[ 'fas', 'envelope' ]} />
						<span className="ml-1">Mailbox</span>
					</li>
					<li className="sidebar-overview__content__list__item">
						<FontAwesomeIcon icon={[ 'fas', 'images' ]} />
						<span className="ml-1">Gallery</span>
					</li>
					<li className="sidebar-overview__content__list__item">
						<FontAwesomeIcon icon={[ 'fas', 'share-alt' ]} />
						<span className="ml-1">Social</span>
					</li>
					<li className="sidebar-overview__content__list__item">
						<FontAwesomeIcon icon={[ 'fas', 'blog' ]} />
						<span className="ml-1">Blog</span>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default SidebarOverview;
