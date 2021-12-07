import React,{useState, useContext} from 'react';
import {GlobalContext} from '../context/WeatherContext'
import {useNavigate} from 'react-router-dom'

const Form = () =>{
    const navigate = useNavigate()
const {handleClick} = useContext(GlobalContext)
    const [input,setInput] = useState('');

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        handleClick(input)
        setInput('')
        navigate('/displaycountry')
    }

    return(
        <form>
            <input type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} />

            <button onClick={handleFormSubmit}>Search</button>
        </form>
    )
}

export default Form