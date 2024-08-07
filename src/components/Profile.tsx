import React from "react";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Image,
  Nav,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useOutlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useOutletContext } from "react-router-dom";

const userData = {
  id: 1,
  age: "",
  email: "emily.johnson@x.dummyjson.com",
  username: "emilys",
  image: "https://dummyjson.com/icon/12345/230",
};

export default function Dashboard() {
  /*const [isAuthenticated, setIsAuthenticated] = useOutletContext();
  const [barearToken, setBarearToken] = useOutletContext();

  const [UserData, setUserData] = useState({});

  useEffect(() => {
    axios.get("https://dummyjson.com/auth/me", {
      headers: { Authorization: barearToken },
    });
  }, []);*/

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Card className="mt-5">
            <Card.Header>
              <Image src={userData.image} roundedCircle />
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <strong>Username:</strong> {userData.username}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Email:</strong> {userData.email}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Phone:</strong> {userData.phone}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Age:</strong> {userData.age}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Birth Date:</strong> {userData.birthDate}
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
