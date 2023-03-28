import { useState } from "react";
import MenuLvTwo from "./MenuLvTwo";

import "./menu.css";
export default function MenuLvOne({lv1Title, lv2Menus}) {
	const [isShow, setIsShow] = useState(false);

	function toggleLv2Menu(){
		setIsShow(isShow => !isShow)
	}

	return (
		<>
			<div className={isShow ? 'game-nav-lv1 active' : 'game-nav-lv1'} onClick={toggleLv2Menu}>
				{lv1Title}<span className='game-icon-lv1'>x</span>
			</div>
			{isShow && <MenuLvTwo lv2Menus={lv2Menus} />}
		</>
	)
}