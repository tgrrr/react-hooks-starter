import React, {useState} from 'react';
import ErrorBoundary from '../../common/ErrorBoundary/ErrorBoundary'
import Login from './Login'

const LoginContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      setSuccessMessage(`email: ${values.email} password: {obscured}`)
      setSubmitting(false);
    }, 400);
  }

  return (
    <ErrorBoundary componentName='LoginContainer'>
      <Login 
        email={email}
        onSubmit={onSubmit}
        password={password}
        successMessage={successMessage}
        setEmail={setEmail}
        setPassword={setPassword}
        setSuccessMessage={setSuccessMessage}
      />
    </ErrorBoundary>
  );
};

export default LoginContainer;
