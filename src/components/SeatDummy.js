import React, {useContext} from 'react'
import MovieContext from "../contexts/MovieContext"

import './styles/SeatDummy.css'

const SeatDummy = (props) => {
    const { config } = useContext(MovieContext)
    const context = useContext(MovieContext)

    const seatNumber = props.seatno
    const init_color = config.ocupados.includes(seatNumber) ? "seat-red":"seat-grey"

    const seatStatus = props.seatColor ? props.seatColor : init_color


    return (
        <div className={`seatDummy seat-${seatNumber} ${seatStatus}`}/>
    )
}

export default SeatDummy