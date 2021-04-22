import React, { useContext } from "react"
import MovieContext from "../contexts/MovieContext"
import "./styles/Seat.css"

const getConfigFetch = async (url,movieData) => {
	const response = await fetch(url);
	const jsonData = await response.json();
	console.log(jsonData)
	movieData.changeState(jsonData);
};

const base_url = 'https://jsonbin.org/pedrohlopes/configAPI/'
const Header = () => {

	const { config } = useContext(MovieContext)
	const movieData = useContext(MovieContext)

	const GenerateOptions = () => {
		const configObject = config.dias
		return configObject.map((movie) => {
			return <option value={movie}>{movie}</option>
		})
	}

	const movieSwitchHandler = (e) => {
		console.log(e.target.value)
		let newDiaUrl = e.target.value
		config.seatNumbers.forEach(element => {
			const seatColor = document.querySelector(`.seat-${element}`).classList
			seatColor.remove("seat-black")
            seatColor.add("seat-grey")
		});
		movieData.changeState({ ...config, seatNumbers: [] })
		newDiaUrl = base_url + newDiaUrl.split(" ")[0]
		getConfigFetch(newDiaUrl, movieData);
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
