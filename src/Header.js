import React from 'react'

function Header() {

    return (
        <div className='header'>
            <nav>
                <ul>
                    <a href='#'><li>Men</li></a>
                    <a href='#'><li>Women</li></a>
                    <a href='#'><li>Kids</li></a>
                </ul>
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