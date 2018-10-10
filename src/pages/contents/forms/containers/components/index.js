import React , { Component } from 'react'
import PropTypes from 'prop-types'
import { Form, Button } from 'semantic-ui-react'
import { Field } from 'redux-form'
import { ReduxInput, ReduxButton } from './controls'

class SigninComponent extends Component {
    state = { 
        checked : false
    }

    handleShowPassword = ( e , { checked }) => this.setState({
        checked
    }) 

    render () {
        const { checked } = this.state
        const { onSubmit, handleSubmit, loading } = this.props

        return (
            <Form onSubmit={handleSubmit(onSubmit)} loading= {loading}>
                <Field
                name = 'email'
                label = 'Enter Email'
                component = {ReduxInput}
                type = 'text'/>
                
                <Field
                name = 'password'
                label = 'Enter Password'
                component = { ReduxInput }
                type = { checked ? 'text' : 'password'}/>

                <Form.Checkbox
                label = 'Show Password?'
                onChange = { this.handleShowPassword }/>

                <ReduxButton>Sign in</ReduxButton>
            </Form>
        )
    }

}

SigninComponent.propTypes = { 
    handleSubmit :PropTypes.func.isRequired,
    onSubmit :PropTypes.func.isRequired,
    loading :PropTypes.bool
}

SigninComponent.defaultProps = {
    loading : false
}

const SocialComponent = () => (
    <div>
        <Button
            color='facebook'
             as='a'
            href = 'http://localhost:3000/auth/facebook'>
        Facebook
        </Button>

        <Button
            color='google plus'
             as='a'
            href = 'http://localhost:3000/auth/google'>
        Google plus
        </Button>
    </div>
)

export { SigninComponent , SocialComponent }