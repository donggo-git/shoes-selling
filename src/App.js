import './App.css';
import React, { useState, useEffect } from 'react'
import ProductPage from './HomePage/productPage'
import CartPage from './Cart/Cart'
import Favorite from './FavoritePage/Favorite';
import DetailPage from './DetailPage/DetailPage';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import SearchingProduct from './Searching-Product/SearchingProduct';
import { db } from './firebase'

function App() {
  const _ = require('lodash');
  const [detailProduct, setDetailProduct] = useState()
  const [cartLength, setCartLength] = useState(0);

  // functionality for cart
  //get cart length
  useEffect(() => {
    db.collection('cart').onSnapshot((snapshot) => {
      let tempData = []
      tempData = snapshot.docs.map((doc) => (
        {
          id: doc.id,
          product: doc.data()
        }
      ))
      let cartQuantity = tempData.reduce((acc, product) => acc += product.product.quantity, 0);
      setCartLength(cartQuantity);
    })
  }, [])
  const addToCart = (product, img, e) => {
    e.preventDefault()

    const cartList = db.collection("cart").doc(product.id + "_" + img)
    console.log(product.id + "_" + img);
    cartList.get()
      .then(doc => {
        if (!doc.exists) {
          cartList.set({
            name: product.product.name,
            description: product.product.description,
            gender: product.product.gender,
            category: product.product.category,
            img: product.product.img,
            price: product.product.price,
            quantity: 1
          })
        }
        else {
          cartList.update({
            quantity: doc.data().quantity + 1
          })
        }
      })
    //old way
  }
  const removeItem = (productID) => {
    db.collection("cart").doc(productID).delete();
  }
  const addQuantity = (product, e) => {
    e.preventDefault();
    const updateProduct = db.collection("cart").doc(product.id)
    updateProduct.get()
      .then((doc) => {
        updateProduct.update({
          quantity: doc.data().quantity + 1
        })
      })
  }
  const minusQuantity = (product) => {
    const updateProduct = db.collection("cart").doc(product.id)
    updateProduct.get()
      .then(doc => {
        if (doc.data().quantity == 1) {
          updateProduct.delete()
        }
        else {
          updateProduct.update({
            quantity: doc.data().quantity - 1
          })
        }
      })

    //old way
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
                  removeItem={removeItem} changeDetailProduct={changeDetailProduct}
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
