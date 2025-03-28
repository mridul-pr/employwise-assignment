import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Watermark from "./components/Watermark";
import ProtectedRoute from "./components/ProtectedRoutes"; // Import correctly
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<Login />} />

        {/* Protected Route */}
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* Watermark */}
      <Watermark text="Mridul" />
    </Router>
  );
}

export default App;
