import React, {useContext} from 'react'
import MovieContext from "../contexts/MovieContext"

import './styles/Seat.css'

const Seat = (props) => {
    const { config } = useContext(MovieContext)
    const context = useContext(MovieContext)

    const seatNumber = props.seatno
    const init_color = config.ocupados.includes(seatNumber) ? "seat-red":"seat-grey"

    const seatStatus = props.seatColor ? props.seatColor : init_color

    const seatClickHandler = (event, seatNumber) => {
        event.stopPropagation()
        const seatColor = document.querySelector(`.seat-${seatNumber}`).classList
        if (config.ocupados.includes(seatNumber)) {
            
        }

        else if (config.seatNumbers.includes(seatNumber)) {
            const newMovieSeats = config.seatNumbers.filter((seat) => {
                return seat !== seatNumber
            })
            seatColor.remove("seat-black")
            seatColor.add("seat-grey")
            context.changeState({...config, seatNumbers: newMovieSeats, totalSeats: config.totalSeats-1 })
        } else {
            seatColor.remove("seat-grey")
            seatColor.add("seat-black")
            context.changeState({...config, seatNumbers: [...config.seatNumbers, seatNumber], totalSeats: config.totalSeats+1 })
        }
    }

    return (
        <div className="col-2 col-md-2">
            <div className={`seat seat-${seatNumber} ${seatStatus}`}
                onClick={(e) => seatClickHandler(e, props.seatno)}>{seatNumber}</div>
        </div>
    )
}

export default Seat