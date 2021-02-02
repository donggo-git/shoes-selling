import React from 'react'
import './App.css'
import './header.css'
import { BsSearch } from 'react-icons/bs';
function Header() {

    return (
        <div className='header'>
            <nav>
                <ul>
                    <a href='#'><li>New Releases</li></a>
                    <a href='#'><li>Men</li></a>
                    <a href='#'><li>Women</li></a>
                    <a href='#'><li>Kids</li></a>
                    <a href='#'><li>Customize</li></a>
                    <a href='#'><li>Sale</li></a>
                </ul>
                <div className='search-input'>
                    <BsSearch />
                    <input type='text' placeholder='Search' />

                </div>
            </nav>
            <header>
                <div className='next-btn'></div>
                <div className='previous-btn'></div>
                <div className='headerSlide-list'></div>
            </header>
        </div>
    )
}
export default Header