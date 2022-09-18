import './App.css';
import React, { useState, useEffect } from 'react'
import ProductPage from './HomePage/productPage'
import CartPage from './Cart/Cart'
import Favorite from './FavoritePage/Favorite';
import DetailPage from './DetailPage/DetailPage';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import SearchingProduct from './Searching-Product/SearchingProduct';


function App() {
  const _ = require('lodash');
  const [detailProduct, setDetailProduct] = useState()
  const [cartLength, setCartLength] = useState(0);
  const [favoriteLength, setFavoriteLength] = useState(0)
  const [discountCode, setDiscountCode] = useState()


  // functionality for cart
  //get cart length
  useEffect(() => {
    //generate random number for discount code
    setDiscountCode(Math.floor(Math.random() * 3))
  }, [])





  const changeDetailProduct = (detailProduct) => {
    setDetailProduct(detailProduct)
  }


  return (
    <div>
      <Router>



        <Route render={({ location }) => (
          <TransitionGroup>
            <CSSTransition timeout={150} classNames='fade' key={location.key}>
              <Switch >
                <Route path='/shoes-selling/' component={() => <ProductPage
                  changeDetailProduct={changeDetailProduct}
                  setDetailProduct={setDetailProduct}
                />} />
                <Route path='/cart' component={() => <CartPage
                  changeDetailProduct={changeDetailProduct}
                />} />
                <Route path='/product' component={() => <DetailPage
                  products={detailProduct}
                  changeDetailProduct={changeDetailProduct}
                />} />
                <Route path="/Favorite" component={() => <Favorite
                  setDetailProduct={setDetailProduct}
                  changeDetailProduct={changeDetailProduct}
                  discountCode={discountCode}
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
