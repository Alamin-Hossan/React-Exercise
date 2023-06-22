import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

const Footer = () => {
  return (
    <footer className="bg-light text-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>About Us</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </p>
          </div>
          <div className="col-md-4">
            <h4>Contact Info</h4>
            <p>
              Email: contact@example.com<br />
              Phone: 123-456-7890<br />
              Address: 123 Main St, City, State, Country
            </p>
          </div>
          <div className="col-md-4">
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
