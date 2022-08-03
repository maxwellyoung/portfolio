import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../public/images/profile.jpg'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Maxwell Young</title>
				meta
			</Head>
			<div className="center">
				<Image
					src={profilePic}
					alt="Picture of the author"
					layout="responsive"
					className="profile"
				/>
				<h2>
					<i>Hello</i>. I&apos;m a full-stack web developer and a musician.
					I&apos;m passionate about modern technology and making things simply
					with intention and principle.
				</h2>
			</div>
		</div>
	)
}
