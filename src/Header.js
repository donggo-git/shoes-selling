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
                        <div className='slide-item last-slide-item-clone' id='third-slide-item'>
                            <div className='third-item-slide-content'>
                                <h2 className='first-item-slide-title'>Coming soon: Nike Basket 4</h2>
                                <button>learn more</button>
                            </div>
                        </div>
                        <div className='slide-item' id='first-slide-item'>

                            <div className='first-item-slide-content'>
                                <h2 className='first-item-slide-title'>News Style from Puma</h2>
                                <p>New style,new energy</p>
                                <button>Check out</button>
                            </div>
                        </div>
                        <div className='slide-item' id='second-slide-item'>
                            <div className='second-item-slide-content'>
                                <h2>TREAT YOUR TRAINING</h2>
                                <p>Feel comfortable with this style for your training</p>
                                <button>Check out</button>
                            </div>
                        </div>
                        <div className='slide-item' id='third-slide-item'>
                            <div className='third-item-slide-content'>
                                <h2 className='first-item-slide-title'>Coming soon: Nike Basket 4</h2>
                                <button>learn more</button>
                            </div>
                        </div>
                        <div className='slide-item first-slide-item-clone' id='first-slide-item'>
                            <div className='first-item-slide-content'>
                                <h2 className='first-item-slide-title'>News Style from Puma</h2>
                                <p>New style,new energy</p>
                                <button>Check out</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div >
    )
}
export default Header