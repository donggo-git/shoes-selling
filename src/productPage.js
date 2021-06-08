import React, { useState } from 'react'
import ProductList from './productList'
import Brand from './Brand'
import P from './ProductHeader'
import ProductHeader from './ProductHeader'
import TrendingProducts from './TrendingProducts'

function ProductPage(props) {
    let [styleBrand, setStyleBrand] = useState([{ border: '2px solid #333' }, { border: 'none' }, { border: 'none' }, { border: 'none' }])
    let [brand, setBrand] = useState('Nike')
    let [nextPageBrand, setNextPageBrand] = useState('Nike')
    let [nextPageStyle, setNextPageStyle] = useState({ animationName: 'none' })

    const handleBrandClick = (index, logoItem) => {
        let newBrandStyle = [{ border: 'none' }, { border: 'none' }, { border: 'none' }, { border: 'none' }];
        newBrandStyle[index] = { border: '2px solid #333' }

        setStyleBrand(newBrandStyle);
        setNextPageBrand(logoItem.name)
        setNextPageStyle({
            animationName: 'nextPageStyle',
            animationDuration: '0.8s',
            margin: '2rem'
        })

        setTimeout(() => {
            setBrand(logoItem.name);
            setNextPageStyle({ animationName: 'none' })
        }, 800)

    }

    return (
        <div>
            <ProductHeader />
            <TrendingProducts products={props.products} />
            {/*<Brand styleBrand={styleBrand} handleBrandClick={handleBrandClick} />
            <ProductList brand={brand} nextPageStyle={nextPageStyle} nextPageBrand={nextPageBrand}
                addToCart={props.addToCart}
            />
    */}
        </div>
    )
}

export default ProductPage
