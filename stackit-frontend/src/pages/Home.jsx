import React, { useState } from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';


function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [showLoginModal, setShowLoginModal] = useState(false);

  const isAuthenticated = false;

  const questions = [
    {
      id: 1, title: "How to center a div in CSS?", answers: 3,
      tags: ["CSS", "Layout"], description: "Trying to center a div horizontally and vertically using flexbox...",
      author: "FrontDev", category: "frontend", votes: 5
    },
    {
      id: 2, title: "Difference between var, let, and const?", answers: 2,
      tags: ["JavaScript"], description: "Can someone explain how scope differs for each of these?",
      author: "JSNinja", category: "frontend", votes: 8
    },
    {
      id: 3, title: "What is normalization in DB?", answers: 1,
      tags: ["Database"], description: "I’ve heard normalization improves structure. But how?",
      author: "DataDude", category: "database", votes: 3
    },
    {
      id: 4, title: "Best Python libraries for ML?", answers: 5,
      tags: ["Python", "ML"], description: "I'm starting ML and want to know the essential libraries.",
      author: "AIMaster", category: "ai", votes: 15
    },
    {
      id: 5, title: "How to use useEffect in React?", answers: 4,
      tags: ["React", "Hooks"], description: "I keep getting infinite loops. What's the correct usage?",
      author: "ReactRookie", category: "frontend", votes: 7
    }
  ];

  const filteredQuestions = questions.filter(q => {
    const matchesSearch = q.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = category === 'all' || q.category === category;
    return matchesSearch && matchesCategory;
  });

  const handleLoginCheck = (e) => {
    if (!isAuthenticated) {
      e.preventDefault();
      setShowLoginModal(true);
    } else {
      window.location.href = "/ask";
    }
  };

  return (
    <div className="container mt-4 px-3">
  {/* Navbar */}
  <nav className="navbar d-flex justify-content-between align-items-center mb-4 px-2 py-3 rounded" style={{ backgroundColor: '#2d2d2d' }}>
    <div className="navbar-brand text-warning fw-bold fs-3">StackIt</div>
    <div className="d-flex align-items-center gap-3">
      <Link to="/" className="text-white text-decoration-none">Home</Link>
      <Link to="/login" className="btn btn-outline-light btn-sm px-3">Login</Link>
    </div>
  </nav>

  {/* Ask and Search */}
  <div className="d-flex flex-column flex-md-row justify-content-between align-items-stretch mb-4 gap-3">
    <button className="btn btn-warning fw-bold text-dark" onClick={handleLoginCheck}>
      <i className="bi bi-plus-circle me-1"></i> Ask New Question
    </button>
    <div className="input-group search-bar">
      <input
        type="text"
        className="form-control bg-dark text-white border-secondary"
        placeholder="Search questions..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="btn btn-outline-secondary">
        <i className="bi bi-search"></i>
      </button>
    </div>
  </div>

  {/* Filter Bar */}
  <div className="filter-bar mb-4 p-3 rounded" style={{ backgroundColor: '#2a2a2a' }}>
    <form className="row g-3">
      <div className="col-md-6">
        <label className="form-label text-light">Sort By</label>
        <select className="form-select bg-dark text-white">
          <option value="recent">Most Recent</option>
          <option value="answers">Most Answered</option>
          <option value="unanswered">Unanswered</option>
          <option value="votes">Top Voted</option>
        </select>
      </div>
      <div className="col-md-6">
        <label className="form-label text-light">Category</label>
        <select
          className="form-select bg-dark text-white"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All</option>
          <option value="frontend">Frontend</option>
          <option value="backend">Backend</option>
          <option value="database">Database</option>
          <option value="ai">AI/ML</option>
        </select>
      </div>
    </form>
  </div>

  {/* Questions */}
  <div id="questions">
    {filteredQuestions.map((q) => (
      <div key={q.id} className="question-card mb-4 p-4 rounded" style={{ backgroundColor: '#2d2d2d' }}>
        <div className="d-flex justify-content-between align-items-start">
          <h5 className="text-white fw-bold">{q.title}</h5>
          <span className="answer-badge badge bg-warning text-dark">{q.answers} ans</span>
        </div>
        <div className="mb-2 mt-1">
          {q.tags.map((tag, index) => (
            <span key={index} className="tag badge bg-warning text-dark me-2">{tag}</span>
          ))}
        </div>
        <p className="text-light">{q.description}</p>
        <small className="text-muted">Posted by: {q.author}</small>
      </div>
    ))}
  </div>

  {/* Login Modal */}
  {showLoginModal && (
    <div className="modal fade show d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content bg-dark text-white">
          <div className="modal-header border-0">
            <h5 className="modal-title">Login Required</h5>
            <button type="button" className="btn-close btn-close-white" onClick={() => setShowLoginModal(false)}></button>
          </div>
          <div className="modal-body">
            <p>Please login or sign up to ask a question.</p>
            <a href="/login" className="btn btn-warning w-100 mb-2">Login</a>
            <a href="/register" className="btn btn-outline-light w-100">Sign Up</a>
          </div>
        </div>
      </div>
    </div>

      )}
    </div>
  );
}

export default Home;