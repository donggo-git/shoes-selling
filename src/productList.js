
import React from 'react'
import { source } from './source'
import './product.css'
function ProductList() {
    return (
        <div className='product-list'>
            {source.map((product, index) => (
                <div key={index} className='product-item'>
                    <img src={product.img[0]} height='100%' width='100%' />
                </div>
            ))}
        </div>
    )
}
export default ProductList