// src/pages/Login.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white">
      <div className="card p-4" style={{ width: '300px', backgroundColor: '#2d2d2d' }}>
        <h4 className="text-center mb-3" style={{ color: '#facc15' }}>Login</h4>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input type="email" className="form-control bg-dark text-white" id="email" required />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password" className="form-control bg-dark text-white" id="password" required />
          </div>
          <button type="submit" className="btn btn-warning w-100">Login</button>
        </form>
        <p className="text-center mt-3">
          <a href="/signup" className="text-warning">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
