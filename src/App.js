
import './App.css';
import './header.css'
import React from 'react'
import Header from './Header'
import Brand from './Brand'
import ProductList from './productList';
class App extends React.Component {

  render() {
    // add product to cart


    return (
      <div>
        <Header />
        <Brand />
        <ProductList />
      </div>
    );
  }
}


export default App;
