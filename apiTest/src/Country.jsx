import React, { useState } from 'react';
import CountryCard from './CountryCard';
import CountryTable from './CountryTable';

function Country() {
  const [showCard, setShowCard] = useState(false);

  const toggleCard = () => {
    setShowCard(!showCard);
  };

  return (
    <div>
        <h1>Country Details</h1>
      <button onClick={toggleCard}>
        {showCard ? 'Show Table' : 'Show Card'}
      </button>
      {showCard ? <CountryCard /> : <CountryTable />}
    </div>
  );
}

export default Country;
