
import React, { useState } from 'react'
import { source } from './source'

import './productList.css'
import './detailPage.css'
import Product_detail from './product-detail'
import FilteForm from './FilterProuct'
function ProductList(props) {

    // filter product by the filter form 
    return (
        <div>
            <h2 className="title">Product</h2>
            <div className='product-list-container'>
                <FilteForm />
                <div className='product-list-show'>

                    <div className='product-list'>
                        {props.products.map((product) => (
                            <div key={product.product.id} className='product-item' >
                                <img src={product.product.img[0]} height='100%' width='100%' alt={product.name + ' shoes'} />
                                <div className='product-detail'>
                                    <h3>{product.product.name}</h3>
                                    <p className='brand'>{product.product.brand}</p>
                                    <p>${product.product.price}</p>
                                </div>
                            </div>
                        ))}

                    </div>


                </div>
            </div>
        </div>
    )
}
export default ProductList