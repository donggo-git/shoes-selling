import React, { useState } from 'react'
import './App.css'
import './header.css'
import { BsSearch } from 'react-icons/bs';
import { GrFormPrevious } from 'react-icons/gr'
import { GrFormNext } from 'react-icons/gr'

function Header() {
    const [styles, setStyles] = useState('')
    let styleBackground = { backgroundColor: 'rgba(255, 255, 255, 0.3)' }
    const nextSlice = () => {
        console.log('hello');

    }
    const previousSlice = () => {

    }
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
                    <BsSearch className='search-btn' />
                    <input type='text' placeholder='Search' />

                </div>
            </nav>
            <header>
                <div className='previous-btn slide-btn' onClick={() => previousSlice()}><GrFormNext className='slice-icon' /></div>
                <div className='next-btn slide-btn' onClick={() => nextSlice()}><GrFormPrevious className='slice-icon' /></div>
                <div className='headerSlide-list'>
                    <img src='https://images.puma.com/image/upload/q_auto,f_auto,w_1440/regional/%7Eregional%7EPNA%7Eothers%7EKOP%7EHome%7ESS21%7ERS+Curve+%7E21_SS_RS+CURVE+ADDITIONAL+IMAGES_SITE_1440x500_0000_1.jpg/fmt/jpg/fmt/png' width='100%' />
                    <img src='https://www.converse.com/on/demandware.static/-/Library-Sites-SharedLibrary/default/dw99b0143b/firstspirit/media/homepage_1/2021_spring/01_1/D-Converse-SP21-1-2021-Elevation-P1-3.jpg' width='100%' />
                    <img src='https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/xcat-ss20-nav-clp-mens-sneakers-tc-large-d_tcm221-509820.jpg' width='100%' />
                </div>
            </header>
        </div>
    )
}
export default Header