import React from 'react'
import {
    memoizeWith,
    toString,
} from 'ramda'


const Gif = memoizeWith((urls) => toString(urls), ({ initialPageState, urls, ...rest }) => {
    if (!initialPageState && urls.length === 0) {
        return <h1>Empty Results</h1>
    }
    return <>
        {urls.map(e => <div className={'gif'} key={e.url}><img alt={e.title} src={e.url} title={e.title} {...rest}/>
        </div>)}
    </>
})

export default (Gif)