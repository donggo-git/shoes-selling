import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import './detailPage.css'
function Product_detail(props) {
    return (
        <div className='detail-container'>
            <AiOutlineClose />
            <div className='detail'>
                <img src={props.product.img[0]} />
                <div>
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