import React from 'react';
import './Login.css'; // reusing the same styling
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="login-container d-flex justify-content-center align-items-center vh-100">
      <div className="login-box p-4 rounded">
        <h2 className="text-center text-warning mb-4">Sign Up</h2>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label text-light">Full Name</label>
            <input
              type="text"
              className="form-control bg-dark text-white border-secondary"
              id="name"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dob" className="form-label text-light">Date of Birth</label>
            <input
              type="date"
              className="form-control bg-dark text-white border-secondary"
              id="dob"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="contact" className="form-label text-light">Contact Number</label>
            <input
              type="tel"
              className="form-control bg-dark text-white border-secondary"
              id="contact"
              placeholder="Enter contact number"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label text-light">Email Address</label>
            <input
              type="email"
              className="form-control bg-dark text-white border-secondary"
              id="email"
              placeholder="Create an email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="form-label text-light">Password</label>
            <input
              type="password"
              className="form-control bg-dark text-white border-secondary"
              id="password"
              placeholder="Create a password"
            />
          </div>
          <button type="submit" className="btn btn-warning w-100 fw-bold">Register</button>
        </form>
        <div className="text-center mt-3">
          <small className="text-light">Already have an account? <Link to="/login" className="text-warning text-decoration-underline">Login</Link></small>
        </div>
      </div>
    </div>
  );
}

export default Register;
