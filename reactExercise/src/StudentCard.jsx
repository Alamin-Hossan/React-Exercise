import React from 'react';
import './card.css';

const StudentCard = ({ id, name, address, bloodGroup }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Student ID: {id}</h5>
        <p className="card-text">Name: {name}</p>
        {address && <p className="card-text">Address: {address}</p>}
        {bloodGroup && <p className="card-text">Blood Group: {bloodGroup}</p>}
      </div>
    </div>
  );
};

export default StudentCard;
