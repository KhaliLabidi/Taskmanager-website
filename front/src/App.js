import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Registration from "./Registration/Registration"; 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* Add a component or element for the home route */}
          <Route path="/" element={<Registration />} /> {/* Home route */}
          <Route path="/register" element={<Registration />} /> {/* About route */}
          <Route path="/login" element={<Registration />} /> {/* Login route */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
