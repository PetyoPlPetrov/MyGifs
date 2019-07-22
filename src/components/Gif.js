import React from 'react';


export  const Gif = ({urls,title, ...rest})=>{
    return  <div style={{border: 2, color: 'red', paddingLeft:100, paddingTop: 100}}>
        {urls.map(e=><div key={e.url}><img src={e.url} title={title} {...rest}/></div>)}
    </div>
}