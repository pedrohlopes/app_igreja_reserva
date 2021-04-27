import React from "react"
import SeatDummy from './SeatDummy'

const SeatAvailability = () => {
	return (
		
		<div className="row2">
			<div className="row"><br></br></div>
			Livre: <SeatDummy seatColor="seat-green" /> &nbsp; Bloqueado (distanciamento): <SeatDummy seatColor="seat-grey" /> &nbsp; Ocupado : <SeatDummy seatColor="seat-red" /> &nbsp; Selecionado : <SeatDummy seatColor="seat-black" />
			<div className="row"><br></br></div>
		</div>
	)
}

export default SeatAvailability
