import React from 'react';
import './SidebarOverview.sass';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import SidebarListItem from '../SidebarListItem'
interface SidebarListItemProps {
	icon: IconProp,
	name: string
}

const items: { [key: string]: SidebarListItemProps[] } = {
	'pages': [
		{ name: 'Dashboard', icon: 'tachometer-alt' },
		{ name: 'Mailbox', icon: 'envelope' },
		{ name: 'Gallery', icon: 'images' },
		{ name: 'Social', icon: 'share-alt' },
		{ name: 'Blog', icon: 'blog' }
	],
	'components': [
		{ name: 'Panels', icon: 'layer-group' },
		{ name: 'Charts', icon: 'chart-bar' },
		{ name: 'Static Timeline', icon: 'clock' },
		{ name: 'Interactive Timeline', icon: 'stopwatch' },
		{ name: 'Codemirror', icon: 'code' },
		{ name: 'Maps', icon: 'map-marker-alt' },
		{ name: 'Editor', icon: 'edit' },
		{ name: 'UI Elements', icon: 'toggle-on' },
		{ name: 'Forms', icon: 'paperclip' },
		{ name: 'Tables', icon: 'table' },
		{ name: 'Grid', icon: 'th' },
		{ name: 'Calendar', icon: 'calendar-alt' },
		{ name: 'File Utilities', icon: 'file' },
		{ name: 'Fonts', icon: 'font' }
	]
}

function SidebarOverview(props: Object) {
	return (
		<div className="sidebar-overview">
			<div className="sidebar-overview__search">
				<input className="input sidebar-search" type="text" placeholder="Search..." />
			</div>
			<div className="sidebar-overview__content">
				{Object.keys(items).map(key => {
					return (
						<div>
							<h3 className="sidebar-overview__content__header">{key.toUpperCase()}</h3>
							<ul className="sidebar-overview__content__list">
								{
									items[key].map(function (item: SidebarListItemProps) {
										return <SidebarListItem icon={item.icon} name={item.name} />
									})
								}
							</ul>
						</div>
					)
				})}
			</div>
		</div>
	);
}

export default SidebarOverview;
