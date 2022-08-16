import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style.css';
import GithubProfileSearch from "./Components/GithubProfileSearch";

function App() {
  return (
    <React.Fragment>
        <nav className="navbar bg-dark">
            <div className="container-fluid justify-content-center">
                <span className="fw-bold text-white fs-2">React GitHub Profile Search App with REDUX</span>
            </div>
        </nav>
            <GithubProfileSearch/>
        <div style={{marginBottom : '100px'}}/>
    </React.Fragment>
  );
}

export default App;
