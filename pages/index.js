import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Maxwell Young</title>
				meta
			</Head>
			<div className="center">
				<Image
					src="/images/profile.jpg"
					alt="Picture of the author"
					width={300}
					height={500}
					layout="intrinsic"
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
