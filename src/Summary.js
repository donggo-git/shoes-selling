import React from 'react'
import './Summary.css'
function Summary() {

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
                <p>$130.00</p>
            </div>
            <div className='summary__textLine'>
                <p>Estimated Shipping & Handling</p>
                <p>$8.00</p>
            </div>
            <div className='summary__textLine'>
                <p>Estimated tax</p>
                <p>__</p>
            </div>
            <div className='summary__textLine total'>
                <p>Total</p>
                <p>$138.00</p>
            </div>
            <button>Checkout</button>
            <button>Paypal</button>
        </div >
    )
}

export default Summary
