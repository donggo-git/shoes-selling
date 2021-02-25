import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import './detailPage.css';
import './product.css'
function Product_detail(props) {
    let [containerStyle, setContainerStyle] = useState({ background: props.product.color[0] })
    let [nextContainerStyle, setNextContainerStyle] = useState({
        background: props.product.color[0]
    })
    let [shoesSource, setShoesSource] = useState(props.product.img[0])
    const handleColorClick = (color) => {
        let imgList = props.product.img;
        let colorList = props.product.color

        setNextContainerStyle({
            background: colorList[colorList.indexOf(color)],
            animationName: 'nextPageStyle', animationDuration: '0.9s'
        })
        setTimeout(() => (
            setContainerStyle({ background: colorList[colorList.indexOf(color)] }),
            setNextContainerStyle({ background: colorList[colorList.indexOf(color)] })
        ), 900)
        setTimeout(() => setShoesSource(imgList[colorList.indexOf(color)]), 450)
    }
    return (
        <div className='modal'>
            <div className='detail-container' style={containerStyle} />
            <div className='detail-container next-detail-container' style={nextContainerStyle} />
            <div className='detail' >
                <div className='detail-img'>
                    <img src={shoesSource} />
                    <div className='color-list'>
                        {props.product.color.map((color) =>
                            <div style={{ background: color }} className='color-item' onClick={() => handleColorClick(color)} />

                        )}
                    </div>
                </div>
                <div className='detail-content'>
                    <AiOutlineClose className='close-btn' />
                    <h2>{props.product.name}</h2>
                    <p>{props.product.brand}</p>
                    <p>{props.product.price}</p>
                    <p>{props.product.detail}</p>
                </div>
            </div>
        </div>
    )
}
export default Product_detail