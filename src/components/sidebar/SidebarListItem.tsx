import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import './SidebarListItem.sass'

interface SidebarListItemProps {
  icon: IconProp,
  name: string
}

function SidebarListItem(props: SidebarListItemProps) {
  return (
    <li className="sidebar-overview__content__list__item">
      <span className="sidebar-icon"><FontAwesomeIcon icon={props.icon} /></span>
      <span className="ml-1 name">{props.name}</span>
    </li>
  )
}

export default SidebarListItem