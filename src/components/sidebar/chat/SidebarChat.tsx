import React from 'react';
import _ from 'lodash';
import './SidebarChat.sass';
import SidebarChatListItem from './SidebarChatListItem'

interface SidebarChatItemProps {
  imageUrl: string,
  name: string,
  status: string
}


interface SidebarChatListItemProps {
  imageUrl: string,
  name: string,
  status: string
}

const items: SidebarChatItemProps[] = [
  // { name: , status: , imageUrl:  }
  { name: 'Bigs Bungalow', status: 'online', imageUrl: 'http://www.avatarsdb.com/avatars/alfred_hitchcock.jpg' }
];
const groupedItems = _.groupBy(items, 'status');

function SidebarChat(props: Object) {
  return (
    <div className="sidebar-chat app-sidebar__content-container">
      <div className="sidebar-chat__content app-sidebar__nav-content">
        {Object.keys(groupedItems).map((key, index) => {
          return (
            <aside key={key} className="menu">
              <p className="menu-label sidebar-header">
                {key.toUpperCase()}
                <span> [{groupedItems[key].length}]</span>
              </p>
              <ul>
                {
                  groupedItems[key].map(function (item: SidebarChatListItemProps) {
                    return <SidebarChatListItem name={item.name} imageUrl={item.imageUrl} status={item.status}/>
                  })
                }
              </ul>
            </aside>
          )
        })}
      </div>
    </div>
  )
}

export default SidebarChat