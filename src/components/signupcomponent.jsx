import React from 'react';
import { Form, Button } from 'react-bootstrap';

function Signup() {
  return (
    <Form>
      <Form.Group controlId="formFirstName">
        <Form.Label>First name</Form.Label>
        <Form.Control required type="text" placeholder="First Name" defaultValue="John"/>
      </Form.Group>
      <Form.Group controlId="formLastName">
        <Form.Label>Last name</Form.Label>
        <Form.Control required type="text" placeholder="Last Name" defaultValue="Doe"/>
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"/>
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"/>
      </Form.Group>
      <Button variant="outline-primary" type="submit">Signup</Button>
    </Form>
  );
}
export default Signup;
