import React from 'react'

function Favorite({ favorite }) {
    return (
        <div>
            {favorite.map(item => (
                <div>
                    <img src={item.product.img[0]} />
                </div>
            ))}
        </div>
    )
}

export default Favorite
