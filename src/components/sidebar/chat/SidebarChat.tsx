import React from 'react';
import _ from 'lodash';
import './SidebarChat.sass';
import SidebarChatListItem from './SidebarChatListItem'

// Import Sample Avatars
import BigsBungalow from '../../../media/avatars/BigsBungalow.svg'
import MitchKawalski from '../../../media/avatars/MitchKawalski.svg'
import KurtMuglass from '../../../media/avatars/KurtMuglass.svg'
import TannerBaldinger from '../../../media/avatars/TannerBaldinger.svg'
import JeffreyJazz from '../../../media/avatars/JeffreyJazz.svg'
import ScoopyNeckbeard from '../../../media/avatars/ScoopyNeckbeard.svg'
import LukeKarbanja from '../../../media/avatars/LukeKarbanja.svg'
import AlbertPaleo from '../../../media/avatars/AlbertPaleo.svg'
import WallyDarbi from '../../../media/avatars/WallyDarbi.svg'
import MullyBrown from '../../../media/avatars/MullyBrown.svg'
import TurboHoodie from '../../../media/avatars/TurboHoodie.svg'
import AuburnBean from '../../../media/avatars/AuburnBean.svg'
import PastelPeebers from '../../../media/avatars/PastelPeebers.svg'
import EvanPeach from '../../../media/avatars/EvanPeach.svg'
import MaximoBlockus from '../../../media/avatars/MaximoBlockus.svg'
import DizzyPale from '../../../media/avatars/DizzyPale.svg'

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
  { name: 'Bigs Bungalow', status: 'online', imageUrl: BigsBungalow },
  { name: 'Mitch Kawalski', status: 'online', imageUrl: MitchKawalski },
  { name: 'Kurt Muglass', status: 'online', imageUrl: KurtMuglass },
  { name: 'Tanner Baldinger', status: 'online', imageUrl: TannerBaldinger },
  { name: 'Jeffrey Jazz', status: 'online', imageUrl: JeffreyJazz },
  { name: 'Scoopy Neckbeard', status: 'online', imageUrl: ScoopyNeckbeard },
  { name: 'Luke Karbanja', status: 'idle', imageUrl: LukeKarbanja },
  { name: 'Albert Paleo', status: 'idle', imageUrl: AlbertPaleo },
  { name: 'Wally Darbi', status: 'idle', imageUrl: WallyDarbi },
  { name: 'Mully Brown', status: 'busy', imageUrl: MullyBrown },
  { name: 'Turbo Hoodie', status: 'busy', imageUrl: TurboHoodie },
  { name: 'Auburn Bean', status: 'busy', imageUrl: AuburnBean },
  { name: 'Pastel Peebers', status: 'busy', imageUrl: PastelPeebers },
  { name: 'Evan Peach', status: 'offline', imageUrl: EvanPeach },
  { name: 'Maximo Blockus', status: 'offline', imageUrl: MaximoBlockus },
  { name: 'Dizzy Pale', status: 'offline', imageUrl: DizzyPale }
];
const groupedItems = _.groupBy(items, 'status');

function SidebarChat(props: any) {
  return (
    <div className="sidebar-chat app-sidebar__content-container" data-simplebar>
      <div className="sidebar-chat__content app-sidebar__nav-content">
        {Object.keys(groupedItems).map((key, index) => {
          return (
            <aside key={index} className="menu">
              <p className="menu-label sidebar-header">
                {key.toUpperCase()}
                <span> ({groupedItems[key].length})</span>
              </p>
              <ul>
                {
                  groupedItems[key].map(function (item: SidebarChatListItemProps, i) {
                    return <SidebarChatListItem key={i} name={item.name} imageUrl={item.imageUrl} status={item.status}/>
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
