import React, { useState } from 'react'
import ProductList from './productList'
import ProductHeader from './ProductHeader'
import TrendingProducts from './TrendingProducts'
import { BsFilterLeft } from 'react-icons/bs'

function ProductPage(props) {

    return (
        <div>
            <ProductHeader />
            <TrendingProducts changeDetailProduct={props.changeDetailProduct} />
            <h2 className="title product-title">Product</h2>
            <div
                style={window.screen.width <= 1000 ? { display: 'inline' } : { display: 'none' }}
                className='filter_responsive_btn'>
                <p>Filter </p>
                <BsFilterLeft />
            </div>
            <ProductList
                products={props.products}
                addToCart={props.addToCart}
                changeDetailProduct={props.changeDetailProduct}
                addToFavorite={props.addToFavorite}
            />
        </div>
    )
}

export default ProductPage
