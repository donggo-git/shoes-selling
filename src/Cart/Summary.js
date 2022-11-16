import React, { useEffect, useState } from 'react'
import Collapse from '@material-ui/core/Collapse';
import './Summary.css'
function Summary({ subtotal }) {
    let tax = Math.round(subtotal * 10.1) / 100;

    const [codeEnter, setCodeEnter] = useState('');
    const [submittedCode, setSubmittedCode] = useState('')
    const [discountAmount, setDiscountAmount] = useState(0)
    const [discountStyle, setDiscountStyle] = useState({ display: 'none' })
    const [isCodeShow, setIsCodeShow] = useState(false)
    const total = Math.round((subtotal + tax + 8 - discountAmount) * 100) / 100

    const handleEnterCode = (e) => {
        setCodeEnter(e.target.value);
    }

    const handleDiscountAmount = () => {
        switch (submittedCode) {
            case '':
                setDiscountStyle({ display: 'none' })
                setDiscountAmount(0);
                break;
            case 'discount10':
                console.log('Hello')
                setDiscountAmount(Math.round(total * 10) / 100);
                setDiscountStyle({ display: 'flex' })
                break;
            case 'discount20':
                setDiscountAmount(Math.round(total * 20) / 100);
                setDiscountStyle({ display: 'flex' })
                break;
            default:
                alert('Invalid code, please enter again')
                setDiscountStyle({ display: 'none' })
                break;
        }
    }

    const handleSubmitCode = () => {
        setSubmittedCode(codeEnter)
        handleDiscountAmount()
        setCodeEnter('')
    }

    useEffect(handleDiscountAmount, [subtotal])

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
                        <input type='text' onChange={handleEnterCode} value={codeEnter} />
                        <button onClick={handleSubmitCode}>Apply</button>
                    </Collapse>
                </div>
            </div>



            <div className='summary__textLine'>
                <p>Subtotal</p>
                <p>${subtotal}</p>
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
