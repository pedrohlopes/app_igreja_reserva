import React from "react"
import SeatDummy from './SeatDummy'

const SeatAvailability = () => {
	return (
		
		<div className="row2">
			<div className="row"><br></br></div>
			Vazio : <SeatDummy seatColor="seat-grey" /> Ocupado : <SeatDummy seatColor="seat-red" /> Selecionado : <SeatDummy seatColor="seat-black" />
			<div className="row"><br></br></div>
		</div>
	)
}

export default SeatAvailability
