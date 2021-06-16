import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import './detailPage.css';
import './productList.css'
import { BsHeart } from 'react-icons/bs'
function Product_detail(props) {
    return (
        <div className='modal' style={props.styles}>

            <div className='detail-container' style={props.containerStyle} />
            <div className='detail-container next-detail-container' style={props.nextContainerStyle} />
            <div className='detail' >
                <button className='close-btn-container' onClick={() => props.closeDetail()}><AiOutlineClose className='close-btn' /></button>
                <div className='detail-img'>
                    <img src={props.shoesSource} alt={props.product.name} />
                    <div className='color-list'>
                        {props.product.color.map((color, index) =>
                            <div style={{ background: color }} className='color-item' onClick={() => props.handleColorClick(color)} key={index} />

                        )}
                    </div>
                </div>
                <div className='detail-content'>

                    <h2>{props.product.name}</h2>
                    <p>{props.product.brand}</p>
                    <p>${props.product.price}</p>
                    <p>{props.product.detail}</p>
                    <button className='detail-btn add-to-cart' onClick={() => props.addToCart(props.product)}>Add to cart</button>
                    <button className='detail-btn favorite'>Favorite <BsHeart className='heart' /></button>
                </div>
            </div>
        </div>
    )
}
export default Product_detail