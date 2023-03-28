import { useState } from 'react';
import MenuLvOne from "./MenuLvOne";
export default function MenuNav() {
  const [activeFirstMenuId, setActiveFirstMenuId] = useState();
  const menuTrees = [
    {
      id: 1,
      title: "react hooks",
      urlPath: "react-hooks",
      subMenusTree: [
        {
          id: 1,
          title: "useState",
          urlPath: "useState",
        },
        {
          id: 2,
          title: "useEffect",
          urlPath: "useEffect",
        },
      ]
    },
    {
      id: 2,
      title: "react-router hooks",
      urlPath: "react-router-hooks",
      subMenusTree: [
        {
          id: 1,
          title: "useParams",
          urlPath: "useParams",
        },
      ]
    }
  ]
  return (
    <div className='game-nav'>
      {menuTrees.map(menu => (
        <div className='menu-lv1-container' key={menu.id}>
          <MenuLvOne
            menu={menu}
            isActive={activeFirstMenuId === menu.id ? true : false}
            setActiveFirstMenuId={setActiveFirstMenuId}
          />
        </div>
      ))}
    </div>
  )
}