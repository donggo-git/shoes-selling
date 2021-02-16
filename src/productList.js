
import React from 'react'
import { source } from './source'
import './product.css'
function ProductList() {
    return (
        <div className='product-list'>
            {source.filter((product) => product.brand == 'Nike').map((product, index) => (
                <div key={index} className='product-item'>
                    <img src={product.img[0]} height='100%' width='100%' alt={product.name + ' shoes'} />
                    <div className='product-detail'>
                        <h3>{product.name}</h3>
                        <p className='brand'>{product.brand}</p>
                        <p>${product.price}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default ProductList