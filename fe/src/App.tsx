import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";
import SubscriptionBoxPage from "./pages/SubscriptionBoxPage";
import Navbar from "./components/Navbar";
import ProvidersPage from "./pages/ProvidersPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/providers" element={<ProvidersPage />} />
        <Route path="/subscriptionbox/:id" element={<SubscriptionBoxPage />} />
      </Routes>
    </Router>
  );
}

export default App;
