
import './App.css';
import React, { useState, useEffect } from 'react'
import { BsSearch } from 'react-icons/bs';
import ProductPage from './productPage'
import CartPage from './Cart'
import Favorite from './Favorite';
import DetailPage from './DetailPage';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { IoCartOutline } from 'react-icons/io5'
import { AiOutlineCheck } from 'react-icons/ai'
import Grow from '@material-ui/core/Grow'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { db } from './firebase'

function App() {
  const _ = require('lodash');
  const [cart, setCart] = useState([])
  const [favorite, setFavorite] = useState([])
  const [detailProduct, setDetailProduct] = useState()
  const [img, setImg] = useState("")
  const [isFavoriteAnnounce, setIsFavoriteAnnounce] = useState(false)
  const [searchInput, setSearchInput] = useState("");
  const [searchList, setSearchList] = useState([]);
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
  }
  //functionality for favorite
  const addToFavorite = (product) => {
    let updateFavorite = [...favorite]
    if (favorite.every(item => item?.id !== product?.id)) {
      updateFavorite.push(product)
      setFavorite(updateFavorite)
    }
    setIsFavoriteAnnounce(true)
    setTimeout(() => setIsFavoriteAnnounce(false), 800)
  }
  const removeFavorite = (product) => {
    let updateFavorite = [...favorite]
    updateFavorite = updateFavorite.filter(item => item.id != product.id)
    setFavorite(updateFavorite)
  }
  //functionality for search
  const handleSearch = (searchInput) => {
    setSearchInput(searchInput);
  }
  //search product every time searchInput changes  
  useEffect(() => {
    if (searchInput != "") {
      db.collection('products').onSnapshot((snapshot) => {
        let tempData = []
        tempData = snapshot.docs.map((doc) => (
          {
            id: doc.id,
            product: doc.data()
          }
        )).filter(shoe => shoe.product.name.includes(searchInput))
        setSearchList(tempData);
      })
    }
    else setSearchList([]);
  }, [searchInput])
  return (
    <div>
      <Router>
        <nav>
          <ul>
            <img src="https://images.template.net/wp-content/uploads/2016/08/08090604/Soccer-Shoe-Logo.jpg" height="50px" />
            <NavLink to='/shoes-selling/' className='nav__homePage'>Home</NavLink>
            <NavLink to="/Favorite"><li>Favorite</li></NavLink>

          </ul>

          <div className='search-input'>
            <BsSearch className='search-btn' />
            <input type='text' placeholder='Search'
              value={searchInput}
              onChange={(searchInput) => handleSearch(searchInput.target.value)}
            />
            {searchList.length > 0 ? (
              <div className='searchList_container'>
                <div className='searchList'>
                  {searchList.map((product) => (
                    <div className='searchList-item'>
                      <img src={product.product.img[0]} height="100px" width="80px" />
                      <p>{product.product.name}</p>
                    </div>
                  ))
                  }
                </div>
              </div>
            )
              : <div></div>
            }
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
                <Route path='/shoes-selling/' component={() => <ProductPage
                  addToCart={addToCart} changeDetailProduct={changeDetailProduct}
                  setDetailProduct={setDetailProduct} addToFavorite={addToFavorite} />} />
                <Route path='/cart' component={() => <CartPage
                  cart={cart} removeItem={removeItem} img={img} changeDetailProduct={changeDetailProduct}
                  addQuantity={addQuantity} minusQuantity={minusQuantity} addToFavorite={addToFavorite} />} />
                <Route path='/product' component={() => <DetailPage
                  products={detailProduct} addToCart={addToCart}
                  minusQuantity={minusQuantity} addToFavorite={addToFavorite} />} />
                <Route path="/Favorite" component={() => <Favorite
                  favorite={favorite} removeFavorite={removeFavorite}
                  setDetailProduct={setDetailProduct}
                />} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
      </Router>

      <div className='favoriteAnnounceContainer'>
        <Grow in={isFavoriteAnnounce} timeout={{ appear: 500, enter: 500, exit: 1 }}>
          <div className='favoriteAnnounce'>
            <p>Add to favorite</p>
            <AiOutlineCheck />
          </div>
        </Grow>
      </div>
    </div >
  );

}


export default App;
