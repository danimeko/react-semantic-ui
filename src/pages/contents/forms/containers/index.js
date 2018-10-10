import React from 'react'
import { reduxForm } from 'redux-form'
import { SigninComponent, SocialComponent } from './components'
import Validator from 'validator'

const validate = (values) => {
    const errors = {}

    if(!values.email){
        errors.email = {
            message: 'Email is required to signin'
        }
    } else if(!Validator.isEmail(values.email)){
        errors.email = {
            message: 'Invalid email address'
        }
    }

    if(!values.password){
        errors.password = {
            message: 'Password is required to signin'
        }
    }
return errors;
}

const SigninContainer = reduxForm({
    validate,
    form: 'SigninForm'
})(props => <SigninComponent {...props} />)

const SocialContainer = <SocialComponent />

export {
    SigninContainer,
    SocialContainer
}