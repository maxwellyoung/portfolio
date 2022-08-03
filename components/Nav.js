import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'

import React from 'react'

const Nav = () => {
	return (
		<nav className={navStyles.nav}>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/projects">Projects</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Nav
