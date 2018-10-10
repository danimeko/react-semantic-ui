import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
// eslint-disable-next-line
import { Form, Button, Statistic, FormField } from 'semantic-ui-react'

const ReduxInput = ({ input, label, type, meta: { touched, error}})=>(
    <Form.Field className={classnames({error:touched && error })}>
        {touched && error && <span className='error'>{error.message}</span>}
        <Form.Input {...input} placeholder={label} type={type}/>
    </Form.Field>
)
ReduxInput.propTypes= {
    input:PropTypes.shape({}).isRequired,
    label:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    meta :PropTypes.shape({}).isRequired
};

const ReduxButton = ({ children, color, size })=>(
    <Button color={color} fluid size={size}>
        <Statistic size='mini' inverted>
            <Statistic.Value>{children}</Statistic.Value>
        </Statistic>
    </Button>
);

ReduxButton.propTypes = {
    color  : PropTypes.string,
    size: PropTypes.string,
    children: PropTypes.string.isRequired
};

ReduxButton.defaultProps = {
    color : 'red',
    size : 'massive'
};

export { ReduxButton , ReduxInput }
