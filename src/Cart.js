import React from 'react'
import './Cart.css'
import Summary from './Summary'
function Cart(props) {
    let subtotal = props.cart.map(item => item.price).reduce((a, b) => a + b, 0);
    return (
        <div className='cart-page'>
            <div className='cart'>
                {props.cart.map((item) => (
                    <div className='cart-item' key={item.id}>
                        <img src={item.img[0]} />
                        <div className='cart-item-detail-container'>
                            <div className='cart-item-detail'>
                                <h4>{item.name}</h4>
                                <label for='size'>Size</label>
                                <select name='size'>
                                    <option value='11'>8</option>
                                    <option value='11'>9</option>
                                    <option value='11'>10</option>
                                    <option value='11'>11</option>
                                </select>
                                <label for='quantity'>Quantity</label>
                                <select name='size'>
                                    <option value='11'>1</option>
                                    <option value='11'>2</option>
                                    <option value='11'>3</option>
                                    <option value='11'>4</option>
                                </select>
                                <p className='price'>${item.price}</p>
                            </div>
                            <button>Move to Favorite</button>
                            <button onClick={() => props.removeItem(item.id)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='summary-cart'>
                <Summary subtotal={subtotal} />
            </div>

        </div >
    )
}
export default Cart