import React, {useContext} from "react"
import MovieContext from "../contexts/MovieContext"

import './styles/Help.css'


const PriceCalculator = () => {
	const {config} = useContext(MovieContext)
	return (
		<div className="Help">
			<p>Total de Lugares: {config.totalSeats}. Livres: {config.totalSeats-config.totalOcupados}.</p>
			<p>Você selecionou {config.totalSelected} Lugares. Para selecionar um lugar, basta clicar (ou tocar) no lugar desejado.</p>
			<p>Digite o nome do responsável pela marcação:</p>
		</div>
	)
}

export default PriceCalculator
