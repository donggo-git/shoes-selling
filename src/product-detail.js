import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import './detailPage.css';
import './product.css'
function Product_detail(props) {
    return (
        <div className='modal' style={props.styles}>
            <div className='detail-container' style={props.containerStyle} />
            <div className='detail-container next-detail-container' style={props.nextContainerStyle} />
            <div className='detail' >
                <div className='detail-img'>
                    <img src={props.shoesSource} alt={props.product.name} />
                    <div className='color-list'>
                        {props.product.color.map((color, index) =>
                            <div style={{ background: color }} className='color-item' onClick={() => props.handleColorClick(color)} key={index} />

                        )}
                    </div>
                </div>
                <div className='detail-content'>
                    <AiOutlineClose className='close-btn' />
                    <h2>{props.product.name}</h2>
                    <p>{props.product.brand}</p>
                    <p>{props.product.price}</p>
                    <p>{props.product.detail}</p>
                </div>
            </div>
        </div>
    )
}
export default Product_detail