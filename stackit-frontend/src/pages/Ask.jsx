import React, { useEffect, useRef } from 'react';

function Ask() {
  const isAuthenticated = false; // Replace with actual auth logic
  const formRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.tiny.cloud/1/no-api-key/tinymce/6/tinymce.min.js';
    script.referrerPolicy = 'origin';
    script.onload = () => {
      window.tinymce.init({
        selector: '#description',
        height: 300,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount'
        ],
        toolbar:
          'undo redo | bold italic underline | bullist numlist | alignleft aligncenter alignright alignjustify | link image | code',
        content_style: 'body { background-color: #1a1a1a; color: white; font-family: Segoe UI, sans-serif; }'
      });
    };
    document.body.appendChild(script);
  }, []);

  const validateForm = (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value.trim();
    const tags = document.getElementById('tags').value.trim();

    if (!isAuthenticated) {
      const modal = new window.bootstrap.Modal(document.getElementById('loginModal'));
      modal.show();
      return;
    }

    if (title.length < 15) {
      alert('Title must be at least 15 characters.');
      return;
    }

    if (!tags.includes(',')) {
      alert('Please enter at least one tag separated by commas.');
      return;
    }

    alert('Your question has been submitted successfully!');
  };

  return (
    <>
      <nav className="navbar d-flex justify-content-between" style={{ backgroundColor: '#2d2d2d', padding: '1rem 2rem' }}>
        <div className="navbar-brand" style={{ color: '#facc15', fontWeight: 'bold', fontSize: '1.5rem' }}>
          StackIt
        </div>
        <div className="nav-icons d-flex align-items-center gap-3">
          <a href="/index.html" className="text-white text-decoration-none">Home</a>
          <i className="fas fa-bell text-white"></i>
          <img src="https://i.pravatar.cc/40" className="rounded-circle" alt="Profile" />
        </div>
      </nav>

      <div className="form-wrapper" style={{
        maxWidth: '700px',
        margin: '3rem auto',
        backgroundColor: '#2d2d2d',
        padding: '2rem',
        borderRadius: '20px',
        boxShadow: '0 0 20px rgba(250, 204, 21, 0.1)',
        color: 'white'
      }}>
        <h3 className="mb-4">Ask a New Question</h3>
        <form onSubmit={validateForm} ref={formRef}>
          <div className="mb-4">
            <label className="form-label" htmlFor="title">Title</label>
            <input type="text" id="title" className="form-control" placeholder="Enter question title..." required minLength="15" style={{ backgroundColor: '#111', border: '1px solid #444', color: 'white' }} />
            <div className="form-text" style={{ fontSize: '0.85rem', color: '#ccc' }}>Minimum 15 characters. Be specific and clear.</div>
          </div>

          <div className="mb-4">
            <label className="form-label" htmlFor="description">Description</label>
            <textarea id="description"></textarea>
            <div className="form-text" style={{ fontSize: '0.85rem', color: '#ccc' }}>Include what you've tried, code examples, and details.</div>
          </div>

          <div className="mb-4">
            <label className="form-label" htmlFor="tags">Tags</label>
            <input type="text" id="tags" className="form-control" placeholder="e.g., javascript, react, sql" required style={{ backgroundColor: '#111', border: '1px solid #444', color: 'white' }} />
            <div className="form-text" style={{ fontSize: '0.85rem', color: '#ccc' }}>Add 1 or more relevant tags separated by commas.</div>
          </div>

          <button type="submit" className="btn btn-yellow w-100" style={{ backgroundColor: '#facc15', color: '#1a1a1a', border: 'none' }}>
            Submit
          </button>
        </form>
      </div>

      {/* Login Modal */}
      <div className="modal fade" id="loginModal" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark text-white">
            <div className="modal-header border-0">
              <h5 className="modal-title" id="loginModalLabel">Login Required</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Please login or sign up to ask a question.</p>
              <a href="/login.html" className="btn btn-warning w-100 mb-2">Login</a>
              <a href="/signup.html" className="btn btn-outline-light w-100">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ask;
