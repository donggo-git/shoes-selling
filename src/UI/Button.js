import React from 'react'
import { Button } from '@material-ui/core'

function UIButton({ className, children, onClickHandler }) {
    const handlerOnClick = (e) => {
        e.preventDefault()
        console.log(e)
        onClickHandler()
    }
    return (
        <Button
            size="medium"
            className={className}
            onClick={handlerOnClick}
        >
            {children}
        </Button>
    )
}

export default UIButton