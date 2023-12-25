import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style.css';
import GithubProfileSearch from "./Components/GithubProfileSearch";

function App() {

  const toggleClick = () => {
    const body = document.body;
    body.classList.toggle("dark-mode");
  }

  return (
    <React.Fragment>

      <nav className="navbar bg-dark">
        <div className="container-fluid justify-content-center">

        <label class="toggle">
            <input onClick={toggleClick} class="toggle-checkbox" type="checkbox"/>
              <div class="toggle-switch"></div>
          </label>
          
          {/* <button onClick={toggleClick} style={{backgroundColor: "transparent", color: "white", border: "none", fontSize: "18px", position: "absolute", left: "10px"}}>Light/Dark</button> */}

          <span className="fw-bold text-white fs-2">GitHub Profile Search App</span>
        </div>
      </nav>
      <GithubProfileSearch />
      
      <div style={{ marginBottom: '100px' }} />
    </React.Fragment>
  );
}

export default App;
