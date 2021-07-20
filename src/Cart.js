import React, { useState } from 'react'
import './Cart.css'
import { NavLink } from 'react-router-dom'
import Grow from '@material-ui/core/Grow'
import Summary from './Summary'
function Cart(props) {
    let subtotal = props.cart.length > 0 ? props.cart.reduce((sum, item) => sum + item.product.price * item.product.quantity, 0) : 0;
    const handleProductCallBack = (item) => {
        let updateItem = { ...item }
        updateItem.id = updateItem.id.slice(0, updateItem.id.length - 1)
        props.changeDetailProduct(updateItem)
    }
    props.cart.map(item => console.log(item.id))
    return (
        <div className='cart-page'>

            <div className='cart'>
                {props.cart.map((item) => (
                    <Grow
                        in={item.id}
                        timeout={400}
                    >
                        <div className='cart-item'>
                            <img src={item?.product?.img[item.id.slice(-1)]} />
                            <div className='cart-item-detail-container'>
                                <div className='cart-item-detail'>
                                    <NavLink to="/product">
                                        <h4
                                            onClick={() => handleProductCallBack(item)}
                                        >
                                            {item.product.name}
                                        </h4>
                                    </NavLink>
                                    <label for='size'>Size</label>
                                    <select name='size'>
                                        <option value='11'>8</option>
                                        <option value='11'>9</option>
                                        <option value='11'>10</option>
                                        <option value='11'>11</option>
                                    </select>
                                    <div className="quantity-container">
                                        <p>quantity</p>
                                        <button className="reduce-quantity" onClick={() => props.minusQuantity(item)}>-</button>
                                        <input
                                            type="text" for="quantity" value={item.product.quantity}
                                            onChange={(input) => props.handleQuantity(input)} />
                                        <button onClick={() => props.addQuantity(item)}>+</button>
                                    </div>
                                    <p className='price'>${item.product.price}</p>
                                </div>
                                <button>Move to Favorite</button>
                                <button onClick={() => props.removeItem(item.id)}>Remove</button>
                            </div>
                        </div>
                    </Grow>
                ))}
            </div>
            <div className='summary-cart'>
                <Summary subtotal={subtotal} />
            </div>

        </div >
    )
}
export default Cart