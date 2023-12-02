// Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import styles from './Login.module.css';

const Login = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // State to manage email and password input
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleLogin = async () => {
    try {
      // Implement your login logic here, for example, making an API call
      console.log('Login clicked');
      console.log('Email:', email);
      console.log('Password:', password);

      // Reset any previous errors
      setError('');

      // Your authentication logic goes here

      // For demo purposes, let's assume successful login with hardcoded credentials
      if (email === 'nikhiltyagi.n17@gmail.com' && password === '@123') {
        // Redirect to the BuyDatasetPage
        navigate('/buy-dataset');
      } else {
        // Display login failed message
        setError('Invalid email or password');
      }

    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed. Please try again.'); // Display an error message
    }
  };

  return (
    <div className={styles.login}>
      <form className={styles.loginForm}>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">
            Email:
          </label>
          <input
            className={styles.input}
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="password">
            Password:
          </label>
          <input
            className={styles.input}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <div className={styles.error}>{error}</div>}
        <button
          className={styles.button}
          type="button"
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
