import React from 'react'
import AddProduct from './AddProduct'

export default function Modal({ modalClose, setFromProduct }) {


    return (
        <div className='modal'>
            <div ><button className='cross' onClick={() => { modalClose(false) }}><i class="fa-solid fa-xmark"></i></button></div>
            <AddProduct setFromProduct={setFromProduct} />
        </div>
    )
}
