import logo from './logo.svg';
import Home from './component/home/Home';
import './App.css';
import {
  BrowserRouter as Router,
  Routes ,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
    <Routes >

    <Route path="/dashboard" element={<Home
      page = {"dashboard"} />}>
    </Route>
    </Routes>
  </Router>
  );
}

export default App;
