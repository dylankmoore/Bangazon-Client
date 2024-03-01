import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import { registerUser } from '../utils/auth';

function RegisterForm({ firebaseUID }) {
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    isSeller: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const registrationData = { ...formData, Uid: firebaseUID };
    try {
      await registerUser(registrationData);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="form-container">
      <br /><h1>Registration</h1><br /><br />
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Username:</Form.Label>
          <Form.Control type="text" name="username" value={formData.username} onChange={handleChange} required />
        </Form.Group><br />
        <Form.Group controlId="firstName">
          <Form.Label>First Name:</Form.Label>
          <Form.Control type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
        </Form.Group><br />
        <Form.Group controlId="lastName">
          <Form.Label>Last Name:</Form.Label>
          <Form.Control type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
        </Form.Group><br />
        <Form.Group controlId="email">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
        </Form.Group><br />
        <Form.Group controlId="address">
          <Form.Label>Address:</Form.Label>
          <Form.Control type="text" name="address" value={formData.address} onChange={handleChange} required />
        </Form.Group><br /><br />
        <Button id="regbtn2" type="<b>submit</b>">
          Submit
        </Button>
      </Form>
    </div>
  );
}

RegisterForm.propTypes = {
  firebaseUID: PropTypes.string.isRequired,
};

export default RegisterForm;
