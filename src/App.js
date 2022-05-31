import Home from './component/home/Home';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate 
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes >

        <Route exact path="/dashboard" element={<Home
          page={"dashboard"} />}>
        </Route>
        <Route exact path="/patient" element={<Home
          page={"Patients"} />}>
        </Route>
        <Route path='/*' element={<Navigate to='/dashboard' replace />} />
      </Routes>
    </Router>
  );
}

export default App;
