import './App.css';
import DriverSearch from './components/DriverSearch';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Placement from './components/Placement';
import Series from './components/Series';
import WinnerTop3 from './components/WinnerTop3';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Series />} />
          <Route path="/competitors" element={<DriverSearch />} />
          <Route path='/podium' element={<WinnerTop3 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
