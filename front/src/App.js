import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Registration from "./Registration/Registration"; 
import Login from './login/Login';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} /> {/* Home route set to Login */}
          <Route path="/register" element={<Registration />} /> {/* Registration route */}
          <Route path="/login" element={<Login />} /> {/* Login route */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
// App.js
/*import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registration from "./Registration";
import LoginPage from "./LoginPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Registration />} />
            </Routes>
        </Router>
    );
}

export default App;*/
