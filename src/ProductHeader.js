import React, { useState } from 'react'
import './ProductHeader.css'
import { BsSearch } from 'react-icons/bs';
import { GrFormPrevious } from 'react-icons/gr'
import { GrFormNext } from 'react-icons/gr'


function ProductSlide() {
    const [styles, setStyles] = useState(1)
    const [transition, setTransition] = useState('all 0.6s')
    let tranSlate = {
        transform: `translateX(calc(${-styles * 80}vw - 15px))`,
        transition: transition
    }


    let random = Math.floor(Math.random() * 3);
    let headerImg = [
        'https://images.puma.com/image/upload/q_auto,f_auto,w_1440/regional/%7Eregional%7EPNA%7Eothers%7EKOP%7EHome%7ESS21%7ERS+Curve+%7E21_SS_RS+CURVE+ADDITIONAL+IMAGES_SITE_1440x500_0000_1.jpg/fmt/jpg/fmt/png',
        'https://images.puma.com/image/upload/q_auto,f_auto,w_1440/regional/%7Eregional%7EPNA%7Eothers%7EKOP%7EHome%7ESS21%7EPeanuts%7E21SS_ECOM_MF_SP_SELECT_Peanuts_HotSpotHero_Desktop_1440x500_1.jpg/fmt/jpg/fmt/png',
        'https://th.bing.com/th/id/OIP.ZBN-HKochUAO-NCiYHM1YAHaEo?w=290&h=181&c=7&o=5&dpr=1.5&pid=1.7'
    ]
    let headerContent = [
        {
            title: "New style from Puma",
            quote: "New style,new energy",
        },
        {
            title: 'TREAT YOUR TRAINING',
            quote: 'Feel comfortable with this style for your training',
        },
        {
            title: 'Nike Basket 4',
            quote: 'Coming soon',
        }
    ]
    let headerBackground = {
        backgroundImage: `url(${headerImg[random]})`
    }
    console.log(random)
    return (
        <div className='header'>

            <header>
                {
                    <div style={headerBackground} className={`slide-item item-slide${3}`}>
                        <div className={`item-slide${random + 1}-content`}>
                            <div className={`line${random + 1}`}>
                                <h2>{headerContent[random].title}</h2>
                            </div>
                            <div className={`line${random + 1}`}>
                                <p>{headerContent[random].quote}</p>
                            </div>
                            <button>Check out</button>
                        </div>
                    </div>
                }
            </header>
        </div >
    )
}
export default ProductSlide