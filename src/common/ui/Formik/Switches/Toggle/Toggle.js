import React from 'react';
import { Field } from 'formik';
import { FormControlLabel } from '@material-ui/core';
import { Switch } from 'formik-material-ui';

const Toggle = ({
  label,
  name,
  isChecked,
  defaultChecked
}) => {

  return (
    <>
      <FormControlLabel
        label={label}
        control={
          <Field
            name={name}
            component={Switch}
          />}
      />
    </>
  )
};

export default Toggle;
