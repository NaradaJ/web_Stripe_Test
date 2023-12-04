import React, { useState } from 'react';
import './App.css';
import StripeContainer from './components/StripeContainer';
import logo from './logo.svg';
import itemImage from './4263123.jpg';

function App() {
  const [showItem, setShowItem] = useState(false);

  const handleShowItemClick = () => {
    setShowItem(true);
  };

  return (
    <div className="App">
      <h1>Test</h1>
      <button onClick={handleShowItemClick}>Show Item</button>
      {showItem ? (
        <>
          <StripeContainer />
          <button>Purchase</button>
        </>
      ) : (
        <>
          <h3>$10.00</h3>
          <img src={itemImage} alt="Item" />
        </>
      )}
    </div>
  );
}

export default App;
