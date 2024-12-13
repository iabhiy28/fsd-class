import React, { useState } from 'react';

function Login({ shareData }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle verification
  function verifyLogin() {
    if (!email || !password) {
      setMessage('Please fill in all fields.');
      return;
    }

    if (shareData) {
      const user = shareData.find((user) => user.email === email && user.password === password);
      if (user) {
        setMessage('Login successful!');
      } else {
        setMessage('Invalid email or password.');
      }
    } else {
      setMessage('No shared data to verify.');
    }
  }

  return (
    <div style={{ width: '300px', margin: '50px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2 className="text-center mb-4">Login</h2>
      <label htmlFor="email" style={{ display: 'block', marginBottom: '8px' }}>
        Email address
      </label>
      <input
        type="email"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="password" style={{ display: 'block', marginBottom: '8px' }}>
        Password
      </label>
      <input
        type="password"
        className="form-control"
        id="exampleInputPassword1"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button
        onClick={verifyLogin}
        style={{
          width: '100%',
          padding: '10px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '10px',
        }}
      >
        Login
      </button>
      {message && (
        <div style={{ marginTop: '20px', color: message === 'Login successful!' ? 'green' : 'red' }}>
          {message}
        </div>
      )}
    </div>
  );
}

export default Login;
