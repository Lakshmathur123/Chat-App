import * as React from "react";
import { useNavigate, Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config"; // Adjust the path as needed

const Register = () => {
  const [formData, setFormData] = React.useState({
    virtualName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Firebase function to create a new user
      await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      alert("Successfully registered! Please login to continue."); // Success popup
      navigate("/login"); // Redirect to login page
    } catch (error) {
      // Handle errors like "email already in use"
      if (error.code === "auth/email-already-in-use") {
        alert("This email is already registered. Please use a different email or log in.");
      } else {
        alert("Registration failed. Please try again.");
        console.error("Error during registration:", error);
      }
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Virtual Chat</span>
        <span className="title">Register</span>
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="virtualName"
            placeholder="Enter Your Virtual Name"
            value={formData.virtualName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter Your Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Sign Up</button>
        </form>
        <p className="user">
          Already a User? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
