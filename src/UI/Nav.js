import React from 'react'
import './Nav.css'
import { IoCartOutline } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import SearchingProduct from '../Searching-Product/SearchingProduct'

function Nav({ favoriteLength, cartLength, changeDetailProduct }) {
    return (
        <nav>
            <ul>
                <img src="https://images.template.net/wp-content/uploads/2016/08/08090604/Soccer-Shoe-Logo.jpg" height="50px" />
                <NavLink to='/shoes-selling/' className='nav__homePage'>Home</NavLink>
                <NavLink to="/Favorite"><li>Favorite ({favoriteLength})</li></NavLink>

            </ul>

            <SearchingProduct changeDetailProduct={changeDetailProduct} />

            <NavLink to='/cart'>
                <div className='nav__cart '>
                    <IoCartOutline className='cart_icon' />
                    <div className='nav__cart__amount'>{cartLength}</div>
                </div>
            </NavLink>
        </nav>
    )
}

export default Nav