import React, {useState, useEffect} from "react"
import "./App.css"

import MovieSelector from "./components/MovieSelector"
import SeatAvailability from "./components/SeatAvailability"
import SeatMatrix from "./components/SeatMatrix"
import PriceCalculator from "./components/PriceCalculator"
import IgrejaLogo from './components/IgrejaLogo'
import Form from './components/Form.js'
import Table from './components/Table.js'

import MovieContext from './contexts/MovieContext'


let start_config = require("./data/config.json")



// console.log(pre_config.ocupados)

const App = () => {
	const [config, EditConfig] = useState({
		url: 'https://jsonbin.org/pedrohlopes/configAPI/Quinta',
		dias: ["Quinta 22/04", "Domingo 25/04", "Terça 27/04"],
		diaAtual: "Quinta 22/04",
		totalSeats: 0,
		ocupados: [],
		seatNumbers:[]
	});
	useEffect(() => {
		getConfigFetch();
	}, []);

	const getConfigFetch = async () => {
		const response = await fetch(config.url);
		const jsonData = await response.json();
		console.log(jsonData)
		EditConfig(jsonData);
	};

	// const [config, EditConfig] = useState({
	// 	movieNames: {
	// 		"Bloodshot": 10,
	// 		"The girl on the Train": 8,
	// 		"The invisible Man": 11,
	// 		"Onward": 12,
	// 		"My Spy": 9
	// 	},
	// 	moviePrice: 10,
	// 	totalSeats: 0,
	// 	ocupados: preConfig.ocupados? preConfig.ocupados : start_config.ocupados,
	// 	reservas: preConfig.reservas? preConfig.reservas : start_config.reservas,
	// 	seatNumbers: []
	// })

	return (
		<div className="main container">
			<MovieContext.Provider value={{ config, changeState: EditConfig }}>
				<IgrejaLogo/>
				<MovieSelector />
				<SeatMatrix />
				<SeatAvailability />
				<PriceCalculator />
				<Form />
				<Table />
			</MovieContext.Provider>
		</div>
	)
}

export default App
