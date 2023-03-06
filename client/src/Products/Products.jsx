import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios"
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const res = await axios.get("http://localhost:8800/produkti");
                setProducts(res.data);
            } catch(err) {
                console.log(err)
            }
        }
        fetchAllProducts();
    }, [])
  return (
    <div className='container'>
        <b className='text-center d-flex justify-content-center fs-1 mt-3 mb-5'>Артикули</b>
        <div className="row mb-3">
            <div className="col-sm-1">
                <button className="btn-primary btn">
                    <Link className='text-white text-decoration-none' to="/add">
                        Добави
                    </Link>
                </button>
            </div>
            <div class="col-sm-11">
                <div class="input-group">
                    <input type="text" id="search" class="form-control" placeholder="Потърси..."/>
                </div>
            </div>
        </div>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Име</th>
                    <th>Фирма</th>
                    <th>Локация</th>
                    <th>Лице</th>
                    <th>Дата на производство</th>
                    <th>Брой</th>
                    <th>Стойност</th>
                    <th>Общо</th>
                    <th>Време на последен запис</th>
                    <th>Действия</th>

                </tr>
            </thead>
            <tbody>
                {products.map(product=>(
                    <tr key={product.ID}>
                        <th>#{product.ID}</th>
                        <th>{product.ime}</th>
                        <th>{product.firma}</th>
                        <th>{product.lokaciq}</th>
                        <th>{product.lice}</th>
                        <th>{product.date}</th>
                        <th>{product.broi} бр.</th>
                        <th>{product.stoinost} лв.</th>
                        <th>{product.obshto} лв.</th>
                        <th>{product.datetime}</th>
                        <th>бутони</th>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Products