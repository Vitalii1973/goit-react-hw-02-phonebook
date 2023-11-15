import React, { Component } from 'react';
import './Buttons.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = e => {
    this.setState({ name: e.target.value });
  };

  handleNumberChange = e => {
    this.setState({ number: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className="contact-form" onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={this.handleNameChange}
            required
          />
        </label>
        <label>
          Number:
          <input
            type="tel"
            value={number}
            onChange={this.handleNumberChange}
            required
          />
        </label>
        <button className="addContactButton" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
