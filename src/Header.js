import React, { useState } from 'react'
import './App.css'
import './header.css'
import { BsSearch } from 'react-icons/bs';
import { GrFormPrevious } from 'react-icons/gr'
import { GrFormNext } from 'react-icons/gr'

function Header() {
    const [styles, setStyles] = useState(1)
    const [transition, setTransition] = useState('all 0.6s')
    let tranSlate = {
        transform: `translateX(${-styles * 80}vw)`,
        transition: transition
    }
    let slideImageLink = ['https://images.puma.com/image/upload/q_auto,f_auto,w_1440/regional/%7Eregional%7EPNA%7Eothers%7EKOP%7EHome%7ESS21%7ERS+Curve+%7E21_SS_RS+CURVE+ADDITIONAL+IMAGES_SITE_1440x500_0000_1.jpg/fmt/jpg/fmt/png',
        'https://www.converse.com/on/demandware.static/-/Library-Sites-SharedLibrary/default/dw99b0143b/firstspirit/media/homepage_1/2021_spring/01_1/D-Converse-SP21-1-2021-Elevation-P1-3.jpg',
        'https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/xcat-ss20-nav-clp-mens-sneakers-tc-large-d_tcm221-509820.jpg']
    const nextSlice = () => {
        setStyles(styles + 1)
        setTransition('all 0.6s')
    }
    const previousSlice = () => {
        setStyles(styles - 1)
        setTransition('all 0.6s')
    }
    const TransitionSlide = () => {
        if (styles == 4) {
            setTransition('none')
            setStyles(1)
        }
        else if (styles == 0) {
            setTransition('none')
            setStyles(3)
        }
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
                    <div className='headerSlide-list' style={tranSlate} onTransitionEnd={TransitionSlide}>
                        <div className='slide-item last-slide-item-clone' id='third-slide-item'></div>
                        <div className='slide-item' id='first-slide-item'>
                            <div>
                                <h2>News Style from Puma</h2>
                            </div>
                        </div>
                        <div className='slide-item' id='second-slide-item'></div>
                        <div className='slide-item' id='third-slide-item'></div>
                        <div className='slide-item first-slide-item-clone' id='first-slide-item'>
                            <div>
                                <h2>News Style from Puma</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div >
    )
}
export default Header