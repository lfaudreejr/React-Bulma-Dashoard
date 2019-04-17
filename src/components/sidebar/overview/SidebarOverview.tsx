import React from 'react';
import './SidebarOverview.sass';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import SidebarListItem from '../SidebarListItem'
interface SidebarListItemProps {
	icon: IconProp,
	name: string,
	moreLinks?: Array<SidebarListItemProps>
}

const items: { [key: string]: SidebarListItemProps[] } = {
	'pages': [
		{ name: 'Dashboard', icon: 'tachometer-alt' },
		{ name: 'Mailbox', icon: 'envelope', moreLinks: [
			{ name: 'Inbox', icon: 'download' },
			{ name: 'Mail', icon: 'envelope-open' },
			{ name: 'Compose', icon: 'comment-alt' }
		] },
		{ name: 'Gallery', icon: 'images' },
		{ name: 'Social', icon: 'share-alt' },
		{ name: 'Blog', icon: 'blog', moreLinks: [
			{ name: 'Posts', icon: 'comments' },
			{ name: 'Single Post', icon: 'comment-dots' }
		] }
	],
	'components': [
		{ name: 'Panels', icon: 'layer-group' },
		{ name: 'Charts', icon: 'chart-bar', moreLinks: [
			{ name: 'Rubix Charts', icon: 'chart-bar' },
			{ name: 'Chart.JS', icon: 'chart-line' },
			{ name: 'C3.JS', icon: 'chart-area' },
			{ name: 'Morris.JS', icon: 'chart-pie' }
		] },
		{ name: 'Static Timeline', icon: 'clock' },
		{ name: 'Interactive Timeline', icon: 'stopwatch' },
		{ name: 'Codemirror', icon: 'code' },
		{ name: 'Maps', icon: 'map-marker-alt' },
		{ name: 'Editor', icon: 'edit' },
		{ name: 'UI Elements', icon: 'toggle-on', moreLinks: [
			{ name: 'Buttons', icon: 'square' },
			{ name: 'Dropdowns', icon: 'chevron-circle-down' },
			{ name: 'Tabs & Navs', icon: 'location-arrow' },
			{ name: 'Sliders', icon: 'sliders-h' },
			{ name: 'Knobs', icon: 'circle' },
			{ name: 'Modals', icon: 'window-maximize' },
			{ name: 'Messenger', icon: 'comment' },
		] },
		{ name: 'Forms', icon: 'paperclip', moreLinks: [
			{ name: 'Controls', icon: 'gamepad' },
			{ name: 'X-Editable', icon: 'edit' },
			{ name: 'Wizard', icon: 'magic' }
		] },
		{ name: 'Tables', icon: 'table', moreLinks: [
			{ name: 'Bootstrap Tables', icon: 'th-large' },
			{ name: 'Datatables', icon: 'th' },
			{ name: 'Tablesaw', icon: 'table' }
		] },
		{ name: 'Grid', icon: 'th' },
		{ name: 'Calendar', icon: 'calendar-alt' },
		{ name: 'File Utilities', icon: 'file', moreLinks: [
			{ name: 'Dropzone', icon: 'angle-double-down' },
			{ name: 'Image Cropping', icon: 'crop' }
		] },
		{ name: 'Fonts', icon: 'font' }
	],
	'extras': [
		{ name: 'Login', icon: 'sign-in-alt' },
		{ name: 'Signup', icon: 'user-plus' },
		{ name: 'Lock Page', icon: 'lock' },
		{ name: 'Invoice', icon: 'receipt' },
		{ name: 'Pricing Tables', icon: 'tag' }
	],
	'documentation': [
		{ name: 'Documentation', icon: 'folder' }
	]
}

function SidebarOverview(props: Object) {
	return (
		<div className="sidebar-overview">
			<div className="sidebar-overview__search">
				<input className="input sidebar-search" type="text" placeholder="Search..." />
			</div>
			<div className="sidebar-overview__content">
				{Object.keys(items).map((key, index) => {
					return (
						<aside key={key} className="menu sidebar-overview__content__list">
							<p className="menu-label sidebar-overview__content__list-label">{key.toUpperCase()}</p>
							<ul className="menu-list">
								{
									items[key].map(function (item: SidebarListItemProps) {
										return <SidebarListItem key={item.name} icon={item.icon} name={item.name} moreLinks={item.moreLinks} />
									})
								}
							</ul>
							{index < Object.keys(items).length - 1 ? <hr></hr> : null}
						</aside>
					)
				})}
			</div>
		</div>
	);
}

export default SidebarOverview;
