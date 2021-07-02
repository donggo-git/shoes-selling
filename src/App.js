
import './App.css';
import React, { useState, useEffect } from 'react'
import { BsSearch } from 'react-icons/bs';
import ProductPage from './productPage'
import CartPage from './Cart'
import DetailPage from './DetailPage';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { db } from './firebase'

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])
  const [detailProduct, setDetailProduct] = useState()

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
      setCart(updateCart)
    }
    else return;
  }

  const getProduct = () => {

    db.collection('products').onSnapshot((snapshot) => {
      let tempData = [];
      tempData = snapshot.docs.map((doc) => (
        {
          id: doc.id,
          product: doc.data()
        }

      ));
      setProducts(tempData)
      setDetailProduct(tempData[0].product)
    })
  }
  useEffect(() => {
    setTimeout(getProduct(), 3000);
  }, [])

  const changeDetailProduct = (detailProduct) => {
    setDetailProduct(detailProduct)
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
            <CSSTransition timeout={150} classNames='fade' key={location.key}>
              <Switch >
                <Route path='/' exact component={() => <ProductPage
                  addToCart={addToCart} products={products} changeDetailProduct={changeDetailProduct} />} />
                <Route path='/cart' component={() => <CartPage cart={cart} removeItem={removeItem} />} />
                <Route path='/product' component={() => <DetailPage products={detailProduct} />} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />

      </Router>
    </div >
  );

}


export default App;
