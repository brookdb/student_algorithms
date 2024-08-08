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

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Link to="/">
          <Navbar.Brand>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-XGtUV0MkzEWlOO8002bKuiK1_wvDth7-1g&s"
              height={40}
            />
            {""}
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/questions">Questions</Link>
            <Link to="/chat">Chat with others!</Link>
          </Nav>
          <Nav>
            <NavDropdown
              title={
                <Image
                  src="https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"
                  height={30}
                />
              }
              id="collapsible-nav-dropdown"
            >
              <div id="features">
                <NavDropdown.Item href="Profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="Settings">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="Logout">Log out</NavDropdown.Item>
              </div>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
