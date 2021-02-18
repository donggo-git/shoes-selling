import React, { useState } from 'react';
import { logo } from './source'
import './logo-list-style.css'

function Brand() {
    const [styleBrand, setStyleBrand] = useState([{ border: '1px solid #333' }, { border: 'none' }, { border: 'none' }, { border: 'none' }])

    const handleBrandClick = (index) => {
        let newBrandStyle = [{ border: 'none' }, { border: 'none' }, { border: 'none' }, { border: 'none' }];
        newBrandStyle[index] = { border: '1px solid #333' }
        setStyleBrand(newBrandStyle)

    }

    return (

        <div className='logo-list'>
            {
                logo.map((logoItem, index) => (
                    < div className='brand-item' key={index} style={styleBrand[index]} onClick={() => handleBrandClick(index)}>
                        <img src={logoItem.img} height='50%' width='50%' />
                        {console.log(logoItem.img)}
                    </ div>
                ))
            }
        </div>
    )

}
export default Brand