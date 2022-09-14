import React, { useState, useEffect } from 'react'
import Button from '../UI/Button'
import Slide from '@material-ui/core/Slide'
import './detailPage.css'
import { db } from 'C:/project/shoes_selling/src/firebase'

function DetailPage({ products, addToCart, addToFavorite, removeFromFavorite, addProduct }) {
    const [mainImg, setMainImg] = useState(0)
    const [isSlide, setIsSlide] = useState(true)
    const [FavoriteID, setFavoriteID] = useState([]);
    const changeMainImg = (srcImg) => {
        setIsSlide(false)
        setMainImg(products.product.img.indexOf(srcImg))
        setTimeout(() => setIsSlide(true), 200)
    }
    const styleImgList = {
        border: '1px solid #03a9f4'
    }
    //get Favorite list ID
    useEffect(() => {
        db.collection('favorite').onSnapshot((snapshot) => {
            let tempData = []
            tempData = snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    product: doc.data()
                }
            ))
            setFavoriteID(tempData.map(product => product.id));
        })
    }, [])

    const checkFavoriteList = (products) => {
        return FavoriteID.includes(products?.id);
    }

    return (
        <div className="detailPage">
            <div className="mainImg_container">
                <Slide in={isSlide} timeout={{ enter: 400, exit: 0 }} direction={'left'}>
                    <img src={products?.product?.img[mainImg]} height="100%" width="100%" />
                </Slide>
            </div>

            <div className='product_detail'>
                <div className='imgList'>
                    <h2>{products?.product?.name}</h2>
                    <p>$ {products?.product?.price}</p>
                    <div className='imgList_container'>
                        {
                            products?.product?.img.map(singleImg => (
                                <img
                                    key={products.product.img.indexOf(singleImg)}
                                    src={singleImg} height="100%" onClick={(e) => changeMainImg(singleImg)}
                                    style={products?.product.img.indexOf(singleImg) == mainImg ? styleImgList : {}} />
                            ))
                        }
                    </div>
                    <p className='product_detail_description'>{products?.product?.description}</p>
                    <Button onClickHandler={(e) => addProduct(products, mainImg, 'cart')} className="Detail__btn--addToCart">Add to cart</Button>
                    <Button
                        onClickHandler={() => checkFavoriteList(products) ?
                            removeFromFavorite(products.id) : addProduct(products, '', 'favorite')
                        }
                        className="Detail__btn--like">
                        Like
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default DetailPage
