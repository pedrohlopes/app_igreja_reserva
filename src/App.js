import React, {useState, useEffect} from "react"
import "./App.css"

import MovieSelector from "./components/MovieSelector"
import SeatAvailability from "./components/SeatAvailability"
import SeatMatrix from "./components/SeatMatrix"
import PriceCalculator from "./components/PriceCalculator"
import IgrejaLogo from './components/IgrejaLogo'
import Form from './components/Form'
import FormAdmin from './components/FormAdmin'
import ActionSelector from './components/ActionSelector'
import Table from './components/Table'

import MovieContext from './contexts/MovieContext'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}





// console.log(pre_config.ocupados)

function Home() {
	const [config, EditConfig] = useState({
		url: 'https://jsonbin.org/pedrohlopes/configAPI/Terça',
		dias: ["Quinta 22/04", "Domingo 25/04", "Terça 27/04"],
		diaAtual: "Terça 27/04",
		totalSeats: 142,
		totalSelected: 0,
		totalOcupados:0,
		ocupados: [],
		bloqueados: [],
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

function Admin() {
	const [config, EditConfig] = useState({
		url: 'https://jsonbin.org/pedrohlopes/configAPI/Terça',
		dias: ["Quinta 22/04", "Domingo 25/04", "Terça 27/04"],
		diaAtual: "Terça 27/04",
		totalSeats: 142,
		totalSelected: 0,
		totalOcupados:0,
		ocupados: [],
		bloqueados: [],
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

	return (
		<div className="main container">
			<MovieContext.Provider value={{ config, changeState: EditConfig }}>
				<ActionSelector />
				<MovieSelector />
				<FormAdmin />
			</MovieContext.Provider>
		</div>
	)
}

function Users() {
  return <h2>Users</h2>;
}

export default App
