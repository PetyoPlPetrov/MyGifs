import React from 'react'
import {
    memoizeWith,
    toString,
} from 'ramda'


const Gif = memoizeWith((urls) => toString(urls), ({ urls, ...rest }) => {
    return <>
        {urls.map(e => <div className={'gif'} key={e.url}><img alt={e.title} src={e.url} title={e.title} {...rest}/>
        </div>)}
    </>
})

export default (Gif)