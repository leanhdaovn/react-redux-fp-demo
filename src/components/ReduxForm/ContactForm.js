import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { omit } from 'lodash/fp';
import { mapProps } from 'recompose';

const omitNonNativeProps = omit([
  'checked',
  'invalid',
  'initialValue',
  'autofill',
  'onUpdate',
  'valid',
  'submitFailed',
  'dirty',
  'pristine',
  'error',
  'active',
  'touched',
  'visited',
  'autofilled',
  'errorText',
]);

const mapFieldPropsToTextField = mapProps(props => ({
  ...omitNonNativeProps(props),
  onChange: (e, i, value) => props.onChange(value),
}));

const TextField = (props) => {
  return <input {...props} />
};

const EnhancedTextField = mapFieldPropsToTextField(TextField);

const ContactForm = ({ fields: {firstName, lastName, email}, handleSubmit }) => (
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="firstName">First Name</label>
      <EnhancedTextField type="text" {...firstName} />
    </div>
    <div>
      <label htmlFor="lastName">Last Name</label>
      <EnhancedTextField type="text" {...lastName} />
    </div>
    <div>
      <label htmlFor="email">Email</label>
      <EnhancedTextField type="email" {...email} />
    </div>
    <button type="submit">Submit</button>
  </form>
);

const ContactReduxForm = reduxForm({
  form: 'contact',
  fields: ['firstName', 'lastName', 'email']
})(ContactForm);

export default ContactReduxForm;
