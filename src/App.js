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
  const [favoriteLength, setFavoriteLength] = useState(0)
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState([])
  const [favorite, setFavorite] = useState([])

  // functionality for cart
  //get cart length
  useEffect(() => {
    //get all of products
    getProduct('products')
    //get all products in cart
    getProduct('cart')
    //get all products in favorite
    getProduct('favorite')
    //get total quantity of all items in cart
    setCartLength(getTotalProductsQuantity(cart))
    //get total quantity of all items in favorite
    setFavoriteLength(getTotalProductsQuantity(favorite))
  }, [])

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
  }
  const removeFromFavorite = (id) => {

    console.log(id);
    db.collection("favorite").doc(id).delete();

  }

  ///////
  const addProduct = function (product, img = '', collection) {
    //if collection is cart this method will add product to cart
    //if collection is favorite this method will add product to favorite
    const productList = db.collection(`${collection}`).doc(`${img != '' ? product.id + "_" + img : product.id}`)
    productList.get()
      .then(doc => {
        if (!doc.exists) {
          productList.set({
            name: product.product.name,
            description: product.product.description,
            gender: product.product.gender,
            category: product.product.category,
            //for cart there only one img per product
            //for favorite there are multiple img per product
            img: img !== '' ? product.product.img[img] : product.product.img,
            price: product.product.price,
            quantity: 1
          })
        }
        else {
          productList.update({
            quantity: doc.data().quantity + 1
          })
        }
      })
  }
  ///
  const getProduct = (collection) => {
    db.collection(collection).onSnapshot((snapshot) => {
      let tempData = []
      tempData = snapshot.docs.map((doc) => (
        {
          id: doc.id,
          product: doc.data()
        }
      ))
      switch (collection) {
        case "products":
          setProducts(tempData);
          break;
        case "cart":
          setCart(tempData);
        case "favorite":
          setFavorite(tempData)
      }
    })
  }
  const getTotalProductsQuantity = (collectionName) => {
    return collectionName.reduce((acc, product) => acc += product.product.quantity, 0)
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
                  changeDetailProduct={changeDetailProduct}
                  setDetailProduct={setDetailProduct}
                  removeFromFavorite={removeFromFavorite}
                  addProduct={addProduct}
                  products={products}
                />} />
                <Route path='/cart' component={() => <CartPage
                  removeItem={removeItem} changeDetailProduct={changeDetailProduct}
                  addQuantity={addQuantity} minusQuantity={minusQuantity}
                  addProduct={addProduct} />} />
                <Route path='/product' component={() => <DetailPage
                  products={detailProduct}
                  minusQuantity={minusQuantity}
                  removeFromFavorite={removeFromFavorite}
                  addProduct={addProduct}
                />} />
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
