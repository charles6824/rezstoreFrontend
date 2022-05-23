import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title}) => {
    return (
        <Helmet>
            <title>{title}</title>
        </Helmet>
    )
}

Meta.defaultProps = {
    title: 'Welcome To Rez Store || Home of quality Products'
}

export default Meta
