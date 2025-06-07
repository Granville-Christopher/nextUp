import "./App.css";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import PricingPage from "./pages/Pricing";
import DashboardPage from "./pages/Dashboard";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/pricing" element={<PricingPage />} />
       <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
}

export default App;
