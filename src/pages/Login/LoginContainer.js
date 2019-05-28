import React, {useState} from 'react';
import ErrorBoundary from '../../common/ErrorBoundary/ErrorBoundary'
import Login from './Login'

const LoginContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  return (
    <ErrorBoundary componentName='LoginContainer'>
      <Login 
        email={email}
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
