import React, { useState } from 'react'
import './detailPage.css'

function DetailPage({ products, addToCart }) {
    const [mainImg, setMainImg] = useState(0)
    const changeMainImg = (srcImg) => {
        setMainImg(products.product.img.indexOf(srcImg))
    }
    const styleImgList = {
        border: '1px solid black'
    }
    return (
        <div className="detailPage">
            <div className="mainImg_container">
                <img src={products?.product?.img[mainImg]} height="100%" width="100%" />
            </div>

            <div className='product_detail'>
                <div className='imgList'>
                    <h2>{products?.product?.name}</h2>
                    <p>$ {products?.product?.price}</p>
                    <div className='imgList_container'>
                        {
                            products?.product?.img.map(singleImg => (
                                <img
                                    src={singleImg} height="100%" onClick={(e) => changeMainImg(e.target.src)}
                                    style={products?.product.img.indexOf(singleImg) == mainImg ? styleImgList : {}} />
                            ))
                        }
                    </div>
                    <p>{products?.product?.description}</p>
                    <button onClick={() => addToCart(products, products?.product?.img[mainImg])}>Add to cart</button>
                    <button className="like">Like</button>
                </div>
            </div>
        </div>
    )
}

export default DetailPage
