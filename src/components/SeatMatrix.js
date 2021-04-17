import React from "react"
import Seat from './Seat'
import './styles/Seat.css'

const GenerateSeats = (seatNumbers) => {
	return (
		<div className="row">
			{
				seatNumbers.map((seatNumber) => {
					return <Seat seatno={seatNumber} key={seatNumber}/>
				})
			}
		</div>
	)
}

const SeatMatrix = () => {
	return (
		<div className="movie-complex">

			<div className="gh-logo">
            	<a href="https://www.youtube.com/channel/UCc4B39usFjIrI4MqyTvl_fw" target="_blank">
                	<img src="https://i.ibb.co/VYTBxp9/imbt-logo-black.png" alt="imbt-logo-black" border="0" width="80"></img>
            	</a>
        	</div>


			<p>Altar</p>
			<div className="container row movie-layout">
				<div className="movie-column-1">
					{GenerateSeats([1,2,3,4])}
					{GenerateSeats([5,6,7,8])}
					{GenerateSeats([9,10,11,12])}
					{GenerateSeats([13,14,15,16])}
					{GenerateSeats([17,18,19,20])}
					{GenerateSeats([21,22,23,24])}
					{GenerateSeats([25,26,27,28])}
					{GenerateSeats([29,30,31,32])}
					{GenerateSeats([33,34,35,36])}
				</div>
				<div className="movie-column-2">
					{GenerateSeats([37, 38, 39, 40])}
					{GenerateSeats([41, 42, 43, 44])}
					{GenerateSeats([45, 46, 47, 48])}
					{GenerateSeats([49, 50, 51, 52])}
					{GenerateSeats([52, 54, 55, 56])}
					{GenerateSeats([57, 58, 59, 60])}
					{GenerateSeats([61, 62, 63, 64])}
					{GenerateSeats([65,66,67,68])}
				</div>
				<div className="movie-column-3">
					{GenerateSeats([69,70,71,72])}
					{GenerateSeats([73,74,75,76])}
					{GenerateSeats([77,78,79,80])}
					{GenerateSeats([81,82,83,84])}
					{GenerateSeats([85,86,87,88])}
					{GenerateSeats([89,90,91,92])}
					{GenerateSeats([93,94,95,96])}
				</div>
				<div className="movie-column-4">
					{GenerateSeats([97,98,99,100])}
					{GenerateSeats([101,102,103,104])}
					{GenerateSeats([105,106,107,108])}
					{GenerateSeats([109,110,111,112])}
					{GenerateSeats([113,114,115,116])}
					{GenerateSeats([117,118,119,120])}
					{GenerateSeats([121,122,123,124])}
					{GenerateSeats([125,126,127,128])}
				</div>
			</div>
		</div>
	)
}

export default SeatMatrix
