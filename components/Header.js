import headerStyles from '../styles/Header.module.css'

const Header = () => {
	return (
		<div>
			{/* <h1 className={headerStyles.title}>Maxwell Young</h1> */}
			<video className="mov" preload autoPlay="autoplay" loop muted>
				<source src="/images/flaming-MY.mp4" type="video/mp4" />
			</video>
			<p className={headerStyles.description}>Front-end Developer | Musician</p>
		</div>
	)
}

export default Header
