import React from 'react'
//import { Header , Divider , Label } from 'semantic-ui-react'
//import { Link } from 'react-router-dom'
import { Layout } from './layouts'
import SigninForm from './contents/forms/SigninForm';

const SigninPage = ()=>(
<Layout>
    <div>
    <SigninForm />
    </div>
</Layout>
)

export default SigninPage