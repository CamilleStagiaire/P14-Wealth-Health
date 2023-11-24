import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import Error from "./pages/Error";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
