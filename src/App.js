
import './App.css';
import './header.css'
import React from 'react'
import Header from './Header'
import Brand from './Brand'
import ProductList from './productList';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      styleBrand: [{ border: '1px solid #333' }, { border: 'none' }, { border: 'none' }, { border: 'none' }],
      brand: 'Nike',
      nextPageBrand: 'Nike',
      nextPageStyle: {
        animationName: 'none',
      },
      cart: []
    }
  }

  render() {


    const handleBrandClick = (index, logoItem) => {
      let newBrandStyle = [{ border: 'none' }, { border: 'none' }, { border: 'none' }, { border: 'none' }];
      newBrandStyle[index] = { border: '2px solid #333' }
      this.setState({
        styleBrand: newBrandStyle,
        nextPageBrand: logoItem.name,
        nextPageStyle: {
          animationName: 'nextPageStyle',
          animationDuration: '1s',
          margin: '2rem'
        }
      })
      setTimeout(() => this.setState({
        brand: logoItem.name,
        nextPageStyle: {
          animationName: 'none',

        }
      }), 1000)

    }
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
        <Header />
        <Brand styleBrand={this.state.styleBrand} handleBrandClick={handleBrandClick} />
        <ProductList brand={this.state.brand} nextPageStyle={this.state.nextPageStyle} nextPageBrand={this.state.nextPageBrand}
          addToCart={addToCart}
        />

      </div>
    );
  }
}


export default App;
