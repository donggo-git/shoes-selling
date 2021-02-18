
import React from 'react'
import { source } from './source'
import './product.css'
function ProductList(props) {
    let filterProduct = source.filter((product) => product.brand === props.brand)
    return (
        <div>
            <div className='product-list'>
                {filterProduct.map((product, index) => (
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

        </div>
    )
}
export default ProductList