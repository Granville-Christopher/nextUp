import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Navbar from "./components/navbar";
import { BrowserRouter } from 'react-router-dom';
// import Footer from './components/footer';

// index.js
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((reg) => console.log("✅ Service Worker registered:", reg.scope))
      .catch((err) => console.error("❌ Service Worker registration failed:", err));
  });
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <Navbar /> */}
    <App />
    {/* <Footer /> */}
  </BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
