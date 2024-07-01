import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";
import SubscriptionBoxPage from "./pages/SubscriptionBoxPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/subscriptionbox/:id" element={<SubscriptionBoxPage />} />
      </Routes>
    </Router>
  );
}

export default App;
