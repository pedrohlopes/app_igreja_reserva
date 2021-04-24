import React, { useContext } from "react"
import MovieContext from "../contexts/MovieContext"
import "./styles/Seat.css"



const Header = () => {

	const config = {
		opts: ["Cancelar Reserva"]
	}

	const GenerateOptions = () => {
		const configObject = config.opts
		return configObject.map((movie) => {
			return <option value={movie}>{movie}</option>
		})
	}

	const movieSwitchHandler = (e) => {
		console.log(e.target.value)
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
