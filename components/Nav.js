import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

import React from 'react'

const Nav = () => {
	return (
		<nav className="navContainer">
			<div>
				<nav className={navStyles.nav}>
					<ul>
						<li>
							<Link href="/">Home</Link>
						</li>
						<li>
							<Link href="/projects">Projects</Link>
						</li>
						<li>
							<Link href="/resume.pdf">Resume</Link>
						</li>
					</ul>
				</nav>
				<div className="menu" id="menu">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</div>
		</nav>
	)
}

export default Nav
