import React, { useState } from "react";
import "../styles/pages/SignUpPage.scss";
import PrimaryButton from "../components/PrimaryButton";
import axios from "axios";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void = async (
    e
  ) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3001/api/auth/register",
        {
          name: fullName,
          email: email,
          password: password,
        }
      );
      console.log("Signup Status:", response.status); // 201 for success
    } catch (error: any) {
      console.error("Signup Error:", error.response);
    }
  };

  const handleGoogleSignUp: () => void = () => {
    // Redirect to Google Auth URL
    window.location.href = "http://localhost:3001/api/auth/google/login";
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign up</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full name:</label>
        <input
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
        <label htmlFor="email">Email:</label>
        <input
          id="email"
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
        <button type="button" onClick={handleGoogleSignUp}>
          Continue with Google
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
