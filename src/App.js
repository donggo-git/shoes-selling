
import './App.css';
import './header.css'
import React from 'react'
import Header from './Header'
import Brand from './Brand'

class App extends React.Component {

  render() {
    // add product to cart


    return (
      <div>
        <Header />
        <Brand />
      </div>
    );
  }
}


export default App;
