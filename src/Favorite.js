import React from 'react'

function Favorite({ favorite }) {
    return (
        <div>
            {favorite.map(item => (
                <div>
                    <div className="favorite_img_container">
                        <img src={item.product.img[0]} height="100%" />
                    </div>
                    <div className="favorite_item_content">
                        <h2>{item.product.name}</h2>
                        <p>{item.product.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Favorite
