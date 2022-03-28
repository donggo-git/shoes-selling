import React, { useState, useEffect } from 'react'
import ProductList from './productList'
import ProductHeader from './ProductHeader'
import TrendingProducts from './TrendingProducts'
import { BsFilterLeft } from 'react-icons/bs'
import Fade from '@material-ui/core/Fade'
import './ProductPage.css'

function ProductPage(props) {
    const [isFilterAnimate, setIsFilterAnimate] = useState(false)
    const [isFixed, setIsFixed] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 1008) setIsFixed(true)
            else setIsFixed(false)
        });
        //return () => window.removeEventListener("scroll")
    }, [])
    const [filterStyle, setFilterStyle] = useState({
        transform: 'translateY(150%)'
    })
    const openFilter = () => {
        setFilterStyle({
            transform: 'translateY(0%)'
        })
        setIsFilterAnimate(true)
    }
    const closeFilter = () => {
        setFilterStyle({
            transform: 'translateY(150%)'
        })
        setIsFilterAnimate(false)
    }
    return (
        <div className='page'>
            <ProductHeader />
            <TrendingProducts changeDetailProduct={props.changeDetailProduct} />
            <h2 className="title product-title">Product</h2>
            <div className="product">
                <div
                    style={window.screen.width <= 1000 ? { display: 'inline' } : { display: 'none' }}
                    onClick={() => openFilter()}
                    className={`filter_responsive_btn 
                ${isFixed & window.screen.width < 1000 ? 'filter_responsive_btn_fixed' : ''}`}
                >
                    <p>Filter </p>
                    <BsFilterLeft />
                </div>
                <Fade in={isFilterAnimate} timeout={300}>
                    <div className="modal"></div>
                </Fade>
                <ProductList
                    products={props.products}
                    addToCart={props.addToCart}
                    changeDetailProduct={props.changeDetailProduct}
                    addToFavorite={props.addToFavorite}
                    closeFilter={closeFilter}
                    filterStyle={filterStyle}
                    removeFromFavorite={props.removeFromFavorite}
                />
            </div>
        </div>
    )
}

export default ProductPage
