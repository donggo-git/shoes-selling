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
        <div className={`card__item`} >
            <NavLink to="/product" className={`card__item_img`}>
                <img src={product.product.img[imgOrder]} height='100%' width='100%' alt={product.name + ' shoes'} onClick={() => btn2Method(product)} />
            </NavLink>
            <div className={`card__item__content`}>
                <NavLink to="/product">
                    <h3 onClick={() => btn2Method(product)}>{product.product.name}</h3>
                </NavLink>
                <p className='brand'>{product.product.brand}</p>
                <p>${product.product.price}</p>
            </div>
            {
                btn2 &&
                <div className={`card__item__content--hidden`}>
                    <div className={`card__item__content--hidden__imgList`}>
                        {
                            product.product.img.map(imgSrc => (
                                <img src={imgSrc} key={imgSrc} onMouseEnter={() => handleHover(imgSrc)}
                                />
                            ))
                        }
                    </div>
                    <div className={`card__item__content--hidden__buttons`}>
                        <UIButton
                            className={`card__item__content--hidden__button ${btn1 === 'Remove' ? 'Button--remove' : 'Button--like'}`}
                            onClickHandler={() => btn1Method(product)}
                        >
                            {btn1}
                        </UIButton>
                        <NavLink to="/product" className={`card__item__content--hidden__button`}>
                            <UIButton
                                className='card__item__content--hidden__button Button--detail'
                                onClickHandler={() => btn2Method(product)}
                            >
                                {btn2}
                            </UIButton>
                        </NavLink>
                    </div>
                </div>
            }
        </div >
    )
}

export default Card