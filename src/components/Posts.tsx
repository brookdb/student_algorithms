import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "react-bootstrap/Image";
import { Dropdown, DropdownButton, NavbarToggle } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import SignupForm from "../routes/Auth/Signup";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function SearchBar() {
  return (
    <div
      id="Searchbox"
      style={{
        textAlign: "center",
      }}
    >
      <textarea
        style={{
          resize: "none",
          backgroundColor: "transparent",
          margin: "0",
          padding: "0",
          color: "black",
          wordWrap: "break-word",
          outline: "none",
          WebkitTapHighlightColor: "transparent",
        }}
      ></textarea>
    </div>
  );
}

function Card1() {
  return (
    <Card style={{ width: "300p" }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Math</Card.Subtitle>
        <Card.Link href="#">
          <Card.Text>Does anyone know the answer to...</Card.Text>
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

function Card2() {
  return (
    <Card style={{ width: "300p" }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Math</Card.Subtitle>
        <Card.Link href="#">
          <Card.Text>Does anyone know the answer to...</Card.Text>
        </Card.Link>
      </Card.Body>
    </Card>
  );
}
