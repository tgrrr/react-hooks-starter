import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import ErrorBoundary from '../../common/ErrorBoundary/ErrorBoundary'

const Login = ({
  email, 
  password, 
  successMessage, 
  setSuccessMessage}) => {

  function validateEmail(value) {
    let error;
    if (!value) {
      error = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  }

  function validatePassword(value) {
    let error;
    if (!value) {
      error = 'Required';
    }
    return error;
  }

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setSuccessMessage(`email: ${values.email} password: {obscured}`)
      setSubmitting(false);
    }, 400);
  }

  return (
    <ErrorBoundary componentName='Login'>
      <LoginStyled>
        Login Page

        <Formik
          initialValues={{
            email,
            password,
          }}
          onSubmit={onSubmit}
        >
          {({ 
            isSubmitting,
          }) => (
            <Form>
              <Field
                data-id='Login__email'
                label='email@address.com'
                name="email"
                placeholder='email@address.com'
                validate={validateEmail} 
              />
              <br />
              <ErrorMessage name="email" className="error" component="div" data-id='Login__email--error' />
              <br />
              <Field
                data-id='Login__password'
                label='password'
                name='password'
                placeholder='password'
                type='password'
                validate={validatePassword}
              />
              <br />
              <ErrorMessage name="password" className="error" component="div" data-id='Login__password--error' />  
              <br />
              <button 
                data-id='Login__submit'
                disabled={isSubmitting}
                type='submit'
              >
                Login
              </button>
            </Form>
          )}
        </Formik>
        {successMessage && <div data-id='Login__successMessage'>{successMessage}</div>}
      </LoginStyled>
    </ErrorBoundary>
  );
}

const LoginStyled = styled.div`
  .Login {
  }
  .error {
    font-size: 12px;
    color: red;
  }
`;

export default Login;
