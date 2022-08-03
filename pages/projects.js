import React from 'react'
import Image from 'next/image'
import maplearnPic from '../public/images/maplearn1.png'
import imdbPic from '../public/images/imdb.png'
import favMoviesPic from '../public/images/favmovies.png'
import madlibPic from '../public/images/madlib.png'

const projects = () => {
	return (
		<div className="columns">
			<div className="column">
				<h3>
					<a href="https://maplearn.herokuapp.com/">Map Learn</a>
				</h3>
				<a href="https://maplearn.herokuapp.com/">
					<Image
						src={maplearnPic}
						alt="Picture of the Map Learn website"
						// width={800}
						// height={500}
						layout="responsive"
					/>
				</a>
			</div>
			<div className="column">
				<h3>
					<a href="https://maxwell-imdb.herokuapp.com/">iMDB Api</a>
				</h3>
				<a href="https://maxwell-imdb.herokuapp.com/">
					<Image
						src={imdbPic}
						alt="Picture of the iMDB website"
						layout="responsive"
					/>
				</a>
			</div>
			<div className="column">
				<h3>
					<a href="https://maxwells-favourite-movies.herokuapp.com/">
						Favourite Movies
					</a>
				</h3>
				<a href="https://maxwells-favourite-movies.herokuapp.com/">
					<Image
						src={favMoviesPic}
						alt="Picture of the favourite movies website"
						layout="responsive"
					/>
				</a>
			</div>
			<div className="column">
				<h3>
					<a href="https://friday-madlib.herokuapp.com/">Mad Libs</a>
				</h3>
				<a href="https://friday-madlib.herokuapp.com/">
					<Image
						src={madlibPic}
						alt="Picture of Madlib website"
						layout="responsive"
					/>
				</a>
			</div>
		</div>
	)
}

export default projects
