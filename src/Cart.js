import React from 'react'
function Cart(props) {
    return (
        <div className='cart-page'>
            <div className='cart'>
                {props.product.map((item) => (
                    <div className='cart-item'>
                        <img src={item.img} />
                        <div>
                            <div className='cart-item-detail'>
                                <h4>{item.name}</h4>
                                <label for='size'>Size</label>
                                <select name='size'>
                                    <option value='11'></option>
                                    <option value='11'></option>
                                    <option value='11'></option>
                                    <option value='11'></option>
                                </select>
                                <label for='quantity'>Quantity</label>
                                <select name='size'>
                                    <option value='11'></option>
                                    <option value='11'></option>
                                    <option value='11'></option>
                                    <option value='11'></option>
                                </select>
                                <p className='price'>{item.price}</p>
                            </div>
                            <button>Move to Favorite</button>
                            <button>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className='summary-cart'></div>
        </div >
    )
}
export default Cart