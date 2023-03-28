import MenuLvTwo from "./MenuLvTwo";

import "./menu.css";
export default function MenuLvOne({menu, isActive, setActiveFirstMenuId}) {
	const {title, urlPath: parentUrlPath, subMenusTree} = menu;

	function toggleLv2Menu(){
		setActiveFirstMenuId(menu.id)
	}

	return (
		<>
			<div className={isActive ? 'game-nav-lv1 active' : 'game-nav-lv1'} onClick={toggleLv2Menu}>
				{title}<span className='game-icon-lv1'>x</span>
			</div>
			{isActive && <MenuLvTwo parentUrlPath={parentUrlPath} menus={subMenusTree} />}
		</>
	)
}