// pages/auth/signup.js
import React, { useState } from 'react';
import Link from 'next/link';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement your signup logic here
        console.log('Form data submitted:', formData);
        // Reset the form or navigate to the next page
    };

    return (
        <div className="signup-container">
            <div className="form-wrapper">
                <h1>Create an Account</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    <button type="submit">Sign Up</button>
                </form>

                <p>Already have an account? <Link href="/auth/login">Login here</Link></p>
            </div>

            <style jsx>{`
                .signup-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    background-color: #f5f5f5;
                }

                .form-wrapper {
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 8px;
                    width: 80vw;
                    text-align: center;
                }

                h1 {
                    color: #333;
                    font-size: 2rem;
                    margin-bottom: 20px;
                }

                form {
                    display: flex;
                    flex-direction: column;
                }

                label {
                    text-align: left;
                    margin-bottom: 5px;
                    color: #333;
                }

                input {
                    padding: 10px;
                    margin-bottom: 15px;
                    border: 1px solid #ddd;
                    border-radius: 5px;
                    box-sizing: border-box;
                    width: 100%;
                }

                button {
                    background-color: crimson;
                    color: #fff;
                    padding: 10px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    transition: background-color 0.3s, color 0.3s;
                }

                button:hover {
                    background-color: darkred;
                }

                p {
                    margin-top: 15px;
                    color: #666;
                    font-size: 0.9rem;
                }

                a {
                    color: #1e90ff;
                    text-decoration: underline;
                    cursor: pointer;
                    transition: color 0.3s;
                }

                a:hover {
                    color: #0056b3;
                }

                @media (max-width: 768px) {
                    .form-wrapper {
                        width: 90vw;
                    }
                }
            `}</style>
        </div>
    );
};

export default Signup;
