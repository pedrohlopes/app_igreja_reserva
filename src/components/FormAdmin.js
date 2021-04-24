import React, { useContext, useState } from 'react'
import { set, useForm } from "react-hook-form";
import MovieContext from "../contexts/MovieContext"
import "./styles/form.css"
type FormData = {
    nome: string;
    sobrenome: string;
};
const base_url = 'https://jsonbin.org/pedrohlopes/configAPI/'
const getConfigFetch = async (url,movieData) => {
	const response = await fetch(url);
	const jsonData = await response.json();
	console.log(jsonData)
	movieData.changeState(jsonData);
};

const postConfigFetch = async (data,url) => {
        console.log("teste" + data)
		const response = await fetch(url,{method: 'POST', headers: {
            'Content-Type': 'application/json',
            'Authorization': 'token 00f56408-d336-4f4c-8a50-99f17637905d'
    }, body: JSON.stringify(data)} );
		const jsonData = await response.json();
    
	};

const format_number = (number) => {
    let out = '';
    out = String(number.toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }));
    console.log(out);
    return out;
}
function checkNumber(number){
    return 
}

const FormAdmin = () => {
    const { config } = useContext(MovieContext)
    const context = useContext(MovieContext)
    let new_object = []
    const [numero, setNumero] = useState('');
    const [submitted, setSubmit] = useState(false);
    var d = new Date()
    let nova_reserva = {}
    const {
        formState
    } = useForm();
    const handleSubmit = (e) => {
        let reservas = config.reservas
        let ocupados = config.ocupados
        e.preventDefault();
        console.log(numero);
        const index = reservas.findIndex((entry) => entry.numero == numero);
        const reserva_cancelada = reservas[index]
        const cadeiras_canceladas = reserva_cancelada.Assentos
        const new_reservas = reservas.filter(function(item) {
            return item !== reserva_cancelada
        })
        const new_ocupados = ocupados.filter((el) => !cadeiras_canceladas.includes(el));
        console.log(config)
        const new_object = {
            ...config,
            ocupados: new_ocupados,
            reservas: new_reservas,
        }
        context.changeState(new_object)
        console.log("enviando: " + JSON.stringify(new_object));
        postConfigFetch(new_object,config.url);
        console.log(new_object);
        setNumero('');
        setSubmit(true);
    }

    return (
        <div className="container" style={{ textAlign: "center" }}>

		
            <form onSubmit = {handleSubmit}>

                <ul className="form-style-1">
                    <li>Digite o número da reserva a ser liberada:</li>
                    <li>
                        <input type="text" name="nome" className="field-divided" placeholder="N° da Reserva" onChange={(e) => setNumero(e.target.value)} value={numero} />
                    </li>
                    <li>
                        <input type="submit" value="Cancelar Reserva" className="submitButton" />
                    </li>
                    
                    {submitted && (
                    <div className="success">
                        <li>Reserva cancelada!</li>
                    </div>
                    )}
                </ul>
             
            </form>
        </div>
    );
    
}
export default FormAdmin;