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
import { AuthProvider } from "./context/AuthContext";
import SingleProviderPage from "./pages/SingleProviderPage";
import RequestBoxPage from "./pages/RequestBoxPage";
import FAQ from "./pages/FAQ";
import Footer from "./components/Footer";
import BrowseBoxesPage from "./pages/BrowseBoxesPage";
import CartButton from "./components/CartButton";
import CartPage from "./pages/CartPage";
import UserSettingsPage from "./pages/UserSettingsPage";
import GeneralSettingsPage from "./modules/settings/pages/GeneralSettings";
import PaymentSettingsPage from "./modules/settings/pages/PaymentSettings";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <CartButton numberOfItems={1} />
        <div className="routes-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/settings" element={<UserSettingsPage />}>
              <Route path="general" element={<GeneralSettingsPage />} />
              <Route path="payment" element={<PaymentSettingsPage />} />
            </Route>
            <Route path="/providers" element={<ProvidersPage />} />
            <Route path="/providers/:id" element={<SingleProviderPage />} />
            <Route
              path="/providers/:id/create-box"
              element={<RequestBoxPage />}
            />
            <Route path="/browse-boxes" element={<BrowseBoxesPage />} />
            <Route
              path="/subscriptionbox/:id"
              element={<SubscriptionBoxPage />}
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
