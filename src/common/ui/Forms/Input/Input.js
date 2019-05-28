import React from 'react';
import { Field } from 'formik';
import { ErrorMessage } from '../../ui';

const Input = ({
    className,
    dataId,
    label,
    name,
    placeholder,
    type,
    ...rest
}) => (
  <div className={className}>
    <Field
      data-id={name}
      label={label}
      name={name}
      placeholder={placeholder}
      type={type}
      {...rest}
    />
    <br />
      <ErrorMessage 
        name={name} 
        className={`error ${name}--error`} 
        component='div' 
        dataId={`${name}--error`} 
      />
    <br />
  </div>
);

export default Input;