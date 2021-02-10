import React from 'react';
import { logo } from './source'
function Brand() {
    return (

        <div >
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