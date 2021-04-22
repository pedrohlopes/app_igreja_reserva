import React from "react"
import SeatDummy from './SeatDummy'

const SeatAvailability = () => {
	return (
		<div className="row2">
			Vazio : <SeatDummy seatColor="seat-grey" /> Ocupado : <SeatDummy seatColor="seat-red" /> Selecionado : <SeatDummy seatColor="seat-black" />
		</div>
	)
}

export default SeatAvailability
