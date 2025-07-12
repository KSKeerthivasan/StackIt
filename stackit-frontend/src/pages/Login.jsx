import React from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login-container d-flex justify-content-center align-items-center vh-100">
      <div className="login-box p-4 rounded">
        <h2 className="text-center text-warning mb-4">Login</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-light">Email address</label>
            <input
              type="email"
              className="form-control bg-dark text-white border-secondary"
              id="email"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label text-light">Password</label>
            <input
              type="password"
              className="form-control bg-dark text-white border-secondary"
              id="password"
              placeholder="Enter password"
            />
          </div>
          <button type="submit" className="btn btn-warning w-100 fw-bold">Login</button>
        </form>
        <div className="text-center mt-3">
          <Link to="/register" className="text-warning text-decoration-underline">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
