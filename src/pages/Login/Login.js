import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import ErrorBoundary from '../../common/ErrorBoundary/ErrorBoundary'
import * as Yup from 'yup';

const Login = ({
  email, 
  password, 
  successMessage, 
  setSuccessMessage}) => {

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

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
          validationSchema={SignupSchema}
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
