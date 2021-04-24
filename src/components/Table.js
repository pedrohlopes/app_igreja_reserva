import React, { useContext , useState }  from 'react'
import MovieContext from "../contexts/MovieContext"
import "./styles/form.css"


const Table = () => {
    const { config } = useContext(MovieContext)
    return(

        <table className="table">
        <thead>
            <tr><th>Responsável</th>
                <th>Bancos reservados</th>
                <th>Data da reserva</th>
                <th>Número da reserva</th></tr>
        </thead>
        <tbody>
            {config.reservas ? config.reservas.map((item =>
                <tr ><td>{item.Responsavel}</td><td>{String(item.Assentos)}</td><td>{item.Data}</td><td>{item.numero}</td></tr>
            )) : '' }    
        </tbody>
        </table>
    );
    
}
export default Table;