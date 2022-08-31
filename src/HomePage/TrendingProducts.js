import React, { useState, useEffect } from 'react'
import "./TrendingProducts.css"
import { AiOutlineRight } from 'react-icons/ai'
import { AiOutlineLeft } from 'react-icons/ai'
import { db } from '../firebase'
import { NavLink } from 'react-router-dom'

function TrendingProducts({ changeDetailProduct }) {
    const [TrendingProduct, setTrendingProduct] = useState([]);
    const getProduct = () => {

        db.collection('products').onSnapshot((snapshot) => {
            let tempData = [];
            tempData = snapshot.docs.map((doc) => (
                {
                    id: doc.id,
                    product: doc.data()
                }

            ));
            trendingProductModify(tempData.filter(product => (product.product.trending == true)))

        })
    }
    useEffect(() => {
        getProduct();
    }, [])

    const trendingProductModify = (tempData) => {
        let newTrendingProduct = []

        for (let i = 2; i < tempData.length; i += 3) {
            const TrendingPack = [tempData[i - 2], tempData[i - 1], tempData[i]]
            newTrendingProduct.push(TrendingPack)
        }
        setTrendingProduct(newTrendingProduct);
    }

    const [translateProgress, setTranslateProgress] = useState(0)
    let styledTrending = {
        transform: `translateX(${translateProgress}%)`
    }
    const handleScrollTrending = (button) => {
        if (button == "next") {
            if (translateProgress < 75) {
                setTranslateProgress((pre) => pre -= 25)
            }
            return
        }
        else {
            if (translateProgress)
                setTranslateProgress((pre) => pre += 25)
            return;
        }
    }
    return (
        <div className="Trending_container" id='trending'>
            <h2 className="title">Trending</h2>
            <div
                className="Trending_btn previousBtn_container"
                onClick={() => handleScrollTrending("previous")}
            ><AiOutlineLeft /></div>
            <div
                className="Trending_btn nextBtn_container"

                onClick={() => handleScrollTrending("next")}>
                <AiOutlineRight />
            </div>
            <div className='Trending_slide_container'>

                <div className="Trending_slides"
                    style={styledTrending}>
                    {
                        TrendingProduct.map(slicePack => (
                            <div className='Trending_slide'>
                                {
                                    slicePack.map(product => (
                                        <NavLink to="/product" key={product.id}>
                                            <div className="Trending_slide_product" onClick={() => changeDetailProduct(product)}>
                                                <img src={product.product.img[0]} />
                                                <p>{product.product.name}</p>
                                                <p>$ {product.product.price}</p>
                                            </div>
                                        </NavLink>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default TrendingProducts
