import React from 'react'
import './Modal.css'
import { AiOutlineClose } from 'react-icons/ai'
import Button from './Button'

function Modal(props) {
    return (
        <React.Fragment>
            <div className='modal__content'>
                {/**close btn */}
                <Button className='modal__button' onClickHandler={props.closeModal}>
                    <AiOutlineClose />
                </Button>
                {/*title */}
                {props.children}
            </div>
            <div className='modal' onClick={props.closeModal}></div>
        </React.Fragment >
    )
}

export default Modal