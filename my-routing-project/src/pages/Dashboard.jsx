import React from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Dashboard = () => {
  const { userId } = useParams();

  // Dummy data
  const cardsData = [
    {
      id: 1,
      title: 'Card 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'Praesent tempus augue ac libero lacinia, vitae vestibulum metus condimentum.',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Card 3',
      description: 'Etiam gravida sapien vel libero congue feugiat.',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="container">
      <h1>Welcome to the Dashboard, User ID: {userId}</h1>
      <div className="row">
        {cardsData.map((card) => (
          <div key={card.id} className="col-lg-4">
            <Card>
              <Card.Img variant="top" src={card.imageUrl} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
