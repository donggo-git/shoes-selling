import React, { useState } from 'react';
import { logo } from './source'
import './logo-list-style.css'

function Brand() {
    const [styleBrand, setStyleBrand] = useState([{ border: 'none' }, { border: 'none' }, { border: 'none' }, { border: 'none' }])
    const handleBrandClick = (index) => {
        let newBrandStyle = styleBrand;
        newBrandStyle[index] = { border: '1px solid red' }
        setStyleBrand(newBrandStyle)
        console.log(styleBrand)
    }

    return (

        <div className='logo-list'>
            {
                logo.map((logoItem, index) => (
                    < div className='brand-item' key={index} onClick={() => handleBrandClick(index)} style={styleBrand[index]}>
                        <img src={logoItem.img} height='50%' width='50%' />
                        {console.log(logoItem.img)}
                    </ div>
                ))
            }
        </div>
    )
}

export default Brand