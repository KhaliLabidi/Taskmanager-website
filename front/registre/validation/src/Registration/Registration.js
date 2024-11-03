// Registration.js
import React, { useState } from "react";
import "./Registration.css";
import { registrationSchema } from "./RegistrationSchema"; // Ensure this schema exists
import axios from "axios"; // Import axios
import RegistrationForm from "./RegistrationForm"; // Import the new UI component

const Registration = () => {
    const [formData, setFormData] = useState({
        first: "",
        last: "",
        email: "",
        password: "",
        repassword: "",
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrors({}); // Clear previous errors

        // Validate inputs
        try {
            await registrationSchema.validate(formData, { abortEarly: false });

            // Prepare data to send
            const userData = {
                firstName: formData.first,
                lastName: formData.last,
                email: formData.email,
                password: formData.password,
            };

            // Make API call to register the user
            await axios.post("http://localhost:3000/register", userData);
            resetForm(); // Reset form fields
        } catch (error) {
            if (error.inner) {
                setErrors(error.inner.reduce((acc, err) => {
                    acc[err.path] = err.message;
                    return acc;
                }, {}));
            } else {
                console.error("Unexpected error format:", error);
            }
        }
    };

    const resetForm = () => {
        setFormData({
            first: "",
            last: "",
            email: "",
            password: "",
            repassword: "",
        });
        setErrors({});
    };

    return (
        <RegistrationForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            errors={errors}
            resetForm={resetForm}
        />
    );
};

export default Registration;
