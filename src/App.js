
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
      nextPageStyle: {
        animationName: 'none',
      }
    }
  }

  render() {


    const handleBrandClick = (index, logoItem) => {
      let newBrandStyle = [{ border: 'none' }, { border: 'none' }, { border: 'none' }, { border: 'none' }];
      newBrandStyle[index] = { border: '1px solid #333' }
      this.setState({
        styleBrand: newBrandStyle,
        nextPageStyle: {
          animationName: 'nextPageStyle',
          animationDuration: '1s',
          margin: '2rem 0'
        }
      })
      setTimeout(() => this.setState({
        brand: logoItem.name,
        nextPageStyle: {
          animationName: 'none',
          margin: '2rem 5rem'
        }
      }), 1000)

    }


    return (
      <div>
        <Header />
        <Brand styleBrand={this.state.styleBrand} handleBrandClick={handleBrandClick} />
        <ProductList brand={this.state.brand} nextPageStyle={this.state.nextPageStyle} />
      </div>
    );
  }
}


export default App;
