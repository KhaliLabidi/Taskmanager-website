// LoginPage.js
import React, { useState } from "react";
import "./Login.css";
import axios from "axios"; // Ensure axios is installed
import LoginForm from "./LoginForm"; // Import the UI component

const LoginPage = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrors({}); // Clear previous errors

        // Basic validation
        let validationErrors = {};
        if (!formData.email) validationErrors.email = "Email is required.";
        if (!formData.password) validationErrors.password = "Password is required.";

        if (Object.keys(validationErrors).length) {
            setErrors(validationErrors);
            return;
        }

        // Make the login API call
        try {
            const response = await axios.post("http://localhost:3000/login", {
                email: formData.email,
                password: formData.password
            });

            // Handle successful login, for example:
            alert("Login successful!");
            // Redirect user or store user data/token, etc.

        } catch (error) {
            console.error("Login error:", error);
            setErrors({ api: "Invalid email or password" });
        }
    };

    return (
        <LoginForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            errors={errors}
        />
    );
};

export default LoginPage;
