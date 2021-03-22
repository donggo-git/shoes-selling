
import './App.css';
import './header.css'
import React from 'react'
import { BsSearch } from 'react-icons/bs';
import ProductPage from './productPage'
import CartPage from './Cart'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'cart',
      cart: []
    }
  }

  render() {

    // add to cart method
    const addToCart = (product) => {
      let updateCart = [...this.state.cart]
      updateCart.push(product)
      this.setState({
        cart: updateCart
      })
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

          </nav>

          <Switch>
            <Route path='/' exact component={() => <ProductPage addToCart={addToCart} />} />
            <Route path='/cart' component={() => <CartPage cart={this.state.cart} />} />
          </Switch>

        </Router>

      </div>
    );
  }
}


export default App;
