import React, { useContext } from "react"
import MovieContext from "../contexts/MovieContext"
import "./styles/Seat.css"

const Header = () => {

	const { config } = useContext(MovieContext)
	const movieData = useContext(MovieContext)

	const GenerateOptions = () => {
		const configObject = config.movieNames
		return Object.keys(configObject).map((movie, key) => {
			return <option value={movie} key={key}>{movie} - ${configObject[movie]}</option>
		})
	}

	const movieSwitchHandler = (e) => {
		const newMoviePrice = config.movieNames[e.target.value]
		movieData.changeState({...config, moviePrice: newMoviePrice})
	}

	return (
		<div className="container" style={{ textAlign: "center" }}>
			<select className="movie-selector" onChange={movieSwitchHandler}>
				{GenerateOptions()}
			</select>
		</div>
	)
}

export default Header
