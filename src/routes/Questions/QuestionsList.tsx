import {Container, Row, Col, Image} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Dropdown, DropdownButton, NavbarToggle } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Searchbar from '../../components/Searchbar';

/*
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
}*/

const questions = [
    {
        id: 0,
        title: "Question 1",
        body: "alsjdfnglasfnglsdngldsnflgn adslfkgnldsfngldsnfglksdfnglsdknfg",
        image: "https://cdn.theatlantic.com/thumbor/Ot_erThCQgVVk016M-nKJrG_HhE=/603x0:4203x2700/1200x900/media/img/mt/2023/01/Dumb_Questions_02/original.jpg"
    },
    {
        id: 1,
        title: "Question 2",
        body: "alsjdfnglasfnglsdngldsnflgn adslfkgnldsfngldsnfglksdfnglsdknfg",
        image: "https://cdn.theatlantic.com/thumbor/Ot_erThCQgVVk016M-nKJrG_HhE=/603x0:4203x2700/1200x900/media/img/mt/2023/01/Dumb_Questions_02/original.jpg"
    },
    {
        id: 2,
        title: "Question 3",
        body: "alsjdfnglasfnglsdngldsnflgn adslfkgnldsfngldsnfglksdfnglsdknfg",
        image: "https://cdn.theatlantic.com/thumbor/Ot_erThCQgVVk016M-nKJrG_HhE=/603x0:4203x2700/1200x900/media/img/mt/2023/01/Dumb_Questions_02/original.jpg"
    }
]

export default function QuestionsList(){
    return ( 
        <Container>
            <Row><Searchbar/></Row>

        {questions.map((question)=>(
            <Link to={`/questions/${question.id}`}>
            <Row>
                
                <Col xs={3}><Image width={100} src={question.image} rounded/></Col>
                <Col xs={9}><h1>{question.title}</h1>
                <p>{question.body}</p></Col>
                
            </Row>
            </ Link>
        ))}
        </Container>
    )
}