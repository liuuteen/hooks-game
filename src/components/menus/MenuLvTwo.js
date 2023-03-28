import { NavLink } from 'react-router-dom';
export default function MenuLvTwo({parentUrlPath, menus}) {
	return (
		<ul className="game-nav-lv2">
			{menus.map(menu => (
				<li key={menu.id}>
					<NavLink to={`/${parentUrlPath}/${menu.urlPath}`}>{menu.title}</NavLink>
				</li>
			))}
		</ul>
	)
}