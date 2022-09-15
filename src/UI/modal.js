import React from 'react'
import './modal.css'
import { AiOutlineClose } from 'react-icons/ai'

function FavoriteModal(props) {
    return (
        <React.Fragment>
            <div className='modal__content'>
                {/**close btn */}
                <AiOutlineClose />
                {/*title */}

            </div>
            <div className='modal'></div>
        </React.Fragment>
    )
}

export default FavoriteModal