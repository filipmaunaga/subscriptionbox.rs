import React, { useState } from "react";
import "../styles/pages/LoginPage.scss";
import PrimaryButton from "../components/PrimaryButton";
import axios from "axios";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void = async (
    e
  ) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/login",
        {
          email: email,
          password: password,
        },
        { withCredentials: true }
      );
      console.log("Login Success:", response.data);
    } catch (error: any) {
      console.error("Login Error:", error.response);
    }
  };

  const handleGoogleSignUp: () => void = () => {
    // Redirect to Google Auth URL
    window.location.href = "http://localhost:3001/api/auth/google/login";
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Login</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Email:</label>
        <input
          id="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>

        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <PrimaryButton type="submit" buttonText="Submit" />
        <button onClick={handleGoogleSignUp}>Continue with Google</button>
      </form>
    </div>
  );
};

export default LoginPage;
