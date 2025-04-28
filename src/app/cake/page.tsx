'use client';

import React, { useEffect, useState } from 'react';
import './cake.css';

const BirthdaySurprise = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowConfetti(true), 500); // Delay confetti start
  }, []);

  return (
    <div className="birthday-surprise">
      <h1 className="birthday-title">🎂 Happy Birthday ! 🎂</h1>
      <div className="cake">
        <div className="plate"></div>
        <div className="layer bottom"></div>
        <div className="layer middle"></div>
        <div className="layer top"></div>
        <div className="candle">
          <div className="flame"></div>
        </div>
      </div>

      {showConfetti && (
        <div className="confetti">
          {[...Array(100)].map((_, i) => (
            <div key={i} className="confetti-piece" />
          ))}
        </div>
      )}
    </div>
  );
};

export default BirthdaySurprise;
