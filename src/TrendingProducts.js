import React from 'react'
import "./TrendingProducts.css"

function TrendingProducts({ products }) {
    console.log(products);
    return (
        <div>
            <h2 className="title">Trending</h2>
            <div className='Trending_slide_container'>
                <div className="previousBtn_container"></div>
                <div className="nextBtn_container"></div>
                <div className="Trending_slide">
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