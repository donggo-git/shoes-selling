import React from 'react'
import "./ProductItem.css"
function ProductItem({ id, product }) {
    return (
        <div key={id} className='ProductItem' >
            <img src={product.img[0]} height='100%' width='100%' alt={product.name + ' shoes'} />
            <div className='ProductDetail'>
                <h3>{product.name}</h3>
                <p className='brand'>{product.brand}</p>
                <p>${product.price}</p>
            </div>
        </div>
    )
}

export default ProductItem
