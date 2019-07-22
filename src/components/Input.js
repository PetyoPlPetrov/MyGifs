import React from 'react';


export  const Input = ({onChange, ...rest})=>{
    return <input onChange={onChange} {...rest}/>
}