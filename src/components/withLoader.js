import React from 'react'

export const withLoader = (WrappedComponent) => {
    return function ({ isLoading, ...props }) {
        return (<>
            <WrappedComponent {...props} />
            {(isLoading) && <div className='loader'></div>}
        </>)
    }
}