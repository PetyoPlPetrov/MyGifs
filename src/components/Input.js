import React from 'react'
import {Input as RInput} from 'reactstrap'

export const Input = ({onChange, ...rest}) => {
    return <RInput onChange={onChange} {...rest}/>
}