import React, { useEffect, useState } from 'react'
import './Cart.css'
import { NavLink } from 'react-router-dom'
import Fade from '@material-ui/core/Fade'
import Summary from './Summary'
import Nav from '../../UI/Nav'
import * as controller from '../../helper/controller'
import cart from '../../helper/cart'

function Cart(props) {
    const [cartList, setCartList] = useState([])
    const [cartLength, setCartLength] = useState(controller.getListLength('cart'))
    const [favoriteLength, setFavoriteLength] = useState(controller.getListLength('favorite'))
    const [productList, setProductList] = useState([])
    const [subtotal, setSubTotal] = useState(cart.getTotal(cartList))

    useEffect(() => {
        setCartList([...controller.getCartList()])
        setSubTotal(cart.getTotal(cartList))
        controller.getProduct('products', setProductList)
    }, [])

    useEffect(() => {
        setSubTotal(cart.getTotal(cartList))
    }, [cartList])
    const handlerOnClick = (item, methodName) => {
        switch (methodName) {
            case 'add to favorite':
                controller.addProduct(handleProductCallBack(item), '', 'favorite');
                console.log(item)
                break;
            case 'remove from cart':
                controller.removeProduct(item, 'cart');
                break;
            case 'increase quantity':
                controller.increaseQuantity(item, 'cart')
                break;
            case 'decrease quantity':
                controller.decreaseQuantity(item, 'cart')
                break;
            default: return;
        }
        setCartList([...controller.getCartList()])
        setCartLength(controller.getListLength('cart'))
        setFavoriteLength(controller.getListLength('favorite'))
    }

    const handleProductCallBack = (item) => {
        let updateItem = { ...item }
        updateItem.id = updateItem.id.split("_")[0]
        const foundProduct = productList.find(product => product.id == updateItem.id)
        props.changeDetailProduct(foundProduct)
        return foundProduct;
    }
    return (
        <React.Fragment>
            <Nav cartLength={cartLength} favoriteLength={favoriteLength} changeDetailProduct={props.changeDetailProduct} />
            <div className='cart__container'>
                <div className='cart'>
                    {cartList.map((item) => (
                        <Fade
                            key={item.id}
                            in={item.id}
                            timeout={500}
                        >
                            <div className='cart__item'>
                                <img src={item?.product?.img} />
                                <div className='cart__item__detail__container'>
                                    <div className='cart__item__detail'>
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
                                            <button className="reduce-quantity" onClick={() => handlerOnClick(item, 'decrease quantity')}>-</button>
                                            <input
                                                type="text" for="quantity" value={item.product.quantity}
                                                onChange={(input) => props.handleQuantity(input)} />
                                            <button onClick={() => handlerOnClick(item, 'increase quantity')}>+</button>
                                        </div>
                                        <p className='price'>${item.product.price}</p>
                                    </div>
                                    <button onClick={() => handlerOnClick(item, 'add to favorite')}>Move to Favorite</button>
                                    <button onClick={() => handlerOnClick(item, 'remove from cart')}>Remove</button>
                                </div>
                            </div>
                        </Fade>
                    ))}
                </div>
                <div className='summary-cart'>
                    <Summary subtotal={subtotal} />
                </div>

            </div >
        </React.Fragment>
    )
}
export default Cart