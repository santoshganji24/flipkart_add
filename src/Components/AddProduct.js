import React, { useState } from 'react'
import { datahere } from '../data'
// import Header from './Header'

export default function AddProduct({ setFromProduct }) {

    const [todos, setTodos] = useState(datahere)
    setFromProduct(todos)

    console.log("todos", todos)

    const [formData, setFormData] = useState({
        brand: "",
        model: "",
        description: "",
        price: "",
        oldPrice: "",
        img: "",
    })
    // console.log("formdata", formData)


    function handleChange(event) {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        setFormData(formData)
        setTodos([
            ...todos,
            {
                id: todos.length + 1,
                brand: formData.brand,
                description: formData.description,
                price: formData.price,
                oldPrice: formData.oldPrice,
                img: formData.img,
            }
        ])

        // if (formData !== "") {
        //     setTodos([
        //         ...todos,
        //         {
        //             id: todos.length + 1,
        //             brand: formData.brand,
        //             description: formData.description,
        //             price: formData.price,
        //             oldPrice: formData.oldPrice,
        //             img: formData.img,
        //         }
        //     ])
        // }
        setFromProduct([...todos])
    }

    return (
        <>

            <div className='form-container'>
                <form className='addproductform' onSubmit={handleSubmit}>
                    <div>
                        <input
                            id='brandhere'
                            name='brand'
                            onChange={handleChange}
                            type="text"
                            placeholder='enter brand ' />
                    </div>
                    <div>
                        <input
                            id='modelhere'
                            name='model'
                            onChange={handleChange}
                            type="text"
                            placeholder='enter model' />
                    </div>
                    <div>
                        <input
                            id='deschere'
                            name='description'
                            onChange={handleChange}
                            type="text"
                            placeholder='enter description' />
                    </div>
                    <div>
                        <input
                            id='priccehere'
                            name='price'
                            onChange={handleChange}
                            type="text"
                            placeholder='enter discounted price' />
                    </div>
                    <div>
                        <input
                            id='oldpriccehere'
                            name='oldprice'
                            onChange={handleChange}
                            type="text"
                            placeholder='enter actual price' />
                    </div>
                    <div>
                        <input
                            id='imagehere'
                            name='img'
                            onChange={handleChange}
                            type="text"
                            placeholder='enter image url' />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </>
    )
}
