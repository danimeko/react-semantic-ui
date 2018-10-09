import React from 'react'
import { Header , Divider , Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { Layout } from './layouts'

const SignupPage = ()=>(
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
        
            <Label  color="teal" tag size="huge">
                You signed up 
            </Label>
        <Divider section hidden />
        <Link to="/signin">
            <Label as="a" color="teal" tag size="huge">
                You may sign in if you are registered
            </Label>
        </Link>
    </div>
</Layout>
)

export default SignupPage