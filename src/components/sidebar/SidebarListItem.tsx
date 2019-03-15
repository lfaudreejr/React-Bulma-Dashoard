import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import './SidebarListItem.sass'

interface SidebarListItemProps {
  icon: IconProp,
  name: string,
  moreLinks?: Array<SidebarListItemProps>
}

function moreLinks(props: SidebarListItemProps) {
  if (props.moreLinks) {
    return (
      <ul className="sidebar-overview__menu-item__subcontent">
        {
          props.moreLinks.map(more => {
            return (
              <a key={more.name}>
                <li className="sidebar-overview__menu-item__subcontent-item">
                  <span className="sidebar-icon ml-1"><FontAwesomeIcon icon={more.icon} /></span>
                  <span className="ml-1 name">{more.name}</span>
                </li>
              </a>
            )
          })
        }
      </ul>
    )
  } else {
    return null
  }
}

function SidebarListItem(props: SidebarListItemProps) {
  const [toggle, setToggle] = useState(false)

  return (
    <li className="sidebar-overview__menu-item menu-item">
      <a onClick={() => setToggle(!toggle)} className="sidebar-overview__menu-item-content">
        <span className="sidebar-icon"><FontAwesomeIcon icon={props.icon} /></span>
        <span className="ml-1 name">{props.name}</span>
        { props.moreLinks ? toggle ? <span><FontAwesomeIcon icon="chevron-down" fixed-width /></span> : <span><FontAwesomeIcon icon="chevron-left" fixed-width /></span> : null }
      </a>
      {toggle ? moreLinks(props) : null}
    </li>
  )
}

export default SidebarListItem