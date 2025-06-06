import "./App.css";
// import Navbar from "./componentshmpg/navbar";
import { HeroSection, FeaturesSection, ProductivitySection, MaximizeProductivitySection, PricingSection} from "./componentshmpg/indexpage/index";
import { Routes, Route } from 'react-router-dom';
import './index.css';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <HeroSection />
            <FeaturesSection />
            <ProductivitySection />
            <MaximizeProductivitySection />
            <PricingSection />
          </>
        }
      />
    </Routes>
  );
}

export default App;
