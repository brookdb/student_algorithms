import {Row, Col, Form, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CreateQuestionButton() {
  return (
    <>
    <Link to={"/questions/create"}>
      <Button type="submit">Button</Button>{' '}
      </Link>
    </>
  );
}

export default CreateQuestionButton;