import React from 'react'
import { Button } from '@material-ui/core'

function UIButton({ className, children, onClickHandler }) {
    const handlerOnClick = () => {
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