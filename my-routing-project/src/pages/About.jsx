import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './about.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="card-container">
        <Card>
          <Card.Img variant="top" src="src/assets/place4.jpg" alt="Card Image" />
          <Card.Body>
            <Card.Title>Card Title 1</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
            </Card.Text>
            <Button variant="primary">Read More</Button>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top" src="src/assets/place5.jpg" alt="Card Image" />
          <Card.Body>
            <Card.Title>Card Title 2</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
            </Card.Text>
            <Button variant="primary">Read More</Button>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img variant="top" src="src/assets/place6.jpg" alt="Card Image" />
          <Card.Body>
            <Card.Title>Card Title 3</Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
            </Card.Text>
            <Button variant="primary">Read More</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default About;
