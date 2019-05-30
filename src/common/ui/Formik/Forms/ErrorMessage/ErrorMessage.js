import React from 'react';
import { ErrorMessage as FormikErrorMessage } from 'formik';

const ErrorMessage = ({
  message='error',
  name,
  className,
  component='div',
  dataId,
  ...rest
}) => {

  return(
    <FormikErrorMessage name={name} {...rest} >
      {message => (
        <div 
          className={className}
          data-id={dataId}
        >
          {message}
        </div>
      )}
    </FormikErrorMessage>
  )
}

export default ErrorMessage;