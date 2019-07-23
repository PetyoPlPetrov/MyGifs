import React from 'react';
import {withLoader} from '../components/withLoader'

const Layout = ({classname, children, ...rest}) => {
    return <div className={classname} {...rest}>
        {children}
    </div>
}
export default withLoader(Layout)