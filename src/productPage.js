import React, { useState } from 'react'
import ProductList from './productList'
import ProductHeader from './ProductHeader'
import TrendingProducts from './TrendingProducts'

function ProductPage(props) {
    const handleScroll = () => {
        console.log("hello")
    }
    return (
        <div onScroll={handleScroll}>
            <ProductHeader />
            <TrendingProducts products={props.products} />
            <ProductList
                products={props.products}
                addToCart={props.addToCart}
                changeDetailProduct={props.changeDetailProduct}
            />
        </div>
    )
}

export default ProductPage
