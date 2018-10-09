import React from 'react'
import { Header , Divider , Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Layout } from './layouts'

const SigninPage = ()=>(
<Layout>
    <div>
        <Divider hidden />
        <Header as="h1">
            Learning React plus Redux plus Feathers.
        </Header>
        <Header color="blue">
            {"You are "} awosome and doing amazing coding
        </Header>
        <Divider section hidden />
        <Link to="/signup">
            <Label as="a" color="teal" tag size="huge">
                You may sign up if not yet regestered
            </Label>
        </Link>
        <Divider section hidden />
            <Label  color="teal" tag size="huge">
                you are signed in 
            </Label>
        
    </div>
</Layout>
)

export default SigninPage