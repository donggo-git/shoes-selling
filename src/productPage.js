import React, { useState } from 'react'
import ProductList from './productList'
import Brand from './Brand'
import Header from './Header'
import { IoCartOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

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
            <Header />
            <Brand styleBrand={styleBrand} handleBrandClick={handleBrandClick} />
            <ProductList brand={brand} nextPageStyle={nextPageStyle} nextPageBrand={nextPageBrand}
                addToCart={props.addToCart}
            />

        </div>
    )
}

export default ProductPage
