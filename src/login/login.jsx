// src/login/login.jsx

import React from "react";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can add logic to handle login validation
    navigate("/play"); // Navigate to the Play page after login
  };

  return (
    <main className="bg-success p-3 container-fluid text-center">
      <div>
        <h1>Welcome to Simon</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <span className="input-group-text">@</span>
            <input
              className="form-control"
              type="text"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">🔒</span>
            <input
              className="form-control"
              type="password"
              placeholder="password"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/create")}
          >
            Create
          </button>
        </form>
      </div>
    </main>
  );
}
