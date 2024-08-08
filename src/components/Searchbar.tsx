import {Row, Col, Form, Button} from 'react-bootstrap';

export default function Searchbar(){
    return(<><Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
          </Col>
        </Row>
      </Form></>)
}