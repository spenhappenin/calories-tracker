import React, { useContext, useState, } from 'react';

import { useHistory, } from "react-router-dom";

import { AuthContext, } from '../providers/AuthProvider';

const Registration = (props) => {
  const { registration, } = useContext(AuthContext);
  const history = useHistory();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === passwordConfirmation)
      registration({
        first_name: firstName,
        last_name: lastName,
        email,
        password,
        password_confirmation: passwordConfirmation
      }, history.push);
    else
      // TODO: Render error and flash
      console.log(false);
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
      <label>First Name:</label>
        <input
          label="First Name"
          type="text"
          value={firstName}
          required
          onChange={(e, { value, }) => setFirstName(value)}
        />
        <label>Last Name:</label>
        <input
          label="Last Name"
          type="text"
          value={lastName}
          required
          onChange={(e, { value, }) => setLastName(value)}
        />
        <br />
        <label>Email:</label>
        <input
          label="Email"
          type="email"
          value={email}
          required
          onChange={(e, { value, }) => setEmail(value)}
        />
        <label>Password:</label>
        <input
          label="Password"
          type="password"
          value={password}
          required
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          onChange={(e, { value, }) => setPassword(value)}
        />
        <label>Password Confirmation:</label>
        <input
          label="Password Confirmation"
          type="password"
          value={passwordConfirmation}
          required
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
          onChange={(e, { value, }) => setPasswordConfirmation(value)}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
