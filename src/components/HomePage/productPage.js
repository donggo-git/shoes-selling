import React, { useState, useEffect } from 'react'
import ProductList from './productList'
import ProductHeader from './ProductHeader'
import TrendingProducts from './TrendingProducts'
import Nav from '../../UI/Nav'
import { BsFilterLeft } from 'react-icons/bs'
import Fade from '@material-ui/core/Fade'
import './ProductPage.css'
import * as controller from '../../helper/controller'

function ProductPage(props) {
    const [isFilterAnimate, setIsFilterAnimate] = useState(false)
    const [isFixed, setIsFixed] = useState(false)
    const [cartLength, setCartLength] = useState(controller.getListLength('cart'))
    const [favoriteLength, setFavoriteLength] = useState(controller.getListLength('favorite'))

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
    const addToFavoriteHandler = (product) => {
        controller.addProduct(product, '', 'favorite')
        setFavoriteLength(controller.getListLength('favorite'))
    }
    return (
        <React.Fragment>
            <Nav cartLength={cartLength} favoriteLength={favoriteLength} changeDetailProduct={props.changeDetailProduct} />
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
                        changeDetailProduct={props.changeDetailProduct}
                        closeFilter={closeFilter}
                        filterStyle={filterStyle}
                        addToFavoriteHandler={addToFavoriteHandler}
                        addProduct={props.addProduct}
                    />
                </div>
            </div>
        </React.Fragment>
    )
}

export default ProductPage
