import Home from "./pages/Home";
import About from "./pages/About";
import ScrollToTop from "./utils/ScrollToTop";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <ScrollToTop> 
        <Routes>
          <Route exact path="/About" element={<About />}/>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </ScrollToTop>
    </Router>
  );
}

export default App;
