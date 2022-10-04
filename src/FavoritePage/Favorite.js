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
import Card from '../UI/Card'

function Favorite({ setDetailProduct, discountCode, changeDetailProduct }) {
    const [favoriteList, setFavoriteList] = useState([]);
    const [isModalShow, setIsModalShow] = useState(false)
    const [favoriteLength, setFavoriteLength] = useState(controller.getListLength('favorite'))
    const cartLength = controller.getListLength('cart')

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
            <div className='Favorite_page'>
                <div className="Favorite_container">
                    <div className='Favorite_title'>
                        <h2>
                            Your favorite list ({favoriteList.length})

                        </h2>
                        <Button
                            className="Button--discount"
                            onClickHandler={handlerModal}
                        > Discount code</Button>
                    </div>
                    <div className='Favorite_list'>
                        {controller.getFavoriteList().map(item => (
                            <Fade
                                in={item.id}
                                timeout={600}
                            >
                                <div className='Favorite_item'>
                                    <Card
                                        product={item}
                                        btn1={"Remove"}
                                        btn1Method={removeHandler}
                                        btn2={"Detail"}
                                        btn2Method={setDetailProduct}
                                    />
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
        </React.Fragment >
    )
}

export default Favorite
