import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Segment, Header, Divider } from 'semantic-ui-react'
import { SigninContainer, SocialContainer } from './containers'

class SigninForm extends Component{
    onSubmit = formData => { 
        console.log('Form data: ', formData)
    }

    render(){
        return (
            <Container text textAlign='center'>
                <Divider section hidden />
                <Divider section hidden />
                <Segment>
                    <Divider hidden />
                    <Header as='h2'> Sign in </Header>
                    <Divider hidden />
                    <SigninContainer onSubmit={this.onSubmit} />
                    <Divider section hidden />
                </Segment>
                <Divider section hidden />
                <Header as='h2'>Not yer registered?</Header>
                <Link to='/signup'>
                <Header as='h3'>Sign Up Here</Header>
                </Link>
                <Divider section hidden />
                <Header as="h2"> ---------- OR SIGN IN WITH ----------</Header>
                <Divider section hidden />
                
            </Container>
        )
     }
}

export default SigninForm;