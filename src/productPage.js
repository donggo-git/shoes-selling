import React, { useState } from 'react'
import ProductList from './productList'
import P from './ProductHeader'
import ProductHeader from './ProductHeader'
import TrendingProducts from './TrendingProducts'

function ProductPage(props) {


    return (
        <div>
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
