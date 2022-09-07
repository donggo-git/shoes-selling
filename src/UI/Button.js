import React from 'react'
import { Button } from '@material-ui/core'

function UIButton({ className, children }) {
    return (
        <Button
            size="medium"
            className={className}
        >
            {children}
        </Button>
    )
}

export default UIButton