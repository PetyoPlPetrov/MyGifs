import React from 'react';
import { memoizeWith, toString} from 'ramda'
import { withLoader } from './withLoader'


const Gif = memoizeWith((url)=>toString(url),({urls,title, ...rest})=>{
    return  <div style={{border: 2, color: 'red', paddingLeft:100, paddingTop: 100}}>
        {urls.map(e=><div key={e.url}><img alt={title} src={e.url} title={title} {...rest}/></div>)}
    </div>
})

export default withLoader(Gif)