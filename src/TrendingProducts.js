import React, { useState } from 'react'
import "./TrendingProducts.css"
import { AiOutlineRight } from 'react-icons/ai'
import { AiOutlineLeft } from 'react-icons/ai'

function TrendingProducts({ products }) {
    const [translateProgress, setTranslateProgress] = useState(0)
    let styledTrending = {
        transform: `translateX(${translateProgress}rem)`
    }
    const handleScrollTrending = (button) => {
        if (button == "next") {
            if (translateProgress > -32) {
                setTranslateProgress((pre) => pre -= 16)
            }
        }
        else {
            if (translateProgress)
                setTranslateProgress((pre) => pre += 16)
        }
    }
    return (
        <div className="Trending_container">
            <h2 className="title">Trending</h2>
            <div
                className="Trending_btn previousBtn_container"
                onClick={() => handleScrollTrending("previous")}
            ><AiOutlineLeft /></div>
            <div
                className="Trending_btn nextBtn_container"

                onClick={() => handleScrollTrending("next")}>
                <AiOutlineRight />
            </div>
            <div className='Trending_slide_container'>

                <div className="Trending_slide"
                    style={styledTrending}>
                    {
                        products
                            .filter(product => (product.product.trending == true))
                            .map(product => (
                                <div key={product.id} className="Trending_slide_product">
                                    <img src={product.product.img[0]} height='100%' width='100%' />
                                    <p>{product.product.name}</p>
                                    <p>$ {product.product.price}</p>
                                </div>
                            ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TrendingProducts
