
import './App.css';
import './header.css'
import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import ProductPage from './productPage'
import CartPage from './Cart'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

function App() {

  const [cart, setCart] = useState([])

  // add to cart method
  const addToCart = (product) => {
    let updateCart = [...cart]
    updateCart.push(product)
    setCart(updateCart)
  }
  const removeItem = (productID) => {
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
            <NavLink to='/' className='nav__homePage'>Home</NavLink>
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
          <NavLink to='/cart'>
            <div className='nav__cart '>
              <IoCartOutline className='cart_icon' />
              <div className='nav__cart__amount'>{cart.length}</div>
            </div>
          </NavLink>
        </nav>
        <Route render={({ location }) => (
          <TransitionGroup>
            <CSSTransition timeout={300} classNames='fade' key={location.key}>
              <Switch >
                <Route path='/' exact component={() => <ProductPage addToCart={addToCart} />} />
                <Route path='/cart' component={() => <CartPage cart={cart} removeItem={removeItem} />} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />

      </Router>
    </div >
  );

}


export default App;
