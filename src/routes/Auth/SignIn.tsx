import React, { useEffect, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./auth.css"; // Import custom CSS

const SignInPage = () => {
  const handleSignIn = (event) => {
    event.preventDefault();
    // Handle sign-in logic here
    console.log("Sign-in logic goes here");
  };

  return (
    <Container className="sign-in-container">
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6} lg={4}>
          <Form
            onSubmit={handleSignIn}
            className="sign-in-form border p-4 rounded shadow-sm"
          >
            <h2 className="text-center mb-4">Sign In</h2>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="w-100 mt-3"
              href="/"
            >
              Sign in
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SignInPage;
