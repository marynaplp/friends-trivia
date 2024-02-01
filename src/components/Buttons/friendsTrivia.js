import React, { useState } from 'react';
import "./buttons.css"

const FriendsTrivia = () => {
  const [showQuotes, setShowQuotes] = useState(false);
  const [showMainPage, setShowMainPage] = useState(true);

  const handleMoreClick = () => {
    setShowQuotes(true);
    setShowMainPage(false);
  };

  const handleBackToMainClick = () => {
    setShowMainPage(true);
    setShowQuotes(false);
  };

  return (
    <div>
      {showMainPage && (
        <div>
          <h1 className="title">Welcome to Friends Trivia!</h1>
          <button className="more-button" onClick={handleMoreClick}>More</button>
        </div>
      )}

      {showQuotes && (
        <div>
          <p>"We were on a break!" - Ross</p>
       
          
          <button className="back-to-main" onClick={handleBackToMainClick}>Back to Main</button>
        </div>
      )}

      {!showMainPage && (
        <p>Time to watch TV series!</p>
      )}
    </div>
  );
};

export default FriendsTrivia;
