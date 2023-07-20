import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import router component for V6
import Home from "./pages/Home";
import Users from "./pages/Users";
import Contacts from "./pages/Contacts";
import Menu from "./components/Menu";

function App() {
  return (
    <Router>

      <Menu></Menu>
      {/* Route components in a Routes component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="contacts" element={<Contacts />} />
      </Routes>
      
    </Router>
  );
}

export default App;