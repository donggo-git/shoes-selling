import React, { useState } from 'react'
import './detailPage.css'

function DetailPage({ products }) {
    const [mainImg, setMainImg] = useState(0)
    const changeMainImg = (srcImg) => {
        setMainImg(products.img.indexOf(srcImg))
        console.log(products.img.indexOf(srcImg))
    }
    const styleImgList = {
        border: '1px solid black'
    }
    return (
        <div className="detailPage">
            <div className="mainImg_container">
                <img src={products?.img[mainImg]} height="100%" width="100%" />
            </div>

            <div className='product_detail'>
                <div className='imgList'>
                    <h2>{products?.name}</h2>
                    <p>$ {products?.price}</p>
                    <div className='imgList_container'>
                        {
                            products?.img.map(singleImg => (
                                <img
                                    src={singleImg} height="100%" onClick={(e) => changeMainImg(e.target.src)}
                                    style={products?.img.indexOf(singleImg) == mainImg ? styleImgList : {}} />
                            ))
                        }
                    </div>
                    <p>{products?.description}</p>
                    <button>Add to cart</button>
                    <button>Like</button>
                </div>
            </div>
        </div>
    )
}

export default DetailPage
