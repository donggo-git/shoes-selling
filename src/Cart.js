import React, { useEffect, useState } from 'react'
import './Cart.css'
import { NavLink } from 'react-router-dom'
import Fade from '@material-ui/core/Fade'
import Summary from './Summary'
import { db } from 'C:/project/shoes_selling/src/firebase'
function Cart(props) {
    const [cartList, setCartList] = useState([])
    useEffect(() => {
        db.collection('cart').onSnapshot((snapshot) => {
            let tempData = []
            tempData = snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    product: doc.data()
                }
            ))
            setCartList(tempData);
        })
    }, [])
    let subtotal = cartList.reduce((sum, item) => sum + item.product.price * item.product.quantity, 0);
    const handleProductCallBack = (item) => {
        let updateItem = { ...item }
        updateItem.id = updateItem.id.split("_")[0]
        props.changeDetailProduct(updateItem)
    }
    return (
        <div className='cart-page'>

            <div className='cart'>
                {cartList.map((item) => (
                    <Fade
                        in={item.id}
                        timeout={500}
                    >
                        <div className='cart-item'>
                            <img src={item?.product?.img[item.id.split("_")[1]]} />
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
                                        <button onClick={(e) => props.addQuantity(item, e)}>+</button>
                                    </div>
                                    <p className='price'>${item.product.price}</p>
                                </div>
                                <button onClick={(e) => props.addToFavorite(e, item)}>Move to Favorite</button>
                                <button onClick={() => props.removeItem(item.id, item)}>Remove</button>
                            </div>
                        </div>
                    </Fade>
                ))}
            </div>
            <div className='summary-cart'>
                <Summary subtotal={subtotal} />
            </div>

        </div >
    )
}
export default Cart