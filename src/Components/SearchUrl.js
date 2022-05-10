import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { datahere } from '../data'
import Header from './Header'
import { useNavigate } from 'react-router-dom'

export default function FromUrl() {
    const [searchParam] = useSearchParams()
    const SearchName = searchParam.get('name') || ' '

    const navigate = useNavigate()

    const SearchElement = datahere.filter((item) => item.brand === SearchName).map((eachitem) =>
    (<div key={eachitem.id}> <ul className='allproducts' onClick={() => navigate(`/${eachitem.id}`)}>
        <li className='productCard'>
            <img className='cardimage' src={eachitem.img} alt="ima" />
            <div className='productdetails'>
                <div className='brand'>{eachitem.brand}</div>
                <h2>{eachitem.model} </h2>
                <div className='desc'>{eachitem.description}</div>
                <div className='newprice'>${eachitem.price} <span style={{ textDecoration: "line-through", color: 'darkgray' }}>${eachitem.oldPrice} </span></div>
            </div>
        </li>
    </ul>
    </div>

    )
    )
    // console.log(SearchElement)


    return (
        <>
            <Header />
            {SearchElement}
        </>
    )
}
