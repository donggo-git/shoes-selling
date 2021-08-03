import React from 'react'
import "./Favorite.css"
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'

function Favorite({ favorite }) {
    return (
        <div className='favorite_page'>
            <div className="favorite_container">
                <h2>Your favorite list ({favorite.length})</h2>

                <div className='favorite_list'>
                    {favorite.map(item => (
                        <div className='favorite_item'>
                            <div className="favorite_img_container">
                                <img src={item.product.img[0]} height="100%" width="100%" />
                            </div>
                            <div className="favorite_item_content">
                                <h2>{item.product.name}</h2>
                                <Button color="secondary" variant="outlined" size='small' className='favoriteDelete'>
                                    Remove
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Favorite
