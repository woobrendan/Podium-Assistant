import './App.css';
import DriverSearch from './components/DriverSearch';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

import Series from './components/Series';
import Podium from './components/Podium';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Series />} />
          <Route path="/competitors" element={<DriverSearch />} />
          <Route path='/podium' element={<Podium />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
