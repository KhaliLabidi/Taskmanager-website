// RegistrationForm.js
import React from "react";
import { Button } from "react-bootstrap";
import registreImage from './registre1.jpg'; // Adjust the path if necessary

const RegistrationForm = ({ formData, handleChange, handleSubmit, errors, resetForm }) => {
    return (
        <div>
            <section className="p-5 w-100" style={{ backgroundColor: "#eee", borderRadius: ".5rem .5rem 0 0" }}>
                <div className="row">
                    <div className="col-12">
                        <div className="card text-black" style={{ borderRadius: "25px" }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center h1 fw-bold mb-5 mt-4">Sign up</p>
                                        <form onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col text-left">
                                                    <label htmlFor="first" className="form-label">First Name</label>
                                                    <input
                                                        id="first"
                                                        name="first"
                                                        className="form-control"
                                                        value={formData.first}
                                                        onChange={handleChange}
                                                    />
                                                    {errors.first && (
                                                        <small className="text-danger mt-1">{errors.first}</small>
                                                    )}
                                                </div>
                                                <div className="col text-left">
                                                    <label htmlFor="last" className="form-label">Last Name</label>
                                                    <input
                                                        id="last"
                                                        name="last"
                                                        className="form-control"
                                                        value={formData.last}
                                                        onChange={handleChange}
                                                    />
                                                    {errors.last && (
                                                        <small className="text-danger mt-1">{errors.last}</small>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col text-left">
                                                    <label htmlFor="email" className="form-label">Email</label>
                                                    <input
                                                        id="email"
                                                        name="email"
                                                        className="form-control"
                                                        value={formData.email}
                                                        onChange={handleChange}
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
                                                <div className="col text-left">
                                                    <label htmlFor="repassword" className="form-label">Confirm Password</label>
                                                    <input
                                                        id="repassword"
                                                        name="repassword"
                                                        className="form-control"
                                                        value={formData.repassword}
                                                        onChange={handleChange}
                                                        type="password"
                                                    />
                                                    {errors.repassword && (
                                                        <small className="text-danger mt-1">{errors.repassword}</small>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col text-right actionButtons">
                                                    <Button variant="secondary" size="sm" onClick={resetForm}>Clear</Button>
                                                    <Button variant="primary" size="sm" type="submit">Register</Button>
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <br />
                                                <div className="col text-right">
                                                    Already have an account? <a href="/">Sign in</a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img src={registreImage} className="img-fluid" alt="Registration" />
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

export default RegistrationForm;
