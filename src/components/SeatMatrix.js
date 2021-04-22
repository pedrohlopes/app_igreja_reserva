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
					{GenerateSeats([93, 94, 95, 96])}
					<div className="row"> <br/></div>
					<div className="row"><br/> </div>
					<div className="row"><br /> </div>
					<div className="row"><br /> </div>
					<div className="row"><br /> </div>
					{GenerateSeats([97,98,99,100])}
				</div>
				<div className="movie-column-4">
					{GenerateSeats([97,98,99,100].map((item)=> item+4))}
					{GenerateSeats([101,102,103,104,105].map((item)=> item+4))}
					{GenerateSeats([106,107,108,109,110,111].map((item)=> item+4))}
					{GenerateSeats([112,113,114,115,116,117].map((item)=> item+4))}
					{GenerateSeats([118,119,120,121].map((item)=> item+4))}
					{GenerateSeats([122,123,124,125,126,127].map((item)=> item+4))}
					{GenerateSeats([128,129,130,131].map((item)=> item+4))}
					{GenerateSeats([132, 133, 134, 135, 136, 137].map((item)=> item+4))}
					{GenerateSeats([138,139,140,141,142].map((item)=> item+4))}
				</div>
			</div>
		</div>
	)
}

export default SeatMatrix
