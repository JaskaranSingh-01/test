import Dasboard from "./Components/Dasboard";
import Instructors from "./Components/Instructors";
import Navbar from "./Components/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Revenue from "./Components/Revenue";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Revenue />} />
          <Route exact path="/dashboard" element={<Dasboard />} />
          <Route exact path="/Instructors" element={<Instructors />} />
          <Route exact path="/revenue" element={<Revenue />} />

        </Routes>
      </Router>
    </>

  );
}

export default App;
