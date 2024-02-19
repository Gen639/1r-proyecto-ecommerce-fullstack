import React from 'react'
import { Link } from 'react-router-dom'


const MainMenu = () => {
	return (
		<>
			<nav className="main-menu">
				<ul className="main-menu__list">
					<li className="main-menu__item">
						<Link to="/" className="main-menu__link">
							Home
						</Link>
					</li>
					<li className="main-menu__item">
						<Link to="#" className="main-menu__link">
							Cart
						</Link>
					</li>
					<li className="main-menu__item">
						<Link
							to="/login"
							className="main-menu__link main-menu__link--actived"
						>
							Login
						</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}

export default MainMenu