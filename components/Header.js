import headerStyles from '../styles/Header.module.css'

const Header = () => {
	return (
		<div>
			<h1 className={headerStyles.title}>Maxwell Young</h1>
			<p className={headerStyles.description}>Front-end Developer | Musician</p>
		</div>
	)
}

export default Header
