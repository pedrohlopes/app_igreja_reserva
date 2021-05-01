import React, {useContext} from 'react'
import MovieContext from "../contexts/MovieContext"

import './styles/Seat.css'

const Seat = (props) => {
    const { config } = useContext(MovieContext)
    const context = useContext(MovieContext)

    const seatNumber = props.seatno

    const init_color = config.ocupados.includes(seatNumber) ? "seat-red" : (config.bloqueados.includes(seatNumber) ? "seat-grey":"seat-green")
    
    const seatStatus = init_color

    const seatClickHandler = (event, seatNumber) => {
        event.stopPropagation()
        const seatColor = document.querySelector(`.seat-${seatNumber}`).classList
        seatColor.remove("seat-black")
        if (config.ocupados.includes(seatNumber)) {
            
        }
        else if (config.seatNumbers.includes(seatNumber)) {
            const newMovieSeats = config.seatNumbers.filter((seat   ) => {
                return seat !== seatNumber
            })
            seatColor.remove("seat-black")
            seatColor.remove("seat-grey")
            seatColor.add("seat-green")
            context.changeState({...config, seatNumbers: newMovieSeats, totalSelected: config.totalSelected-1 })
        } else {
            seatColor.remove("seat-green")
            seatColor.add("seat-black")
            context.changeState({...config, seatNumbers: [...config.seatNumbers, seatNumber], totalSelected: config.totalSelected+1 })
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