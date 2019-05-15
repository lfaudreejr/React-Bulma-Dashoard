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
  { name: 'Bigs Bungalow', status: 'online', imageUrl: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Round&hairColor=SilverGray&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=Happy&eyebrowType=FlatNatural&mouthType=ScreamOpen&skinColor=DarkBrown' },
  { name: 'Mitch Kawalski', status: 'online', imageUrl: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesar&accessoriesType=Prescription01&hairColor=Blonde&facialHairType=BeardMagestic&facialHairColor=Black&clotheType=BlazerShirt&eyeType=Wink&eyebrowType=Default&mouthType=Default&skinColor=Tanned' },
  { name: 'Kurt Muglass', status: 'online', imageUrl: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Round&hairColor=Auburn&facialHairType=BeardMedium&facialHairColor=Black&clotheType=ShirtCrewNeck&clotheColor=Black&eyeType=Wink&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Tanned' },
  { name: 'Tanner Baldinger', status: 'online', imageUrl: 'https://avataaars.io/?avatarStyle=Circle&topType=NoHair&accessoriesType=Kurt&hairColor=Blonde&facialHairType=BeardMagestic&facialHairColor=Brown&clotheType=ShirtVNeck&clotheColor=White&eyeType=Surprised&eyebrowType=DefaultNatural&mouthType=Vomit&skinColor=Pale' },
  { name: 'Jeffrey Jazz', status: 'online', imageUrl: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Kurt&hairColor=Auburn&facialHairType=BeardLight&facialHairColor=BlondeGolden&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Cumbia&eyeType=Side&eyebrowType=UpDownNatural&mouthType=Serious&skinColor=Pale' },
  { name: 'Scoopy Neckbeard', status: 'online', imageUrl: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Sunglasses&hairColor=PastelPink&facialHairType=BeardMedium&facialHairColor=BlondeGolden&clotheType=ShirtScoopNeck&clotheColor=PastelBlue&eyeType=Surprised&eyebrowType=UnibrowNatural&mouthType=Disbelief&skinColor=Brown' },
  { name: 'Luke Karbanja', status: 'idle', imageUrl: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurly&accessoriesType=Kurt&hairColor=Auburn&facialHairType=BeardLight&facialHairColor=Auburn&clotheType=ShirtCrewNeck&clotheColor=White&graphicType=Skull&eyeType=Dizzy&eyebrowType=Default&mouthType=Smile&skinColor=Pale' },
  { name: 'Albert Paleo', status: 'idle', imageUrl: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortWaved&accessoriesType=Prescription02&hatColor=Red&hairColor=PastelPink&facialHairType=MoustacheFancy&facialHairColor=BrownDark&clotheType=Overall&clotheColor=Heather&eyeType=Dizzy&eyebrowType=FlatNatural&mouthType=ScreamOpen&skinColor=Pale' },
  { name: 'Wally Darbi', status: 'idle', imageUrl: 'https://avataaars.io/?avatarStyle=Circle&topType=Eyepatch&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=MoustacheMagnum&facialHairColor=Blonde&clotheType=ShirtScoopNeck&clotheColor=Red&eyeType=Surprised&eyebrowType=SadConcernedNatural&mouthType=Serious&skinColor=DarkBrown' },
  { name: 'Mully Brown', status: 'busy', imageUrl: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShaggyMullet&accessoriesType=Prescription01&hairColor=BrownDark&facialHairType=Blank&facialHairColor=Auburn&clotheType=ShirtVNeck&clotheColor=PastelRed&eyeType=Close&eyebrowType=SadConcerned&mouthType=Default&skinColor=Brown' },
  { name: 'Turbo Hoodie', status: 'busy', imageUrl: 'https://avataaars.io/?avatarStyle=Circle&topType=Turban&accessoriesType=Blank&hatColor=Red&hairColor=Red&facialHairType=MoustacheFancy&facialHairColor=Platinum&clotheType=Hoodie&clotheColor=Heather&eyeType=Happy&eyebrowType=Angry&mouthType=Serious&skinColor=Black' },
  { name: 'Auburn Bean', status: 'busy', imageUrl: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairTheCaesarSidePart&accessoriesType=Prescription02&hatColor=Blue02&hairColor=Platinum&facialHairType=BeardMedium&facialHairColor=Auburn&clotheType=CollarSweater&clotheColor=Blue03&eyeType=Wink&eyebrowType=RaisedExcited&mouthType=Eating&skinColor=Brown' },
  { name: 'Pastel Peebers', status: 'busy', imageUrl: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurvy&accessoriesType=Sunglasses&hairColor=SilverGray&facialHairType=Blank&facialHairColor=Brown&clotheType=ShirtVNeck&clotheColor=PastelBlue&eyeType=Surprised&eyebrowType=UpDown&mouthType=Twinkle&skinColor=DarkBrown' },
  { name: 'Evan Peach', status: 'offline', imageUrl: 'https://avataaars.io/?avatarStyle=Circle&topType=WinterHat4&accessoriesType=Kurt&hatColor=PastelRed&hairColor=SilverGray&facialHairType=BeardMagestic&facialHairColor=Blonde&clotheType=ShirtVNeck&clotheColor=Blue03&eyeType=Happy&eyebrowType=RaisedExcitedNatural&mouthType=Tongue&skinColor=Black' },
  { name: 'Maximo Blockus', status: 'offline', imageUrl: 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairFro&accessoriesType=Prescription02&hairColor=Blonde&facialHairType=BeardMedium&facialHairColor=BrownDark&clotheType=ShirtCrewNeck&clotheColor=PastelOrange&eyeType=WinkWacky&eyebrowType=AngryNatural&mouthType=ScreamOpen&skinColor=Black' },
  { name: 'Dizzy Pale', status: 'offline', imageUrl: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Prescription01&hairColor=PastelPink&facialHairType=MoustacheMagnum&facialHairColor=Red&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Deer&eyeType=Dizzy&eyebrowType=Angry&mouthType=Tongue&skinColor=Pale' }
];
const groupedItems = _.groupBy(items, 'status');

function SidebarChat(props: Object) {
  return (
    <div className="sidebar-chat app-sidebar__content-container">
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