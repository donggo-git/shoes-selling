import React from 'react'
import './detailPage.css'

function DetailPage({ products }) {
    console.log(products)
    return (
        <div className="detailPage">
            <div className="mainImg_container">
                <img src={products?.img[0]} height="100%" width="100%" />
            </div>

            <div className='product_detail'>
                <div className='imgList'>
                    <h2>{products.name}</h2>
                    <p>{products.price}</p>
                    <div className='imgList_container'>
                        {
                            products?.img.map(singleImg => (
                                <img src={singleImg} height="100%" />
                            ))
                        }
                    </div>
                    <p>{products.description}</p>
                    <button>Add to cart</button>
                    <button>Like</button>
                </div>
            </div>
        </div>
    )
}

export default DetailPage
