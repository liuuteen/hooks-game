import MenuLvOne from "./MenuLvOne";
export default function MenuNav(second) {
  const menuTree = [
    ["react hooks", [
      "useState",
      "useEffect"
    ]],
    ["react-router hooks", [
      "useParams"
    ]]
  ]
  return (
    <div className='game-nav'>
      {menuTree.map((menu, i) => (
        <div className='menu-lv1-container' key={i}>
          <MenuLvOne lv1Title={menu[0]} lv2Menus={menu[1]}/>
        </div>
      ))}
    </div>
  )
}