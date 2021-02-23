import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
function Product_detail(props) {
    return (
        <div>
            <AiOutlineClose />
            <div>
                <img src={props.img} />
                <div>
                    <h2>{props.name}</h2>
                    <p>{props.brand}</p>
                    <p>{props.price}</p>
                    <p>{props.detail}</p>
                </div>
            </div>
        </div>
    )
}
export default Product_detail