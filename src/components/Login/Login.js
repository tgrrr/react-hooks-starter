import React from 'react';
import { Button, Form, Input } from '../../common/ui/ui';
import styled from 'styled-components';
import ErrorBoundary from '../../common/ErrorBoundary/ErrorBoundary'
import * as Yup from 'yup';

const Login = ({
  email,
  password,
  isSubmitting,
  handleSubmit,
  successMessage,
  }) => {

  const SignupSchema = Yup.object().shape({
    Login__email: Yup.string()
      .email('Invalid email')
      .required('Required'),
    Login__password: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  return (
    <ErrorBoundary componentName='Login'>
      <LoginStyled>
        <h1>Login Page</h1>

        <Form 
          onSubmit={handleSubmit}
          validationSchema={SignupSchema}
          initialValues={{ 
            Login__email: email, 
            Login__password: password
          }}
          isSubmitting
        >
          <Input
            label='email@address.com'
            name='Login__email'
            placeholder='email@address.com'
          />

          <Input
            label='password'
            name='Login__password'
            placeholder='password'
            type='password'
          />

          <Button 
            dataId='Login__submit'
            disabled={isSubmitting}
            type='submit'
          >
            Login
          </Button>
        </Form>
        {successMessage && <div data-id='Login__successMessage'>{successMessage}</div>}

      </LoginStyled>
    </ErrorBoundary>
  );
}

const LoginStyled = styled.div`
  .Login {
    font-size: 12px;
  }
  .error {
    color: red;
  }
`;

export default Login;
