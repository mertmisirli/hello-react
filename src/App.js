import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

// Import your components here
import Todo from './components/Todo';
import FetchData from './components/Fetch';
import UsersComponent from './components/User';
import UserDetailComponent from './components/UserDetail';


// Main App Component
function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <Link className="navbar-brand" to="/">Home</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/users">Users</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Routing */}
        <div className="container mt-4">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/users" element={<Users />} />
            <Route path="/user/:id" element={<UserDetail />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

// Page Components
function Home() {
  return <Todo/>;
}

function About() {
  return <FetchData/>;
}

function Users() {
  return <UsersComponent/>;
}

function UserDetail() {
  return <UserDetailComponent/>
}

export default App;
