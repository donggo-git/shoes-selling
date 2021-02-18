
import './App.css';
import './header.css'
import React, { useState } from 'react'
import Header from './Header'
import Brand from './Brand'
import ProductList from './productList';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      styleBrand: [{ border: '1px solid #333' }, { border: 'none' }, { border: 'none' }, { border: 'none' }],
      brand: 'Nike'
    }
  }

  render() {


    const handleBrandClick = (index, logoItem) => {
      let newBrandStyle = [{ border: 'none' }, { border: 'none' }, { border: 'none' }, { border: 'none' }];
      newBrandStyle[index] = { border: '1px solid #333' }
      this.setState({
        styleBrand: newBrandStyle,
        brand: logoItem.name
      })

    }


    return (
      <div>
        <Header />
        <Brand styleBrand={this.state.styleBrand} handleBrandClick={handleBrandClick} />
        <ProductList brand={this.state.brand} />
      </div>
    );
  }
}


export default App;
