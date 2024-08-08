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
import QuestionButton from "../../components/CreateQuestionButton"

export default function QuestionsList(){

    const [questions, setQuestions] = useState();
    useEffect(()=>{
        const url = 'https://66a70d6653c13f22a3ce5251.mockapi.io/questions'
        axios.get(url).then((response)=>{
            console.log(response.data)
            setQuestions(response.data)
        })
    })

    return (
        questions?
        <Container>
            <Row>
            <Col><QuestionButton/></Col><Col><Searchbar/></Col></Row>

        {questions.map((question)=>(
            <Link to={`/questions/${question.id}`}>
            <Row>
                <Card className="list-tile">
                <Card.Body>
                    <div className="image-wrapper">
                    <Col xs={3}><Card.Img width={100} src={question.image}/></Col>
                    </div>
                <Card.Title className="display-5">
                    <Col xs={9}><h1>{question.title}</h1>
                </Col>
                </Card.Title>
                </Card.Body>
                </Card>
            </Row>
            </ Link>
        ))}
        </Container>
        :
        <Container>
        <Row>
        <Col>
        <h1>No Questions</h1>
        </Col>
        </Row>
        </Container>
    )
}