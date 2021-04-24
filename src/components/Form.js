import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form";
import MovieContext from "../contexts/MovieContext"
import "./styles/form.css"
type FormData = {
    nome: string;
    sobrenome: string;
};

function randomNumber() {
    var result = Math.floor(Math.random() * 1000000000);
    return result;
}

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

const Form = () => {
    const { config } = useContext(MovieContext)
    const context = useContext(MovieContext)
    let new_object = []
    const [nome, setName] = useState('');
    const [sobrenome, setName2] = useState('');
    const [submitted, setSubmit] = useState(false);
    var d = new Date()
    let nova_reserva = {}
    const {
        formState
    } = useForm();
        
    const handleSubmit = (e) => {
        
        e.preventDefault();
        console.log(e)
        console.log(`Form submitted, ${nome} ${sobrenome}`);
        if (config.totalSelected>0 && nome && sobrenome) {
            nova_reserva = {
                Responsavel: nome + ' ' + sobrenome,
                Assentos: config.seatNumbers,
                Data: format_number(d.getDate()) + '/' + format_number(d.getMonth() + 1) + '/' + format_number(d.getFullYear()) + '-' + format_number(d.getHours()) + ':' + format_number(d.getMinutes()) + ':' + format_number(d.getSeconds()),
                numero: randomNumber()
            };
            new_object = {
                ...config,
                ocupados: [...config.ocupados.concat(config.seatNumbers)],
                seatNumbers: [],
                totalSelected: 0,
                totalOcupados: config.totalOcupados+config.totalSelected,
                reservas: [...config.reservas, nova_reserva]
            };
            context.changeState(new_object);
            console.log("enviando: " + JSON.stringify(new_object));
            postConfigFetch(new_object,config.url);
            console.log(new_object);
            setName('');
            setName2('');
            setSubmit(true);
        }
        

    }

    return(
        <form onSubmit = {handleSubmit}>

            <ul className="form-style-1">
                <li><input type="text" name="nome" className="field-divided" placeholder="Nome"  onChange = {(e) => setName(e.target.value)} value = {nome} required/>
                    <input type="text" name="sobrenome" className="field-divided" placeholder="Sobrenome" onChange = {(e) => setName2(e.target.value)} value = {sobrenome} required/></li>
                <li>
                    <input type="submit" value="Reservar!" className="submitButton" />
                </li>
                
                {submitted && (
                <div className="success">
                    <li>Reserva realizada com sucesso! Bom culto!</li>
                </div>
                )}
            </ul>
             
        </form>
    );
    
}
export default Form;