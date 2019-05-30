import * as React from 'react';
import { Field } from 'formik';
import { FormControl, MenuItem } from '@material-ui/core';
import { TextField } from 'formik-material-ui';

// NOTE: ranges is required and formatted like this:
// const ranges = [
//   {
//     value: 'none',
//     label: 'None',
//   },
//   {
//     value: '0-20',
//     label: '0 to 20',
//   },
// ];

const Dropdown = ({ 
  label = 'Select one:',
  helperText = 'Pick an option',
  name,
  ranges,
  }) =>
  <FormControl style={{minWidth: '200px'}}>
    <Field
      component={TextField}
      helperText={helperText}
      InputLabelProps={{shrink: true}}
      label={label}
      margin='normal'
      name={name}
      select
      type='text'
    >
      {ranges.map(option =>
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      )}
    </Field>
  </FormControl>

export default Dropdown;