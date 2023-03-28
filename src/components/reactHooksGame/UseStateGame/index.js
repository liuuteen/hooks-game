import "../index.css";
export default function UseStateGame() {
	return (
		<div>
			<p className="skill-intro">const [state, updateFn] = useState()</p>
			<ul className="skill-detail">
					<li>state: &nbsp;角色状态</li>
					<li>
						updateFn:  &nbsp;使用可以改变角色状态
						<ul className="ul-level2 grey-text" style={{color: "grey"}}>
							<li>特性1: 导致界面 re-render</li>
							<li>特性2: 传 object 材料，直接覆盖，不合并</li>
						</ul>
					</li>
				</ul>
			<p>
				
			</p>
		</div>
	)
}