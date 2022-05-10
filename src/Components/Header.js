import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function Header() {

    const navigate = useNavigate()

    const [formSubmit, setFormSubmit] = useState('')

    function handleChange(e) {
        setFormSubmit(e.target.value)
    }

    function prevent(e) {
        e.preventDefault();
        // navigate(`/${formSubmit}`)
        navigate(`/search?name=${formSubmit}`)
        console.log("submitted and navigate to /", formSubmit)
    }

    return (
        <>
            <div className='header'>
                <Link to="/"><img src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png' alt='header-img' /></Link>
                <form onSubmit={prevent}>
                    <input placeholder='Search phone brand' onChange={handleChange} />
                    <button type='submit' ><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
                <div className='login'><Link to='/login'>Login</Link></div>
            </div>
        </>
    )
}
