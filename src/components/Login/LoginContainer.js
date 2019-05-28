import React, {useState} from 'react';
import ErrorBoundary from '../../common/ErrorBoundary/ErrorBoundary'
import Login from './Login'

const LoginContainer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (values, { setSubmitting }) => {
    console.log('values', values);
    setIsSubmitting(true);
    setEmail(values.Login__email)
    setPassword(values.Login__password)
    setTimeout(() => {
      setSuccessMessage(`email: ${values.Login__email} password: {obscured}`)
      setSubmitting(false)
    }, 400);
    setIsSubmitting(false);
  }

  return (
    <ErrorBoundary componentName='LoginContainer'>
      <Login 
        email={email}
        handleSubmit={handleSubmit}
        isSubmitting={isSubmitting}
        password={password}
        successMessage={successMessage}
      />
    </ErrorBoundary>
  );
};

export default LoginContainer;
