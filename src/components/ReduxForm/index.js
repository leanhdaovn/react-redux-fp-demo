import React from 'react';
import { Provider } from 'react-redux';
import ContactForm from './ContactForm';

const handleSubmit = (values) => {
  console.log(values);
};

const ContactPage = ({ store }) => (
  <Provider store={store}>
    <ContactForm onSubmit={handleSubmit} />
  </Provider>
);

export default ContactPage;
