
import './App.css';
import './header.css'
import React from 'react'
import { BsSearch } from 'react-icons/bs';
import ProductPage from './productPage'
import CartPage from './Cart'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'product',
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
      console.log(this.state.cart)
    }
    return (
      <div>
        <nav>
          <ul>
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
        {this.state.page == 'product' && <ProductPage addToCart={addToCart} />
        }
        {
          this.state.page == 'cart' && <CartPage product={this.state.cart} />
        }

      </div>
    );
  }
}


export default App;
