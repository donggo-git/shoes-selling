import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Cart.css'
import { NavLink } from 'react-router-dom'
import Summary from './Summary'
function Cart(props) {
    let subtotal = props.cart.map(item => item.product.price).reduce((a, b) => a + b, 0);
    return (
        <div className='cart-page'>
            <div className='cart'>
                <TransitionGroup>
                    {props.cart.length != 0 ? props.cart.map((item) => (
                        <div className='cart-item' key={item.id}>
                            <img src={item?.product?.img[0]} />
                            <div className='cart-item-detail-container'>
                                <div className='cart-item-detail'>
                                    <NavLink to="/product">
                                        <h4
                                            onClick={() => props.changeDetailProduct(item)}
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
                                        <button className="reduce-quantity">-</button>
                                        <input type="text" for="quantity" value={item.quantity} />
                                        <button onClick={() => props.addQuantity(item)}>+</button>
                                    </div>
                                    <p className='price'>${item.product.price}</p>
                                </div>
                                <button>Move to Favorite</button>
                                <button onClick={() => props.removeItem(item.id)}>Remove</button>
                            </div>
                        </div>
                    )) : <div></div>}
                </TransitionGroup>
            </div>
            <div className='summary-cart'>
                <Summary subtotal={subtotal} />
            </div>

        </div >
    )
}
export default Cart