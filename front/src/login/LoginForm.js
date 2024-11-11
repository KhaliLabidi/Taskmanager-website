// LoginForm.js
import React from "react";
import { Button } from "react-bootstrap";
import loginImage from './loginImage.jpg'; // Adjust the path as needed

const LoginForm = ({ formData, handleChange, handleSubmit, errors }) => {
    return (
        <div>
            <section className="p-5 w-100" style={{ backgroundColor: "#eee", borderRadius: ".5rem .5rem 0 0" }}>
                <div className="row">
                    <div className="col-12">
                        <div className="card text-black" style={{ borderRadius: "25px" }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mt-4">Login</p>
                                        <form onSubmit={handleSubmit}>
                                            <div className="row mt-3">
                                                <div className="col text-left">
                                                    <label htmlFor="email" className="form-label">Email</label>
                                                    <input
                                                        id="email"
                                                        name="email"
                                                        className="form-control"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        type="email"
                                                    />
                                                    {errors.email && (
                                                        <small className="text-danger mt-1">{errors.email}</small>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col text-left">
                                                    <label htmlFor="password" className="form-label">Password</label>
                                                    <input
                                                        id="password"
                                                        name="password"
                                                        className="form-control"
                                                        value={formData.password}
                                                        onChange={handleChange}
                                                        type="password"
                                                    />
                                                    {errors.password && (
                                                        <small className="text-danger mt-1">{errors.password}</small>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col text-right actionButtons">
                                                    <Button variant="primary" size="sm" type="submit">Login</Button>
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <br />
                                                <div className="col text-right">
                                                    Don’t have an account? <a href="/register">Sign up</a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img src={loginImage} className="img-fluid" alt="Login" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LoginForm;
