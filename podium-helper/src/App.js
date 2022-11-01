import './Styling/App.scss';
import DriverSearch from './components/Competitor/DriverSearch';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Podium from './components/Podium_Results/Podium';
import NavBar from './components/NavBar';
import Results from './components/Results/ResultsHistory';
import EntryDashboard from './components/Entry_Manage/EntryDashboard';
import SingleRacePodium from './components/Results/SingleRacePodium';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="App">
        <Routes>
          <Route path='/' element={<Podium />} />
          <Route path="/competitors" element={<DriverSearch />} />
          <Route path="/results" element={<Results />} />
          <Route path="/entry-dashboard" element={<EntryDashboard />} />
          <Route path="/single_race_podium" element={<SingleRacePodium />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
