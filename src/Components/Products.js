import React, { useState } from 'react'
import { datahere } from '../data'
import { useNavigate } from 'react-router-dom'
import Modal from './Modal'

export default function Products() {
    const navigate = useNavigate()

    const [fromproduct, setFromProduct] = useState(datahere)
    console.log("fromproduct", fromproduct)

    const Products = fromproduct.map((item) => {
        return <li className='productCard' onClick={() => navigate(`/${item.id}`)}>
            <img className='cardimage' src={item.img} alt="ima" />
            <div className='productdetails'>
                <div className='brand'>{item.brand}</div>
                <h2>{item.model} </h2>
                <div className='desc'>{item.description}</div>
                <div className='newprice'>${item.price} <span style={{ textDecoration: "line-through", color: 'darkgray' }}>${item.oldPrice} </span></div>
            </div>
        </li>
    })

    // ==========================
    const [modalOpen, setModalOpen] = useState(false)


    return (
        <>
            <div className='addproduct'>
                <button onClick={() => setModalOpen(true)}>Add Product</button>
            </div>
            {modalOpen && <Modal modalClose={setModalOpen} setFromProduct={setFromProduct} />}
            <ul className='allproducts'>
                {Products}
            </ul>
        </>
    )
}
