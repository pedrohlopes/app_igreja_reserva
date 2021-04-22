import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form";
import MovieContext from "../contexts/MovieContext"
import "./styles/form.css"
type FormData = {
    nome: string;
    sobrenome: string;
};



const postConfigFetch = async (data,url) => {
        console.log("teste" + data)
		const response = await fetch(url,{method: 'POST', headers: {
            'Content-Type': 'application/json',
            'Authorization': 'token 00f56408-d336-4f4c-8a50-99f17637905d'
    }, body: JSON.stringify(data)} );
		const jsonData = await response.json();
    
	};



const Form = () => {
    const { config } = useContext(MovieContext)
    const context = useContext(MovieContext)
    let new_object = []
    const [nome, setName] = useState('');
    const [sobrenome, setName2] = useState('');
    var d = new Date()
    let nova_reserva = {}
    const {
        formState
    } = useForm();
        
    const handleSubmit = (e) => {
        
        e.preventDefault();
        console.log(e)
        console.log(`Form submitted, ${nome} ${sobrenome}`);
        if (config.totalSeats>0 && nome && sobrenome) {
            nova_reserva = {
                Responsavel: nome + ' ' + sobrenome,
                Assentos: config.seatNumbers,
                Data: String(d.getDate()) + '/' + String(d.getMonth()) + '/' + String(d.getFullYear()) + '-' + String(d.getHours()) + ':' + String(d.getMinutes()) + ':' + String(d.getSeconds())
            };
            new_object = {
                ...config,
                ocupados: [...config.ocupados.concat(config.seatNumbers)],
                seatNumbers: [],
                totalSeats: 0,
                reservas: [...config.reservas, nova_reserva]
            };
            context.changeState(new_object);
            console.log("enviando: " + JSON.stringify(new_object));
            postConfigFetch(new_object,config.url);
            console.log(new_object);
        }
        

    }

    return(
        <form onSubmit = {handleSubmit}>

            <ul className="form-style-1">
                <li><input type="text" name="nome" className="field-divided" placeholder="Nome"  onChange = {(e) => setName(e.target.value)} value = {nome}/>
                    <input type="text" name="sobrenome" className="field-divided" placeholder="Sobrenome" onChange = {(e) => setName2(e.target.value)} value = {sobrenome}/></li>
                <li>
                    <input type="submit" value="Reservar!" className="submitButton" />
                </li>
            </ul>
             {formState.isSubmitted && (
                <div className="success">Form submitted successfully</div>
                )}
        </form>
    );
    
}
export default Form;