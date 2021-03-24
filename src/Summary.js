import React from 'react'
import './Summary.css'
function Summary(props) {
    let tax = Math.round((props.subtotal * 10.1 / 100) * 100) / 100;
    let total = props.subtotal + tax + 8
    return (
        <div className='Summary'>
            <h2>Summary</h2>
            <div className='summary__discountCode'>
                <p>Do you have  discount code</p>
                <div className='summary__discountCode__enterCode'>
                    <input type='text' />
                    <button>Apply</button>
                </div>
            </div>



            <div className='summary__textLine'>
                <p>Subtotal</p>
                <p>${props.subtotal}.00</p>
            </div>
            <div className='summary__textLine'>
                <p>Estimated Shipping & Handling</p>
                <p>$8.00</p>
            </div>
            <div className='summary__textLine'>
                <p>Estimated tax</p>
                <p>{tax}</p>
            </div>
            <div className='summary__textLine total'>
                <p>Total</p>
                <p>${total}</p>
            </div>
            <div></div>
            <button className='Checkout-btn'>Checkout</button>
            <button className='Paypal-btn'>Paypal</button>
        </div >
    )
}

export default Summary
