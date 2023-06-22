import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <Card>
            <Card.Body>
              <Card.Title>Contact Information</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut urna eget velit auctor ullamcorper et at justo.
              </Card.Text>
              <Card.Text>
                Email: contact@example.com
              </Card.Text>
              <Card.Text>
                Phone: 123-456-7890
              </Card.Text>
              <Card.Text>
                Address: 123 Main St, City, State, Country
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-6">
          <Card>
            <Card.Body>
              <Card.Title>Contact Form</Card.Title>
              <Form>
                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="message">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Enter your message" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
