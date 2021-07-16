
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
  const [img, setImg] = useState("")
  let cartLength = cart.reduce((sum, item) => sum + item.product.quantity, 0)

  // add to cart method
  const addToCart = (product, img) => {
    //console.log(product.product.color[img])
    let updateCart = [...cart]
    let allKeyCartItem = cart.map(item => item.id)
    let updateProduct;
    if (!allKeyCartItem.includes(product.id + img)) {
      updateProduct = { ...product }
      updateProduct.id = product.id + img
      updateProduct.product.quantity = 1
      updateCart.push(updateProduct)
      setImg(img)
    }
    else {
      updateProduct = updateCart.find(item => item.id == (product.id + img))
      updateProduct.product.quantity++
    }
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
  const addQuantity = (product) => {
    let updateCart = [...cart]
    //find product that need to increase quantity
    updateCart.find(cartItem => cartItem.id == product.id).product.quantity++
    setCart(updateCart)
  }
  const minusQuantity = (product) => {
    let updateCart = [...cart]
    //find product that need to increase quantity
    updateCart.find(cartItem => cartItem.id == product.id).product.quantity--
    setCart(updateCart)
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
  console.log(cart)
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
              <div className='nav__cart__amount'>{cartLength}</div>
            </div>
          </NavLink>
        </nav>
        <Route render={({ location }) => (
          <TransitionGroup>
            <CSSTransition timeout={150} classNames='fade' key={location.key}>
              <Switch >
                <Route path='/' exact component={() => <ProductPage
                  addToCart={addToCart} products={products} changeDetailProduct={changeDetailProduct} />} />
                <Route path='/cart' component={() => <CartPage
                  cart={cart} removeItem={removeItem} img={img} changeDetailProduct={changeDetailProduct}
                  addQuantity={addQuantity} minusQuantity={minusQuantity} />} />
                <Route path='/product' component={() => <DetailPage products={detailProduct} addToCart={addToCart} minusQuantity={minusQuantity} />} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />

      </Router>
    </div >
  );

}


export default App;
