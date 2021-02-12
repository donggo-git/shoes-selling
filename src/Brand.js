import React from 'react';
import { logo } from './source'
import './logo-list-style.css'
import { source } from './source'
function Brand() {
    console.log(source.length)
    console.log(logo)
    return (

        <div className='logo-list'>
            {
                logo.map((logoItem, index) => (
                    < div className='brand-item' key={index}>
                        <img src={logoItem.img} height='50%' width='50%' />
                        {console.log(logoItem.img)}
                    </ div>
                ))
            }
        </div>
    )
}
export default Brand