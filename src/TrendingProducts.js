import React, { useState } from 'react'
import "./TrendingProducts.css"
import { AiOutlineRight } from 'react-icons/ai'
import { AiOutlineLeft } from 'react-icons/ai'

function TrendingProducts({ products }) {
    const [translateSlide, setTranslateSlide] = useState({
        transform: "translateX(0)"
    })
    const handleScrollTrending = () => {
        setTranslateSlide({
            transform: "translateX(-50px)"
        })
        console.log("Hello")
    }
    return (
        <div className="Trending_container">
            <h2 className="title">Trending</h2>
            <div className="Trending_btn previousBtn_container"><AiOutlineLeft /></div>
            <div
                className="Trending_btn nextBtn_container"

                onClick={() => handleScrollTrending()}>
                <AiOutlineRight />
            </div>
            <div className='Trending_slide_container'>

                <div className="Trending_slide"
                    style={translateSlide}>
                    {
                        products
                            .filter(product => (product.product.trending == true))
                            .map(product => (
                                <div key={product.id} className="Trending_slide_product">
                                    <img src={product.product.img[0]} height='100%' width='100%' />
                                    <p>{product.product.name}</p>
                                    <p>{product.product.price}</p>
                                </div>
                            ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TrendingProducts
