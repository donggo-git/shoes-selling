import React from 'react'
import "./Favorite.css"

function Favorite({ favorite }) {
    return (
        <div className='favorite_page'>
            {favorite.map(item => (
                <div className='favorite_item'>
                    <div className="favorite_img_container">
                        <img src={item.product.img[0]} height="100%" width="100%" />
                    </div>
                    <div className="favorite_item_content">
                        <h2>{item.product.name}</h2>
                        <p>{item.product.brand}</p>
                        <p>{item.product.price}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Favorite
