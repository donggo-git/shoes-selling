import React, { useEffect, useState } from 'react'
import "./Favorite.css"
import { NavLink } from 'react-router-dom'
import Fade from '@material-ui/core/Fade'
import Button from '../UI/Button'
import * as controller from '../helper/controller'
import Modal from '../UI/Modal'
import Nav from '../UI/Nav'
import { AiFillGift } from 'react-icons/ai'
import { FcCancel } from 'react-icons/fc'

function Favorite({ setDetailProduct, discountCode, changeDetailProduct }) {
    const [favoriteList, setFavoriteList] = useState([]);
    const [isModalShow, setIsModalShow] = useState(true)
    const [cartLength, setCartLength] = useState(controller.getListLength('cart'))
    const [favoriteLength, setFavoriteLength] = useState(controller.getListLength('favorite'))

    const modalContent = function () {
        switch (discountCode) {
            case 0:
                return (
                    <React.Fragment>
                        <h1>
                            <span><FcCancel /> </span>
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
                        <span>< AiFillGift /> </span>
                        Congrats, you're qualify to one of our discount code
                    </h1>
                    <p>
                        Your discount code (discount {discountCode * 10}%) is: <span>discount{discountCode * 10}</span>.
                        To use it please enter the code to your cart before check out
                    </p>
                </React.Fragment>)
        }
    }

    const handlerModal = () => {
        setIsModalShow(!isModalShow)
    }
    //get favorite list
    useEffect(() => {
        setFavoriteList(controller.getFavoriteList())
    }, [])

    const removeHandler = (product) => {
        controller.removeProduct(product, 'favorite')
        const newFavorite = controller.getFavoriteList()
        setFavoriteList([...newFavorite])
        setFavoriteLength(controller.getListLength('favorite'))
    }

    return (
        <React.Fragment>
            <Nav cartLength={cartLength} favoriteLength={favoriteLength} changeDetailProduct={changeDetailProduct} />
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
                                            <img src={Array.isArray(item.product.img) ? item.product.img[0] : item.product.img} height="100%" width="100%"
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
                {
                    isModalShow &&
                    <Modal closeModal={handlerModal}>{modalContent()}</Modal>
                }
            </div >
        </React.Fragment>
    )
}

export default Favorite
