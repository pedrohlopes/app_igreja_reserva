import React, {useContext} from "react"
import MovieContext from "../contexts/MovieContext"

import './styles/Help.css'


const PriceCalculator = () => {
	const {config} = useContext(MovieContext)
	return (
		<div className= "Help">
			<p>Você selecionou {config.totalSeats} Lugares. Para selecionar um lugar, basta clicar (ou tocar) no lugar desejado.</p>
			<p>Digite o nome do responsável pela maracação:</p>
		</div>
	)
}

export default PriceCalculator
