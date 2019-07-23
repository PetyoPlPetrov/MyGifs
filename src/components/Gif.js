import React from 'react'
import {
    memoizeWith,
    toString,
    cond,
    equals,
    always,
    T
} from 'ramda'
import { withLoader } from './withLoader'

const generateGiffClassnames = cond([
    [equals(true), always('threeColumnsContainer')],
    [T, always('oneColumnContainer')],

])

const Gif = memoizeWith((url) => toString(url), ({ urls, title, columns, ...rest }) => {
    return <div className={generateGiffClassnames(columns)}>
        {urls.map(e => <div className={'pic'} key={e.url}><img alt={title} src={e.url} title={title} {...rest}/></div>)}
    </div>
})

export default withLoader(Gif)