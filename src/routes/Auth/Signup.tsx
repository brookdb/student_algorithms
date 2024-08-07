import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Root from "../Root";

const SignupForm = () => {
  // State to store form data
  var [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary validation here before submitting

    // For demonstration, log the form data
    console.log(formData);

    // Clear form after submission (if needed)
    setFormData({
      username: "",
      email: "",
      password: "",
      password2: "",
    });
  };

  return (
    <Form className="signup-form" onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="formBasicPassword"></Form.Group>

      <Form.Group controlId="formBasicPassword"></Form.Group>

      <Form.Group controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label="I agree to the terms and policies"
          name="agreedToTerms"
          checked={formData.agreedToTerms}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Link to={"/"}>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Link>
    </Form>
  );
};

export default SignupForm;
