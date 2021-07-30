import React, { useState } from 'react'
import Slide from '@material-ui/core/Slide'
import './detailPage.css'

function DetailPage({ products, addToCart }) {
    const [mainImg, setMainImg] = useState(0)
    const [isSlide, setIsSlide] = useState(true)
    const changeMainImg = (srcImg) => {
        setIsSlide(false)
        setMainImg(products.product.img.indexOf(srcImg))
        setTimeout(() => setIsSlide(true), 200)
    }
    const styleImgList = {
        border: '1px solid black'
    }
    return (
        <div className="detailPage">
            <div className="mainImg_container">
                <Slide in={isSlide} timeout={{ enter: 400, exit: 0 }} direction={'right'}>
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
                                    src={singleImg} height="100%" onClick={(e) => changeMainImg(e.target.src)}
                                    style={products?.product.img.indexOf(singleImg) == mainImg ? styleImgList : {}} />
                            ))
                        }
                    </div>
                    <p className='product_detail_description'>{products?.product?.description}</p>
                    <button onClick={() => addToCart(products, mainImg)} className="AddToCart">Add to cart</button>
                    <button className="like">Like</button>
                </div>
            </div>
        </div>
    )
}

export default DetailPage
