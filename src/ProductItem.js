import React, { useState } from 'react'

import "./ProductItem.css"
import { NavLink } from 'react-router-dom'
function ProductItem({ product, changeDetailProduct, addToCart }) {
    const [imgOrder, setImgOrder] = useState(0)
    const handleHover = (imgSrc) => {
        setImgOrder(product.product.img.indexOf(imgSrc))
    }
    return (
        <div className='ProductItem' >
            <NavLink to="/product">
                <img src={product.product.img[imgOrder]} height='100%' width='100%' alt={product.name + ' shoes'} onClick={() => changeDetailProduct(product)} />
            </NavLink>
            <div className='ProductDetail'>
                <h3>{product.product.name}</h3>
                <p className='brand'>{product.product.brand}</p>
                <p>${product.product.price}</p>
            </div>
            <div className="ProductDetail_imgList">
                <div className='img-list'>
                    {
                        product.product.img.map(imgSrc => (
                            <img src={imgSrc} key={imgSrc} onMouseEnter={(imgSrc) => handleHover(imgSrc.target.src)}
                            />
                        ))
                    }
                </div>
                <div className="ProductDetail_imgList_btn">
                    <button className="like">Like</button>

                    <button onClick={() => changeDetailProduct(product)}>
                        <NavLink to="/product">Detail</NavLink>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
