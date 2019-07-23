import React from 'react';

export  const withLoader = (WrappedComponent)=>{
    return function ({isLoading,...props}) {
        return (<div>
            <WrappedComponent {...props} />
            {(isLoading) && <div className='loader'></div>}
        </div>);
    }
}