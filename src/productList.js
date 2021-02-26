
import React, { useState } from 'react'
import { source } from './source'
import NextPageofproduct from './nextPageofproduct'
import './product.css'
import './detailPage.css'
import Product_detail from './product-detail'
function ProductList(props) {
    //filter product by brand
    let filterProduct = source.filter((product) => product.brand === props.brand)
    //next page when filter other brand
    let nextPageFilter = source.filter((product) => product.brand === props.nextPageBrand)
    //can be call main state, contain the detail of product when click
    let [detailShowUp, setDetailShowUp] = useState({
        product: { color: [], img: [] },
    });
    //state to change animation when showing the detail
    let [detailStyle, setDetailStyle] = useState({

        animationName: 'none',
        animationDelay: '0.1s',
        animationDuration: '0.8s',
        animationFillMode: 'forwards'
    })
    //next color for container of product detail page
    let [nextContainerStyle, setNextContainerStyle] = useState({
        background: detailShowUp.product.color[0]
    })
    //color for container of product detail page
    let [containerStyle, setContainerStyle] = useState({ background: detailShowUp.product.color[0] })
    //shoes  source for detail page
    let [shoesSource, setShoesSource] = useState(detailShowUp.product.img[0])
    //method to show the detail when click
    const handleDetailShow = (product) => {

        let updateDetail = { ...detailShowUp };

        updateDetail.product = product

        setDetailShowUp(updateDetail)
        setShoesSource(updateDetail.product.img[0])
        setContainerStyle({ background: updateDetail.product.color[0] })
        console.log(detailShowUp.product)
        setTimeout(DetailAnimation(), 100)
    }
    //animation when showing the detail
    const DetailAnimation = () => {
        let updateDetail = { ...detailStyle };
        updateDetail.animationName = 'detailShowUp';
        updateDetail.display = 'fixed'
        setDetailStyle({ ...updateDetail })
    }
    //animation when change the color in detail color
    const handleColorClick = (color) => {
        let imgList = detailShowUp.product.img;
        let colorList = detailShowUp.product.color
        //change color for next page of detail first and make it goes from right to left and then get back to it position
        setNextContainerStyle({
            background: colorList[colorList.indexOf(color)],
            animationName: 'nextPageStyle', animationDuration: '0.9s'
        })
        //when next page goes half of it way change shoes image
        setTimeout(() => (
            setContainerStyle({ background: colorList[colorList.indexOf(color)] }),
            setNextContainerStyle({ background: colorList[colorList.indexOf(color)] })
        ), 900)
        //finally change the color of detail page
        setTimeout(() => setShoesSource(imgList[colorList.indexOf(color)]), 450)
    }
    return (
        <div className='product-list-container'>
            <div className='product-list'>
                {filterProduct.map((product, index) => (
                    <div key={index} className='product-item' onClick={() => handleDetailShow(product)}>
                        <img src={product.img[0]} height='100%' width='100%' alt={product.name + ' shoes'} />
                        <div className='product-detail'>
                            <h3>{product.name}</h3>
                            <p className='brand'>{product.brand}</p>
                            <p>${product.price}</p>
                        </div>
                    </div>
                ))}

            </div>
            <NextPageofproduct nextPageFilter={nextPageFilter} className='nextProduct-page' nextPageStyle={props.nextPageStyle} />
            <Product_detail product={detailShowUp.product} styles={detailStyle} shoesSource={shoesSource} containerStyle={containerStyle} nextContainerStyle={nextContainerStyle}
                handleColorClick={handleColorClick} />
        </div>
    )
}
export default ProductList