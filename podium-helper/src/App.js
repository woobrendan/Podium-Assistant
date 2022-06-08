import './App.css';
import DriverSearch from './components/DriverSearch';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Podium from './components/Podium';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path='/' element={<Podium />} />
          <Route path="/competitors" element={<DriverSearch />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
