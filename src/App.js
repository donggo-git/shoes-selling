import './App.css';
import React, { useState } from 'react'
import ProductPage from './productPage'
import CartPage from './Cart'
import Favorite from './Favorite';
import DetailPage from './DetailPage/DetailPage';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import SearchingProduct from './Searching-Product/SearchingProduct';
import { db } from './firebase'

function App() {
  const _ = require('lodash');
  const [cart, setCart] = useState([])
  const [detailProduct, setDetailProduct] = useState()
  const [img, setImg] = useState("")
  let cartLength = cart.reduce((sum, item) => sum + item.product.quantity, 0)

  // functionality for cart
  const addToCart = (product, img) => {
    //console.log(product.product.color[img])
    let updateCart = [...cart]
    let updateProduct = JSON.parse(JSON.stringify(product))
    if (cart.every(item => item.id !== (updateProduct.id + img))) {
      updateProduct.id = product.id + img
      updateProduct.product.quantity = 1
      updateCart.push(updateProduct)
      setImg(img)
    }
    else {
      updateProduct = updateCart.find(item => item.id == product.id + img)
      updateProduct.product.quantity++
    }
    setCart(updateCart)
    console.log(cart)
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

    updateCart.find(cartItem => cartItem.id === product.id).product.quantity++
    setCart(updateCart)
  }
  const minusQuantity = (product) => {
    let updateCart = [...cart]
    //find product that need to increase quantity
    let updateItem = updateCart.find(cartItem => cartItem.id == product.id)
    if (updateItem.product.quantity > 0) {
      updateCart.find(cartItem => cartItem.id == product.id).product.quantity--
    }
    setCart(updateCart)
  }
  const changeDetailProduct = (detailProduct) => {
    setDetailProduct(detailProduct)
    console.log(detailProduct)
  }
  //functionality for favorite
  const addToFavorite = (e, product) => {
    const favoriteList = db.collection("favorite").doc(product.id);
    favoriteList.get()
      .then(doc => {
        if (!doc.exists) {
          db.collection("favorite").doc(product.id).set({
            name: product.product.name,
            description: product.product.description,
            gender: product.product.gender,
            category: product.product.category,
            img: product.product.img,
            price: product.product.price
          })
        }
        else return;
      })
    e.preventDefault();
  }
  const removeFromFavorite = (id) => {

    console.log(id);
    db.collection("favorite").doc(id).delete();

  }
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <img src="https://images.template.net/wp-content/uploads/2016/08/08090604/Soccer-Shoe-Logo.jpg" height="50px" />
            <NavLink to='/shoes-selling/' className='nav__homePage'>Home</NavLink>
            <NavLink to="/Favorite"><li>Favorite</li></NavLink>

          </ul>

          <SearchingProduct changeDetailProduct={changeDetailProduct} />

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
                <Route path='/shoes-selling/' component={() => <ProductPage
                  addToCart={addToCart} changeDetailProduct={changeDetailProduct}
                  setDetailProduct={setDetailProduct} addToFavorite={addToFavorite}
                  removeFromFavorite={removeFromFavorite}
                />} />
                <Route path='/cart' component={() => <CartPage
                  cart={cart} removeItem={removeItem} img={img} changeDetailProduct={changeDetailProduct}
                  addQuantity={addQuantity} minusQuantity={minusQuantity} addToFavorite={addToFavorite} />} />
                <Route path='/product' component={() => <DetailPage
                  products={detailProduct} addToCart={addToCart}
                  minusQuantity={minusQuantity} addToFavorite={addToFavorite}
                  removeFromFavorite={removeFromFavorite} />} />
                <Route path="/Favorite" component={() => <Favorite
                  setDetailProduct={setDetailProduct}
                  removeFromFavorite={removeFromFavorite}
                />} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
      </Router>

    </div >
  );

}


export default App;
