import {useState} from 'react';
export default function MenuLvTwo({lv2Menus}) {
	const [selectedIndex, setSelectedIndex] = useState();
	return (
		<ul className="game-nav-lv2">
			{lv2Menus.map((menu,i) => (
				<li key={i} className={selectedIndex === i ? "selected" : null} onClick={() => setSelectedIndex(i)}>
					{menu}
				</li>
			))}
		</ul>
	)
}