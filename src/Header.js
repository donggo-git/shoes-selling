import React, { useState } from 'react'
import './App.css'
import './header.css'
import { BsSearch } from 'react-icons/bs';
import { GrFormPrevious } from 'react-icons/gr'
import { GrFormNext } from 'react-icons/gr'

function Header() {
    const [styles, setStyles] = useState(0)
    let tranSlate = { transform: `translateX(${-styles * 80}vw)` }
    let slideImageLink = ['https://images.puma.com/image/upload/q_auto,f_auto,w_1440/regional/%7Eregional%7EPNA%7Eothers%7EKOP%7EHome%7ESS21%7ERS+Curve+%7E21_SS_RS+CURVE+ADDITIONAL+IMAGES_SITE_1440x500_0000_1.jpg/fmt/jpg/fmt/png',
        'https://www.converse.com/on/demandware.static/-/Library-Sites-SharedLibrary/default/dw99b0143b/firstspirit/media/homepage_1/2021_spring/01_1/D-Converse-SP21-1-2021-Elevation-P1-3.jpg',
        'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/xcat-ss20-nav-clp-mens-sneakers-tc-large-d_tcm221-509820.jpg']
    const nextSlice = () => {
        console.log('hello');
        setStyles(styles + 1)
        console.log(styles)
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
                <div className='previous-btn slide-btn' onClick={() => previousSlice()}><GrFormPrevious className='slice-icon' /></div>
                <div className='next-btn slide-btn' onClick={() => nextSlice()}><GrFormNext className='slice-icon' /></div>
                <div className='headerSlide-container'>
                    <div className='headerSlide-list' style={tranSlate}>
                        <img className='slide-item' src='https://images.puma.com/image/upload/q_auto,f_auto,w_1440/regional/%7Eregional%7EPNA%7Eothers%7EKOP%7EHome%7ESS21%7ERS+Curve+%7E21_SS_RS+CURVE+ADDITIONAL+IMAGES_SITE_1440x500_0000_1.jpg/fmt/jpg/fmt/png' />
                        <img className='slide-item' src='https://www.converse.com/on/demandware.static/-/Library-Sites-SharedLibrary/default/dwb72602b2/firstspirit/media/homepage_1/2021_spring/01_1/D-Converse-SP21-1-21-HP-P3.jpg' />
                        <img className='slide-item' />

                    </div>
                </div>
            </header>
        </div>
    )
}
export default Header