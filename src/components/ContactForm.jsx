import React, { useState } from 'react';
import './Buttons.css';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={handleNameChange} required />
      </label>
      <label>
        Number:
        <input
          type="tel"
          value={number}
          onChange={handleNumberChange}
          required
        />
      </label>
      <button className="addContactButton" type="submit">
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
