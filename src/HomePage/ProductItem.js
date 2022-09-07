import React, { useState, useEffect } from 'react'
import UIButton from '../UI/Button'
import "./ProductItem.css"
import { NavLink } from 'react-router-dom'
import { db } from '../firebase'
function ProductItem({ product, changeDetailProduct, removeFromFavorite, addProduct }) {
    const [imgOrder, setImgOrder] = useState(0)
    const [FavoriteID, setFavoriteID] = useState([]);
    const handleHover = (imgSrc) => {
        setImgOrder(product.product.img.indexOf(imgSrc))
    }
    //////


    /////////

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

    const checkFavoriteList = (product) => {
        return FavoriteID.includes(product.id);
    }

    return (
        <div className='ProductItem' >
            <NavLink to="/product">
                <img src={product.product.img[imgOrder]} height='100%' width='100%' alt={product.name + ' shoes'} onClick={() => changeDetailProduct(product)} />
            </NavLink>
            <div className='ProductDetail'>
                <NavLink to="/product">
                    <h3 onClick={() => changeDetailProduct(product)}>{product.product.name}</h3>
                </NavLink>
                <p className='brand'>{product.product.brand}</p>
                <p>${product.product.price}</p>
            </div>
            <div className="ProductDetail_imgList">
                <div className='img-list'>
                    {
                        product.product.img.map(imgSrc => (
                            <img src={imgSrc} key={imgSrc} onMouseEnter={() => handleHover(imgSrc)}
                            />
                        ))
                    }
                </div>
                <React.Fragment>
                    <UIButton
                        className="like-btn"
                        onClickHandler={() => checkFavoriteList(product) ?
                            removeFromFavorite(product.id) : addProduct(product, '', 'favorite')
                        }

                    >
                        Like
                    </UIButton>
                    <NavLink to="/product">
                        <UIButton
                            className='detail-btn'
                            onClickHandler={() => changeDetailProduct(product)}
                        >
                            Detail
                        </UIButton>
                    </NavLink>
                </React.Fragment>
            </div>
        </div >
    )
}

export default ProductItem
