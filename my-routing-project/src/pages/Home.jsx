import React, { useState } from 'react';
import { Card, Modal, Button } from 'react-bootstrap';

const Home = () => {
  // Dummy data
  const cardsData = [
    {
      id: 1,
      title: 'Card 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: 'src/assets/place1.jpg',
    },
    {
      id: 2,
      title: 'Card 2',
      description: 'Praesent tempus augue ac libero lacinia, vitae vestibulum metus condimentum.',
      imageUrl: 'src/assets/place2.jpg',
    },
    {
      id: 3,
      title: 'Card 3',
      description: 'Etiam gravida sapien vel libero congue feugiat.',
      imageUrl: 'src/assets/place3.jpg',
    },
    {
      id: 4,
      title: 'Card 4',
      description: 'Etiam gravida sapien vel libero congue feugiat.',
      imageUrl: 'src/assets/place5.jpg',
    },
    {
      id: 5,
      title: 'Card 5',
      description: 'Etiam gravida sapien vel libero congue feugiat.',
      imageUrl: 'src/assets/place4.jpg',
    },
    {
      id: 6,
      title: 'Card 6',
      description: 'Etiam gravida sapien vel libero congue feugiat.',
      imageUrl: 'src/assets/place6.jpg',
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <h1>Welcome to the Home Page</h1>
      <div className="row">
        {cardsData.map((card) => (
          <div key={card.id} className="col-lg-4">
            <Card className="mt-3">
              <Card.Img
                variant="top"
                src={card.imageUrl}
                alt="place"
                onClick={() => openModal(card.imageUrl)}
              />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.description}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Body>
          <img src={selectedImage} alt="place" className="img-fluid"  />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;
