import React from 'react';
import { 
  Button, 
  FormikDropdown,
  FormikForm, 
  FormikInput, 
  FormikToggle, 
  } from '../../common/ui/ui';
import styled from 'styled-components';
import ErrorBoundary from '../../common/ErrorBoundary/ErrorBoundary'
import * as Yup from 'yup';

const ranges = [
  {
    value: 'none',
    label: 'None',
  },
  {
    value: '0-20',
    label: '0 to 20',
  },
  {
    value: '21-50',
    label: '21 to 50',
  },
  {
    value: '51-100',
    label: '51 to 100',
  },
];

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
        <FormikForm 
          onSubmit={handleSubmit}
          validationSchema={SignupSchema}
          initialValues={{ 
            Login__email: email, 
            Login__password: password,
            rememberMe: true,
            foo: 'none',
          }}

          isSubmitting
        >

          <FormikInput
            label='email@address.com'
            name='Login__email'
            placeholder='email@address.com'
          />

          <FormikInput
            label='password'
            name='Login__password'
            placeholder='password'
            type='password'
          />
          <br />
          <FormikToggle
            label='Remember me on this computer?'
            name='rememberMe'
          />
          <br />
          <Button 
            dataId='Login__submit'
            disabled={isSubmitting}
            type='submit'
          >
            Login
          </Button>
        </FormikForm>
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
