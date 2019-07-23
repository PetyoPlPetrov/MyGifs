import React from 'react';
import { memoizeWith, toString} from 'ramda'
import { withLoader } from './withLoader'


const Gif = memoizeWith((url)=>toString(url),({urls,title, ...rest})=>{
    return  <div className={'container'} style={{border: 2, color: 'red', paddingLeft:100, paddingTop: 100}}>
        {urls.map(e=><div className={'pic'} key={e.url}><img alt={title} src={e.url} title={title} {...rest}/></div>)}
    </div>
})

export default withLoader(Gif)