import React, { useEffect, useState } from 'react'
import "./Favorite.css"

import { NavLink } from 'react-router-dom'
import Fade from '@material-ui/core/Fade'
import { db } from '../firebase';
import * as controller from '../helper/controller'


function Favorite({ setDetailProduct, removeFromFavorite }) {
    const [favoriteList, setFavoriteList] = useState([]);
    //get favorite list
    useEffect(() => {
        setFavoriteList(controller.getFavoriteList())
    }, [])

    const removeHandler = (product) => {
        controller.removeProduct(product, 'favorite')
        const newFavorite = controller.getFavoriteList()
        setFavoriteList([...newFavorite])
    }

    return (
        <div className='favorite_page'>
            <div className="favorite_container">
                <h2>Your favorite list ({favoriteList.length})</h2>

                <div className='favorite_list'>
                    {controller.getFavoriteList().map(item => (
                        <Fade
                            in={item.id}
                            timeout={600}
                        >
                            <div className='favorite_item'>
                                <div className="favorite_img_container">
                                    <NavLink to="./product">
                                        <img src={item.product.img[0]} height="100%" width="100%"
                                            onClick={() => setDetailProduct(item)} />
                                    </NavLink>
                                </div>
                                <div className="favorite_item_content">
                                    <NavLink to="./product">
                                        <h2 onClick={() => setDetailProduct(item)}>{item.product.name}</h2>
                                    </NavLink>
                                    <button
                                        color="secondary"
                                        variant="outlined"
                                        size='small'
                                        className='favoriteDelete'
                                        onClick={() => removeHandler(item)}>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </Fade>
                    ))}
                </div>
            </div>
        </div >
    )
}

export default Favorite
