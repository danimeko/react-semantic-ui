import React from 'react'
import { Container } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { NavigationHeader } from './headers'


export const Layout = ({ children })=>(
    <div>
        <NavigationHeader />
        <Container textAlign="center">{children}</Container>
    </div>
)

Layout.PropTypes ={
    children: PropTypes.node.isRequired
}

export default Layout;