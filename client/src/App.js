import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import LadingPage from "./components/views/LandingPage/LadingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" components={LadingPage} />
          <Route exact path="/login" components={LoginPage} />
          <Route exact path="/register" components={RegisterPage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
