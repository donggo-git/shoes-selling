
import './App.css';
import './header.css'
import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import ProductPage from './productPage'
import CartPage from './Cart'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5'

function App() {

  const [cart, setCart] = useState([])

  // add to cart method
  const addToCart = (product) => {
    let updateCart = [...cart]
    updateCart.push(product)
    setCart(updateCart)
  }
  const removeCart = (productID) => {
    if (cart.length > 0) {
      let updateCart = [...cart];
      updateCart = updateCart.filter(item => item.id != productID)
      console.log(productID)
      setCart(updateCart)
    }
    else return;
  }
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <Link to='/' className='nav__homePage'>Home</Link>
            <a href='#'><li>New Releases</li></a>
            <a href='#'><li>Men</li></a>
            <a href='#'><li>Women</li></a>
            <a href='#'><li>Kids</li></a>
            <a href='#'><li>Customize</li></a>
            <a href='#'><li>Sale</li></a>

          </ul>

          <div className='search-input'>
            <BsSearch className='search-btn' />
            <input type='text' placeholder='Search' />

          </div>
          <Link to='/cart'>
            <div className='nav__cart '>
              <IoCartOutline className='cart_icon' />
              <div className='nav__cart__amount'>{cart.length}</div>
            </div>
          </Link>
        </nav>

        <Switch>
          <Route path='/' exact component={() => <ProductPage addToCart={addToCart} />} />
          <Route path='/cart' component={() => <CartPage cart={cart} removeCart={removeCart} />} />
        </Switch>

      </Router>

    </div>
  );

}


export default App;
