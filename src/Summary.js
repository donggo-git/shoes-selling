import React, { useState } from 'react'
import Collapse from '@material-ui/core/Collapse';
import './Summary.css'
function Summary(props) {
    let tax = Math.round(props.subtotal * 10.1) / 100;
    let [total, setTotal] = useState(Math.round((props.subtotal + tax + 8) * 100) / 100);
    let [codeEnter, setCodeEnter] = useState('');
    let [discountAmount, setDiscountAmount] = useState(0)
    let [discountStyle, setDiscountStyle] = useState({ display: 'none' })
    const [isCodeShow, setIsCodeShow] = useState(false)
    const handleEnterCode = (e) => {
        setCodeEnter(e);
    }
    const handleSubmitCode = () => {
        switch (codeEnter) {
            case '':
                setDiscountStyle({ display: 'none' })
                break;
            case 'discount10':
                setDiscountAmount(Math.round(total * 10) / 100);
                setDiscountStyle({ display: 'flex' })
                setTotal(total - discountAmount)
                break;
            case 'discount20':
                setDiscountAmount(Math.round(total * 20) / 100);
                setDiscountStyle({ display: 'flex' })
                setTotal(total - discountAmount);
                break;
            default:
                alert('You enter the wrong code')
                setDiscountStyle({ display: 'none' })
                break;
        }
        setCodeEnter('')

    }
    const animateDiscountCode = () => {
        setIsCodeShow(pre => !pre)
    }
    return (
        <div className='Summary'>
            <h2>Summary</h2>
            <div className='summary__discountCode'>
                <p className="discount_input" onClick={animateDiscountCode}>Do you have  discount code?</p>
                <div className='summary__discountCode__enterCode'>
                    <Collapse in={isCodeShow} timeout={300}>
                        <input type='text' onChange={(e) => handleEnterCode(e.target.value)} value={codeEnter} />
                        <button onClick={handleSubmitCode}>Apply</button>
                    </Collapse>
                </div>
            </div>



            <div className='summary__textLine'>
                <p>Subtotal</p>
                <p>${props.subtotal}</p>
            </div>
            <div className='summary__textLine'>
                <p>Estimated Shipping & Handling</p>
                <p>$8.00</p>
            </div>
            <div className='summary__textLine'>
                <p>Estimated tax</p>
                <p>{tax}</p>
            </div>
            <div className='summary__textLine summary__textLine__discount' style={discountStyle}>
                <p>Discount</p>
                <p>-{discountAmount}</p>
            </div>
            <div className='summary__textLine total'>
                <p>Total</p>
                <p>${total}</p>
            </div>
            <div></div>
            <button className='Checkout-btn'>Checkout</button>
        </div >
    )
}

export default Summary
