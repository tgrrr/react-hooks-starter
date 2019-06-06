import React from 'react';
import { TextField as MaterialInput } from '@material-ui/core';
import PropTypes from 'prop-types';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
// import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary'

const Input = ({
  label,
  name, 
  placeholder, 
  value,
  ...rest //this can be dangerous
  }) => {

  return (
    <ErrorBoundary componentName='Input'>
      <div
        className={`${name} InputWrapper`}
        // data-testid='InputWrapper'
      >
        {/* <MaterialInput 
          name={name} 
          // placeholder={placeholder} 
          value={value}
          // data-testid='MaterialInput'
          {...rest} 
        /> */}
        <FormControl className="Input__form--control" error>
          <InputLabel htmlFor="component-error">{label}</InputLabel>
          <MaterialInput
            name={name}
            // placeholder={placeholder} 
            value={value}
            // data-testid='MaterialInput'
            {...rest} 
            // id="component-error"
            // value={this.state.name}
            // onChange={this.handleChange}
            // aria-describedby="component-error-text"
          />
          <FormHelperText id="component-error-text">Error</FormHelperText>
        </FormControl>

      </div>
    </ErrorBoundary>
    )
}
export default Input;