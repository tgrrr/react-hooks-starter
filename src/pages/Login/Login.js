import React from 'react';
import { Formik } from 'formik';

import styled from 'styled-components';
import ErrorBoundary from '../../common/ErrorBoundary/ErrorBoundary'

const Login = () => (
  <ErrorBoundary componentName='Login'>
    <LoginStyled>
      Login Page
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          let errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit}>
            <input
              type='email'
              name='email'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              data-id='Login__email'
            /> 
            <span data-id='Login__email--error'>
              {errors.email && touched.email && errors.email}
            </span>
            <br />
            <input
              type='password'
              name='password'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              data-id='Login__password'
            />
            <span data-id='Login__password--error'>
              {errors.password && touched.password && errors.password}
            </span>
            <br />
            <button
              type='submit'
              disabled={isSubmitting}
              data-id='Login__submit'
            >
              Submit
            </button>
          </form>
        )}
      </Formik>
    </LoginStyled>
  </ErrorBoundary>
);

const LoginStyled = styled.div`
  .Login {}
`;

export default Login;
