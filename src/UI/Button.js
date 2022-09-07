import React from 'react'
import { Button } from '@material-ui/core'

function UIButton({ className, children, onClickHandler }) {
    return (
        <Button
            size="medium"
            className={className}
            onClick={onClickHandler}
        >
            {children}
        </Button>
    )
}

export default UIButton