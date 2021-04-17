import React, { useContext , useState }  from 'react'
import MovieContext from "../contexts/MovieContext"
import "./styles/form.css"

const configUrl = "http://localhost:3001";

const postConfigFetch = async (data) => {
		const response = await fetch(configUrl,{method: 'POST', body: JSON.stringify(data)} );
		const jsonData = await response.json();
		console.log("enviei: " + jsonData)
	};

const Form = () => {
    const { config } = useContext(MovieContext)
    const context = useContext(MovieContext)
    let new_object = []
    const [nome, setName] = useState('');
    const [sobrenome, setName2] = useState('');
    var d = new Date()
    let nova_reserva = {}
    
    const handleSubmit = (e) => {
        
        e.preventDefault();
        console.log(e)
        console.log(`Form submitted, ${nome} ${sobrenome}`);
        if (config.totalSeats>0 && nome && sobrenome) {
            nova_reserva = {
                Responsavel: nome + ' ' + sobrenome,
                Assentos: config.seatNumbers,
                Data: String(d.getDate()) + '/' + String(d.getMonth()) + '/' + String(d.getFullYear()) + '-' + String(d.getHours()) + ':' + String(d.getMinutes()) + ':' + String(d.getSeconds())
            }
            new_object = {
                ...config,
                ocupados: [...config.ocupados.concat(config.seatNumbers)],
                seatNumbers: [],
                totalSeats: 0,
                reservas: [...config.reservas,nova_reserva]
            }
            context.changeState(new_object)
            postConfigFetch(new_object)
            console.log(new_object)
        }
        

    }

    return(
        <form onSubmit = {handleSubmit}>

            <ul className="form-style-1">
                <li><input type="text" name="field1" className="field-divided" placeholder="Nome"  onChange = {(e) => setName(e.target.value)} value = {nome}/>
                    <input type="text" name="field2" className="field-divided" placeholder="Sobrenome" onChange = {(e) => setName2(e.target.value)} value = {sobrenome}/></li>
                <li>
                    <input type="submit" value="Reservar!" className="submitButton" />
                </li>
            </ul>

        </form>
    );
    
}
export default Form;