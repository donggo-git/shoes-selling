import React, { useState, useEffect } from 'react'
import './ProductHeader.css'


function ProductSlide() {
    const [activeSlide, setActiveSlide] = useState(0)
    let headerContents = [
        {
            title: "New style from Puma",
            quote: "New style,new energy",
            imgURL: 'https://images.puma.com/image/upload/q_auto,f_auto,w_1440/regional/%7Eregional%7EPNA%7Eothers%7EKOP%7EHome%7ESS21%7ERS+Curve+%7E21_SS_RS+CURVE+ADDITIONAL+IMAGES_SITE_1440x500_0000_1.jpg/fmt/jpg/fmt/png'
        },
        {
            title: 'TREAT YOUR TRAINING',
            quote: 'Feel comfortable with this style for your training',
            imgURL: 'https://images.puma.com/image/upload/q_auto,f_auto,w_1440/regional/%7Eregional%7EPNA%7Eothers%7EKOP%7EHome%7ESS21%7EPeanuts%7E21SS_ECOM_MF_SP_SELECT_Peanuts_HotSpotHero_Desktop_1440x500_1.jpg/fmt/jpg/fmt/png'
        },
        {
            title: 'Nike Basket 4',
            quote: 'Coming soon',
            imgURL: 'https://th.bing.com/th/id/OIP.ZBN-HKochUAO-NCiYHM1YAHaEo?w=290&h=181&c=7&o=5&dpr=1.5&pid=1.7'
        }
    ]


    const changeSlideHandler = (e) => {
        setActiveSlide(e.target.id)
    }
    return (
        <div className='header'>

            <header>
                {/*slide container*/}
                <div className='header__slideContainer'>
                    {/*slides */}
                    <div
                        className='header__slider'
                        style={{
                            transform: `translateX(-${activeSlide / 3 * 100}%)`
                        }}
                    >
                        {headerContents.map((slide, slideIndex) => (
                            <div
                                key={slide.title}
                                className='header__slide'
                                style={{
                                    backgroundImage: `url(${slide.imgURL})`,
                                    backgroundSize: 'cover'
                                }}
                            >
                                <div className={`item-slide${slideIndex + 1}-content`}>
                                    <div className={`line${slideIndex + 1}`}>
                                        <h2>{slide.title}</h2>
                                    </div>
                                    <div className={`line${slideIndex + 1}`}>
                                        <p>{slide.quote}</p>
                                    </div>
                                    <button>Check out</button>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                {/*slideDots */}
                <div className='header__slideDots'>
                    {/*slideDot */}
                    {
                        headerContents.map((slideDot, slideIndex) => (
                            <div
                                key={slideDot.title}
                                className='header__slideDot'
                                style={
                                    activeSlide == slideIndex ?
                                        { 'background-color': '#027DEF' } :
                                        {}
                                }
                                id={slideIndex}
                                onClick={changeSlideHandler}
                            />
                        ))
                    }
                </div>
            </header>
        </div >
    )
}
export default ProductSlide