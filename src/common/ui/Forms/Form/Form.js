import React from 'react';
import ErrorBoundary from '../../../ErrorBoundary/ErrorBoundary'
import { Formik, Form as FormikForm } from 'formik';

const Form = ({
  children,
  initialValues,
  onSubmit,
  validationSchema,
  ...rest,
  }) => (
  <ErrorBoundary componentName='Form'>
    <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        {...rest}
      >
        {({
          isSubmitting,
        }) => (
        <FormikForm>
          {children}
        </FormikForm>
      )}
    </Formik>
  </ErrorBoundary >
);

export default Form;
