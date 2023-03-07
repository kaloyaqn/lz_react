import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const Add = () => {
    const [product, setProduct] = useState({
        ime:"",
        firma:"",
        lice:"",
        broi: null,
        cena: null,
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setProduct(prev=>({...prev, [e.target.name]: e.target.value}));
    }

    const handleClick = async e => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:8800/produkti", product);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    }

    console.log(product)
  return (
    <div className='container d-flex justify-content-center align-items-center vh-100 flex-column'>
        <h1>Добавяне на нов артикул</h1>
        <div className="form">
            <div className="mb-1">
                <label>Име</label>
                <input className='form-control'onChange={handleChange} type="text" placeholder='Име на артикул' name='ime' required/>
            </div>
            <div className="mb-1">
                <label>Фирма</label>
                <input className='form-control'onChange={handleChange} type="text" placeholder='Фирма на артикул' name='firma'/>
            </div>
            <div className="mb-1">
                <label>Лице</label>
                <input className='form-control'onChange={handleChange} type="text" placeholder='Лице на артикул' name='lice'/>
            </div>
            <div className="mb-1">
                <label>Брой</label>
                <input className='form-control'onChange={handleChange} type="number" placeholder='Брой на артикул' name='broi' required/>
            </div>
            <div className="mb-1">
                <label>Цена</label>
                <input className='form-control'onChange={handleChange} type="number" placeholder='Цена на артикул' name='cena' required/>
            </div>
        </div>

        <button className="btn" onClick={handleClick}>Добави</button>
    </div>
  )
}

export default Add

//https://www.youtube.com/watch?v=fPuLnzSjPLE&t=1283s