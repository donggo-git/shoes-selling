import React, { useState } from 'react'
import UIButton from '../UI/Button'
import { NavLink } from 'react-router-dom'
import './Card.css'

function Card({ product, btn1, btn2, btn1Method, btn2Method }) {
    const [imgOrder, setImgOrder] = useState(0)
    const handleHover = (imgSrc) => {
        setImgOrder(product.product.img.indexOf(imgSrc))
    }

    return (
        <div className='ProductItem' >
            <NavLink to="/product">
                <img src={product.product.img[imgOrder]} height='100%' width='100%' alt={product.name + ' shoes'} onClick={() => btn2Method(product)} />
            </NavLink>
            <div className='ProductDetail'>
                <NavLink to="/product">
                    <h3 onClick={() => btn2Method(product)}>{product.product.name}</h3>
                </NavLink>
                <p className='brand'>{product.product.brand}</p>
                <p>${product.product.price}</p>
            </div>
            {
                btn2 &&
                <div className="ProductDetail_imgList">
                    <div className='img-list'>
                        {
                            product.product.img.map(imgSrc => (
                                <img src={imgSrc} key={imgSrc} onMouseEnter={() => handleHover(imgSrc)}
                                />
                            ))
                        }
                    </div>
                    <React.Fragment>
                        <UIButton
                            className="like-btn"
                            onClickHandler={() => btn1Method(product)}
                        >
                            {btn1}
                        </UIButton>
                        <NavLink to="/product">
                            <UIButton
                                className='detail-btn'
                                onClickHandler={() => btn2Method(product)}
                            >
                                {btn2}
                            </UIButton>
                        </NavLink>
                    </React.Fragment>
                </div>
            }
        </div >
    )
}

export default Card