import React, { useState, useEffect } from 'react'
import Button from '../../UI/Button'
import Slide from '@material-ui/core/Slide'
import './detailPage.css'
import * as controller from '../../helper/controller'
import Nav from '../../UI/Nav'

function DetailPage({ products, changeDetailProduct }) {
    const [mainImg, setMainImg] = useState(0)
    const [isSlide, setIsSlide] = useState(true)
    const [cartLength, setCartLength] = useState(controller.getListLength('cart'))
    const [favoriteLength, setFavoriteLength] = useState(controller.getListLength('favorite'))
    const [isDescriptionShorten, setIsDescriptionShorten] = useState(true)
    let description = isDescriptionShorten ?
        products?.product?.description.slice(0, 280) :
        products?.product?.description

    const changeMainImg = (srcImg) => {
        setIsSlide(false)
        setMainImg(products.product.img.indexOf(srcImg))
        setTimeout(() => setIsSlide(true), 200)
    }
    const clickHandler = (img = "", collection) => {
        controller.addProduct(products, img, collection)
        setCartLength(controller.getListLength('cart'))
        setFavoriteLength(controller.getListLength('favorite'))
    }

    const styleImgList = {
        border: '1px solid #03a9f4'
    }

    return (
        <React.Fragment>
            <Nav cartLength={cartLength} favoriteLength={favoriteLength} changeDetailProduct={changeDetailProduct} />
            <div className="detailPage">
                <div className="mainImg_container">
                    <Slide in={isSlide} timeout={{ enter: 400, exit: 0 }} direction={'left'}>
                        <img src={products?.product?.img[mainImg]} height="100%" width="100%" />
                    </Slide>
                </div>

                <div className='product_detail'>
                    <div className='imgList'>
                        <h2>{products?.product?.name}</h2>
                        <p>$ {products?.product?.price}</p>
                        <div className='imgList_container'>
                            {
                                products?.product?.img.map(singleImg => (
                                    <img
                                        key={products.product.img.indexOf(singleImg)}
                                        src={singleImg} height="100%" onClick={(e) => changeMainImg(singleImg)}
                                        style={products?.product.img.indexOf(singleImg) == mainImg ? styleImgList : {}} />
                                ))
                            }
                        </div>
                        <p className='product_detail_description'>{description}</p>
                        <Button
                            onClickHandler={() => clickHandler(mainImg, 'cart')}
                            className="Detail__btn--addToCart"
                        >
                            Add to cart
                        </Button>
                        <Button
                            onClickHandler={() => clickHandler('', 'favorite')}
                            className="Detail__btn--like"
                        >
                            Like
                        </Button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default DetailPage
