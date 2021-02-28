import React from 'react';
import { logo } from './source'
import './logo-list-style.css'

function Brand(props) {


    return (

        <div className='logo-list'>
            {
                logo.map((logoItem, index) => (
                    < div className='brand-item' key={index} style={props.styleBrand[index]} onClick={() => props.handleBrandClick(index, logoItem)}>
                        <img src={logoItem.img} height='50%' width='50%' />

                    </ div>
                ))
            }
        </div>
    )

}
export default Brand