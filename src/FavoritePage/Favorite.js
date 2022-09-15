import React, { useEffect, useState } from 'react'
import "./Favorite.css"

import { NavLink } from 'react-router-dom'
import Fade from '@material-ui/core/Fade'
import Button from '../UI/Button'
import * as controller from '../helper/controller'


function Favorite({ setDetailProduct, discountCode }) {
    const [favoriteList, setFavoriteList] = useState([]);
    const modalContent = function () {
        switch (discountCode) {
            case 0:
                return (
                    <React.Fragment>
                        <h1>
                            <span></span>
                            Oops, unfortunately you're not qualify for any discount code right now
                        </h1>
                        <p>
                            Sorry there isn't any discount code for you. Better luck next time!
                        </p>
                    </React.Fragment>
                )
            case 1:
            case 2: return (
                <React.Fragment>
                    <h1>
                        <span></span>
                        Congrats, you're qualify to one of our discount code
                    </h1>
                    <p>
                        Your discount code is: discount{discountCode * 10}.
                        To use it please enter the code to your cart before check out
                    </p>
                </React.Fragment>)
        }
    }


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

                                    <Button
                                        color="secondary"
                                        variant="outlined"
                                        size='small'
                                        className='favoriteDelete'
                                        onClickHandler={() => removeHandler(item)}>
                                        Remove
                                    </Button>

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
