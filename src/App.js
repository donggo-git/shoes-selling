
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
      styleBrand: [{ border: '1px solid #333' }, { border: 'none' }, { border: 'none' }, { border: 'none' }]
    }
  }

  render() {


    const handleBrandClick = (index) => {
      let newBrandStyle = [{ border: 'none' }, { border: 'none' }, { border: 'none' }, { border: 'none' }];
      newBrandStyle[index] = { border: '1px solid #333' }
      this.setState({ styleBrand: newBrandStyle })

    }


    return (
      <div>
        <Header />
        <Brand styleBrand={this.state.styleBrand} handleBrandClick={handleBrandClick} />
        <ProductList />
      </div>
    );
  }
}


export default App;
