import React, { useState } from 'react'
import "./ProductItem.css"
import { NavLink } from 'react-router-dom'
function ProductItem({ id, product, changeDetailProduct }) {
    const [imgOrder, setImgOrder] = useState(0)
    const handleHover = (imgSrc) => {
        setImgOrder(product.img.indexOf(imgSrc))
    }
    return (
        <div key={id} className='ProductItem' >
            <NavLink to="/product">
                <img src={product.img[imgOrder]} height='100%' width='100%' alt={product.name + ' shoes'} onClick={() => changeDetailProduct(product)} />
            </NavLink>
            <div className='ProductDetail'>
                <h3>{product.name}</h3>
                <p className='brand'>{product.brand}</p>
                <p>${product.price}</p>
            </div>
            <div className="ProductDetail_imgList">
                <div className='img-list'>
                    {
                        product.img.map(imgSrc => (
                            <img src={imgSrc} onMouseEnter={(imgSrc) => handleHover(imgSrc.target.src)}
                            />
                        ))
                    }
                </div>
                <div className="ProductDetail_imgList_btn">
                    <button className="like">Like</button>
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
