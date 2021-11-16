import React from 'react';
import ContactForm from '../components/contactform';
import'../styles/contact.css'

class Contacts extends React.PureComponent {
  render() {
    return (
      <div className = "wrapper">Contact Works!<br/>
      <ContactForm></ContactForm>
      </div>
    );
  }
}

export default Contacts;