import React from 'react';
import './SidebarChat.sass';

interface SidebarChatListItemProps {
  imageUrl: string,
  name: string,
  status: string
}

function SidebarChatListItem(props: SidebarChatListItemProps) {  
  return (
    <li className="menu-item">
      <a className="nav-link" onClick={() => {}}>
        <span>
          <img src={props.imageUrl} alt={props.name} className={`sidebar-chat-image ${props.status}`}/>
        </span>
        <span className="ml-1 name">{props.name}</span>
      </a>
    </li>
  )
}

export default SidebarChatListItem