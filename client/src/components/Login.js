import React, { useContext, useState, } from 'react';
import { useHistory, } from 'react-router-dom';

import { AuthContext, } from '../providers/AuthProvider';

const Login = ({  }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { authenticate, } = useContext(AuthContext);
  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticate({ email, password, }, history.push);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          name="email"
          label="Email"
          type="email"
          required
          onChange={(e) => setEmail(e.target.value) }
        />
        <label>Password:</label>
        <input
          name="password"
          label="Password"
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
