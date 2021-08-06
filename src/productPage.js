import React, { useState } from 'react'
import ProductList from './productList'
import ProductHeader from './ProductHeader'
import TrendingProducts from './TrendingProducts'
import { BsFilterLeft } from 'react-icons/bs'

function ProductPage(props) {
    const [isFilterAnimate, setIsFilterAnimate] = useState(false)
    const [filterStyle, setFilterStyle] = useState({
        transform: 'translateX(-150%)'
    })
    const openFilter = () => {
        setFilterStyle({
            transform: 'translateX(0%)'
        })
    }
    const closeFilter = () => {
        setFilterStyle({
            transform: 'translateX(-150%)'
        })
    }
    return (
        <div>
            <ProductHeader />
            <TrendingProducts changeDetailProduct={props.changeDetailProduct} />
            <h2 className="title product-title">Product</h2>
            <div
                style={window.screen.width <= 1000 ? { display: 'inline' } : { display: 'none' }}
                onClick={() => openFilter()}
                className='filter_responsive_btn'>
                <p>Filter </p>
                <BsFilterLeft />
            </div>
            <ProductList
                products={props.products}
                addToCart={props.addToCart}
                changeDetailProduct={props.changeDetailProduct}
                addToFavorite={props.addToFavorite}
                closeFilter={closeFilter}
                filterStyle={filterStyle}
            />
        </div>
    )
}

export default ProductPage
