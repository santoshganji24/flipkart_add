import React from 'react'
import { useParams } from 'react-router-dom'
import { datahere } from '../data'
import Header from './Header'

export default function SingleProduct() {
    const { id } = useParams()

    const singleElement = datahere.find((item) => item.id == id)
    console.log(singleElement)



    return (
        <>
            <Header />
            <div className='singlproduct'>
                <li className='productCard'>
                    <img className='cardimage' src={singleElement.img} alt="ima" />
                    <div className='productdetails'>
                        <div className='brand'>{singleElement.brand}</div>
                        <h2>{singleElement.model} </h2>
                        <div className='desc'>{singleElement.description}</div>
                        <div className='newprice'>${singleElement.price} <span style={{ textDecoration: "line-through", color: 'darkgray' }}>${singleElement.oldPrice} </span></div>
                    </div>
                </li>
            </div>

        </>
    )
}
