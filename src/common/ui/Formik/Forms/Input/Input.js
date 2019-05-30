import React from 'react';
import { Field } from 'formik';
import { TextField } from 'formik-material-ui';

const handleChange = event => console.log({event});

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
      component={TextField}
      onChange={event => handleChange(event)}
      {...rest}
    />
  </div>
);

export default Input;