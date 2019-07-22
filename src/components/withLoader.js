import React from 'react';

export  const withLoader = (WrappedComponent)=>{
    return function ({isLoading,...props}) {
        return (<div>
            <WrappedComponent {...props} />
            {(isLoading) && <h1>Fetching the gifs for you(I am a 3 sec loader : ])...</h1>}
        </div>);
    }
}